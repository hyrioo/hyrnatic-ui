import {
    computed,
    defineComponent, getCurrentInstance, nextTick,
    onUnmounted,
    PropType,
    reactive,
    ref,
    SetupContext,
    Teleport,
    Transition,
    watch,
} from 'vue';
import {
    autoUpdate,
    computePosition, ComputePositionReturn,
    flip,
    limitShift,
    Middleware,
    Placement,
    shift
} from '@floating-ui/dom';
import { coreComponentAsProp, setupBuilder } from '../../../utils/component';

export const coreFloatingReferenceProp = {
    reference: {
        type: null,
        required: true,
    },
};
export const coreFloatingVisibleProp = {
    visible: {
        type: Boolean,
        default: false,
    },
};
export const coreFloatingKeepProp = {
    keep: {
        type: Boolean,
        default: false,
    },
};
export const coreFloatingTransitionProp = {
    transition: {
        type: String,
        default: null,
    },
};
export const coreFloatingPlacementProp = (defaultValue: Placement = 'bottom') => {
    return {
        placement: {
            type: String as PropType<Placement>,
            default: defaultValue,
        },
    };
};
export const coreFloatingMiddlewareProp = {
    middleware: {
        type: Array as PropType<Middleware[]>,
        default: () => [
            flip(),
            shift({ limiter: limitShift() }),
        ],
    },
};

export type CoreFloatingClickOutsideEvent = {
    outsideFloating: boolean;
    outsideReference: boolean;
}
export type CoreFloatingSlotProps = {};

export function coreFloatingSetup() {
    return setupBuilder<CoreFloatingSlotProps>(getCurrentInstance()!);
}

export function splitPlacement(value: string) {
    const parts = value.split('-');
    return {
        placement: parts[0],
        alignment: parts.length === 2 ? parts[1] : null,
    };
}

export default defineComponent({
    name: 'hr-floating',
    props: {
        ...coreComponentAsProp,
        ...coreFloatingReferenceProp,
        ...coreFloatingVisibleProp,
        ...coreFloatingKeepProp,
        ...coreFloatingTransitionProp,
        ...coreFloatingPlacementProp(),
        ...coreFloatingMiddlewareProp,
    },
    emits: {
        clickOutside: (event: CoreFloatingClickOutsideEvent) => true,
        computedPosition: (data: ComputePositionReturn) => true,
        transitionStateChanged: (state: boolean) => true,
        show: () => true,
        hide: () => true,
    },
    setup(props, ctx) {
        const floatingElement = ref<HTMLElement | null>(null);
        const cleanup = ref<(() => void) | null>(null);
        const style = reactive({
            position: 'absolute',
            left: '0',
            top: '0',
            maxWidth: '',
            maxHeight: '',
            zIndex: 1,
        });
        const middleware = computed(() => {
            return [
                flip(),
                shift({ padding: 8 }),
                ...props.middleware
            ];
        });

        const updatePosition = () => {
            // console.log('updatePosition');
            if (floatingElement.value) {
                computePosition(props.reference, floatingElement.value, {
                    placement: props.placement,
                    middleware: middleware.value
                }).then((data) => {
                    // console.log('computePosition', data);
                    ctx.emit('computedPosition', data);
                    style.position = data.strategy;
                    style.left = `${data.x ?? 0}px`;
                    style.top = `${data.y ?? 0}px`;
                    style.zIndex = 1;
                });
            }
        };

        const setupFloating = () => {
            // console.log('setupFloating');
            if (floatingElement.value) {
                cleanup.value = autoUpdate(props.reference, floatingElement.value, updatePosition);
            }
        };

        watch(() => props.visible, (visible: boolean) => {
            if (visible) {
                ctx.emit('show');
            } else {
                ctx.emit('hide');
            }
            if (visible && !cleanup.value) {
                void nextTick(setupFloating);
            }
        });

        const elementContains = (elm: HTMLElement, otherElm: Element) => {
            if (typeof elm.contains === 'function') {
                return elm.contains(otherElm);
            }
            return false;
        };
        const onDocumentClick = (e: MouseEvent) => {
            if (!props.visible) {
                return;
            }
            const outsideFloating = !floatingElement.value || (e.target && !elementContains(floatingElement.value, e.target as Element));
            const outsideReference = !props.reference || (e.target && !elementContains(props.reference, e.target as Element));

            if (!outsideFloating && !outsideReference) {
                return;
            }

            // @ts-ignore
            ctx.emit('clickOutside', {
                outsideFloating,
                outsideReference,
            });
        };

        const destroy = () => {
            if (cleanup.value) {
                cleanup.value();
                cleanup.value = null;
            }
        };

        const onLeave = () => {
            ctx.emit('transitionStateChanged', true);
        };
        const onAfterLeave = () => {
            ctx.emit('transitionStateChanged', false);
            if (!props.keep) {
                destroy();
            }
        };

        onUnmounted(() => {
            destroy();
        });

        return {
            middleware,
            floatingElement,
            style,
            onLeave,
            onAfterLeave,
            onDocumentClick,
        };
    },
    render() {
        // Always access this.$attrs to prevent warning
        const attrs = { ...this.$attrs, style: { ...this.style } };

        const Tag = this.$props.as || 'span';

        const content = () => (
            (this.$props.keep ?
                    <Tag v-show={this.visible} ref="floatingElement" {...attrs}
                         v-document-event={[this.onDocumentClick, 'click']}>
                        {this.$slots.default ? this.$slots.default() : null}
                    </Tag>
                    :
                    (this.visible ?
                            <Tag ref="floatingElement" {...attrs}
                                 v-document-event={[this.onDocumentClick, 'click']}>
                                {this.$slots.default ? this.$slots.default() : null}
                            </Tag> : null
                    )
            )
        );
        return (
            <Teleport to="body">
                {this.transition ? (
                    <Transition name={this.transition}
                                onLeave={this.onLeave} onAfterLeave={this.onAfterLeave}>
                        {content()}
                    </Transition>
                ) : content()}
            </Teleport>
        );
    }
});