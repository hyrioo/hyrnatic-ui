import {
    computed,
    defineComponent, getCurrentInstance, nextTick,
    onMounted,
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
    autoPlacement,
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
export const coreFloatingPlacementProp = {
    placement: {
        type: String as PropType<Placement>,
        default: 'bottom',
    },
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
export const coreFloatingClassesProp = {
    classes: {
        type: null,
    },
};

export type CoreFloatingClickOutsideEvent = {
    outsideFloating: boolean;
    outsideReference: boolean;
}
export type CoreFloatingSlotProps = {};

export function coreFloatingSetup() {
    return setupBuilder<CoreFloatingSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-floating',
    props: {
        ...coreComponentAsProp,
        ...coreFloatingReferenceProp,
        ...coreFloatingVisibleProp,
        ...coreFloatingKeepProp,
        ...coreFloatingTransitionProp,
        ...coreFloatingPlacementProp,
        ...coreFloatingMiddlewareProp,
        ...coreFloatingClassesProp,
    },
    emits: {
        clickOutside: (event: CoreFloatingClickOutsideEvent) => true,
        computedPosition: (data: ComputePositionReturn) => true,
    },
    setup(props, ctx: SetupContext) {
        const floatingElement = ref<HTMLElement>(null);
        const cleanup = ref<() => void>(null);
        const style = reactive({
            position: 'absolute',
            left: '0',
            top: '0',
        });
        const middleware = computed(() => {
            return [
                flip(),
                shift({padding: 8}),
                ...props.middleware
            ];
        });

        const updatePosition = () => {
            console.log('updatePosition');
            computePosition(props.reference, floatingElement.value, {
                placement: props.placement,
                middleware: middleware.value
            }).then((data) => {
                console.log('computePosition', data);
                ctx.emit('computedPosition', data);
                style.left = `${data.x}px`;
                style.top = `${data.y}px`;
            });
        }

        const setupFloating = () => {
            console.log('setupFloating');
            cleanup.value = autoUpdate(props.reference, floatingElement.value, updatePosition);
        };

        watch(() => props.visible, (visible: boolean) => {
            // ctx.emit(visible ? 'show' : 'hide');
            if (visible && !cleanup.value) {
                nextTick(setupFloating);
            }
        });

        onMounted(() => {
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
            const outsideFloating = !floatingElement.value || !elementContains(floatingElement.value, e.target);
            const outsideReference = !props.reference || !elementContains(props.reference, e.target);

            if (!outsideFloating && !outsideReference) {
                return;
            }

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

        const afterHide = () => {
            if (!props.keep) {
                destroy();
            }
        };

        onUnmounted(() => {
            destroy();
        });

        return {
            floatingElement,
            style,
            afterHide,
            onDocumentClick,
        };
    },
    render() {
        // Always access this.$attrs to prevent warning
        const attrs = this.$attrs;

        const Tag = this.$props.as || 'span';

        const content = () => (
            (this.$props.keep ?
                    <Tag v-show={this.visible} ref="floatingElement" {...attrs} style={this.style}
                         v-document-event={[this.onDocumentClick, 'click']}>
                        {this.$slots.default()}
                    </Tag>
                    :
                    (this.visible ?
                            <Tag ref="floatingElement" {...attrs} style={this.style}
                                 v-document-event={[this.onDocumentClick, 'click']}>
                                {this.$slots.default()}
                            </Tag> : null
                    )
            )
        );
        return (
            <Teleport to="body">
                {this.transition ? (
                    <Transition name={this.transition} onAfterLeave={this.afterHide}>
                        {content()}
                    </Transition>
                ) : content()}
            </Teleport>
        );
    }
});