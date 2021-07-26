import {
    h,
    defineComponent,
    SetupContext,
    ref,
    DefineComponent,
    computed,
    Teleport,
    ComputedRef, reactive,
} from 'vue';
import Str from '../../../utils/string';

export interface DialogObject {
    component: DefineComponent;
    listeners: object;
    props: object;
    stack: string;
}
export interface InternalDialogObject extends DialogObject {
    id: string;
    visible: boolean;
    compiledListeners: ComputedRef;
}
export type Wrapper = {
    addDialog(dialog: DialogObject, promise: { resolve: Function; reject: Function }): InternalDialogObject;
    getDialog(id: string): InternalDialogObject;
    destroyDialog(id: string): void;
    getStackCount(stack: string): ComputedRef<number>;
    getStackVisibleCount(stack: string): ComputedRef<number>;
    getStackIndex(stack: string, id: string): ComputedRef<number>;
}

export const wrappers: { [key: string]: Wrapper } = {};

export default defineComponent({
    name: 'hr-dialog-wrapper',
    props: {
        teleport: {
            type: String,
            default: 'body',
        },
        name: {
            type: String,
            default: 'default',
        },
    },
    setup(props, ctx: SetupContext) {
        /**
         * Collection of all dialogs in the wrapper
         */
        const dialogs = reactive<{ [key: string]: InternalDialogObject }>({});

        /**
         * Collection of dialogs for each stack in the wrapper
         */
        const stacks = reactive<{ [key: string]: InternalDialogObject[] }>({});

        /**
         * Computed count of dialogs for each stack in the wrapper
         */
        const dialogsCount = computed(() => {
            const counts = [];
            Object.keys(stacks).forEach((key) => {
                counts[key] = stacks[key].length;
            });
            return counts;
        });

        /**
         * Computed count of visible (non transitioning) dialogs for each stack in the wrapper
         */
        const visibleDialogsCount = computed(() => {
            const counts = [];
            Object.keys(stacks).forEach((key) => {
                counts[key] = stacks[key].filter((d) => d.visible).length;
            });
            return counts;
        });

        /**
         * Uppercase first character of a string
         * @param string
         */
        const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

        /**
         * Pascalize a kebab-case string
         * @param string
         */
        const pascalize = (string: string): string => {
            // splitting words by dash
            const words = string.split('-');
            // use capitalize function to capitalize every word
            const capitalized = words.map((word) => capitalize(word));
            // glue up words with .join()
            return capitalized.join('');
        };

        /**
         * Convert listeners to JSX type listener eg. click => onClick
         * @param listeners
         */
        const convertListeners = (listeners) => {
            const l = {};
            Object.keys(listeners).forEach((key) => {
                l[`on${pascalize(key)}`] = listeners[key];
            });
            return l;
        };

        /**
         * Trigger hide transition
         * @param id
         */
        const hideDialog = (id) => {
            const dialog = dialogs[id];
            dialog.visible = false;
        };

        /**
         * Remove the dialog from the DOM
         * @param id
         */
        const removeDialog = (id) => {
            const dialog = dialogs[id];
            delete dialogs[id];
            stacks[dialog.stack] = stacks[dialog.stack].filter((d) => d.id !== id);
        };

        /**
         * Hide and remove dialog without trigger reject and resolve
         * @param id
         */
        const destroyDialog = (id) => {
            hideDialog(id);
        };

        /**
         * Trigger listener if defined on dialog
         * @param dialog
         * @param event
         * @param payload
         */
        const triggerListener = (dialog, event, payload?) => {
            if (dialog.listners && dialog.listners[event]) {
                dialog.listners[event](payload);
            }
        };

        /**
         * Add a dialog to the wrapper
         * @param dialog
         * @param promise
         */
        const addDialog = (dialog, promise) => {
            const baseListeners = {
                resolve: (result) => {
                    promise.resolve(result);
                    hideDialog(dialog.id);
                    triggerListener(dialog, 'resolve', result);
                },
                reject: (result) => {
                    promise.reject(result);
                    hideDialog(dialog.id);
                    triggerListener(dialog, 'reject', result);
                },
                transitionEnd: () => {
                    removeDialog(dialog.id);
                    triggerListener(dialog, 'transitionEnd');
                },
            };
            dialog.visible = ref(true);
            dialog.id = Str.random();
            dialog.compiledListeners = computed(() => convertListeners({ ...dialog.listeners, ...baseListeners }));
            if (!stacks[dialog.stack]) {
                stacks[dialog.stack] = [];
            }
            stacks[dialog.stack].push(dialog);
            dialogs[dialog.id] = dialog;

            return dialog;
        };

        /**
         * Get the InternalDialogObject for a dialog id
         * @param id
         */
        const getDialog = (id) => dialogs[id];

        /**
         * Get count for all dialogs for a specific stack, even the ones that are transitioning away
         * @param stack
         */
        const getStackCount = (stack) => computed(() => dialogsCount.value[stack]);

        /**
         * Get count for all active dialogs for a specific stack, without the ones that are transitioning away
         * @param stack
         */
        const getStackVisibleCount = (stack) => computed(() => visibleDialogsCount.value[stack]);

        /**
         * Get the index for a dialog in a specific stack
         * @param stack
         * @param id
         */
        const getStackIndex = (stack, id) => computed(() => stacks[stack].findIndex((d) => d.id === id));

        const wrapper: Wrapper = {
            addDialog,
            getDialog,
            destroyDialog,
            getStackCount,
            getStackVisibleCount,
            getStackIndex,
        };
        wrappers[props.name] = wrapper;

        return {
            ...wrapper,
            IDialogs: dialogs,
        };
    },
    render() {
        return h(Teleport, { to: this.$props.teleport },
            Object.values(this.IDialogs).map((d: any) => (
                h(d.component, {
                    key: d.id, visible: d.visible, ...d.props, ...d.compiledListeners,
                })
            )));
    },
});
