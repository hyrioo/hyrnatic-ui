<template>
    <span :class="[css_root]">
        <slot>
            <div :class="[css_ec('text')]">
                {{ text }}
            </div>
            <div v-if="subText" :class="[css_ec('sub-text')]">
                {{ subText }}
            </div>
        </slot>
    </span>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import componentCss from '@/utils/component-css';

export default defineComponent({
    name: 'h-list-item',
    props: {
        text: {
            type: String,
        },
        subText: {
            type: String,
        },
    },
    setup(props, ctx: SetupContext) {
        return {
            ...componentCss(),
        };
    },
});
</script>
