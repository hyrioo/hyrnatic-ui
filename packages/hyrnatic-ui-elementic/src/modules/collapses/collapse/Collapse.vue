<template>
    <hr-collapse v-bind="core.props" v-on="core.listeners">
        <slot />
    </hr-collapse>
</template>

<script lang="ts">
import {
    defineComponent, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreCollapseAccordionProp,
    coreCollapseModelValueProp,
    coreCollapseSetup,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-collapse',
    props: {
        ...coreCollapseAccordionProp,
        ...coreCollapseModelValueProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const asProps = () => ({
            class: [componentCssHelpers.css_root.value],
        });
        const core = coreCollapseSetup().as('div', asProps).props(['modelValue', 'accordion']).events(['update:modelValue'])
            .build();

        return {
            core,
        };
    },
});
</script>
