import {
    computed, ComputedRef,
    defineComponent,
    getCurrentInstance,
    PropType,
    reactive,
    Ref,
    ref,
    SetupContext,
    watch,
} from 'vue';
import { setupBuilder } from '../../../utils/component';

export const coreTooltipModelValueProp = {
    modelValue: {
        type: Boolean,
        default: false,
    },
};
export const coreTooltipTriggerProp = {
    trigger: {
        type: String as PropType<'hover'>,
        default: 'hover',
    },
};
export const coreTooltipShowDelayProp = {
    showDelay: {
        type: Number,
        default: 200,
    },
};
export const coreTooltipHideDelayProp = {
    hideDelay: {
        type: Number,
        default: 0,
    },
};

export type CoreTooltipSlotProps = {
    visible: ComputedRef<boolean>;
}

export function coreTooltipSetup(reference: Ref<HTMLInputElement>) {
    return setupBuilder<CoreTooltipSlotProps>(getCurrentInstance()).setProp('reference', reference);
}

export default defineComponent({
    name: 'hr-tooltip',
    props: {
        ...coreTooltipModelValueProp,
        ...coreTooltipTriggerProp,
        ...coreTooltipShowDelayProp,
        ...coreTooltipHideDelayProp,
        reference: {
            type: null as PropType<HTMLElement>,
            required: true,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const visible = ref(props.modelValue);

        watch(() => props.modelValue, (newValue) => {
            visible.value = newValue;
        });

        const setVisible = (value) => {
            visible.value = value;
            ctx.emit('update:modelValue', value);
        };

        let showTimeout = null;
        let hideTimeout = null;
        const showTooltip = () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
            showTimeout = setTimeout(() => {
                setVisible(true);
            }, props.showDelay);
        };
        const hideTooltip = () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                setVisible(false);
            }, props.hideDelay);
        };
        const setupListeners = (reference, show, hide) => {
            reference.addEventListener(show, showTooltip);
            reference.addEventListener(hide, hideTooltip);
        };
        const removeListeners = (reference, show, hide) => {
            reference.removeEventListener(show, showTooltip);
            reference.removeEventListener(hide, hideTooltip);
            setVisible(false);
            clearTimeout(hideTimeout);
            clearTimeout(showTimeout);
        };
        const getEvents = (trigger) => {
            if (trigger === 'hover') {
                return { show: 'mouseenter', hide: 'mouseleave' };
            }
        };
        watch(() => props.reference, (newRef, oldRef) => {
            const events = getEvents(props.trigger);
            if (oldRef) {
                removeListeners(oldRef, events.show, events.hide);
            }
            if (newRef) {
                setupListeners(newRef, events.show, events.hide);
            }
        });
        watch(() => props.trigger, (newTrigger, oldTrigger) => {
            if (oldTrigger) {
                const events = getEvents(oldTrigger);
                removeListeners(props.reference, events.show, events.hide);
            }
            if (newTrigger) {
                const events = getEvents(newTrigger);
                setupListeners(props.reference, events.show, events.hide);
            }
        });

        const slotProps = reactive<CoreTooltipSlotProps>({
            visible: computed(() => visible.value),
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            slotProps,
            defaultRender,
        };
    },
    render() {
        return this.defaultRender();
    },
});
