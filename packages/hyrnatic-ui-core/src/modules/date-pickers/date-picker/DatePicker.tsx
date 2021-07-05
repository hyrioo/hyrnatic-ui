import {
    computed, ComputedRef,
    defineComponent, getCurrentInstance, h, reactive, Ref, SetupContext,
} from 'vue';
import {
    coreComponentAsProp, coreComponentAsPropsProp, proxyEvents, proxyProps, setupBuilder,
} from '../../../utils/component';

export const coreDatePickerModelValueProp = {
    modelValue: {
        type: null,
        required: true,
    },
};
export const coreDatePickerValueFormatProp = {
    valueFormat: {
        type: String,
        default: null,
    },
};
export const coreDatePickerDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreDatePickerVisibleProp = {
    visible: {
        type: Boolean,
        default: true,
    },
};
export const coreDatePickerMultipleProp = {
    multiple: {
        type: Boolean,
        default: false,
    },
};
export const coreDatePickerClearableProp = {
    clearable: {
        type: Boolean,
        default: false,
    },
};
export const coreDatePickerDisabledDateProp = {
    disabledDate: {
        type: Function,
        default: null,
    },
};
export const coreDatePickerFirstDayOfWeekProp = {
    firstDayOfWeek: {
        type: Number,
        default: 0,
    },
};
export type CoreDatePickerSlotProps = {
}
export function coreDatePickerSetup() {
    return setupBuilder<CoreDatePickerSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-date-picker',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreDatePickerModelValueProp,
        ...coreDatePickerVisibleProp,
        ...coreDatePickerDisabledProp,
        ...coreDatePickerMultipleProp,
        ...coreDatePickerClearableProp,
        ...coreDatePickerDisabledDateProp,
        ...coreDatePickerFirstDayOfWeekProp,
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {

        const slotProps = reactive<CoreDatePickerSlotProps>({
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
