import { Modifier } from '@popperjs/core/lib/types';

export const matchReferenceSize: Modifier<'matchReferenceSize', any> = {
    name: 'matchReferenceSize',
    enabled: true,
    fn: ({ state, instance }) => {
        const widthOrHeight = state.placement.startsWith('left')
            || state.placement.startsWith('right')
            ? 'height'
            : 'width';
        const popperSize = state.rects.popper[widthOrHeight];
        const referenceSize = state.rects.reference[widthOrHeight];
        if (popperSize === 0 || Math.round(popperSize) >= Math.round(referenceSize)) return;

        state.styles.popper[widthOrHeight] = `${referenceSize}px`;
        instance.update();
    },
    phase: 'beforeWrite',
    requires: ['computeStyles'],
};

export default [matchReferenceSize];
