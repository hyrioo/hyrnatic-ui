
export const previewExample = (options: { textAlign: string, animate: boolean }) => {
    const code =
`<h-inline-collapse v-model="expanded" :text-align="${options.textAlign}" ${options.animate?'animate':':animate="false"'}>
    ...content
</h-inline-collapse>`;
    return code;
}