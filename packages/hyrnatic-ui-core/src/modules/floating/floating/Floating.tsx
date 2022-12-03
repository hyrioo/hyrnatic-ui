import {
    defineComponent, getCurrentInstance,
    onMounted,
    onUnmounted,
    PropType,
    reactive,
    ref,
    SetupContext,
    Teleport,
    Transition,
    watch
} from 'vue';
import {
    autoUpdate,
    computePosition,
    flip,
    limitShift,
    Middleware,
    Placement,
    shift
} from '@floating-ui/dom';
import { setupBuilder } from '../../../utils/component';

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
        default: null,
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

export type CoreFloatingSlotProps = {};

export function coreFloatingSetup() {
    return setupBuilder<CoreFloatingSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-floating',
    props: {
        ...coreFloatingReferenceProp,
        ...coreFloatingVisibleProp,
        ...coreFloatingKeepProp,
        ...coreFloatingTransitionProp,
        ...coreFloatingPlacementProp,
        ...coreFloatingMiddlewareProp,
    },
    setup(props, ctx: SetupContext) {
        const floatingElement = ref<HTMLElement>(null);
        const cleanup = ref<() => void>();
        const style = reactive({
            left: '0',
            top: '0',
        });

        const setupFloating = () => {
            cleanup.value = autoUpdate(props.reference, floatingElement.value, () => {
                computePosition(props.reference, floatingElement.value, {
                    placement: props.placement,
                    middleware: props.middleware
                }).then(({ x, y }) => {
                    style.left = `${x}px`;
                    style.top = `${y}px`;
                });
            });
        };

        watch(() => props.visible, (visible: boolean) => {
            ctx.emit(visible ? 'show' : 'hide');
            if (visible) {
                // nextTick(updatePopper);
            }
        });

        onMounted(() => {
            setupFloating();
        });

        onUnmounted(() => {
            if (cleanup.value) {
                cleanup.value();
            }
        });

        return {
            floatingElement,
            style,
        };
    },
    render() {
        const content = () => (
            (this.$props.keep ?
                    <div v-show={this.visible} class={[this.classes]} style={this.style}
                         data-popper-placement={this.popperPlacement}>
                        {this.$slots.default()}
                    </div> :
                    (this.visible ?
                            <div class={[this.classes]} style={this.style}
                                 data-popper-placement={this.popperPlacement}>
                                {this.$slots.default()}
                            </div> : null
                    )
            )
        );
        return (
            <Teleport to="body">
                <span ref="floatingElement" style={this.style} class={[this.rootClasses]}
                      v-document-event={[this.onDocumentClick, 'click']}>
                    {this.transition ? (
                        <Transition name={this.transition} onAfterLeave={this.afterHide}>
                            {content()}
                        </Transition>
                    ) : content()}
                </span>
            </Teleport>
        );
    }
});