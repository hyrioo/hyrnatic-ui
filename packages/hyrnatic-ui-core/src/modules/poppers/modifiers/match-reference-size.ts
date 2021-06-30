import { Modifier } from '@popperjs/core/lib/types';
import { beforeWrite } from '@popperjs/core';

export type MatchReferenceSizeModifier = Modifier<string, {}>;
export const matchReferenceSize: MatchReferenceSizeModifier = {
    name: 'matchReferenceSize',
    enabled: true,
    fn: ({ state, instance, name }) => {
        const widthOrHeight = state.placement.startsWith('left')
            || state.placement.startsWith('right')
            ? 'height'
            : 'width';

        const popperSize = state.rects.popper[widthOrHeight];
        const referenceSize = state.rects.reference[widthOrHeight];
        const popperSizeRounded = Math.round(popperSize);
        const referenceSizeRounded = Math.round(referenceSize);
        // console.log(popperSize, referenceSize, popperSizeRounded, referenceSizeRounded);
        if (popperSize === 0 || Number.isNaN(popperSizeRounded) || Number.isNaN(referenceSizeRounded) || popperSizeRounded === referenceSizeRounded) {
            return;
        }

        state.styles.popper[widthOrHeight] = `${referenceSize}px`;
        if(!state.modifiersData[`${name}#persistent`] || state.modifiersData[`${name}#persistent`]._skip_update == false){
            state.modifiersData[`${name}#persistent`] = state.modifiersData[`${name}#persistent`] || {};
            state.modifiersData[`${name}#persistent`]._skip_update = true;
            instance.update().then((test) => {
                state.modifiersData[`${name}#persistent`]._skip_update = false;
            });
        }
    },
    effect: ({state, name}) => {
        // console.log('effect first');

        return () => {
            // console.log('effect cleanup');
            state.modifiersData[`${name}#persistent`] = state.modifiersData[`${name}#persistent`] || {};
            state.modifiersData[`${name}#persistent`]._skip_update = false;
        }
    },
    phase: beforeWrite,
    requires: ['computeStyles'],
};

export default [matchReferenceSize];
