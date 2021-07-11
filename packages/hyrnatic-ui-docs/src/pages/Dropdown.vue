<template>
    <page title="Dropdown">
        <h-checkbox v-model="visible" label="Visible" />
        <br />
        <transition name="fade-slow">
            <h-dropdown :visible="visible" label="Action" :split-button="split" style="width: 150px;" @click="onClick('Action')">
                <h-dropdown-item-header label="Header" />
                <h-dropdown-item label="Looooooooooooooooong option 1" @click="onClick('1')" />
                <h-dropdown-item label="Option 2" @click="onClick('2')" />
                <h-dropdown-item label="Option 3" @click="onClick('3')" />
                <h-dropdown-item label="Option 4" @click="onClick('4')" />
                <h-dropdown-item-divider />
                <h-dropdown-item v-for="n in 10" :key="n" :label="`Extra ${n}`" />
            </h-dropdown>
        </transition>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref([]);
        const header = ref('Header');
        const split = ref(true);
        const visible = ref(true);

        const onClick = (text) => {
            // eslint-disable-next-line no-spinner
            alert(`Message: ${text}`);
        };

        return {
            value,
            header,
            split,
            visible,
            onClick,
        };
    },
});
</script>
