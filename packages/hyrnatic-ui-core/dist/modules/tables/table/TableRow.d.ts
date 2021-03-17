import { PropType } from 'vue';
import Row from '@/modules/tables/table/Row';
export declare const coreTableRowColumnsProp: {
    columns: {
        type: ArrayConstructor;
        required: boolean;
    };
};
export declare const coreTableRowRowProp: {
    row: {
        type: PropType<Row>;
        default: boolean;
    };
};
export declare type CoreTableRowSlotProps = {
    onClick: (e: any) => any;
};
export declare function coreTableRowSetup(): {
    as(tag: string, func?: (slotProps: CoreTableRowSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    row: {
        type: PropType<Row>;
        default: boolean;
    };
    columns: {
        type: ArrayConstructor;
        required: boolean;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    slotProps: {
        onClick: (e: any) => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "rowClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    asProps: (slotProps: any) => any;
    as: string;
    row: Row;
} & {
    columns?: unknown[];
}>, {
    asProps: (slotProps: any) => any;
    as: string;
    row: Row;
}>;
export default _default;
