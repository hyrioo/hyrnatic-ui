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
        default: null;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
    rowClasses: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "rowClick"[], "rowClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        default: null;
    };
}>> & {
    onRowClick?: ((...args: any[]) => any) | undefined;
}, {
    classes: string | Function;
}, {}>;
export default _default;
