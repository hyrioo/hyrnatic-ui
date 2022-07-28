import {
    computed, ComputedRef, defineComponent, getCurrentInstance, h, inject, reactive, SetupContext,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder
} from '../../../utils/component';
import { getWrapper } from './NotificationManager';

export const coreNotificationVisibleProp = {
    visible: {
        type: Boolean,
        default: false,
    },
};

export type CoreNotificationSlotProps = {
    visible: ComputedRef<boolean>;
    pauseDuration: () => void;
    resumeDuration: () => void;
    close: () => void;
}
export function coreNotificationSetup() {
    return setupBuilder<CoreNotificationSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-notification',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreNotificationVisibleProp,
    },
    setup(props, ctx: SetupContext) {
        const id = inject<string>('notification-id');
        if (!id) {
            console.warn('You must call NotificationManager.setupNotification() in the notification setup');
        }

        const reject = inject<(payload: any) => void>('notification-reject');
        const close = () => {
            reject(null);
        };

        const wrapper = getWrapper();

        const slotProps = reactive<CoreNotificationSlotProps>({
            visible: computed(() => props.visible),
            pauseDuration: () => wrapper.pauseDuration(id),
            resumeDuration: () => wrapper.resumeDuration(id),
            close,
        });

        const defaultRender = () => ctx.slots.default(slotProps);
        return () => {
            if (props.as) {
                const p = props.asProps ? props.asProps(slotProps) : {};
                return h(props.as, { ...p }, defaultRender());
            }
            return defaultRender();
        };
    },
});
