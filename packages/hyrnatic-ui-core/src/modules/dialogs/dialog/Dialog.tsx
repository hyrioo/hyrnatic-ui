import {
    computed, ComputedRef, defineComponent, getCurrentInstance, inject, reactive, SetupContext,
} from 'vue';
import { proxyEvents, proxyProps } from '@/utils/component';
import { getWrapper } from '@/modules/dialogs/dialog/DialogManager';

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
    activeStackCount: ComputedRef<number>;
    close: () => void;
}
export function coreDialogSetup(props: string[] = [], events: string[] = []) {
    const instance = getCurrentInstance();
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
    emits: ['reject'],
    setup(props, ctx: SetupContext) {
        const id = inject<string>('dialog-id');
        const close = () => {
            ctx.emit('reject', null);
        };

        const wrapper = getWrapper();
        const dialog = wrapper.getDialog(id);

        const slotProps = reactive<CoreDialogSlotProps>({
            visible: computed(() => props.visible),
            stackIndex: wrapper.getStackIndex(dialog.stack, dialog.id),
            stackCount: wrapper.getStackCount(dialog.stack),
            activeStackCount: wrapper.getStackActiveCount(dialog.stack),
            close,
        });

        return () => ctx.slots.default(slotProps);
    },
});
