import Str from '../../../../../hyrnatic-ui-core/src/utils/string';

export const previewExample = (options: { icon: string, size: string, spin: boolean }) => {
    const code = `<h-icon icon="${options.icon}" size="${options.size}" ${options.spin ? 'spin' : ''} />`;
    return Str.trimMultiSpaces(code);
}

export const usageExample =
`// app.js
import { IconRegistry } from '@hyrioo/hyrnatic-ui-elementic';
const icon = {
    width: 24, // default width
    height: 40, // default height
    viewBox: '0 0 24 40',
    data: '<circle cx="12" cy="12" r="10" />',
};
IconRegistry.register('custom-icon', icon);`;