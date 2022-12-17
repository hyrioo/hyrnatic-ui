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
    placement: string;
    name: string;
    width: string;
} & {}>, {
    placement: string;
    name: string;
    width: string;
}>;
export default _default;
