export const previewExample = (options: {delta: number, count: number, pageSize: number}) => {
    const code =
`<h-paginator v-model="value" :count="${options.count}" :page-size="${options.pageSize}" :delta="${options.delta}" />`;
    return code;
}
