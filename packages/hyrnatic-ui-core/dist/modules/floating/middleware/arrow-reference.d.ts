import { Alignment, Axis, Length, Middleware, Padding, Placement, Side, SideObject } from '@floating-ui/dom';
export declare function expandPaddingObject(padding: Partial<SideObject>): SideObject;
export declare function getSideObjectFromPadding(padding: Padding): SideObject;
export declare function getSide(placement: Placement): Side;
export declare function getAlignment<T extends string>(placement: T): Alignment;
export declare function getLengthFromAxis(axis: Axis): Length;
export declare function getMainAxisFromPlacement(placement: Placement): Axis;
export declare function within(min: number, value: number, max: number): number;
export interface Options {
    /**
     * The arrow element to be positioned.
     * @default undefined
     */
    element: any;
    /**
     * The reference element.
     * @default undefined
     */
    reference: any;
    /**
     * The padding between the arrow element and the floating element edges.
     * Useful when the floating element has rounded corners.
     * @default 0
     */
    padding?: Padding;
}
/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
export declare const arrowReference: (options: Options) => Middleware;
