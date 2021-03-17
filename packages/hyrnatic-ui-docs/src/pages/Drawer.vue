<template>
    <page title="Dialog">
        <h-button label="Show cool drawer on right" @click="showOnRight" />
        <br /><br />
        <h-button label="Show cool drawer on left" @click="showOnLeft" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { create, createPromise } from '@core/modules/dialogs/dialog/DialogManager';
import Page from '../components/Page.vue';
import SampleDrawer from '../components/SampleDrawer.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const showOnRight = async () => {
            const counter = ref(0);
            createPromise(SampleDrawer, { text: 'Testing', counter }, {
                something: () => {
                    counter.value++;
                },
                somethingMore: () => {
                    counter.value += 5;
                },
                transitionEnd: () => {
                    console.log('Hidden');
                },
                resolve: () => {
                    console.log('resolve listener');
                },
                reject: () => {
                    console.log('reject listener');
                },
            }, { stack: 'drawer' }).then((result) => {
                console.log('resolve', result);
            }).catch((reason) => {
                console.log('reject', reason);
            });
        };
        const showOnLeft = async () => {
            const counter = ref(0);
            createPromise(SampleDrawer, { text: 'Testing', counter, placement: 'left' }, {
                something: () => {
                    counter.value++;
                },
                somethingMore: () => {
                    counter.value += 5;
                },
                transitionEnd: () => {
                    console.log('Hidden');
                },
                resolve: () => {
                    console.log('resolve listener');
                },
                reject: () => {
                    console.log('reject listener');
                },
            }, { stack: 'drawer' }).then((result) => {
                console.log('resolve', result);
            }).catch((reason) => {
                console.log('reject', reason);
            });
        };

        return {
            showOnRight,
            showOnLeft,
        };
    },
});
</script>
