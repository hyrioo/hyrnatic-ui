<template>
    <div class="code-container">
        <ssh-pre :language="language" copy-button>
            {{ code }}
            <template #copy-button>
                <div class="copy-button">
                    <h-icon icon="content-copy" size="16px" />
                </div>
            </template>
        </ssh-pre>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, SetupContext,
} from 'vue';

import SshPre from 'simple-syntax-highlighter';

export default defineComponent({
    name: 'code-example',
    components: { SshPre },
    props: {
        code: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            default: 'html-vue',
        }
    },
    setup(props, ctx: SetupContext) {
        return {};
    },
});
</script>

<style lang="scss">
.code-container {
    border: 1px solid rgba(#319C9C, .32);
    background: rgba(#319C9C, .08);
    border-radius: 4px;

    .ssh-pre__content {
        padding: 12px;
        padding-right: 48px;
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