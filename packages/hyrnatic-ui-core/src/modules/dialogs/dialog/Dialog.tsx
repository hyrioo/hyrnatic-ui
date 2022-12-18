import {
    computed, ComputedRef, defineComponent, getCurrentInstance, inject, reactive, SetupContext,
} from 'vue';
import { proxyEvents, proxyProps } from '../../../utils/component';
import { getWrapper } from './DialogManager';

export const coreDialogVisibleProp = {
    visible: {
        type: Boolean,
        default: false,
    },
};

export type CoreDialogSlotProps = {
    visible: ComputedRef<boolean>;
    stackIndex: ComputedRef<number>;
    stackCount: ComputedRef<number>;
    visibleStackCount: ComputedRef<number>;
    close: () => void;
}
export function coreDialogSetup(props: string[] = [], events: string[] = []) {
    const instance = getCurrentInstance()!;
    return {
        props: reactive({
            ...proxyProps(instance.props, props),
        }),
        listeners: proxyEvents(instance, events),
    };
}

export default defineComponent({
    name: 'hr-dialog',
    props: {
        ...coreDialogVisibleProp,
    },
    setup(props, ctx: SetupContext) {
        const id = inject<string>('dialog-id') as  string;
        if (!id) {
            console.warn('You must call DialogManager.setupDialog() in the dialog setup');
        }

        const reject = inject<(payload: any) => void>('dialog-reject') as (payload: any) => void;
        const close = () => {
            reject(null);
        };

        const wrapper = getWrapper();
        const dialog = wrapper.getDialog(id);

        const slotProps = reactive<CoreDialogSlotProps>({
            visible: computed(() => props.visible),
            stackIndex: wrapper.getStackIndex(dialog.stack, dialog.id),
            stackCount: wrapper.getStackCount(dialog.stack),
            visibleStackCount: wrapper.getStackVisibleCount(dialog.stack),
            close,
        });

        return () => ctx.slots.default!(slotProps);
    },
});
