import {
    defineComponent, nextTick, SetupContext, PropType, computed, reactive, getCurrentInstance, Ref, ComputedRef, h,
    WritableComputedRef,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export const coreInputModelValueProp = {
    modelValue: {
        type: null,
        required: true,
    },
};
export const coreInputModelModifiersProp = {
    modelModifiers: {
        type: Object,
        default: () => ({}),
    },
};
export const coreInputDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreInputReadonlyProp = {
    readonly: {
        type: Boolean,
        default: false,
    },
};

export type CoreInputSlotProps = {
    disabled: ComputedRef<boolean>;
    readonly: ComputedRef<boolean>;
    modelValue: WritableComputedRef<string>;
    onClick: (e) => any;
}

export function coreInputSetup(input: Ref<HTMLInputElement>) {
    return setupBuilder<CoreInputSlotProps>(getCurrentInstance()).setProp('input', input);
}

export default defineComponent({
    name: 'hr-input',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreInputDisabledProp,
        ...coreInputReadonlyProp,
        ...coreInputModelValueProp,
        ...coreInputModelModifiersProp,
        input: {
            type: null as PropType<HTMLInputElement>,
            required: true,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const focusInput = (e) => {
            if (props.readonly) {
                // If nothing is selected, then select all text
                if (e.target.selectionEnd === e.target.selectionStart) {
                    props.input.select();
                }
            } else {
                props.input.focus();
            }
        };

        const emitValue = (value) => {
            let newValue = value;
            if (props.modelModifiers.capitalize) {
                newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
            }

            // Remember selection (Caret position)
            const { selectionStart } = props.input;
            const { selectionEnd } = props.input;

            // Update prop
            ctx.emit('update:modelValue', newValue);

            // Restore selection (Caret position)
            nextTick(() => {
                props.input.setSelectionRange(selectionStart, selectionEnd);
            });
        };

        const slotProps = reactive<CoreInputSlotProps>({
            disabled: computed(() => props.disabled),
            readonly: computed(() => props.readonly),
            modelValue: computed({ get: () => props.modelValue, set: (value) => emitValue(value) }),
            onClick: focusInput,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            slotProps,
            focusInput,
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
