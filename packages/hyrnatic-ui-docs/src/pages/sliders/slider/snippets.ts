export const previewExample = (options: {minimum: number, maximum: number}) => {
    const code =
`<h-slider v-model="value" :minimum="${options.minimum}" :maximum="${options.maximum}" />`;
    return code;
}
