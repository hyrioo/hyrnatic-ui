import { PropType } from 'vue';
import { Middleware, Placement } from '@floating-ui/dom';
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
        type: PropType<Middleware[]>;
        default: () => Middleware[];
    };
};
export declare type CoreFloatingClickOutsideEvent = {
    outsideFloating: boolean;
    outsideReference: boolean;
};
export declare type CoreFloatingSlotProps = {};
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
        type: PropType<Middleware[]>;
        default: () => Middleware[];
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
    middleware: import("vue").ComputedRef<Middleware[]>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    middleware: {
        type: PropType<Middleware[]>;
        default: () => Middleware[];
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
}>>, {
    visible: boolean;
    as: string;
    middleware: Middleware[];
    placement: Placement;
    transition: string;
    keep: boolean;
}>;
export default _default;
