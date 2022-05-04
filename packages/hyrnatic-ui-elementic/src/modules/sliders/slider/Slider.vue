<template>
    <hr-slider ref="coreSlider" :class="[css_root, {'-dragging': dragging, '-disabled': disabled}]" v-document-event:mouseup="handleMouseUp" v-document-event:mousemove="handleMouseMove" v-bind="core.props" v-on="core.listeners">
        <div :class="[css_ec('back')]" @click="handleClick">
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
    },
    setup(props, ctx: SetupContext) {
        const coreSlider = ref();
        const dragging = ref(false);

        const width = computed(() => {
            if (coreSlider.value) {
                return `${Math.max(0, Math.min(100, coreSlider.value.percentage))}%`;
            } else {
                return '0%';
            }
        });

        const getValueFromPercentage = (percentage) => {
            let value = ((props.maximum - props.minimum) / 100 * percentage) + props.minimum;
            if(value < props.minimum){
                value = props.minimum;
            } else if(value > props.maximum) {
                value = props.maximum;
            }
            return Math.round(value / props.stepSize ) * props.stepSize;
        }
        const handleMouseDown = (e) => {
            if(!props.disabled) {
                dragging.value = true;
                e.preventDefault();
            }
        };
        const handleMouseMove = (e) => {
            if(dragging.value) {
                const percentage = ((100 / coreSlider.value.$el.clientWidth) * (e.pageX - coreSlider.value.$el.offsetLeft));
                const value = getValueFromPercentage(percentage);
                ctx.emit('update:modelValue', value);
                e.preventDefault();
            }
        };
        const handleMouseUp = (e) => {
            dragging.value = false;
        };
        const handleClick = (e) => {
            if(!props.disabled) {
                const percentage = ((100 / coreSlider.value.$el.clientWidth) * e.offsetX);
                const value = getValueFromPercentage(percentage);
                ctx.emit('update:modelValue', value);
                e.preventDefault();
            }
        };

        const core = coreSliderSetup().as('div').props(['modelValue', 'disabled', 'minimum', 'maximum', 'stepSize']).build();

        return {
            core,
            coreSlider,
            width,
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
