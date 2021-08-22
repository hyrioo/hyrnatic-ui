export const previewExample = (options: {showCloseButton: boolean, color: string}) => {
    const code =
`<h-dialog title="Some dialog title" color="${options.color}"${options.showCloseButton?' show-close-button':''}>
    Dynamic counter: {{ counter }} <br /> <br />
    Nested status: {{ nested }} <br /> <br />

    <h-button label="Add to counter" @click="addCounter" style="margin-right: 12px" />
    <h-button label="Open nested dialog" @click="openNestedDialog" />

    <template #footer>
        <h-button label="Close" @click="close" />
    </template>
</h-dialog>`;
    return code;
}

export const usageExample =
`// Component.vue
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import CustomDialog from '../components/CustomDialog.vue';
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
DialogManager.createPromise(CustomDialog, props, listeners, options).then(() => {
    // Resolved successfully
}).catch(() => {
    // Rejected
});`;

export const dialogExample =
`// CustomDialog.vue
export default defineComponent({
    name: 'CustomDialog',
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