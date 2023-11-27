export const previewExample = (options: {placeholder: string, disabled: boolean}) => {
    const code =
`<h-autocomplete v-model="value" :items="items" placeholder="${options.placeholder}"${options.disabled?' disabled':''} />`;
    return code;
}
