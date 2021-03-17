<template>
    <hr-button v-bind="core.props" v-on="core.listeners">
        <template #default="props">
            <button :class="[css_root, `-styling-${styling}`, `-size-${size}`, {'-loading': props.loading}]" :disabled="props.disabled" @click="props.onClick">
                <h-icon :class="[css_ec('loading-icon')]" icon="loading" size="16px" />

                <span :class="[css_ec('content')]">
                    <h-icon v-if="icon" :class="[css_ec('icon')]" :icon="icon" size="16px" />
                </span>
            </button>
        </template>
    </hr-button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import componentCss from '@/utils/component-css';
import {
    coreButtonDisabledProp,
    coreButtonLoadingProp,
    coreButtonSetup,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-icon-button',
    props: {
        ...coreButtonDisabledProp,
        ...coreButtonLoadingProp,
        icon: {
            type: String,
            required: true,
        },
        styling: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'normal',
        },
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const core = coreButtonSetup().props(['disabled', 'loading']).events(['click']).build();

        return {
            core,
            ...componentCss(),
        };
    },
});
</script>
