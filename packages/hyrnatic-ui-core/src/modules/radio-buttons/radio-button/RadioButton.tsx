import {
    computed, ComputedRef, defineComponent, getCurrentInstance, h, reactive, SetupContext,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export const coreRadioButtonDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreRadioButtonModelValueProp = {
    modelValue: {
        type: null,
        required: true,
    },
};
export const coreRadioButtonValueProp = {
    value: {
        type: null,
        default: true,
    },
};

export type CoreRadioButtonSlotProps = {
    state: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    onChange: () => any;
}

export function coreRadioButtonSetup() {
    return setupBuilder<CoreRadioButtonSlotProps>(getCurrentInstance()!);
}

export default defineComponent({
    name: 'hr-radio-button',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreRadioButtonDisabledProp,
        ...coreRadioButtonModelValueProp,
        ...coreRadioButtonValueProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx) {
        const state = computed(() => props.modelValue === props.value);

        const onChange = () => {
            ctx.emit('update:modelValue', props.value);
        };

        const slotProps = reactive<CoreRadioButtonSlotProps>({
            disabled: computed(() => props.disabled),
            state,
            onChange,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

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
