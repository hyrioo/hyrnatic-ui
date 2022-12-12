import { Alignment, Axis, Length, Middleware, Padding, Placement, Side, SideObject } from '@floating-ui/dom';

export function expandPaddingObject(padding: Partial<SideObject>): SideObject {
    return {top: 0, right: 0, bottom: 0, left: 0, ...padding};
}

export function getSideObjectFromPadding(padding: Padding): SideObject {
    return typeof padding !== 'number'
        ? expandPaddingObject(padding)
        : {top: padding, right: padding, bottom: padding, left: padding};
}

export function getSide(placement: Placement): Side {
    return placement.split('-')[0] as Side;
}

export function getAlignment<T extends string>(placement: T): Alignment {
    return placement.split('-')[1] as Alignment;
}

export function getLengthFromAxis(axis: Axis): Length {
    return axis === 'y' ? 'height' : 'width';
}

export function getMainAxisFromPlacement(placement: Placement): Axis {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

export function within(min: number, value: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

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
export const arrowReference = (options: Options): Middleware => ({
    name: 'arrowReference',
    options,
    async fn(middlewareArguments) {
        // Since `element` is required, we don't Partial<> the type
        const {element, padding = 0} = options ?? {};
        const {x, y, placement, rects, platform} = middlewareArguments;

        if (element == null) {
            console.warn(
                'Floating UI: No `element` was passed to the `arrow` middleware.'
            );
            return {};
        }

        const paddingObject = getSideObjectFromPadding(padding);
        const coords = {x, y};
        const axis = getMainAxisFromPlacement(placement);
        const alignment = getAlignment(placement);
        const length = getLengthFromAxis(axis);
        const arrowDimensions = await platform.getDimensions(element);
        const minProp = axis === 'y' ? 'top' : 'left';
        const maxProp = axis === 'y' ? 'bottom' : 'right';

        let referenceRect = rects.reference;

        if(options.reference) {
            const arrowReferenceRect = await platform.getClientRects(options.reference);
            referenceRect = arrowReferenceRect[0];
        }

        const endDiff =
            referenceRect[length] +
            referenceRect[axis] -
            coords[axis] -
            rects.floating[length];
        const startDiff = coords[axis] - referenceRect[axis];

        const arrowOffsetParent = await platform.getOffsetParent?.(element);
        let clientSize = arrowOffsetParent
            ? axis === 'y'
                ? arrowOffsetParent.clientHeight || 0
                : arrowOffsetParent.clientWidth || 0
            : 0;

        if (clientSize === 0) {
            clientSize = rects.floating[length];
        }

        const centerToReference = endDiff / 2 - startDiff / 2;

        // Make sure the arrow doesn't overflow the floating element if the center
        // point is outside the floating element's bounds
        const min = paddingObject[minProp];
        const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
        const center =
            clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset = within(min, center, max);

        // Make sure that arrow points at the reference
        const alignmentPadding =
            alignment === 'start' ? paddingObject[minProp] : paddingObject[maxProp];
        const shouldAddOffset =
            alignmentPadding > 0 &&
            center !== offset &&
            referenceRect[length] <= rects.floating[length];
        const alignmentOffset = shouldAddOffset
            ? center < min
                ? min - center
                : max - center
            : 0;

        return {
            [axis]: coords[axis] - alignmentOffset,
            data: {
                [axis]: offset,
                centerOffset: center - offset,
            },
        };
    },
});