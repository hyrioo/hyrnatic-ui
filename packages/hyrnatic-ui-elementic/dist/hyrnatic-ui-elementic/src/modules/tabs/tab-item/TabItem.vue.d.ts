declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
    tab: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    label: string;
} & {
    id?: string;
}>, {
    disabled: boolean;
}>;
export default _default;
