import { PropType } from 'vue';
import { Middleware, Placement } from '@floating-ui/dom';
export declare const coreFloatingReferenceProp: {
    reference: {
        type: any;
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
        default: any;
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
export declare function splitPlacement(value: any): {
    placement: any;
    alignment: any;
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
        default: any;
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
        type: any;
        required: boolean;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    middleware: import("vue").ComputedRef<Middleware[]>;
    floatingElement: import("vue").Ref<HTMLElement>;
    style: {
        position: string;
        left: string;
        top: string;
        maxWidth: string;
        maxHeight: string;
    };
    onLeave: () => void;
    onAfterLeave: () => void;
    onDocumentClick: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    placement: Placement;
    transition: string;
    middleware: Middleware[];
    reference: any;
    as: string;
    keep: boolean;
} & {}>, {
    visible: boolean;
    placement: Placement;
    transition: string;
    middleware: Middleware[];
    reference: any;
    as: string;
    keep: boolean;
}>;
export default _default;
