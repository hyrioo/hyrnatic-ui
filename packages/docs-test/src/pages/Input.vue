<template>
    <page title="Input">
        <h-input v-model="value" />
        <br /><br /><br /><br />
        <h-input v-model.capitalize="value2" prefix-icon="key" prefix="Test" suffix="Test" />
        <br /><br />
        <h-input v-model="value2" :readonly="value3" />
        <br /><br />
        <h-autocomplete v-model="value" :items="items" @item-selected="alert">
<!--            <template v-slot="props">-->
<!--                <span>{{ props.focusedItem }}</span>-->
<!--                <li v-for="item in props.items" :class="{'-focused': item === props.focusedItem}">{{ item }}</li>-->
<!--            </template>-->
        </h-autocomplete>
    </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref('');
        const value2 = ref('');
        const value3 = ref(true);
        const items = computed(() => {
            return ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].filter((s) => s.toLowerCase().indexOf(value.value.toLowerCase()) !== -1);
        });

        const alert = (item) => {
            console.log('Alert', item);
        }

        return {
            value,
            value2,
            value3,
            items,
            alert,
        };
    },
});
</script>
