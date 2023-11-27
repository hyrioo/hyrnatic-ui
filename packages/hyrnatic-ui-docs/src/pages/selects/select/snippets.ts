export const previewExample = (options: {showHeader: boolean, header: string, placeholder: string, disabled: boolean}) => {
    const code =
`<h-select v-model="value" ${options.disabled?' disabled':''} placeholder="${options.placeholder}" style="margin-bottom: 12px; width: 175px">
    ${options.showHeader ? `<h-select-item-header label="${options.header}" />\n    ` : ''}<h-select-item value="1" label="Loooong option 1" />
    <h-select-item value="2" icon="plus" label="Option 2" />
    <h-select-item-divider />
    <h-select-item value="3" label="Option 3" disabled />
    <h-select-item value="4" label="Option 4" />
    <h-select-item v-for="n in 50" :key="n" :value="n" :label="\`Extra option \${n}\`" />
</h-select>`;
    return code;
}
