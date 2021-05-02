import { ComputedRef } from 'vue';
export declare const coreProgressBarValueProp: {
    value: {
        type: NumberConstructor;
        required: boolean;
    };
};
export declare const coreProgressBarMinimumProp: {
    minimum: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const coreProgressBarMaximumProp: {
    maximum: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type CoreProgressBarSlotProps = {
    percentage: ComputedRef<number>;
};
export declare function coreProgressBarSetup(): {
    as(tag: string, func?: (slotProps: CoreProgressBarSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    maximum: {
        type: NumberConstructor;
        default: number;
    };
    minimum: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: NumberConstructor;
        required: boolean;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    percentage: ComputedRef<number>;
    slotProps: {
        percentage: number;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    asProps: (slotProps: any) => any;
    as: string;
    maximum: number;
    minimum: number;
} & {
    value?: number;
}>, {
    asProps: (slotProps: any) => any;
    as: string;
    maximum: number;
    minimum: number;
}>;
export default _default;
