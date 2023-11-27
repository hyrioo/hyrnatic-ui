declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: true;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    isActive: import("vue").ComputedRef<boolean>;
    transitionName: import("vue").ComputedRef<any>;
    onEnter: () => void;
    onBeforeLeave: () => void;
    onAfterEnter: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _default;
