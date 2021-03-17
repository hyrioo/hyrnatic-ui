import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    row: {
        type: PropType<any>;
        required: true;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "rowClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    row: unknown;
    columns: unknown[];
} & {}>, {}>;
export default _default;
