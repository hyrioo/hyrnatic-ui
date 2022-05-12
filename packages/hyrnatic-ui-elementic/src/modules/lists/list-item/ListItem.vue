<template>
    <li :class="[css_root, `-list-style-${listStyle}`]">
        <div :class="[css_ec('content')]">
            <slot>
                <div :class="[css_ec('text')]">
                    {{ text }}
                </div>
                <div v-if="subText" :class="[css_ec('sub-text')]">
                    {{ subText }}
                </div>
            </slot>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent, inject, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';

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
        const listStyle = inject('list-style');

        return {
            ...componentCss(),
            listStyle,
        };
    },
});
</script>
