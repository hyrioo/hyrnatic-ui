<template>
    <hr-steps-navigator v-slot="props" ref="stepsNavigator" :class="[css_root, {'-vertical': vertical, '-has-labels': hasLabels}]" v-bind="core.props" v-on="core.listeners">
        <template v-for="(step, index) in props.visibleSteps" :key="step.id">
            <h-step-item :ref="com => stepsRefs[index] = com" :step="step" @click="props.onStepClick(step)" />
            <div v-if="index !== props.visibleSteps.length-1" :key="`${step.id}-line`" :class="[css_ec('step-line')]" />
        </template>
        <div :class="[css_ec('indicator'), {'-hidden': props.currentStep === null}]" :style="indicatorStyle" />
    </hr-steps-navigator>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, SetupContext, onMounted, provide, watch, onBeforeUpdate, nextTick,
} from 'vue';
import componentCss from '@elementic/utils/component-css';
import { setup } from '@core/modules/tabs/tab/TabsNavigator';
import {
    StepsNavigatorReturn,
    coreStepsNavigatorModelValueProp,
    coreStepsNavigatorStepsProp,
    StepItem,
} from '@core/modules/steps/step/StepsNavigator';

export default defineComponent({
    name: 'h-steps-navigator',
    props: {
        ...coreStepsNavigatorModelValueProp,
        ...coreStepsNavigatorStepsProp,
        vertical: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const stepsNavigator = ref<StepsNavigatorReturn>();
        const stepsRefs = ref([]);
        const hasLabels = computed(() => props.steps.filter((step: StepItem) => step.data.label).length > 0);
        const indicatorSize = ref(0);
        const indicatorOffset = ref(0);
        const indicatorStyle = computed(() => (
            props.vertical ? {
                top: `${indicatorOffset.value}px`,
                height: `${indicatorSize.value}px`,
            } : {
                left: `${indicatorOffset.value}px`,
                width: `${indicatorSize.value}px`,
            }
        ));

        const updateIndicator = () => {
            console.log('updateIndicator');
            if (stepsRefs.value.length) {
                const firstStep = stepsRefs.value[0].$el;
                indicatorOffset.value = props.vertical ? firstStep.offsetTop + firstStep.offsetHeight : firstStep.offsetLeft + firstStep.offsetWidth;

                const activeStepElement = stepsRefs.value.find((s) => s.step.id === props.modelValue);
                if (activeStepElement) {
                    indicatorSize.value = Math.max(0, (props.vertical ? activeStepElement.$el.offsetTop : activeStepElement.$el.offsetLeft) - indicatorOffset.value);
                }
            }
        };
        const setActiveStepRef = (component, step: StepItem) => {
            console.log('setActiveStepRef', step);
            if (step.id === props.modelValue) {
                updateIndicator();
            }
        };
        onBeforeUpdate(() => {
            stepsRefs.value = [];
        });
        onMounted(() => {
            updateIndicator();
            watch(() => stepsNavigator.value.visibleSteps, () => nextTick(updateIndicator));
        });
        watch(() => props.modelValue, updateIndicator);

        const nextStep = () => {
            stepsNavigator.value.nextStep();
        };

        const core = setup().as('div').props(['modelValue', 'steps']).events(['update:modelValue'])
            .build();

        return {
            stepsNavigator,
            stepsRefs,
            setActiveStepRef,
            core,
            hasLabels,
            indicatorStyle,
            updateIndicator,

            nextStep,

            ...componentCss(),
        };
    },
});
</script>
