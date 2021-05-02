import { PropType, CSSProperties } from 'vue';
import { Modifier } from '@popperjs/core/lib/types';
import { OptionsGeneric } from '@popperjs/core';
export declare const corePopperReferenceProp: {
    reference: {
        type: any;
        required: boolean;
    };
};
export declare const corePopperVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const corePopperMinimumWidthProp: {
    minimumWidth: {
        type: StringConstructor;
        default: any;
    };
};
export declare const corePopperFixedWidthProp: {
    fixedWidth: {
        type: StringConstructor;
        default: any;
    };
};
export declare const corePopperKeepProp: {
    keep: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const corePopperOptionsProp: {
    options: {
        type: PropType<OptionsGeneric<any>>;
        default: () => void;
    };
};
export declare const corePopperModifiersProp: {
    modifiers: {
        type: PropType<Modifier<any, any>[]>;
        default: () => any[];
    };
};
export declare const corePopperTransitionProp: {
    transition: {
        type: StringConstructor;
        default: any;
    };
};
export declare const corePopperClassesProp: {
    classes: {
        type: any;
    };
};
export declare const corePopperRootClassesProp: {
    rootClasses: {
        type: any;
    };
};
export declare const defaultPopperOptions: {
    placement: string;
    strategy: string;
};
export declare type CorePopperComponent = {
    updatePopper(): void;
    $el: HTMLElement;
};
export declare type CorePopperSlotProps = {};
export declare function corePopperSetup(): {
    as(tag: string, func?: (slotProps: CorePopperSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    transition: {
        type: StringConstructor;
        default: any;
    };
    rootClasses: {
        type: any;
    };
    classes: {
        type: any;
    };
    modifiers: {
        type: PropType<Modifier<any, any>[]>;
        default: () => any[];
    };
    options: {
        type: PropType<OptionsGeneric<any>>;
        default: () => void;
    };
    keep: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedWidth: {
        type: StringConstructor;
        default: any;
    };
    minimumWidth: {
        type: StringConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    reference: {
        type: any;
        required: boolean;
    };
}, {
    popperElement: import("vue").Ref<HTMLElement>;
    innerElement: import("vue").Ref<HTMLElement>;
    popperPlacement: any;
    style: import("vue").ComputedRef<CSSProperties>;
    updatePopper: () => void;
    onDocumentClick: (e: any) => void;
    destroy: () => void;
    afterHide: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "show" | "hide" | "created" | "clickOutside" | "popperSizeChanged" | "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    reference: any;
    modifiers: Modifier<any, any>[];
    classes: any;
    transition: string;
    rootClasses: any;
    options: OptionsGeneric<any>;
    keep: boolean;
    fixedWidth: string;
    minimumWidth: string;
} & {}>, {
    visible: boolean;
    reference: any;
    modifiers: Modifier<any, any>[];
    classes: any;
    transition: string;
    rootClasses: any;
    options: OptionsGeneric<any>;
    keep: boolean;
    fixedWidth: string;
    minimumWidth: string;
}>;
export default _default;
