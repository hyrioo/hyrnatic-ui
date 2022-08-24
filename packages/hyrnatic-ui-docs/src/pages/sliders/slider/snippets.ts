export const previewExample = (options: {minimum: number, maximum: number, disabled: boolean, showSteps: boolean}) => {
    const code =
`<h-slider v-model="value" :minimum="${options.minimum}" :step-size="10" :maximum="${options.maximum}"${options.disabled?' disabled':''}${options.showSteps?' show-steps':''} />`;
    return code;
}
