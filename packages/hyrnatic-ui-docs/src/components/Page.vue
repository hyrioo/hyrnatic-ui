<template>
    <div class="page">
        <h1>{{ title }}</h1>
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';

export default defineComponent({
    name: 'page',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx: SetupContext) {
        const value = ref([]);

        return {
            value,
        };
    },
});
</script>

<style lang="scss">
.page {
    padding: 32px 32px 0;
    flex-grow: 1;

    > h1 {
        color: #319C9C;
        font-size: 22px;
        margin: 0;
        margin-bottom: 32px;
    }

    section {
        margin-bottom: 32px;
    }

    h2 {
        color: #319C9C;
        font-size: 18px;
        margin: 0;
        margin-bottom: 12px;
    }
}
</style>
