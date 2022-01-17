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
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import CustomDrawer from '../components/CustomDrawer.vue';
const props = {
    counter: ref(0),
};
const listeners = {
    something: () => {
        props.counter.value++;
    }
};
const options = {
    stack: 'dialog'
};
DialogManager.createPromise(CustomDrawer, props, listeners, options).then(() => {
    // Resolved successfully
}).catch(() => {
    // Rejected
});`;

export const drawerExample =
`// CustomDrawer.vue
export default defineComponent({
    name: 'CustomDrawer',
    props: {
        counter: {
            type: Number,
        },
    },
    emits: ['something'],
    setup(props, ctx: SetupContext) {
        const { resolve } = DialogManager.setupDialog();
        const addCounter = () => {
            ctx.emit('something');
        };
        const close = () => {
            resolve({ status: 'test', value: 1 });
        };

        return {
            addCounter,
            close,
        };
    },
});`;

export const wrapperExample =
`<!-- App.vue -->
<hr-dialog-wrapper />`;