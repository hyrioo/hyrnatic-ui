declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: true;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    isActive: import("vue").ComputedRef<boolean>;
    transitionName: import("vue").ComputedRef<any>;
    onEnter: () => void;
    onBeforeLeave: () => void;
    onAfterEnter: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    id: string;
} & {}>, {}>;
export default _default;
