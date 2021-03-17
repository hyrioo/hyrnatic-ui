<template>
    <hr-tooltip v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div ref="reference" style="display: inline-block">
            <slot />
        </div>

        <h-popper ref="popper" :classes="[css_root]" :reference="reference" transition="fade-fast" show-arrow
                  :visible="props.visible" :options="{placement: placement}" :modifiers="popperModifiers"
        >
            <slot name="content">
                {{ content }}
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
import componentCss from '@elementic/utils/component-css';
import { coreTooltipModelValueProp, coreTooltipTriggerProp, setup } from '@core/modules/tooltips/tooltip/Tooltip';
import { PopperComponent } from '@core/modules/poppers/popper/Popper';

export default defineComponent({
    name: 'h-tooltip',
    props: {
        ...coreTooltipModelValueProp,
        ...coreTooltipTriggerProp,
        placement: {
            type: String,
            default: 'top',
        },
        content: {
            type: String,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const reference = ref();
        const popper = ref<PopperComponent>();

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

        const core = setup(reference).props(['modelValue', 'trigger']).events(['update:modelValue']).build();

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
