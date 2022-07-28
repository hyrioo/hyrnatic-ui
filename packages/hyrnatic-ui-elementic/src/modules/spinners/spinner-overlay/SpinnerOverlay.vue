<template>
    <div :class="[css_root, {'-loading': loading, '-has-label': label}, `-color-${color}`]">
        <div :class="[css_ec('content')]">
            <slot />
        </div>
        <div :class="[css_ec('overlay')]">
            <h-spinner />
            <div v-if="label" :class="[css_ec('label')]">{{ label }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';
import HSpinner from '../spinner/Spinner.vue';

export default defineComponent({
    name: 'h-spinner-overlay',
    components: { HSpinner },
    props: {
        loading: {
            type: Boolean,
            required: true
        },
        label: {
            type: String,
        },
        color: {
            type: String as PropType<'light' | 'dark'>,
            default: 'light',
        },
    },
    setup(props, ctx: SetupContext) {

        return {
            ...componentCss(),
        };
    },
});
</script>
