export const previewExample = (options: {placeholder: string, disabled: boolean, allowClear: boolean}) => {
    const code =
`<h-simple-select v-model="value" :items="items"${options.disabled?' disabled':''}${options.allowClear?' allow-clear':''} placeholder="${options.placeholder}" />`;
    return code;
}
