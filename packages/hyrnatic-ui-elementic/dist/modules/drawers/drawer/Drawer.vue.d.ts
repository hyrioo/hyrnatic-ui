declare const _default: import("vue").DefineComponent<any, {
    slideTransition: import("vue").ComputedRef<"large2x-slide-to-left-medium" | "large2x-slide-to-right-medium">;
    transitionEnded: (key: any) => void;
    transitionStarted: (key: any) => void;
    getScale: (index: any, count: any) => string;
    getOpacity: (index: any, count: any) => number;
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "reject" | "resolve" | "transitionEnd", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
} | ({
    [x: string]: any;
} & {
    [x: number]: any;
})>, {} | {
    [x: string]: any;
}>;
export default _default;
