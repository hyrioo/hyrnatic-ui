import { ModifierArguments } from '@popperjs/core';
import { Modifier } from '@popperjs/core/lib/types';

type Options = {
    callback(): void;
}
export const afterUpdate: Modifier<'afterUpdate', Options> = {
    name: 'afterUpdate',
    enabled: true,
    fn: ({ options }: ModifierArguments<any>) => {
        options.callback();
    },
    options: {
        callback: () => {},
    },
    phase: 'afterWrite',
};

export default [afterUpdate];
