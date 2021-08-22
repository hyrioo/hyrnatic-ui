import Str from '../../../../../hyrnatic-ui-core/src/utils/string';

export const previewExample = (options: { accordion: boolean }) => {
    const code =
`<h-collapse v-model="expanded" ${options.accordion?'accordion':''}>
    <h-collapse-item id="1" header="Header 1">
        ...content 1
    </h-collapse-item>
    <h-collapse-item id="2" header="Header 2">
        ...content 2
    </h-collapse-item>
</h-collapse>`;
    return code;
}