export const previewExample = (options: {minimum: number, maximum: number, value: number, styling: string, size: string, showPercentage: boolean, showOverflowIndicator: boolean, striped: boolean, animated: boolean}) => {
    const code =
`<h-progress-bar :value="${options.value}" :minimum="${options.minimum}" :maximum="${options.maximum}" styling="${options.styling}" size="${options.size}"${options.showPercentage?' show-percentage':''}${options.showOverflowIndicator?' show-overflow-indicator':''}${options.striped?' striped':''}${options.animated?' animated':''} />`;
    return code;
}
