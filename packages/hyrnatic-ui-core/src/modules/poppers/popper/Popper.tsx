import {
    computed,
    defineComponent,
    getCurrentInstance,
    onUnmounted,
    PropType,
    ref,
    SetupContext,
    Teleport,
    Transition,
    watch,
    CSSProperties, onMounted, nextTick,
} from 'vue';
import { Instance as PopperInstance, Modifier } from '@popperjs/core/lib/types';
import { createPopper, OptionsGeneric } from '@popperjs/core';
import broadcastSizeModifier from '../modifiers/broadcast-size';
import afterUpdate from '../modifiers/after-update';
import maxSize from 'popper-max-size-modifier';
import { setupBuilder } from '../../../utils/component';
import { applyMaxSize } from '../modifiers/apply-max-size';

export const corePopperReferenceProp = {
    reference: {
        type: null,
        required: true,
    },
};
export const corePopperVisibleProp = {
    visible: {
        type: Boolean,
        default: false,
    },
};
export const corePopperMinimumWidthProp = {
    minimumWidth: {
        type: String,
        default: null,
    },
};
export const corePopperFixedWidthProp = {
    fixedWidth: {
        type: String,
        default: null,
    },
};
export const corePopperKeepProp = {
    keep: {
        type: Boolean,
        default: false,
    },
};
export const corePopperOptionsProp = {
    options: {
        type: Object as PropType<OptionsGeneric<any>>,
        default: () => {},
    },
};
export const corePopperModifiersProp = {
    modifiers: {
        type: Array as PropType<Modifier<any, any>[]>,
        default: () => [],
    },
};
export const corePopperTransitionProp = {
    transition: {
        type: String,
        default: null,
    },
};
export const corePopperClassesProp = {
    classes: {
        type: null,
    },
};
export const corePopperRootClassesProp = {
    rootClasses: {
        type: null,
    },
};

export const defaultPopperOptions = {
    placement: 'bottom',
    strategy: 'absolute',
};

export type CorePopperComponent = {
    updatePopper(): void;
    $el: HTMLElement;
};

export type CorePopperSlotProps = {}

