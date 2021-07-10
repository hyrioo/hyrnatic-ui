<template>
    <div class="preview-option-form-control">
        <slot />
    </div>
</template>

<script lang="ts">
import {
    defineComponent, SetupContext,
} from 'vue';

export default defineComponent({
    name: 'preview-option-form-control',
    setup(props, ctx: SetupContext) {
        return {};
    },
});
</script>

<style lang="scss" scoped>
    .preview-option-form-control{
        margin-bottom: 8px;
    }
</style>