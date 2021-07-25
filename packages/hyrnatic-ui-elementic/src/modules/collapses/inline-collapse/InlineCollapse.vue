<template>
    <hr-inline-collapse v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div tabindex="0" :class="[css_ec('toggle-line'), `-align-${textAlign}`]" @click="props.onClick" @keydown.enter="props.onClick">
            <div :class="[css_ec('left-filler')]" />
            <div :class="[css_ec('toggle-text')]">{{ props.expanded ? collapseText : expandText }}</div>
            <div :class="[css_ec('right-filler')]" />
        </div>
        <component :is="animate ? 'h-grow-transition' : 'div'">
            <div v-show="props.expanded" :class="[css_ec('expanded-content')]">
                <div :class="[css_ec('expanded-content-inner')]">
                    <slot />
                </div>
            </div>
        </component>
    </hr-inline-collapse>
</template>

<script lang="ts">
import {
    defineComponent, PropType, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { coreCollapseInlineSetup, coreInlineCollapseModelValueProp } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-inline-collapse',
    props: {
        ...coreInlineCollapseModelValueProp,
        expandText: {
            type: String,
            default: 'Show more',
        },
        collapseText: {
            type: String,
            default: 'Hide',
        },
        textAlign: {
            type: String as PropType<'left' | 'right'>,
            default: 'left',
        },
        animate: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const asProps = () => ({
            class: [componentCssHelpers.css_root.value],
        });
        const core = coreCollapseInlineSetup().as('div', asProps).build();

        return {
            core,
            ...componentCssHelpers,
        };
    },
});
</script>