export function corePopperSetup() {
    return setupBuilder<CorePopperSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-popper',
    props: {
        ...corePopperReferenceProp,
        ...corePopperVisibleProp,
        ...corePopperMinimumWidthProp,
        ...corePopperFixedWidthProp,
        ...corePopperKeepProp,
        ...corePopperOptionsProp,
        ...corePopperModifiersProp,
        ...corePopperClassesProp,
        ...corePopperRootClassesProp,
        ...corePopperTransitionProp,
    },
    emits: ['show', 'hide', 'created', 'afterUpdate', 'clickOutside', 'popperSizeChanged', 'update:visible'],
    setup(props, ctx: SetupContext) {
        const popperElement = ref<HTMLElement>(null);
        const innerElement = ref<HTMLElement>(null);
        const popperInstance = ref<PopperInstance>();
        const popperPlacement = ref(null);//computed(() => (popperInstance.value ? popperInstance.value.state.placement : null));
        const defaultPopperModifiers = [
            ...broadcastSizeModifier,
            ...afterUpdate,
            maxSize,
            applyMaxSize,
            {
                name: 'broadcastSize',
                options: {
                    callback: (popperSize) => ctx.emit('popperSizeChanged', popperSize),
                },
            },
            {
                name: 'afterUpdate',
                options: {
                    callback: () => {
                        popperPlacement.value = popperInstance.value ? popperInstance.value.state.placement : null;
                        ctx.emit('afterUpdate');
                    },
                },
            },
        ];
        const popperOptions = computed<OptionsGeneric<any>>(() => ({
            ...defaultPopperOptions,
            ...props.options,
            modifiers: defaultPopperModifiers.concat(props.modifiers),
        }));
        const style = computed<CSSProperties>(() => {
            const s: { width: string; minWidth: string; display?: string; visibility?: string } = {
                width: props.fixedWidth,
                minWidth: props.minimumWidth,
            };
            return s as CSSProperties;
        });
        watch(() => popperOptions, (options: any) => {
            popperInstance.value.setOptions(options);
        });

        const createPopperInstance = () => {
            // console.log('createPopperInstance');
            if (!props.reference) {
                console.warn('The reference must be a valid element to create a popper instance');
                return;
            }
            popperOptions.value.onFirstUpdate = () => ctx.emit('created');
            popperInstance.value = createPopper(props.reference, popperElement.value, popperOptions.value);
            // console.log(popperInstance.value);
        };
        let updateState = false;
        let queuedUpdate = false;
        const updatePopper = () => {
            if (!innerElement.value) {
                return;
            }
            // console.log('updatePopper');
            if (updateState) {
                queuedUpdate = true;
                return;
            }
            queuedUpdate = false;
            if (props.visible) {
                if (popperInstance.value) {
                    updateState = true;
                    popperInstance.value.update().finally(() => {
                        updateState = false;
                        if (queuedUpdate) {
                            updatePopper();
                        }
                    });
                } else {
                    createPopperInstance();
                }
            } else {
                if (!popperInstance.value) {
                    createPopperInstance();
                }
                // Temporarily show with visibility set to hidden to let DOM calculate new size
                updateState = true;
                const temp = popperElement.value.style.display;
                const innerTemp = innerElement.value.style.display;
                innerElement.value.style.display = popperElement.value.style.display = 'block';
                popperElement.value.style.visibility = 'hidden';
                popperInstance.value.update().finally(() => {
                    popperElement.value.style.display = temp;
                    innerElement.value.style.display = innerTemp;
                    popperElement.value.style.visibility = null;
                    updateState = false;
                    if (queuedUpdate) {
                        updatePopper();
                    }
                });
            }
        };
        watch(() => props.visible, (visible: boolean) => {
            // console.log('watch props.visible');
            ctx.emit(visible ? 'show' : 'hide');
            if (visible) {
                nextTick(updatePopper);
            }
        });

        const elementContains = (elm, otherElm) => {
            if (typeof elm.contains === 'function') {
                return elm.contains(otherElm);
            }
            return false;
        };
        const onDocumentClick = (e) => {
            if (!props.visible) {
                return;
            }
            const outsidePopper = !popperElement.value || !elementContains(popperElement.value, e.target);
            const outsideReference = !props.reference || !elementContains(props.reference, e.target);

            if (!outsidePopper && !outsideReference) {
                return;
            }

            ctx.emit('clickOutside', {
                outsidePopper,
                outsideReference,
            });
        };

        const destroy = () => {
            if (popperInstance.value) {
                popperInstance.value.destroy();
                popperInstance.value = null;
            }
        };
        const afterHide = () => {
            if (!props.keep) {
                destroy();
            }
        };

        onUnmounted(destroy);

        return {
            popperElement,
            innerElement,
            popperPlacement,
            style,
            updatePopper,
            onDocumentClick,
            destroy,
            afterHide,
        };
    },
    render() {
        const content = () => (
            (this.$props.keep ?
                <div v-show={this.visible} ref="innerElement" class={[this.classes]} style={this.style} data-popper-placement={this.popperPlacement}>
                    {this.$slots.default()}
                </div> :
                (this.visible ?
                    <div ref="innerElement" class={[this.classes]} style={this.style} data-popper-placement={this.popperPlacement}>
                        {this.$slots.default()}
                    </div> : null
                )
            )
        );
        return (
            <Teleport to="body">
                <span ref="popperElement" class={[this.rootClasses]} v-document-event={[this.onDocumentClick, 'click']}>
                    {this.transition ? (
                        <Transition name={this.transition} onAfterLeave={this.afterHide}>
                            {content()}
                        </Transition>
                    ) : content() }
                </span>
            </Teleport>
        );
    },
});
