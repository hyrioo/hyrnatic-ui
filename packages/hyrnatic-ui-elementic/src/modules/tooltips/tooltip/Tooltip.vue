<template>
    <hr-tooltip v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div ref="reference" :style="{display}">
            <slot />
        </div>

        <h-floating ref="popper" as="div" :class="[css_root]" :reference="reference"
                    transition="fade-fast" show-arrow
                    :visible="props.visible" :placement="placement"
                    :middleware="floatingMiddleware"
        >
            <slot name="content">
                <span v-html="content" />
            </slot>
            <template #arrow>
                <h-icon icon="tooltip-arrow" :class="[css_ec('arrow')]" />
            </template>
        </h-floating>
    </hr-tooltip>
</template>

<script lang="ts">
import {
    defineComponent, nextTick, onMounted, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    CorePopperComponent,
    coreTooltipModelValueProp,
    coreTooltipTriggerProp,
    coreTooltipShowDelayProp,
    coreTooltipHideDelayProp,
    coreTooltipSetup,
} from '@hyrioo/hyrnatic-ui-core';
import { offset } from '@floating-ui/dom';

export default defineComponent({
    name: 'h-tooltip',
    props: {
        ...coreTooltipModelValueProp,
        ...coreTooltipTriggerProp,
        ...coreTooltipShowDelayProp,
        ...coreTooltipHideDelayProp,
        placement: {
            type: String,
            default: 'top',
        },
        content: {
            type: String,
        },
        display: {
            type: String,
            default: 'inline-block',
        }
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const reference = ref();
        const popper = ref<CorePopperComponent>();

        const floatingMiddleware = ref([
            offset(4),
        ]);

        const core = coreTooltipSetup(reference).props(['modelValue', 'trigger']).events(['update:modelValue']).build();

        return {
            core,
            reference,
            popper,
            floatingMiddleware,
            ...componentCss(),
        };
    },
});
</script>
