import { Modifier } from '@popperjs/core/lib/types';
import { beforeWrite } from '@popperjs/core';

export type MatchReferenceSizeModifier = Modifier<string, {}>;
export const matchReferenceSize: MatchReferenceSizeModifier = {
    name: 'matchReferenceSize',
    enabled: true,
    fn: ({ state, instance }) => {
        // console.log('fn');
        const widthOrHeight = state.placement.startsWith('left')
            || state.placement.startsWith('right')
            ? 'height'
            : 'width';
        const popperSize = state.rects.popper[widthOrHeight];
        const referenceSize = state.rects.reference[widthOrHeight];
        const popperSizeRounded = Math.round(popperSize);
        const referenceSizeRounded = Math.round(referenceSize);
        if (popperSize === 0 || Number.isNaN(popperSizeRounded) || Number.isNaN(referenceSizeRounded) || popperSizeRounded === referenceSizeRounded) return;

        state.styles.popper[widthOrHeight] = `${referenceSize}px`;
        instance.update().then(() => {
            // console.log('After update');
        });
    },
    effect: ({state}) => {
        // console.log('effect first');

        return () => {
            // console.log('effect second');
        }
    },
    data: {},
    phase: beforeWrite,
    requires: ['computeStyles'],
};

export default [matchReferenceSize];
