declare const _default: import("vue").DefineComponent<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    row: {
        type: ObjectConstructor;
        required: true;
    };
    classes: {
        type: (StringConstructor | FunctionConstructor)[];
        default: any;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
    rowClasses: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "rowClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    classes: string | Function;
    row: Record<string, any>;
    columns: unknown[];
} & {}>, {
    classes: string | Function;
}>;
export default _default;
