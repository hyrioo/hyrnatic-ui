import Str from '../../../../../hyrnatic-ui-core/src/utils/string';

export const previewExample = (options: { highlightToday: boolean, firstDayOfWeek: string }) => {
    const code =
`<h-date-picker v-model="date" :first-day-of-week="${options.firstDayOfWeek}" ${options.highlightToday?'highlight-today':''} />`;
    return Str.trimMultiSpaces(code);
}