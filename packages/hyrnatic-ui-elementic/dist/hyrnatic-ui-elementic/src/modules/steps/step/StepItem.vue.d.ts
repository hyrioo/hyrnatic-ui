import { PropType } from 'vue';
import { CoreStepsNavigatorDetailedStepItem } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    step: {
        type: PropType<CoreStepsNavigatorDetailedStepItem>;
        required: true;
    };
}, {
    Icons: {
        arrowLeft: string;
        arrowRight: string;
        calendarMonth: string;
        check: string;
        chevronDoubleLeft: string;
        chevronDoubleRight: string;
        chevronDown: string;
        chevronLeft: string;
        chevronRight: string;
        chevronUp: string;
        close: string;
        dotsHorizontal: string;
        loading: string;
        minus: string;
        plus: string;
    };
    onClick: () => void;
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    step: CoreStepsNavigatorDetailedStepItem;
} & {}>, {}>;
export default _default;
