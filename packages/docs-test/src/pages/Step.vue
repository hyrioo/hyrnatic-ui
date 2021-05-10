<template>
    <page title="Step">
        <h-steps-navigator ref="navigator" v-model="value" :steps="steps" />
        <br /><br />
        <h-input v-model="label" />
        <br /><br />
        <h-button label="Next" @click="next" />
        <h-switch v-model="steps[2].visible" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { createCoreStepItem, CoreStepsNavigatorStepItem } from '@hyrioo/hyrnatic-ui-elementic';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const visible = ref(false);
        const label = ref('One');
        const steps = ref<CoreStepsNavigatorStepItem[]>([
            createCoreStepItem('one', {
                label,
                icon: 'key',
            }),
            createCoreStepItem('two', {
                label: 'Two',
                icon: 'key',
            }),
            createCoreStepItem('three', {
                label: 'Three',
                icon: 'key',
            }),
        ]);
        const navigator = ref(null);
        const value = ref('two');

        const next = () => {
            navigator.value.nextStep();
        };

        return {
            navigator,
            value,
            label,
            visible,
            steps,
            next,
        };
    },
});
</script>
