export const previewExample = (options: {capitalize: boolean, placeholder: string, readonly: boolean, disabled: boolean}) => {
    const code =
`<h-input v-model${options.capitalize?'.capitalize':''}="value" placeholder="${options.placeholder}"${options.readonly?' readonly':''}${options.disabled?' disabled':''} />
<h-input v-model${options.capitalize?'.capitalize':''}="value" placeholder="${options.placeholder}"${options.readonly?' readonly':''}${options.disabled?' disabled':''} prefix-icon="key" suffix-icon="key" />
<h-input v-model${options.capitalize?'.capitalize':''}="value" placeholder="${options.placeholder}"${options.readonly?' readonly':''}${options.disabled?' disabled':''} prefix="Prefix" suffix="Suffix" />`;
    return code;
}
