import { useCssVar, useResizeObserver, useScrollLock, useStyleTag } from '@vueuse/core';
import {
    h,
    defineComponent,
    DefineComponent,
    computed,
    Teleport,
    ComputedRef, reactive, provide, ref, onMounted, onUnmounted, shallowReactive, watch,
} from 'vue';
import Str from '../../../utils/string';

export interface DialogObject {
    component: DefineComponent;
    listeners: object | null;
    props: object | null;
    stack: string;
    promise: { resolve: (payload: any) => void; reject: (payload: any) => void };
}

export interface InternalDialogObject extends DialogObject {
    id: string;
    visible: boolean;
    compiledListeners: ComputedRef;
    resolve: (payload: any) => void;
    reject: (payload: any) => void;
    transitionEnd: () => void;
}

export type Wrapper = {
    addDialog(dialog: DialogObject): InternalDialogObject;
    getDialog(id: string): InternalDialogObject;
    destroyDialog(id: string): void;
    getStackCount(stack: string): ComputedRef<number>;
    getStackVisibleCount(stack: string): ComputedRef<number>;
    getStackIndex(stack: string, id: string): ComputedRef<number>;
    count: ComputedRef<number>,
    visibleCount: ComputedRef<number>,
}

export const wrappers: { [key: string]: Wrapper } = shallowReactive({});

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
        lockWindowScroll: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        provide('wrapper-name', props.name);

        const scrollbarWidth = ref(0);
        provide('global-scrollbar-width', scrollbarWidth);

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
            const counts: { [key: string]: number } = {};
            Object.keys(stacks).forEach((key) => {
                counts[key] = stacks[key].length;
            });
            return counts;
        });

        /**
         * Computed count of visible (non transitioning) dialogs for each stack in the wrapper
         */
        const visibleDialogsCount = computed(() => {
            const counts: { [key: string]: number } = {};
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
        const convertListeners = (listeners: { [key: string]: any }) => {
            const l: { [key: string]: any } = {};
            Object.keys(listeners).forEach((key) => {
                l[`on${pascalize(key)}`] = listeners[key];
            });
            return l;
        };

        /**
         * Trigger hide transition
         * @param id
         */
        const hideDialog = (id: string) => {
            const dialog = dialogs[id];
            dialog.visible = false;
        };

        /**
         * Remove the dialog from the DOM
         * @param id
         */
        const removeDialog = (id: string) => {
            const dialog = dialogs[id];
            delete dialogs[id];
            stacks[dialog.stack] = stacks[dialog.stack].filter((d) => d.id !== id);
        };

        /**
         * Hide and remove dialog without trigger reject and resolve
         * @param id
         */
        const destroyDialog = (id: string) => {
            hideDialog(id);
        };

        /**
         * Add a dialog to the wrapper
         * @param dialog
         */
        const addDialog = (dialog: DialogObject) => {
            const internalDialog: InternalDialogObject = dialog as InternalDialogObject;
            internalDialog.resolve = (payload: any = null) => {
                internalDialog.promise.resolve(payload);
                hideDialog(internalDialog.id);
            };
            internalDialog.reject = (payload: any = null) => {
                internalDialog.promise.reject(payload);
                hideDialog(internalDialog.id);
            };
            internalDialog.transitionEnd = () => {
                removeDialog(internalDialog.id);
            };
            internalDialog.visible = true;
            internalDialog.id = Str.random();
            internalDialog.compiledListeners = computed(() => internalDialog.listeners ? convertListeners(internalDialog.listeners) : {});
            if (!stacks[internalDialog.stack]) {
                stacks[internalDialog.stack] = [];
            }
            stacks[internalDialog.stack].push(internalDialog);
            dialogs[internalDialog.id] = internalDialog;

            return internalDialog;
        };

        /**
         * Get the InternalDialogObject for a dialog id
         * @param id
         */
        const getDialog = (id: string): InternalDialogObject => dialogs[id];

        /**
         * Get count for all dialogs for a specific stack, even the ones that are transitioning away
         * @param stack
         */
        const getStackCount = (stack: string) => computed(() => dialogsCount.value[stack]);

        const getCount = computed(() => Object.values(dialogsCount.value).reduce((sum, item) => sum + item, 0));

        /**
         * Get count for all active dialogs for a specific stack, without the ones that are transitioning away
         * @param stack
         */
        const getStackVisibleCount = (stack: string) => computed(() => visibleDialogsCount.value[stack]);

        const getVisibleCount = computed(() => Object.values(visibleDialogsCount.value).reduce((sum, item) => sum + item, 0));

        /**
         * Get the index for a dialog in a specific stack
         * @param stack
         * @param id
         */
        const getStackIndex = (stack: string, id: string) => computed(() => stacks[stack].findIndex((d) => d.id === id));

        const wrapper: Wrapper = {
            addDialog,
            getDialog,
            destroyDialog,
            getStackCount,
            getStackVisibleCount,
            getStackIndex,
            count: getCount,
            visibleCount: getVisibleCount,
        };

        onMounted(() => {
            wrappers[props.name] = wrapper;
        });
        onUnmounted(() => {
            delete wrappers[props.name];
        });


        if(props.lockWindowScroll) {
            const scrollbarWidthVar = useCssVar('--h-global-scrollbar-width', document.body);
            useResizeObserver(document.body, (entries) => {
                const result = window.innerWidth - document.documentElement.clientWidth;
                scrollbarWidthVar.value = `${result}px`;
                scrollbarWidth.value = result;
            });

            useStyleTag('body.has-dialogs {padding-right: var(--h-global-scrollbar-width);}');
            const el = ref<HTMLElement | null>(document.body);
            const isScrollLocked = useScrollLock(el);
            watch(() => getVisibleCount.value, (count) => {
                if (count > 0) {
                    document.body.classList.add('has-dialogs');
                    isScrollLocked.value = true;
                } else {
                    document.body.classList.remove('has-dialogs');
                    isScrollLocked.value = false;
                }
            });
        }


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
