<template>
    <div :class="[css_root, {'-current': step.isCurrent, '-done': step.isDone, '-last': step.isLast, '-locked': step.isLocked}]" @click="onClick">
        <div :class="[css_ec('container')]">
            <h-icon v-if="step.data.icon" :class="[css_ec('icon')]" :icon="step.data.icon" size="16px" />
            <h-icon v-if="step.data.icon" :class="[css_ec('done-icon')]" icon="check" size="20px" />
            <div v-if="step.data.label" :class="[css_ec('label')]">
                {{ step.data.label }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, PropType, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { CoreStepsNavigatorDetailedStepItem } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-step-item',
    props: {
        step: {
            type: Object as PropType<CoreStepsNavigatorDetailedStepItem>,
            required: true,
        },
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const onClick = () => {
            ctx.emit('click');
        };

        return {
            ...componentCss(),
            onClick,
        };
    },
});
</script>
