import Str from '../../../../../hyrnatic-ui-core/src/utils/string';

export const previewExample = (options: { highlightToday: boolean, firstDayOfWeek: string, disabled: boolean, dots: any }) => {
    const code =
`<h-date-picker v-model="date" :first-day-of-week="${options.firstDayOfWeek}" ${options.dots!==null?':dots="dots"':''} ${options.highlightToday?'highlight-today':''} ${options.disabled?'disabled':''} />`;
    return Str.trimMultiSpaces(code);
}