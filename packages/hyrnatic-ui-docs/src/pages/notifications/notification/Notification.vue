<template>
    <page title="Notification">
        <section>
            <h2>Intro</h2>
            <p>
                The notification component allow you to programmatically show notifications.
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview>
                <template #preview>
                    <h-button label="Show notification" @click="showNotification" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-select v-model="color" placeholder="Color" style="width: 100%;">
                            <h-select-item value="primary" label="Primary" />
                            <h-select-item value="danger" label="Danger" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="duration" placeholder="Duration" style="width: 100%;">
                            <h-select-item :value="null" label="null" />
                            <h-select-item :value="500" label="500" />
                            <h-select-item :value="1500" label="1500" />
                            <h-select-item :value="3000" label="3000" />
                            <h-select-item :value="4500" label="4500" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="resetDurationOnInteractivity" right-text="Reset duration on interactivity" />
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section>
            <h2>Usage</h2>
            <p>First add the wrapper to your layout component.</p>
            <code-example :code='wrapperExample' language="html-vue"/>
            <p>To show a notification you must use the <span class="inline-highlight">NotificationManager</span>.</p>
            <code-example :code="usageExample" language="js" />
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
import { NotificationManager, SimpleNotification } from '@hyrioo/hyrnatic-ui-elementic';
import Drawer from '../../../../../hyrnatic-ui-elementic/src/modules/drawers/drawer/drawer-docs';
import { previewExample, usageExample, wrapperExample } from './snippets';

export default defineComponent({
    setup(props, ctx) {
        const resetDurationOnInteractivity = ref(true);
        const duration = ref(3000);
        const color = ref('primary');

        const showNotification = async () => {
            console.log(NotificationManager, SimpleNotification);
            NotificationManager.showPromise(SimpleNotification, { title: 'Test', text: 'Here is some content for the notification.', color: color.value }, {}, {duration: duration.value, resetDurationOnInteractivity: resetDurationOnInteractivity.value}).then(() => {
                console.log('resolved');
            }).catch(() => {
                console.log('rejected');
            });
        };

        const previewExampleOptions = computed(() => {
            return {
            };
        });

        return {
            Drawer,
            previewExample,
            previewExampleOptions,
            usageExample,
            wrapperExample,
            showNotification,
            color,
            resetDurationOnInteractivity,
            duration,
        };
    },
});
</script>

<style lang="scss" scoped>
</style>