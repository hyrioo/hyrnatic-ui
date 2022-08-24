export const previewExample = (options: {placement: string}) => {
    const code =
`<h-drawer title="Some dialog title" placement="${options.placement}">
    Counter: {{ counter }}
    <br /><br />
    <h-button label="Emit 'addCounter'" @click="something" />
    <br /><br />
    <h-button label="Emit 'addCounter' after confirm drawer" @click="confirmAgain" />
    <br /><br />
    <h-button label="Emit 'addCounter' after confirm dialog" @click="confirmAgainDialog" />

    <template #footer>
        <h-button label="Close" styling="negative" style="margin-right: 12px" @click="close" />
        <h-button label="Save" @click="close" />
    </template>
</h-drawer>`;
    return code;
}

export const usageExample =
`// Component.vue
import { NotificationManager, SimpleNotification } from '@hyrioo/hyrnatic-ui-elementic';
const props = {
    title: 'Test',
    text: 'Here is some content for the notification.',
    color: color.value
};
const listeners = {
    something: () => {
        props.counter.value++;
    }
};
const options = {
    duration: 3500,
    resetDurationOnInteractivity: true
};

// Show notification as promise
NotificationManager.showPromise(SimpleNotification, props, listeners, options).then(() => {}).catch(() => {});

// Or show notification without promise
NotificationManager.show(SimpleNotification, props, listeners, options);`;

export const wrapperExample =
`<!-- App.vue -->
<h-notification-wrapper />`;