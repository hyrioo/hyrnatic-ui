import Str from '../../../../../hyrnatic-ui-core/src/utils/string';

export const previewExample = (options: { size: string, icon: boolean, styling: string, color: string, rounded: boolean, disabled: boolean, loading: boolean }) => {
    const code = `<h-button label="Subtle" size="${options.size}" ${options.icon?'icon="key"':''} styling="${options.styling}" color="${options.color}" ${options.rounded?'rounded':''} ${options.disabled?'disabled':''} ${options.loading?'loading':''} />`;
    return Str.trimMultiSpaces(code);
}

export const slotExample =
`<h-button>
    <span><i>Some</i> <b>custom</b> <del>content</del></span>
</h-button>`;