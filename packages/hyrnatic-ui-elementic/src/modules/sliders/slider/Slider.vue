<template>
    <hr-slider ref="coreSlider" :class="[css_root, {'-dragging': dragging, '-disabled': disabled}]"
               v-document-event:mouseup="handleMouseUp" v-document-event:mousemove="handleMouseMove" v-bind="core.props"
               v-on="core.listeners">
        <div :class="[css_ec('bar')]" @click="handleClick">
            <div :class="[css_ec('back')]">
                <div v-for="i in steps" :class="[css_ec('step')]" />
            </div>
            <div :class="[css_ec('filler')]" :style="{width: width}" />
        </div>
        <div :class="[css_ec('handle')]" :style="{left: `${width}`}" @mousedown="handleMouseDown" />
    </hr-slider>
</template>

<script lang="ts">
import {
    defineComponent, computed, SetupContext, ref,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreSliderModelValueProp,
    coreSliderDisabledProp,
    coreSliderMaximumProp,
    coreSliderMinimumProp,
    coreSliderStepSizeProp,
    coreSliderSetup,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-slider',
    props: {
        ...coreSliderModelValueProp,
        ...coreSliderDisabledProp,
        ...coreSliderMaximumProp,
        ...coreSliderMinimumProp,
        ...coreSliderStepSizeProp,
        showSteps: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, ctx: SetupContext) {
        const coreSlider = ref();
        const dragging = ref(false);

        const steps = computed(() => {
            if (coreSlider.value && props.showSteps) {
                return coreSlider.value.steps;
            } else {
                return 1;
            }
        });
        const width = computed(() => {
            if (coreSlider.value) {
                return `${Math.max(0, Math.min(100, coreSlider.value.percentage))}%`;
            } else {
                return '0%';
            }
        });

        const handleMouseDown = (e) => {
            if (!props.disabled) {
                dragging.value = true;
                e.preventDefault();
            }
        };
        const handleMouseMove = (e) => {
            if (dragging.value) {
                const percentage = ((100 / coreSlider.value.$el.clientWidth) * (e.pageX - coreSlider.value.$el.offsetLeft));
                const value = coreSlider.value.getValueFromPercentage(percentage);
                ctx.emit('update:modelValue', value);
                e.preventDefault();
            }
        };
        const handleMouseUp = (e) => {
            dragging.value = false;
        };
        const handleClick = (e) => {
            if (!props.disabled) {
                const percentage = ((100 / coreSlider.value.$el.clientWidth) * e.offsetX);
                const value = coreSlider.value.getValueFromPercentage(percentage);
                ctx.emit('update:modelValue', value);
                e.preventDefault();
            }
        };

        const core = coreSliderSetup().as('div').props(['modelValue', 'disabled', 'minimum', 'maximum', 'stepSize']).build();

        return {
            core,
            coreSlider,
            width,
            steps,
            handleMouseDown,
            handleMouseMove,
            handleMouseUp,
            handleClick,
            dragging,

            ...componentCss(),
        };
    },
});
</script>
