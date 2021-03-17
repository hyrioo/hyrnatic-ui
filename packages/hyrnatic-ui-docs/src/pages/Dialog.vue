<template>
    <page title="Dialog">
        <h-button label="Show cool dialog" @click="onClick" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { create } from '@core/modules/dialogs/dialog/DialogManager';
import Page from '../components/Page.vue';
import SampleDialog from '../components/SampleDialog.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const onClick = async () => {
            const counter = ref(0);
            const dialog = create(SampleDialog, { text: '1' }, {
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
            }, { stack: 'dialog' });

            dialog.promise.then((result) => {
                console.log('resolve', result);
            }).catch((reason) => {
                console.log('reject', reason);
            });

            /*setTimeout(() => {
                dialog.destroy();
            }, 2500);*/
        };

        return {
            onClick,
        };
    },
});
</script>
