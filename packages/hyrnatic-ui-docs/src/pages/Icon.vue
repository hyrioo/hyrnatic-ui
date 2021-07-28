<template>
    <page title="Icon">
        <section>
            <h2>Intro</h2>
            <p>
                TODO
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="code" style="color: #319C9C">
                <template #preview>
                    <h-icon icon="key" :spin="spin" />
                    <br /><br />
                    <h-icon icon="loading" :spin="spin" />
                    <br /><br />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="spin" right-text="Spin" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="hideOnClick" right-text="Hide on click" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="align" placeholder="Select alignment" style="width: 100%;">
                            <h-select-item value="start" label="Start" />
                            <h-select-item value="end" label="End" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const spin = ref(false);
        return {
            spin,
        };
    },
});
</script>
