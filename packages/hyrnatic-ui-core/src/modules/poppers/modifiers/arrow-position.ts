import {
    basePlacements, bottom, left, ModifierArguments, Padding, right, top,
} from '@popperjs/core';
import getCompositeRect from '@popperjs/core/lib/dom-utils/getCompositeRect';
import getOffsetParent from '@popperjs/core/lib/dom-utils/getOffsetParent';
import getLayoutRect from '@popperjs/core/lib/dom-utils/getLayoutRect';
import expandToHashMap from '@popperjs/core/lib/utils/expandToHashMap';
import mergePaddingObject from '@popperjs/core/lib/utils/mergePaddingObject';
import contains from '@popperjs/core/lib/dom-utils/contains';
import { isHTMLElement } from '@popperjs/core/lib/dom-utils/instanceOf';
import getBasePlacement from '@popperjs/core/lib/utils/getBasePlacement';
import getMainAxisFromPlacement from '@popperjs/core/lib/utils/getMainAxisFromPlacement';
import within from '@popperjs/core/lib/utils/within';

// eslint-disable-next-line import/no-unused-modules
export type Options = {
    element: HTMLElement | string | null;
    reference: HTMLElement | null;
    padding: Padding;
};

const __DEV__ = true;

function arrow({ state, options }: ModifierArguments<Options>) {
    const arrowElement = state.elements.arrow;
    const { popperOffsets } = state.modifiersData;
    const basePlacement = getBasePlacement(state.placement);
    const axis = getMainAxisFromPlacement(basePlacement);
    // @ts-ignore
    const isVertical = [left, right].indexOf(basePlacement) >= 0;
    const len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
        return;
    }

    const paddingObject = state.modifiersData['arrow#persistent'].padding;
    let referenceRect = state.rects.reference;
    if (options.reference) {
        referenceRect = getCompositeRect(options.reference, getOffsetParent(state.elements.popper), state.options.strategy === 'fixed');
    }
    const arrowRect = getLayoutRect(arrowElement);
    const minProp = axis === 'y' ? top : left;
    const maxProp = axis === 'y' ? bottom : right;

    const endDiff = referenceRect[len]
        + referenceRect[axis]
        - popperOffsets[axis]
        - state.rects.popper[len];
    const startDiff = popperOffsets[axis] - referenceRect[axis];

    const arrowOffsetParent = getOffsetParent(arrowElement);
    // eslint-disable-next-line no-nested-ternary
    const clientSize = arrowOffsetParent
        ? axis === 'y'
            ? arrowOffsetParent.clientHeight || 0
            : arrowOffsetParent.clientWidth || 0
        : 0;

    const centerToReference = endDiff / 2 - startDiff / 2;

    // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    const min = paddingObject[minProp];
    const max = clientSize - arrowRect[len] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    const offset = within(min, center, max);

    // Prevents breaking syntax highlighting...
    const axisProp: string = axis;
    state.modifiersData.arrow = {
        [axisProp]: offset,
        centerOffset: offset - center,
    };
}

function effect({ state, options }: ModifierArguments<Options>) {
    let { element: arrowElement = '[data-popper-arrow]' } = options;
    const { padding = 0 } = options;

    if (arrowElement == null) {
        return;
    }

    // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement) as HTMLElement;

        if (!arrowElement) {
            return;
        }
    }

    if (__DEV__) {
        if (!isHTMLElement(arrowElement)) {
            console.error(
                [
                    'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
                    'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
                    'the arrow.',
                ].join(' '),
            );
        }
    }

    if (!contains(state.elements.popper, arrowElement)) {
        if (__DEV__) {
            console.error(
                [
                    'Popper: "arrow" modifier\'s `element` must be a child of the popper',
                    'element.',
                ].join(' '),
            );
        }

        return;
    }

    state.elements.arrow = arrowElement;
    state.modifiersData['arrow#persistent'] = {
        padding: mergePaddingObject(
            typeof padding !== 'number'
                ? padding
                : expandToHashMap(padding, basePlacements),
        ),
    };
}

export const arrowOffset = {
    name: 'arrowOffset',
    enabled: true,
    fn: arrow,
    effect,
    phase: 'main',
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
};

export default [arrowOffset];
