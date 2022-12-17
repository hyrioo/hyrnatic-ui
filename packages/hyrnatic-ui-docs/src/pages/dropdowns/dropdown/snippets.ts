export const previewExample = (options: {splitButton: boolean, hideOnClick: boolean, align: string, autoSize: boolean}) => {
    const code =
`<h-dropdown label="Action" align="${options.align}" auto-size="${options.autoSize}" @click="onClick('Action')"${options.splitButton?' split-button':''}${options.hideOnClick?' hide-on-click':''}>
    <h-dropdown-item-header label="Header" />
    <h-dropdown-item label="Option 1" @click="onClick('1')" />
    <h-dropdown-item label="Option 2" @click="onClick('2')" />
    <h-dropdown-item-divider />
    <h-dropdown-item label="Option 3" @click="onClick('3')" />
    <h-dropdown-item label="Option 4" @click="onClick('4')" />
</h-dropdown>`;
    return code;
}
