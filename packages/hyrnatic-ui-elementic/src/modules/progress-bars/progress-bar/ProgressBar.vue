<template>
    <hr-progress-bar ref="coreProgressBar" :class="[css_root, `-size-${size}`, `-styling-${styling}`, {'-striped': striped, '-animated': animated}]" v-bind="core.props" v-on="core.listeners">
        <div :class="[css_ec('back')]">
            <div :class="[css_ec('filler')]" :style="{width: width}">
                <span v-if="(showPercentage || showValue) && size === 'large'" :class="[css_ec('label')]">
                    {{ label }}
                </span>
            </div>
            <div v-if="showOverflowIndicator" v-show="overflowOffset < 100"
                 :class="[css_ec('overflow-indicator')]" :style="{left: `${overflowOffset}%`}"
            />
        </div>
        <span v-if="(showPercentage || showValue) && size === 'normal'" :class="[css_ec('label')]">
            {{ label }}
        </span>
    </hr-progress-bar>
</template>

<script lang="ts">
import {
    defineComponent, computed, SetupContext, ref,
} from 'vue';
import componentCss from '@elementic/utils/component-css';
import HrProgressBar, {
    coreProgressBarMaximumProp,
    coreProgressBarMinimumProp,
    coreProgressBarValueProp, setup, SlotProps,
} from '@core/modules/progress-bars/progress-bar/ProgressBar';

export default defineComponent({
    name: 'h-progress-bar',
    components: { HrProgressBar },
    props: {
        ...coreProgressBarValueProp,
        ...coreProgressBarMinimumProp,
        ...coreProgressBarMaximumProp,
        showOverflowIndicator: {
            type: Boolean,
            default: false,
        },
        striped: {
            type: Boolean,
            default: false,
        },
        animated: {
            type: Boolean,
            default: false,
        },
        styling: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'normal',
        },
        showPercentage: {
            type: Boolean,
            default: false,
        },
        showValue: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, ctx: SetupContext) {
        const coreProgressBar = ref();

        const label = computed(() => {
            if (coreProgressBar.value) {
                console.log(coreProgressBar.value);
                return props.showPercentage ? `${coreProgressBar.value.percentage}%` : props.value;
            } else {
                return '';
            }
        });
        const width = computed(() => {
            if (coreProgressBar.value) {
                return `${Math.min(100, coreProgressBar.value.percentage)}%`;
            } else {
                return '0%';
            }
        });
        const overflowOffset = computed(() => {
            const offset = (100 / props.value) * (props.maximum - props.minimum);
            return Math.round(offset * 10) / 10;
        });

        const core = setup().as('div').props(['value', 'minimum', 'maximum']).build();

        return {
            core,
            coreProgressBar,
            overflowOffset,
            label,
            width,

            ...componentCss(),
        };
    },
});
</script>
