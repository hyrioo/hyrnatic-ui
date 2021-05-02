import { Modifier } from '@popperjs/core/lib/types';

export const minimumReferenceSize: {
    phase: string; data: { rerun: boolean }; name: string; fn: ({
                                                                    state,
                                                                    instance
                                                                }: { state: any; instance: any }) => void; enabled: boolean; requires: string[]
} = {
    name: 'minimumReferenceSize',
    enabled: true,
    fn: ({ state, instance }) => {
        if (state.modifiersData.minimumReferenceSize.rerun) {
            return;
        }
        state.modifiersData.minimumReferenceSize.rerun = true;
        const widthOrHeight = state.placement.startsWith('left')
            || state.placement.startsWith('right')
            ? 'min-height'
            : 'min-width';
        const popperSize = state.rects.popper[widthOrHeight];
        const referenceSize = state.rects.reference[widthOrHeight];
        const popperSizeRounded = Math.round(popperSize);
        const referenceSizeRounded = Math.round(referenceSize);
        if (popperSize === 0 || Number.isNaN(popperSizeRounded) || Number.isNaN(referenceSizeRounded) || popperSizeRounded >= referenceSizeRounded) return;

        state.styles.popper[widthOrHeight] = `${referenceSize}px`;
        instance.update();
    },
    data: {
        rerun: false,
    },
    phase: 'beforeWrite',
    requires: ['computeStyles'],
};

export default [minimumReferenceSize];
