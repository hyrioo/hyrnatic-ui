<template>
    <page title="Button">
        <h-button label="test" :loading="loading" @click="onClick" />
        <br />
        <h-button :disabled="loading" label="Disabled" @click="onClick" />
        <br />
        <transition name="fade-slow">
            <h-button v-show="loading" label="Hideable" @click="onClick" />
        </transition>
    </page>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const loading = ref(false);
        const onClick = () => {
            loading.value = true;
            setTimeout(() => {
                loading.value = false;
            }, 1500);
        };

        return {
            loading,
            onClick,
        };
    },
});
</script>
