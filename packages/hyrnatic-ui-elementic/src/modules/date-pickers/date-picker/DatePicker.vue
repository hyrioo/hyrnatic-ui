<template>
    <hr-date-picker v-show="visible" v-slot="props" v-bind="core.props" v-on="core.listeners">
        <h-input :ref="com => { if(com) input = com.$el }" :disabled="props.disabled" v-model="inputValue"
                 @change="onDateInputChanged"
                 @focus="onInputFocus" @blur="onInputBlur">
            <template #customSuffix>
                <h-icon :ref="com => { if(com) icon = com.$el }" :icon="Icons.calendarMonth"
                        :class="['h-input__suffix-icon']" size="16px"/>
            </template>
        </h-input>

        <h-floating :class="[css_ec('calendar-container')]" :reference="input"
                    :arrow-reference="icon" show-arrow
                    :transition="transition"
                    :visible="floatingVisible" :placement="`bottom-${align}`"
                    :middleware="floatingMiddleware"
                    @click-outside="onClickOutside"
                    @computed-position="onComputedPosition"
        >
            <div :class="[css_ec('calendar-header')]">
                <div>
                    <h-icon-button :icon="Icons.chevronLeft" size="normal" styling="subtle"
                                   @click="minusShownDate({months: 1})"/>
                    <h-icon-button :icon="Icons.chevronDoubleLeft" size="normal" styling="subtle"
                                   @click="minusShownDate({years: 1})"/>
                </div>
                <div>
                    <span :class="[css_ec('calendar-year-label')]">
                        {{ `${capitalize(shownDate.monthLong)} ${shownDate.year}` }}
                    </span>
                </div>
                <div>
                    <h-icon-button :icon="Icons.chevronDoubleRight" size="normal" styling="subtle"
                                   @click="plusShownDate({years: 1})"/>
                    <h-icon-button :icon="Icons.chevronRight" size="normal" styling="subtle"
                                   @click="plusShownDate({months: 1})"/>
                </div>
            </div>
            <div :class="[css_ec('calendar')]">
                <div :class="[css_ec('calendar-weekdays')]">
                    <div v-for="weekday in weekdayNames">{{ weekday }}</div>
                </div>
                <div :class="[css_ec('calendar-dates'), {'-has-dots': cachedDots !== null}]">
                    <div v-for="date in daysToShow" :key="`${date.date.toISODate()}-${shownDate.toISODate()}`"
                         :class="[css_ec('calendar-date'), date.classes]"
                         @click="onDateClick(date.date)">
                        {{ date.date.day }}
                        <template v-if="cachedDots !== null && cachedDots[date.date.toISODate()]">
                            <div :class="[css_ec('dots-container')]">
                                <span v-for="dot in cachedDots[date.date.toISODate()]" :class="[css_ec('dot')]"
                                      :style="{background: dot.color || null}"/>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <template #arrow>
                <h-icon icon="tooltip-arrow" :class="[css_ec('arrow')]"/>
            </template>
        </h-floating>
    </hr-date-picker>
</template>

<script lang="tsx">
import {computed, defineComponent, PropType, ref, SetupContext, watch} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreDatePickerModelValueProp,
    coreDatePickerDisabledProp,
    coreDatePickerVisibleProp,
    coreDatePickerFirstDayOfWeekProp,
    coreDatePickerSetup,
    CoreDatePickerSlotProps,
    splitPlacement, CoreFloatingClickOutsideEvent,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';
import {DateTime, Duration, Info as DateTimeInfo} from 'luxon';
import {ComputePositionReturn, offset, size} from '@floating-ui/dom';
import {capitalize} from "../../../utils/string";

const transitions: { [key: string]: string } = {
    top: 'tiny2x-slide-down-medium',
    bottom: 'tiny2x-slide-up-medium',
};

