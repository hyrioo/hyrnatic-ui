import { PropType } from 'vue';
import { CoreFloatingClickOutsideEvent } from '@hyrioo/hyrnatic-ui-core';
import { DateTime, Duration } from 'luxon';
import { ComputePositionReturn } from '@floating-ui/dom';
declare const _sfc_main: import("vue").DefineComponent<{
    highlightToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayFormat: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: PropType<"start" | "end">;
        default: string;
    };
    dots: {
        type: null;
        default: null;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: null;
        required: boolean;
    };
}, {
    onInputFocus: () => void;
    onInputBlur: () => void;
    transition: import("vue").Ref<string>;
    onClickOutside: (value: CoreFloatingClickOutsideEvent) => void;
    onComputedPosition: (data: ComputePositionReturn) => void;
    floatingVisible: import("vue").Ref<boolean>;
    floatingMiddleware: import("vue").ComputedRef<import("@floating-ui/core").Middleware[]>;
    cachedDots: import("vue").ComputedRef<{
        [key: string]: {
            date: DateTime;
            color?: string | undefined;
        }[];
    } | null>;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    input: import("vue").Ref<any>;
    icon: import("vue").Ref<any>;
    inputValue: any;
    weekdayNames: import("vue").ComputedRef<string[]>;
    daysToShow: import("vue").ComputedRef<{
        date: DateTime;
        classes: any;
    }[]>;
    shownDate: import("vue").Ref<{
        day: number;
        daysInMonth: number;
        daysInYear: number;
        hour: number;
        invalidReason: string | null;
        invalidExplanation: string | null;
        isInDST: boolean;
        isInLeapYear: boolean;
        isOffsetFixed: boolean;
        isValid: boolean;
        locale: string;
        millisecond: number;
        minute: number;
        month: number;
        monthLong: string;
        monthShort: string;
        numberingSystem: string;
        offset: number;
        offsetNameLong: string;
        offsetNameShort: string;
        ordinal: number;
        outputCalendar: string;
        quarter: number;
        second: number;
        weekNumber: number;
        weekYear: number;
        weekday: number;
        weekdayLong: string;
        weekdayShort: string;
        weeksInWeekYear: number;
        year: number;
        zoneName: string;
        zone: {
            type: string;
            name: string;
            universal: boolean;
            offsetName: (ts: number, options: import("luxon").ZoneOffsetOptions) => string;
            formatOffset: (ts: number, format: import("luxon").ZoneOffsetFormat) => string;
            offset: (ts: number) => number;
            equals: (other: import("luxon").Zone) => boolean;
            isValid: boolean;
        };
        diff: (other: DateTime, unit?: import("luxon").DurationUnits | undefined, options?: import("luxon").DiffOptions | undefined) => Duration;
        diffNow: (unit?: import("luxon").DurationUnits | undefined, options?: import("luxon").DiffOptions | undefined) => Duration;
        endOf: (unit: keyof import("luxon").DurationObjectUnits) => DateTime;
        equals: (other: DateTime) => boolean;
        get: (unit: keyof DateTime) => number;
        hasSame: (other: DateTime, unit: keyof import("luxon").DurationObjectUnits) => boolean;
        minus: (duration: import("luxon").DurationInput) => DateTime;
        plus: (duration: import("luxon").DurationInput) => DateTime;
        reconfigure: (properties: import("luxon").LocaleOptions) => DateTime;
        resolvedLocaleOpts: (options?: (import("luxon").LocaleOptions & Intl.DateTimeFormatOptions) | undefined) => Intl.ResolvedDateTimeFormatOptions;
        set: (values: import("luxon").DateObjectUnits) => DateTime;
        setLocale: (locale: string) => DateTime;
        setZone: (zone: string | import("luxon").Zone, options?: import("luxon").ZoneOptions | undefined) => DateTime;
        startOf: (unit: keyof import("luxon").DurationObjectUnits) => DateTime;
        toBSON: () => Date;
        toFormat: (format: string, options?: (import("luxon").LocaleOptions & Intl.DateTimeFormatOptions) | undefined) => string;
        toHTTP: () => string;
        toISO: (options?: import("luxon").ToISOTimeOptions | undefined) => string;
        toISODate: (options?: import("luxon").ToISODateOptions | undefined) => string;
        toISOTime: (options?: import("luxon").ToISOTimeOptions | undefined) => string;
        toISOWeekDate: () => string;
        toJSDate: () => Date;
        toJSON: () => string;
        toLocal: () => DateTime;
        toLocaleParts: (options?: (import("luxon").LocaleOptions & Intl.DateTimeFormatOptions) | undefined) => any[];
        toLocaleString: (options?: (import("luxon").LocaleOptions & Intl.DateTimeFormatOptions) | undefined) => string;
        toMillis: () => number;
        toObject: (options?: {
            includeConfig?: boolean | undefined;
        } | undefined) => import("luxon").DateObject;
        toRelative: (options?: import("luxon").ToRelativeOptions | undefined) => string | null;
        toRelativeCalendar: (options?: import("luxon").ToRelativeCalendarOptions | undefined) => string | null;
        toRFC2822: () => string;
        toSeconds: () => number;
        toSQL: (options?: import("luxon").ToSQLOptions | undefined) => string;
        toSQLDate: () => string;
        toSQLTime: (options?: import("luxon").ToSQLOptions | undefined) => string;
        toString: () => string;
        toUTC: (offset?: number | undefined, options?: import("luxon").ZoneOptions | undefined) => DateTime;
        until: (other: DateTime) => import("luxon").Interval;
        valueOf: () => number;
    }>;
    plusShownDate: (duration: Duration) => void;
    minusShownDate: (duration: Duration) => void;
    onDateClick: (date: DateTime) => void;
    onDateInputChanged: () => void;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focus" | "blur" | "view-changed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    highlightToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayFormat: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: PropType<"start" | "end">;
        default: string;
    };
    dots: {
        type: null;
        default: null;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: null;
        required: boolean;
    };
}>>, {
    visible: boolean;
    disabled: boolean;
    highlightToday: boolean;
    displayFormat: string;
    align: "start" | "end";
    dots: any;
    firstDayOfWeek: number;
}>;
export default _sfc_main;
