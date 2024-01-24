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
    transitionName: import("vue").ComputedRef<"notification-slide-down" | "notification-slide-up" | null>;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    name: string;
    placement: string;
    width: string;
}, {}>;
export default _default;
