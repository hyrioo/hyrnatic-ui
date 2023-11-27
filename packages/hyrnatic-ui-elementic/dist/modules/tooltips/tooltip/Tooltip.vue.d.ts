import { ComputePositionReturn } from '@floating-ui/dom';
declare const _default: import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
    };
    display: {
        type: StringConstructor;
        default: string;
    };
    hideDelay: {
        type: NumberConstructor;
        default: number;
    };
    showDelay: {
        type: NumberConstructor;
        default: number;
    };
    trigger: {
        type: import("vue").PropType<"hover">;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: import("vue").PropType<import("@floating-ui/utils").Placement>;
        default: import("@floating-ui/utils").Placement;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
    reference: import("vue").Ref<any>;
    floatingMiddleware: import("vue").Ref<{
        name: string;
        options?: any;
        fn: (state: import("@floating-ui/core").MiddlewareState) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
    }[]>;
    onComputedPosition: (data: ComputePositionReturn) => void;
    transition: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "computedPosition")[], "update:modelValue" | "computedPosition", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
    };
    display: {
        type: StringConstructor;
        default: string;
    };
    hideDelay: {
        type: NumberConstructor;
        default: number;
    };
    showDelay: {
        type: NumberConstructor;
        default: number;
    };
    trigger: {
        type: import("vue").PropType<"hover">;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: import("vue").PropType<import("@floating-ui/utils").Placement>;
        default: import("@floating-ui/utils").Placement;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onComputedPosition?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    placement: import("@floating-ui/utils").Placement;
    display: string;
    hideDelay: number;
    showDelay: number;
    trigger: "hover";
}, {}>;
export default _default;
