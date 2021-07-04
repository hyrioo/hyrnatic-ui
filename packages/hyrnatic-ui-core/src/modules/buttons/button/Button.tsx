import {
    computed, ComputedRef,
    defineComponent, getCurrentInstance, h, reactive, Ref, SetupContext,
} from 'vue';
import {
    coreComponentAsProp, coreComponentAsPropsProp, proxyEvents, proxyProps, setupBuilder,
} from '../../../utils/component';

export const coreButtonDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreButtonVisibleProp = {
    visible: {
        type: Boolean,
        default: true,
    },
};
export const coreButtonLoadingProp = {
    loading: {
        type: Boolean,
        default: false,
    },
};
export type CoreButtonSlotProps = {
    disabled: ComputedRef<boolean>;
    loading: ComputedRef<boolean>;
    onClick: (e) => any;
}
export function coreButtonSetup() {
    return setupBuilder<CoreButtonSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-button',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreButtonVisibleProp,
        ...coreButtonDisabledProp,
        ...coreButtonLoadingProp,
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const onClick = (e) => {
            if (!props.disabled && !props.loading && props.visible) {
                ctx.emit('click', e);
            }
        };

        const slotProps = reactive<CoreButtonSlotProps>({
            disabled: computed(() => props.disabled),
            loading: computed(() => props.loading),
            onClick,
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
