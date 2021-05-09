<template>
    <hr-collapse-item v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div tabindex="0" :class="[css_ec('header')]" @click="props.onClick" @keydown.enter="props.onClick">
            <slot name="header">
                <h2 :class="[css_ec('header-text')]">{{ header }}</h2>
            </slot>

            <div :class="[css_ec('expand-icon')]">
                <transition name="fade-medium">
                    <h-icon v-if="!props.expanded" key="expand" icon="plus" size="16px" />
                    <h-icon v-else key="contract" icon="minus" size="16px" />
                </transition>
            </div>
        </div>
        <h-grow-transition>
            <div v-show="props.expanded" :class="[css_ec('expanded-content')]">
                <div :class="[css_ec('expanded-content-inner')]">
                    <slot />
                </div>
            </div>
        </h-grow-transition>
    </hr-collapse-item>
</template>

<script lang="ts">
import {
    defineComponent, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { coreCollapseItemIdProp, coreCollapseItemSetup, CoreCollapseItemSlotProps } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-collapse-item',
    props: {
        ...coreCollapseItemIdProp,
        header: {
            type: String,
        },
    },
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const asProps = (slotProps: CoreCollapseItemSlotProps) => ({
            class: [componentCssHelpers.css_root.value, {
                '-expanded': slotProps.expanded,
            }],
        });
        const core = coreCollapseItemSetup().as('div', asProps).props(['id']).build();

        return {
            core,
            ...componentCssHelpers,
        };
    },
});
</script>
