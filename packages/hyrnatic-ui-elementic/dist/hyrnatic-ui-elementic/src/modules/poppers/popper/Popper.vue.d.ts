import { OptionsGeneric } from '@popperjs/core';
declare const _default: import("vue").DefineComponent<{
    arrowReference: {
        type: any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
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
        type: import("vue").PropType<import("@popperjs/core").Modifier<any, any>[]>;
        default: () => any[];
    };
    options: {
        type: import("vue").PropType<OptionsGeneric<any>>;
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
    classes: import("vue").ComputedRef<any[]>;
    modifiers: import("vue").ComputedRef<(import("@popperjs/core").Modifier<any, any> | {
        name: string;
        enabled: boolean;
        fn: ({ state, options }: import("@popperjs/core").ModifierArguments<import("../../../../../hyrnatic-ui-core/dist/modules/poppers/modifiers/arrow-position").Options>) => void;
        effect: ({ state, options }: import("@popperjs/core").ModifierArguments<import("../../../../../hyrnatic-ui-core/dist/modules/poppers/modifiers/arrow-position").Options>) => void;
        phase: string;
        requires: string[];
        requiresIfExists: string[];
    } | {
        name: string;
        options: {
            padding: number;
            element?: undefined;
            reference?: undefined;
        };
    } | {
        name: string;
        options: {
            element: HTMLElement;
            reference: any;
            padding?: undefined;
        };
    })[]>;
    options: import("vue").ComputedRef<OptionsGeneric<any>>;
    popper: import("vue").Ref<any>;
    popperArrow: import("vue").Ref<HTMLElement>;
    core: any;
    updatePopper: () => void;
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "show" | "hide" | "created" | "clickOutside" | "update:visible" | "popperSizeChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options: OptionsGeneric<any>;
    arrowReference: any;
    showArrow: boolean;
    transition: string;
    visible: boolean;
    reference: any;
    rootClasses: any;
    classes: any;
    modifiers: import("@popperjs/core").Modifier<any, any>[];
    keep: boolean;
    fixedWidth: string;
    minimumWidth: string;
} & {}>, {
    options: OptionsGeneric<any>;
    arrowReference: any;
    showArrow: boolean;
    transition: string;
    visible: boolean;
    reference: any;
    rootClasses: any;
    classes: any;
    modifiers: import("@popperjs/core").Modifier<any, any>[];
    keep: boolean;
    fixedWidth: string;
    minimumWidth: string;
}>;
export default _default;
