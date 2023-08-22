import { PropType } from 'vue';
import { CoreStepsNavigatorDetailedStepItem } from '@hyrioo/hyrnatic-ui-core';
declare const _sfc_main: import("vue").DefineComponent<{
    step: {
        type: PropType<CoreStepsNavigatorDetailedStepItem>;
        required: true;
    };
}, {
    Icons: {
        [key: string]: any;
    };
    onClick: () => void;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    step: {
        type: PropType<CoreStepsNavigatorDetailedStepItem>;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
