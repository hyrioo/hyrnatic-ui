<template>
    <div class="preview-container">
        <div class="main">
            <div v-if="$slots.preview" class="preview">
                <slot name="preview" />
            </div>
            <div v-if="$slots.options" class="options">
                <h3>Options</h3>
                <slot name="options" />
            </div>
        </div>
        <div v-if="$slots.source" class="source">
            <slot name="source" />
        </div>
    </div>
</template>

<script lang="ts">
import {
    computed, defineComponent, Ref, SetupContext,
} from 'vue';

export default defineComponent({
    name: 'component-preview',
    props: {
    },
    setup(props, ctx: SetupContext) {

        return {
        };
    },
});
</script>

<style lang="scss" scoped>
.preview-container {
    border: 1px solid rgba(#319C9C, .32);
    border-radius: 4px;

    .preview {
        padding: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 3;
        flex-basis: 1px;
    }
    .main {
        display: flex;
    }
    .options {
        padding: 16px;
        border-left: 1px solid rgba(#319C9C, .32);
        background: rgba(#319C9C, .08);
        flex-grow: 1;
        flex-basis: 1px;

        h3 {
            color: #319C9C;
            font-size: 16px;
            margin: 0;
            margin-bottom: 12px;
        }
    }
}
</style>