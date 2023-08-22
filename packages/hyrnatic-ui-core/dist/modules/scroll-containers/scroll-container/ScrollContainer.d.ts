import { ComputedRef } from 'vue';
export declare const coreScrollContainerHorizontalProp: {
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreScrollContainerVerticalProp: {
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreScrollContainerAutoHideProp: {
    autoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreScrollContainerAutoHideDelayProp: {
    autoHideDelay: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const coreScrollContainerMinimumSizeProp: {
    minimumSize: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const coreScrollContainerContainerClassesProp: {
    containerClasses: {
        type: null;
        default: null;
    };
};
export declare const coreScrollContainerWrapperClassesProp: {
    wrapperClasses: {
        type: null;
        default: null;
    };
};
export type CoreScrollContainerSlotProps = {
    anyHover: ComputedRef<boolean>;
    anyDragging: ComputedRef<boolean>;
    hidden: ComputedRef<boolean>;
};
export declare function coreScrollContainerSetup(): {
    as(tag: string, func?: (slotProps: CoreScrollContainerSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    wrapperClasses: {
        type: null;
        default: null;
    };
    containerClasses: {
        type: null;
        default: null;
    };
    minimumSize: {
        type: NumberConstructor;
        default: number;
    };
    autoHideDelay: {
        type: NumberConstructor;
        default: number;
    };
    autoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        required: true;
    };
}, {
    wrapper: import("vue").Ref<HTMLElement | undefined>;
    verticalBar: {
        offset: number;
        size: number;
        trackHover: boolean;
        thumbHover: boolean;
        visible: boolean;
        dragging: boolean;
    };
    horizontalBar: {
        offset: number;
        size: number;
        trackHover: boolean;
        thumbHover: boolean;
        visible: boolean;
        dragging: boolean;
    };
    anyHover: ComputedRef<boolean>;
    anyDragging: ComputedRef<boolean>;
    onMouseMove: (e: MouseEvent) => void;
    onMouseDown: (e: MouseEvent) => void;
    startAutoHideTimer: () => void;
    updateThumbs: () => void;
    slotProps: {
        anyHover: boolean;
        anyDragging: boolean;
        hidden: boolean;
    };
    registerBar: (type: 'vertical' | 'horizontal', track: HTMLElement, thumb: HTMLElement) => void;
    scrollTo: (x: number, y: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    wrapperClasses: {
        type: null;
        default: null;
    };
    containerClasses: {
        type: null;
        default: null;
    };
    minimumSize: {
        type: NumberConstructor;
        default: number;
    };
    autoHideDelay: {
        type: NumberConstructor;
        default: number;
    };
    autoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    asProps: (slotProps: any) => any;
    wrapperClasses: any;
    containerClasses: any;
    minimumSize: number;
    autoHideDelay: number;
    autoHide: boolean;
    vertical: boolean;
    horizontal: boolean;
}>;
export default _default;
