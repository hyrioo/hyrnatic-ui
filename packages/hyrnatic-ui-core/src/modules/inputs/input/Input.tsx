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
export const coreInputTypeProp = {
    type: {
        type: String,
        default: null,
    },
};

export type CoreInputSlotProps = {
    disabled: ComputedRef<boolean>;
    readonly: ComputedRef<boolean>;
    modelValue: WritableComputedRef<string>;
    onClick: (e: MouseEvent) => any;
}

export function coreInputSetup(input: Ref<HTMLInputElement>) {
    return setupBuilder<CoreInputSlotProps>(getCurrentInstance()!).setProp('input', input);
}

export default defineComponent({
    name: 'hr-input',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreInputDisabledProp,
        ...coreInputReadonlyProp,
        ...coreInputTypeProp,
        ...coreInputModelValueProp,
        ...coreInputModelModifiersProp,
        input: {
            type: Object as PropType<HTMLInputElement>,
            required: true,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const focusInput = (e: MouseEvent) => {
            if (props.readonly) {
                // If nothing is selected, then select all text
                if ((e.target as HTMLInputElement).selectionEnd === (e.target as HTMLInputElement).selectionStart) {
                    props.input.select();
                }
            } else {
                props.input.focus();
            }
        };

        const emitValue = (value: string) => {
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
                if(props.type !== 'number') {
                    props.input.setSelectionRange(selectionStart, selectionEnd);
                }
            });
        };

        const slotProps = reactive<CoreInputSlotProps>({
            disabled: computed(() => props.disabled),
            readonly: computed(() => props.readonly),
            modelValue: computed({ get: () => props.modelValue, set: (value) => emitValue(value) }),
            onClick: focusInput,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

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
