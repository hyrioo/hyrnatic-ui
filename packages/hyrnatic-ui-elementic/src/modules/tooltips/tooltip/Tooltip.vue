<template>
    <hr-tooltip v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div ref="reference" :style="{display}">
            <slot />
        </div>

        <h-popper ref="popper" :classes="[css_root]" :reference="reference" transition="fade-fast" show-arrow
                  :visible="props.visible" :options="{placement: placement}" :modifiers="popperModifiers"
        >
            <slot name="content">
                <span v-html="content" />
            </slot>
            <template #arrow>
                <h-icon icon="tooltip-arrow" :class="[css_ec('arrow')]" />
            </template>
        </h-popper>
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

        const popperModifiers = [
            {
                name: 'offset',
                options: {
                    offset: [0, 4],
                },
            },
        ];

        /*const visibleChanged = (visible) => {
            if (visible) {
                popper.value.updatePopper();
            }
            ctx.emit('update:modelValue', visible);
        };*/

        const core = coreTooltipSetup(reference).props(['modelValue', 'trigger']).events(['update:modelValue']).build();

        return {
            core,
            reference,
            popper,
            popperModifiers,
            ...componentCss(),
        };
    },
});
</script>
