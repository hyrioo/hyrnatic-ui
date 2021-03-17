import { ComputedRef, PropType, Ref } from 'vue';
export declare const coreTooltipModelValueProp: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreTooltipTriggerProp: {
    trigger: {
        type: PropType<"hover">;
        default: string;
    };
};
export declare type SlotProps = {
    visible: ComputedRef<boolean>;
};
export declare function setup(reference: Ref<HTMLInputElement>): {
    as(tag: string, func?: (slotProps: SlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    reference: {
        type: PropType<HTMLElement>;
        required: true;
    };
    trigger: {
        type: PropType<"hover">;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    slotProps: {
        visible: boolean;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: boolean;
    reference: HTMLElement;
    trigger: "hover";
} & {}>, {
    modelValue: boolean;
    trigger: "hover";
}>;
export default _default;
