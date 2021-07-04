import {
    computed, ComputedRef, defineComponent, getCurrentInstance, h, reactive, SetupContext,
} from 'vue';
import {
    coreComponentAsProp, coreComponentAsPropsProp, proxyEvents, proxyProps, setupBuilder,
} from '../../../utils/component';

export const coreCheckboxModelValueProp = {
    modelValue: {
        type: [Array, Boolean],
        required: true,
    },
};
export const coreCheckboxValueProp = {
    value: {
        type: null,
        default: true,
    },
};
export const coreCheckboxDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreCheckboxVisibleProp = {
    visible: {
        type: Boolean,
        default: true,
    },
};
export const coreCheckboxIndeterminateProp = {
    indeterminate: {
        type: Boolean,
        default: false,
    },
};

export type CoreCheckboxSlotProps = {
    state: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    indeterminate: ComputedRef<boolean>;
    check: (e) => any;
    uncheck: (e) => any;
    onChange: (e) => any;
}

export function coreCheckboxSetup() {
    return setupBuilder<CoreCheckboxSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-checkbox',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreCheckboxDisabledProp,
        ...coreCheckboxVisibleProp,
        ...coreCheckboxIndeterminateProp,
        ...coreCheckboxModelValueProp,
        ...coreCheckboxValueProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const state = computed(() => {
            if (Array.isArray(props.modelValue)) {
                return props.modelValue.indexOf(props.value) > -1;
            }

            return props.modelValue === props.value;
        });

        const check = () => {
            if (Array.isArray(props.modelValue)) {
                const value = props.modelValue.slice(0);

                value.push(props.value);
                ctx.emit('update:modelValue', value);
            } else {
                ctx.emit('update:modelValue', props.value);
            }
        };
        const uncheck = () => {
            if (Array.isArray(props.modelValue)) {
                const value = props.modelValue.slice(0);

                value.splice(value.indexOf(props.value), 1);
                ctx.emit('update:modelValue', value);
            } else if (props.value === true) {
                ctx.emit('update:modelValue', false);
            } else {
                ctx.emit('update:modelValue', null);
            }
        };
        const onChange = () => {
            if (!props.disabled && props.visible) {
                if (state.value) {
                    uncheck();
                } else {
                    check();
                }
            }
        };

        const slotProps = reactive<CoreCheckboxSlotProps>({
            state: computed(() => state.value),
            disabled: computed(() => props.disabled),
            indeterminate: computed(() => props.indeterminate),
            check,
            uncheck,
            onChange,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            slotProps,
            defaultRender,
        };
    },
    render() {
        if (this.$props.as) {
            const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
            return h(this.$props.as, { ...p }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
