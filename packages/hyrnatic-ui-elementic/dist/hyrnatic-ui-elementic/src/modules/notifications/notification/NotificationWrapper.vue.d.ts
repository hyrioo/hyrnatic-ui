declare const _default: import("vue").DefineComponent<{
    placement: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
}, {
    transitionEnded: (el: HTMLElement) => void;
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    width: string;
    name: string;
    placement: string;
} & {}>, {
    width: string;
    name: string;
    placement: string;
}>;
export default _default;
