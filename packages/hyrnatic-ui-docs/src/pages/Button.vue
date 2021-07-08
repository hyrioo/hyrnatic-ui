<template>
    <page title="Button">
        <h-switch v-model="loading" right-text="Loading" style="margin-right: 12px" />
        <h-switch v-model="rounded" right-text="Rounded" style="margin-right: 12px"  :rounded="rounded"/>
        <h-switch v-model="disabled" right-text="Disabled" style="margin-right: 12px" />
        <h-switch v-model="icon" right-text="Icon" style="margin-right: 12px" />
        <h-select v-model="size" placeholder="Select size" auto-size style="margin-right: 12px" >
            <h-select-item value="small" label="Small" />
            <h-select-item value="normal" label="Normal" />
            <!--<h-select-item value="large" label="Large" />-->
        </h-select>
        <br><br>
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="subtle" color="primary"  style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="subtle" color="secondary" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="subtle" color="negative" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="subtle" color="warning" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="subtle" color="danger" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="subtle" color="success" style="margin-right: 8px" />
        <br><br>
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="simple" color="primary"  style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="simple" color="secondary" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="simple" color="negative" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="simple" color="warning" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="simple" color="danger" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="simple" color="success" style="margin-right: 8px" />
        <br><br>
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="block" color="primary"  style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="block" color="secondary" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="block" color="negative" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="block" color="warning" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="block" color="danger" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="block" color="success" style="margin-right: 8px" />
        <br><br>
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="none" color="primary"  style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="none" color="secondary" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="none" color="negative" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="none" color="warning" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="none" color="danger" style="margin-right: 8px" />
        <h-button label="Text" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="none" color="success" style="margin-right: 8px" />
        <!--<transition name="fade-slow">
            <h-button v-show="loading" label="Hideable" @click="onClick" />
        </transition>-->
    </page>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const loading = ref(false);
        const rounded = ref(false);
        const disabled = ref(false);
        const icon = ref(false);
        const size = ref('normal');

        return {
            loading,
            rounded,
            disabled,
            icon,
            size,
        };
    },
});
</script>
