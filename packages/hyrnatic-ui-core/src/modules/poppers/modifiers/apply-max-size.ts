import { Modifier } from '@popperjs/core/lib/types';
import { beforeWrite } from '@popperjs/core';

export type ApplyMaxSizeModifier = Modifier<string, {}>;
export const applyMaxSize: ApplyMaxSizeModifier = {
    name: 'applyMaxSize',
    enabled: true,
    phase: beforeWrite,
    requires: ['maxSize'],
    fn({ state }) {
        // The `maxSize` modifier provides this data
        const { width, height } = state.modifiersData.maxSize;

        state.styles.popper = {
            ...state.styles.popper,
            maxWidth: `${width}px`,
            maxHeight: `${height}px`,
        };
    },
    data: {},
};

export default [applyMaxSize];
