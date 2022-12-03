import { ModifierArguments } from '@popperjs/core';
import { Modifier } from '@popperjs/core/lib/types';

export const broadcastSize: Modifier<'broadcastSize', any> = {
    name: 'broadcastSize',
    enabled: true,
    fn: ({ state, name, options }: ModifierArguments<any>) => {
        if (state.modifiersData[name].broadcastSizeLastWidth !== state.rects.popper.width || state.modifiersData[name].broadcastSizeLastHeight !== state.rects.popper.height) {
            const { popper } = state.elements;
            const minWidthTemp = popper.style.minWidth;
            popper.style.minWidth = '';
            const popperSize = popper.getBoundingClientRect();
            popper.style.minWidth = minWidthTemp;

            state.modifiersData[name].broadcastSizeLastWidth = state.rects.popper.width;
            state.modifiersData[name].broadcastSizeLastHeight = state.rects.popper.height;
            options.callback(popperSize);
        }
    },
    phase: 'afterWrite',
};

export default [broadcastSize];
