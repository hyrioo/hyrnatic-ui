<template>
    <h-floating ref="popper" :classes="[css_root]" :reference="reference" :arrow-reference="arrowReference" show-arrow
              keep transition="tiny2x-slide-up-medium"
              :visible="visible" :options="{placement}"
              :modifiers="popperModifiers"  @click-outside="onClickOutside"
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
    defineComponent, SetupContext, PropType,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    CorePopperClickOutsideEvent,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-popover',
    props: {
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
        placement: {
            type: String as PropType<'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'>,
            default: 'bottom-start',
        },
    },
    emits: {
        'clickOutside': (event: CorePopperClickOutsideEvent) => true,
    },
    setup(props, ctx: SetupContext) {
        const popperModifiers = [
            {
                name: 'offset',
                options: {
                    offset: [0, 4],
                },
            },
        ];

        const onClickOutside = (value) => {
            ctx.emit('clickOutside', value);
        };

        return {
            popperModifiers,
            onClickOutside,
            ...componentCss(),
        };
    },
});
</script>
