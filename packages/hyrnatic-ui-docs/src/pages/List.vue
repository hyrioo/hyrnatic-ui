<template>
    <page title="List">
        <h-button label="Add" @click="add" />
        <h-button label="Remove" @click="remove" />
        <br /><br />
        <h-list>
            <h-list-item v-for="item in list" :key="item.key" :text="item.text" :sub-text="item.subText">
                <div style="display: flex">
                    <div style="flex-grow: 1">
                        <div :class="['h-list-item__text']">
                            {{ item.text }}
                        </div>
                        <div v-if="item.subText" :class="['h-list-item__sub-text']">
                            {{ item.subText }}
                        </div>
                    </div>
                    <div style="align-self: center; display: flex; cursor: pointer" @click="removeItem(item)">
                        <h-icon icon="close" size="16px" />
                    </div>
                </div>
            </h-list-item>
        </h-list>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';
import Arr from '@/utils/array';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        let key = 1;
        const list = ref([]);

        const randomIndex = () => Math.floor(Math.random() * list.value.length);
        const add = () => {
            list.value.splice(randomIndex(), 0, {
                key: (key++).toString(),
                text: `This is a list element: ${key}`,
                subText: 'This is a sub line',
            });
        };
        const remove = () => {
            list.value.splice(randomIndex(), 1);
        };
        const removeItem = (item) => {
            list.value = Arr.remove(list.value, item);
        };

        add();
        add();
        add();
        add();
        add();

        return {
            list,
            add,
            remove,
            removeItem,
        };
    },
});
</script>
