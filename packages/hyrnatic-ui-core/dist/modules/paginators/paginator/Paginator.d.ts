import { ComputedRef } from 'vue';
export declare const corePaginatorModelValueProp: {
    modelValue: {
        type: NumberConstructor;
        required: boolean;
    };
};
export declare const corePaginatorPageSizeProp: {
    pageSize: {
        type: NumberConstructor;
        required: boolean;
    };
};
export declare const corePaginatorCountProp: {
    count: {
        type: NumberConstructor;
        required: boolean;
    };
};
export declare const corePaginatorDeltaProp: {
    delta: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type SlotProps = {
    currentPage: ComputedRef<number>;
    pages: ComputedRef<number>;
    buttons: ComputedRef<number[]>;
    onPaginationButtonClick: (page: number) => void;
};
export declare function setup(): {
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
    delta: {
        type: NumberConstructor;
        default: number;
    };
    count: {
        type: NumberConstructor;
        required: boolean;
    };
    pageSize: {
        type: NumberConstructor;
        required: boolean;
    };
    modelValue: {
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
    slotProps: {
        currentPage: number;
        pages: number;
        buttons: number[];
        onPaginationButtonClick: (page: number) => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    asProps: (slotProps: any) => any;
    as: string;
    delta: number;
} & {
    modelValue?: number;
    count?: number;
    pageSize?: number;
}>, {
    asProps: (slotProps: any) => any;
    as: string;
    delta: number;
}>;
export default _default;
