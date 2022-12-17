import { ModifierArguments, Padding } from '@popperjs/core';
export declare type Options = {
    element: HTMLElement | string | null;
    reference: HTMLElement | null;
    padding: Padding;
};
declare function arrow({ state, options }: ModifierArguments<Options>): void;
declare function effect({ state, options }: ModifierArguments<Options>): void;
export declare const arrowOffset: {
    name: string;
    enabled: boolean;
    fn: typeof arrow;
    effect: typeof effect;
    phase: string;
    requires: string[];
    requiresIfExists: string[];
};
declare const _default: {
    name: string;
    enabled: boolean;
    fn: typeof arrow;
    effect: typeof effect;
    phase: string;
    requires: string[];
    requiresIfExists: string[];
}[];
export default _default;
