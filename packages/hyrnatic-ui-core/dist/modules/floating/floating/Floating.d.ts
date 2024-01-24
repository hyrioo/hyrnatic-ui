import { PropType } from 'vue';
import { ComputePositionReturn, Placement } from '@floating-ui/dom';
export declare const coreFloatingReferenceProp: {
    reference: {
        type: null;
        required: boolean;
    };
};
export declare const coreFloatingVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreFloatingKeepProp: {
    keep: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreFloatingTransitionProp: {
    transition: {
        type: StringConstructor;
        default: null;
    };
};
export declare const coreFloatingPlacementProp: (defaultValue?: Placement) => {
    placement: {
        type: PropType<Placement>;
        default: Placement;
    };
};
export declare const coreFloatingMiddlewareProp: {
    middleware: {
        type: PropType<{
            name: string;
            options?: any;
            fn: (state: {
                placement: Placement;
                x: number;
                y: number;
                initialPlacement: Placement;
                strategy: import("@floating-ui/utils").Strategy;
                middlewareData: import("@floating-ui/core").MiddlewareData;
                rects: import("@floating-ui/utils").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/dom").Elements;
            }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
        }[]>;
        default: () => {
            name: string;
            options?: any;
            fn: (state: {
                placement: Placement;
                x: number;
                y: number;
                initialPlacement: Placement;
                strategy: import("@floating-ui/utils").Strategy;
                middlewareData: import("@floating-ui/core").MiddlewareData;
                rects: import("@floating-ui/utils").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/dom").Elements;
            }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
        }[];
    };
};
export type CoreFloatingClickOutsideEvent = {
    outsideFloating: boolean;
    outsideReference: boolean;
};
export type CoreFloatingSlotProps = {};
export declare function coreFloatingSetup(): {
    as(tag: string, func?: (slotProps: CoreFloatingSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
export declare function splitPlacement(value: string): {
    placement: string;
    alignment: string | null;
};
declare const _default: import("vue").DefineComponent<{
    middleware: {
        type: PropType<{
            name: string;
            options?: any;
            fn: (state: {
                placement: Placement;
                x: number;
                y: number;
                initialPlacement: Placement;
                strategy: import("@floating-ui/utils").Strategy;
                middlewareData: import("@floating-ui/core").MiddlewareData;
                rects: import("@floating-ui/utils").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/dom").Elements;
            }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
        }[]>;
        default: () => {
            name: string;
            options?: any;
            fn: (state: {
                placement: Placement;
                x: number;
                y: number;
                initialPlacement: Placement;
                strategy: import("@floating-ui/utils").Strategy;
                middlewareData: import("@floating-ui/core").MiddlewareData;
                rects: import("@floating-ui/utils").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/dom").Elements;
            }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
        }[];
    };
    placement: {
        type: PropType<Placement>;
        default: Placement;
    };
    transition: {
        type: StringConstructor;
        default: null;
    };
    keep: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    reference: {
        type: null;
        required: boolean;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}, {
    middleware: import("vue").ComputedRef<{
        name: string;
        options?: any;
        fn: (state: {
            placement: Placement;
            x: number;
            y: number;
            initialPlacement: Placement;
            strategy: import("@floating-ui/utils").Strategy;
            middlewareData: import("@floating-ui/core").MiddlewareData;
            rects: import("@floating-ui/utils").ElementRects;
            platform: import("@floating-ui/core").Platform;
            elements: import("@floating-ui/dom").Elements;
        }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
    }[]>;
    floatingElement: import("vue").Ref<HTMLElement | null>;
    style: {
        position: string;
        left: string;
        top: string;
        maxWidth: string;
        maxHeight: string;
        zIndex: number;
    };
    onLeave: () => void;
    onAfterLeave: () => void;
    onDocumentClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clickOutside: (event: CoreFloatingClickOutsideEvent) => boolean;
    computedPosition: (data: ComputePositionReturn) => boolean;
    transitionStateChanged: (state: boolean) => boolean;
    show: () => boolean;
    hide: () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    middleware: {
        type: PropType<{
            name: string;
            options?: any;
            fn: (state: {
                placement: Placement;
                x: number;
                y: number;
                initialPlacement: Placement;
                strategy: import("@floating-ui/utils").Strategy;
                middlewareData: import("@floating-ui/core").MiddlewareData;
                rects: import("@floating-ui/utils").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/dom").Elements;
            }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
        }[]>;
        default: () => {
            name: string;
            options?: any;
            fn: (state: {
                placement: Placement;
                x: number;
                y: number;
                initialPlacement: Placement;
                strategy: import("@floating-ui/utils").Strategy;
                middlewareData: import("@floating-ui/core").MiddlewareData;
                rects: import("@floating-ui/utils").ElementRects;
                platform: import("@floating-ui/core").Platform;
                elements: import("@floating-ui/dom").Elements;
            }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
        }[];
    };
    placement: {
        type: PropType<Placement>;
        default: Placement;
    };
    transition: {
        type: StringConstructor;
        default: null;
    };
    keep: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    reference: {
        type: null;
        required: boolean;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    onClickOutside?: ((event: CoreFloatingClickOutsideEvent) => any) | undefined;
    onComputedPosition?: ((data: ComputePositionReturn) => any) | undefined;
    onTransitionStateChanged?: ((state: boolean) => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}, {
    visible: boolean;
    as: string;
    middleware: {
        name: string;
        options?: any;
        fn: (state: {
            placement: Placement;
            x: number;
            y: number;
            initialPlacement: Placement;
            strategy: import("@floating-ui/utils").Strategy;
            middlewareData: import("@floating-ui/core").MiddlewareData;
            rects: import("@floating-ui/utils").ElementRects;
            platform: import("@floating-ui/core").Platform;
            elements: import("@floating-ui/dom").Elements;
        }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
    }[];
    placement: Placement;
    transition: string;
    keep: boolean;
}, {}>;
export default _default;
