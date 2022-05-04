<template>
    <div class="preview-container">
        <div class="main">
            <div v-if="$slots.preview" class="preview" :style="{alignItems: centerPreviewVertically ? 'center' : 'start'}">
                <slot name="preview" />
            </div>
            <div v-if="$slots.options" class="options">
                <h3>Options</h3>
                <slot name="options" />
            </div>
        </div>
        <div v-if="$slots.source || code" class="source">
            <slot name="source">
                <ssh-pre language="html-vue" copy-button reactive>
                    {{ code }}
                    <template #copy-button>
                        <div class="copy-button">
                            <h-icon icon="content-copy" size="16px" />
                        </div>
                    </template>
                </ssh-pre>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import {
    computed, defineComponent, Ref, SetupContext,
} from 'vue';

import SshPre from 'simple-syntax-highlighter';

export default defineComponent({
    name: 'component-preview',
    components: { SshPre },
    props: {
        code: {
            type: String,
            default: null
        },
        centerPreviewVertically: {
            type: Boolean,
            default: true,
        }
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
        flex-grow: 5;
        flex-basis: 1px;
    }
    .main {
        display: flex;
    }
    .options {
        padding: 16px;
        border-left: 1px solid rgba(#319C9C, .32);
        background: rgba(#319C9C, .08);
        flex-grow: 2;
        flex-basis: 1px;

        h3 {
            color: #319C9C;
            font-size: 16px;
            margin: 0;
            margin-bottom: 12px;
        }
    }

    .source {
        border-top: 1px solid rgba(#319C9C, .32);
        background: rgba(#319C9C, .08);
    }

    .copy-button {
        border-bottom: 1px solid rgba(#319C9C, .32);
        border-left: 1px solid rgba(#319C9C, .32);
        width: 32px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #319C9C;
        border-radius: 0 4px 0 4px;
        transition: 256ms;
        cursor: pointer;

        &:hover {
            background: darken(#FFF, 4%);
        }
    }
}
</style>