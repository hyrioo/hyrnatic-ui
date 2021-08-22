<template>
    <page title="Drawer">
        <section>
            <h2>Intro</h2>
            <p>
                The drawer component allow you to programmatically open promisfied drawers and pass props and listeners to them.
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="previewExample(previewExampleOptions)">
                <template #preview>
                    <h-button label="Open drawer" @click="openDrawer" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-select v-model="placement" placeholder="Select placement" style="width: 100%;">
                            <h-select-item value="left" label="Left" />
                            <h-select-item value="right" label="Right" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section>
            <h2>Usage</h2>
            <p>First add the wrapper to your layout component.</p>
            <code-example :code='wrapperExample' language="html-vue"/>
            <p>To open a dialog you must use the <span class="inline-highlight">DialogManager</span>, and import the component to wish to open.</p>
            <code-example :code="usageExample" language="js" />
            <p>Your custom drawer must call <span class="inline-highlight">DialogManager.setupDialog()</span> in the setup.</p>
            <code-example :code="drawerExample" language="js" />
        </section>

        <section v-if="Drawer.props.length">
            <h2>Props</h2>
            <component-props-table :component="Drawer" />
        </section>

        <section v-if="Drawer.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Drawer" />
        </section>

        <section v-if="Drawer.events.length">
            <h2>Events</h2>
            <component-events-table :component="Drawer" />
        </section>
    </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext } from 'vue';
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import Drawer from '../../../../../hyrnatic-ui-elementic/src/modules/drawers/drawer/drawer-docs';
import SampleDrawer from '../../../components/SampleDrawer.vue';
import { drawerExample, previewExample, usageExample, wrapperExample } from './snippets';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const counter = ref(0);
        const placement = ref('right');

        const openDrawer = async () => {
            DialogManager.createPromise(SampleDrawer, { placement, counter }, {
                incrementCounter: () => {
                    counter.value++;
                },
            }, { stack: 'drawer' }).then((result) => {
                console.log('resolve', result);
            }).catch((reason) => {
                console.log('reject', reason);
            });
        };

        const previewExampleOptions = computed(() => {
            return {
                placement: placement.value,

            };
        });

        return {
            Drawer,
            previewExample,
            previewExampleOptions,
            usageExample,
            drawerExample,
            wrapperExample,
            openDrawer,
            placement,
        };
    },
});
</script>

<style lang="scss" scoped>
</style>