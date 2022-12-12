<template>
    <h-floating as="div" :class="[css_root]" :reference="reference"
                :transition="transition" show-arrow
                :visible="visible" :placement="placement"
                :middleware="floatingMiddleware"
                @click-outside="onClickOutside"
                @computed-position="onComputedPosition"
    >
        <div :class="[css_ec('content')]">
            <slot />
        </div>
        <template #arrow>
            <div :class="[css_ec('arrow')]" />
        </template>
    </h-floating>
</template>

<script lang="ts">
import {
    defineComponent, SetupContext, PropType, ref,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    CorePopperClickOutsideEvent,
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
    name: 'h-popover',
    props: {
        ...coreFloatingPlacementProp(),
        reference: {
            type: null,
            required: true,
        },
        visible: {
            type: Boolean,
            required: true,
        },
        arrowReference: {
            type: null,
        },
        showArrow: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        'clickOutside': (event: CorePopperClickOutsideEvent) => true,
        'computedPosition': (data: ComputePositionReturn) => true,
    },
    setup(props, ctx: SetupContext) {
        const transition = ref(transitions[props.placement]);
        const floatingMiddleware = ref([
            offset(4),
        ]);

        const onClickOutside = (value) => {
            ctx.emit('clickOutside', value);
        };

        const onComputedPosition = (data: ComputePositionReturn) => {
            const side = data.placement.split('-')[0];
            transition.value = transitions[side];
            ctx.emit('computedPosition', data);
        };

        return {
            floatingMiddleware,
            onClickOutside,
            onComputedPosition,
            transition,
            ...componentCss(),
        };
    },
});
</script>
