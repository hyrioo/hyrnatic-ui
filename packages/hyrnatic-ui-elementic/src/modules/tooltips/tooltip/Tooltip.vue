<template>
    <hr-tooltip v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div ref="reference" :style="{display}">
            <slot />
        </div>

        <h-floating ref="popper" as="div" :class="[css_root]" :reference="reference"
                    :transition="transition" show-arrow
                    :visible="props.visible" :placement="placement"
                    :middleware="floatingMiddleware"
                    @computed-position="onComputedPosition"
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
    coreFloatingPlacementProp,
} from '@hyrioo/hyrnatic-ui-core';
import { ComputePositionReturn, offset } from '@floating-ui/dom';

const transitions = {
    top: 'tiny2x-slide-down-medium',
    right: 'tiny2x-slide-to-left-medium',
    bottom: 'tiny2x-slide-up-medium',
    left: 'tiny2x-slide-to-right-medium',
};

export default defineComponent({
    name: 'h-tooltip',
    props: {
        ...coreFloatingPlacementProp('top'),
        ...coreTooltipModelValueProp,
        ...coreTooltipTriggerProp,
        ...coreTooltipShowDelayProp,
        ...coreTooltipHideDelayProp,
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
        const transition = ref(transitions[props.placement]);

        const floatingMiddleware = ref([
            offset(4),
        ]);

        const onComputedPosition = (data: ComputePositionReturn) => {
            const side = data.placement.split('-')[0];
            transition.value = transitions[side];
            ctx.emit('computedPosition', data);
        };

        const core = coreTooltipSetup(reference).props(['modelValue', 'trigger']).events(['update:modelValue']).build();

        return {
            core,
            reference,
            popper,
            floatingMiddleware,
            onComputedPosition,
            transition,
            ...componentCss(),
        };
    },
});
</script>
