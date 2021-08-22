import Str from '../../../../../hyrnatic-ui-core/src/utils/string';

export const previewExample = (options: { label: string, bordered: boolean, indeterminate: boolean, disabled: boolean }) => {
    const code = `<h-checkbox v-model="value" ${options.label?'label="'+options.label+'"':''} ${options.bordered?'bordered':''} ${options.indeterminate?'indeterminate':''} ${options.disabled?'disabled':''} />`;
    return Str.trimMultiSpaces(code);
}