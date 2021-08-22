export const previewExample = (options: {showSubText: boolean, animate: boolean}) => {
    const code =
`<h-list${options.animate?' animate':''}>
    <h-list-item v-for="item in list" :key="item.key" :text="item.text"${options.showSubText?':sub-text="item.subText"':''} />
</h-list>`;
    return code;
}
