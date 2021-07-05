<template>
    <hr-date-picker v-show="visible" v-bind="core.props" v-on="core.listeners">
        <h-input :ref="com => { if(com) input = com.$el }" v-model="inputValue" @focus="onInputFocus" @blur="onInputBlur">
            <template #customSuffix>
                <h-icon :ref="com => { if(com) icon = com.$el }" :icon="Icons.calendarMonth" :class="['h-input__suffix-icon']" size="16px" />
            </template>
        </h-input>

        <h-popper :classes="[css_ec('calendar-container')]" :reference="input" :arrow-reference="icon" show-arrow transition="fade-fast"
                  :visible="popperVisible" :options="{placement: `bottom-end`}" :modifiers="modifiers"
                  @click-outside="onClickOutside" fixed-width="256px"
        >
            <div :class="[css_ec('calendar-header')]">
                <div>
                    <h-icon-button :icon="Icons.chevronLeft" size="small" styling="none" @click="minusShownDate({months: 1})" />
                    <h-icon-button :icon="Icons.chevronDoubleLeft" size="small" styling="none" @click="minusShownDate({years: 1})" />
                </div>
                <div>
                    <span :class="[css_ec('calendar-year-label')]">{{ shownDate.year }}</span>
                    <span :class="[css_ec('calendar-month-label')]">{{ shownDate.monthLong }}</span>
                </div>
                <div>
                    <h-icon-button :icon="Icons.chevronDoubleRight" size="small" styling="none" @click="plusShownDate({years: 1})" />
                    <h-icon-button :icon="Icons.chevronRight" size="small" styling="none" @click="plusShownDate({months: 1})" />
                </div>
            </div>
            <div :class="[css_ec('calendar')]">
                <div :class="[css_ec('calendar-weekdays')]">
                    <div v-for="weekday in weekdayNames">{{ weekday }}</div>
                </div>
                <div :class="[css_ec('calendar-dates')]">
                    <div v-for="date in daysToShow" :class="[css_ec('calendar-date'), date.classes]" @click="onDateClick(date.date)">
                        {{ date.date.day }}
                    </div>
                </div>
            </div>
            <template #arrow>
                <div :class="[css_ec('arrow')]" />
            </template>
        </h-popper>
    </hr-date-picker>
</template>

<script lang="tsx">
import { computed, defineComponent, PropType, ref, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreDatePickerModelValueProp,
    coreDatePickerDisabledProp,
    coreDatePickerVisibleProp,
    coreDatePickerFirstDayOfWeekProp,
    coreDatePickerSetup,
    CoreDatePickerSlotProps,
    corePopperMatchReferenceSizeModifier,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';
import { DateTime, Duration, Info as DateTimeInfo } from 'luxon';

export default defineComponent({
    name: 'h-date-picker',
    props: {
        ...coreDatePickerModelValueProp,
        ...coreDatePickerDisabledProp,
        ...coreDatePickerVisibleProp,
        ...coreDatePickerFirstDayOfWeekProp,
    },
    emits: ['update:modelValue', 'focus', 'blur'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const input = ref();
        const icon = ref();
        const inputValue = ref('');
        const popperVisible = ref(false);
        const shownDate = ref<DateTime>(DateTime.now());
        const modifiers = [
            {
                name: 'offset',
                options: {
                    offset: [0, 4],
                },
            },
        ];

        const weekdayNames = computed(() => {
            let w = DateTimeInfo.weekdays('short', { locale: 'en' });
            if(props.firstDayOfWeek !== 0) {
                w.unshift(...w.splice(props.firstDayOfWeek, 7-props.firstDayOfWeek));
            }
            return w;
        });
        const daysToShow = computed<{date: DateTime, classes: any}[]>(() => {
            const days = [];
            const startOfMonth = shownDate.value.startOf('month');
            const today = DateTime.now();
            let date = startOfMonth.minus({days: startOfMonth.weekday-1});
            for(let i = 0; i < 6 * 7; i++){
                days.push({ date, classes: { '-outside-month': date.month !== startOfMonth.month, '-today': date.hasSame(today, 'day') } });
                date = date.plus({days: 1});
            }
            return days;
        });
        const plusShownDate = (duration: Duration) => {
            shownDate.value = shownDate.value.plus(duration);
        }
        const minusShownDate = (duration: Duration) => {
            shownDate.value = shownDate.value.minus(duration);
        }

        const onDateClick = (date: DateTime) => {
            ctx.emit('update:modelValue', date);
        }

        const inputHasFocus = ref(false);
        const onInputFocus = () => {
            inputHasFocus.value = true;
            popperVisible.value = true;
            ctx.emit('focus');
        };
        const onInputBlur = () => {
            inputHasFocus.value = false;
            ctx.emit('blur');
        };

        const onClickOutside = (value) => {
            if (value.outsidePopper && value.outsideReference) {
                popperVisible.value = false;
            }
        };

        const asProps = (slotProps: CoreDatePickerSlotProps) => ({
            class: [componentCssHelpers.css_root.value],
            disabled: slotProps.disabled,
        });
        const core = coreDatePickerSetup().as('div', asProps).props(['modelValue', 'disabled', 'visible']).events(['click'])
            .build();

        return {
            Icons,
            input,
            icon,
            inputValue,
            weekdayNames,
            daysToShow,
            shownDate,
            plusShownDate,
            minusShownDate,
            onDateClick,
            core,
            ...componentCssHelpers,
            onInputFocus,
            onInputBlur,
            onClickOutside,
            popperVisible,
            modifiers,
        };
    }
});
</script>