export default defineComponent({
    name: 'h-date-picker',
    props: {
        ...coreDatePickerModelValueProp,
        ...coreDatePickerDisabledProp,
        ...coreDatePickerVisibleProp,
        ...coreDatePickerFirstDayOfWeekProp,
        highlightToday: {
            type: Boolean,
            default: true
        },
        displayFormat: {
            type: String,
            default: 'yyyy-MM-dd',
        },
        align: {
            type: String as PropType<'start' | 'end'>,
            default: 'start',
        },
        dots: {
            type: null,
            default: null,
        }
    },
    emits: ['update:modelValue', 'focus', 'blur', 'view-changed'],
    setup(props, ctx) {
        const componentCssHelpers = componentCss();
        const input = ref();
        const icon = ref();
        const inputValue = ref(props.modelValue ? props.modelValue.toISODate() : '');
        const floatingVisible = ref(false);
        const shownDate = ref<DateTime>(DateTime.now());
        const transition = ref(transitions['bottom']);
        const floatingMiddleware = computed(() => {
            return [
                offset(4),
            ];
        });

        const cachedDots = computed(() => {
            if (props.dots === null) {
                return null;
            }
            const obj: { [key: string]: { date: DateTime, color?: string }[] } = {};
            props.dots.forEach((dot: { date: DateTime, color?: string }) => {
                const date = dot.date.toISODate();
                obj[date] = obj[date] || [];
                obj[date].push(dot);
            });
            return obj;
        });

        const weekdayNames = computed(() => {
            let w = DateTimeInfo.weekdays('short');
            if (props.firstDayOfWeek !== 0) {
                w.unshift(...w.splice(props.firstDayOfWeek, 7 - props.firstDayOfWeek));
            }
            w = w.map((d) => capitalize(d.replace(/\./g, '')));
            return w;
        });
        const daysToShow = computed<{ date: DateTime, classes: any }[]>(() => {
            const days = [];
            const startOfMonth = shownDate.value.startOf('month');
            let offset = startOfMonth.weekday - 1;
            if (offset < props.firstDayOfWeek) {
                offset += 7 - props.firstDayOfWeek;
            } else {
                offset -= props.firstDayOfWeek;
            }
            const today = DateTime.now();
            let date = startOfMonth.minus({days: offset});
            for (let i = 0; i < 6 * 7; i++) {
                days.push({
                    date,
                    classes: {
                        '-outside-month': date.month !== startOfMonth.month,
                        '-today': props.highlightToday && date.hasSame(today, 'day'),
                        '-selected': props.modelValue && date.hasSame(props.modelValue, 'day')
                    }
                });
                date = date.plus({days: 1});
            }
            return days;
        });
        const plusShownDate = (duration: Duration) => {
            shownDate.value = shownDate.value.plus(duration);
        };
        const minusShownDate = (duration: Duration) => {
            shownDate.value = shownDate.value.minus(duration);
        };

        watch(() => props.modelValue, () => {
            inputValue.value = props.modelValue ? props.modelValue.toISODate() : '';
        });

        const onDateClick = (date: DateTime) => {
            inputValue.value = date.toISODate();
            ctx.emit('update:modelValue', date);
            floatingVisible.value = false;
        };
        const onDateInputChanged = () => {
            const parsed = DateTime.fromISO(inputValue.value);
            if (parsed.isValid) {
                shownDate.value = parsed;
                ctx.emit('update:modelValue', parsed);
            }
        };

        const inputHasFocus = ref(false);
        const onInputFocus = () => {
            if (floatingVisible.value === false) {
                shownDate.value = props.modelValue ? props.modelValue : DateTime.now();
            }
            inputHasFocus.value = true;
            floatingVisible.value = true;
            ctx.emit('focus');
        };
        const onInputBlur = () => {
            inputHasFocus.value = false;
            ctx.emit('blur');
        };

        const onComputedPosition = (data: ComputePositionReturn) => {
            transition.value = transitions[splitPlacement(data.placement).placement];
        };
        const onClickOutside = (value: CoreFloatingClickOutsideEvent) => {
            if (value.outsideFloating && value.outsideReference) {
                floatingVisible.value = false;
            }
        };

        watch(() => props.disabled, () => {
            if (props.disabled) {
                floatingVisible.value = false;
            }
        });
        watch(daysToShow, (value) => {
            ctx.emit('view-changed', {from: value[0].date, to: value[value.length - 1].date});
        });

        const asProps = (slotProps: CoreDatePickerSlotProps) => ({
            class: [componentCssHelpers.css_root.value],
        });
        const core = coreDatePickerSetup().as('div', asProps).props(['modelValue', 'disabled', 'visible']).build();

        return {
            Icons,
            capitalize,
            input,
            icon,
            inputValue,
            weekdayNames,
            daysToShow,
            shownDate,
            plusShownDate,
            minusShownDate,
            onDateClick,
            onDateInputChanged,
            core,
            ...componentCssHelpers,
            onInputFocus,
            onInputBlur,
            transition,
            onClickOutside,
            onComputedPosition,
            floatingVisible,
            floatingMiddleware,
            cachedDots,
        };
    }
});
</script>
