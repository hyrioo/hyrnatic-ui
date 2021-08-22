import Str from '../../../../../hyrnatic-ui-core/src/utils/string';

export const previewExample = (options: { size: string, styling: string, color: string, rounded: boolean, disabled: boolean, loading: boolean }) => {
    const code = `<h-icon-button icon="key" size="${options.size}" styling="${options.styling}" color="${options.color}" ${options.rounded?'rounded':''} ${options.disabled?'disabled':''} ${options.loading?'loading':''} />`;
    return Str.trimMultiSpaces(code);
}