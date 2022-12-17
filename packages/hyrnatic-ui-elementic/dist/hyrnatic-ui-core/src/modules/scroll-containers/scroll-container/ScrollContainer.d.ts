import { ComputedRef } from 'vue';
import './scroll-container.scss';
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
export declare const coreScrollContainerClassesProp: {
    classes: {
        type: any;
        default: any;
    };
};
export declare type CoreScrollContainerSlotProps = {
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
    classes: {
        type: any;
        default: any;
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
        default: any;
    };
    as: {
        type: StringConstructor;
        required: true;
    };
}, {
    wrapper: import("vue").Ref<HTMLElement>;
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
    onMouseMove: (e: any) => void;
    onMouseDown: (e: any) => void;
    startAutoHideTimer: () => void;
    updateThumbs: () => void;
    slotProps: {
        anyHover: boolean;
        anyDragging: boolean;
        hidden: boolean;
    };
    registerBar: (type: 'vertical' | 'horizontal', track: HTMLElement, thumb: HTMLElement) => void;
    scrollTo: (x: any, y: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    classes: any;
    vertical: boolean;
    as: string;
    minimumSize: number;
    autoHideDelay: number;
    autoHide: boolean;
    horizontal: boolean;
    asProps: (slotProps: any) => any;
} & {}>, {
    classes: any;
    vertical: boolean;
    minimumSize: number;
    autoHideDelay: number;
    autoHide: boolean;
    horizontal: boolean;
    asProps: (slotProps: any) => any;
}>;
export default _default;