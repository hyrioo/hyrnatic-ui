import {
    defineComponent,
    reactive,
    ref,
    computed,
    watch,
    nextTick,
    onMounted,
    onBeforeUnmount,
    ComputedRef,
    getCurrentInstance,
} from 'vue';
import { coreComponentAsPropsProp, setupBuilder } from '../../../utils/component';
import './scroll-container.scss';

export const coreScrollContainerHorizontalProp = {
    horizontal: {
        type: Boolean,
        default: true,
    },
};
export const coreScrollContainerVerticalProp = {
    vertical: {
        type: Boolean,
        default: true,
    },
};
export const coreScrollContainerAutoHideProp = {
    autoHide: {
        type: Boolean,
        default: true,
    },
};
export const coreScrollContainerAutoHideDelayProp = {
    autoHideDelay: {
        type: Number,
        default: 1500,
    },
};
export const coreScrollContainerMinimumSizeProp = {
    minimumSize: {
        type: Number,
        default: 20,
    },
};
export const coreScrollContainerClassesProp = {
    classes: {
        type: null,
        default: null,
    },
};

export type CoreScrollContainerSlotProps = {
    anyHover: ComputedRef<boolean>;
    anyDragging: ComputedRef<boolean>;
    hidden: ComputedRef<boolean>;
}

export function coreScrollContainerSetup() {
    return setupBuilder<CoreScrollContainerSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-scroll-container',
    props: {
        as: {
            type: String,
            required: true,
        },
        ...coreComponentAsPropsProp,
        ...coreScrollContainerHorizontalProp,
        ...coreScrollContainerVerticalProp,
        ...coreScrollContainerAutoHideProp,
        ...coreScrollContainerAutoHideDelayProp,
        ...coreScrollContainerMinimumSizeProp,
        ...coreScrollContainerClassesProp,
    },
    setup(props) {
        const wrapper = ref<HTMLElement>();
        const verticalTrack = ref<HTMLElement>();
        const verticalThumb = ref<HTMLElement>();
        const horizontalTrack = ref<HTMLElement>();
        const horizontalThumb = ref<HTMLElement>();

        const dragging = reactive<{start: {top: number; left: number} | null; startOffset: {top: number; left: number} | null}>({
            start: null,
            startOffset: null,
        });

        const verticalBar = reactive({
            offset: 0,
            size: 20,
            trackHover: false,
            thumbHover: false,
            visible: false,
            dragging: false,
        });
        const horizontalBar = reactive({
            offset: 0,
            size: 20,
            trackHover: false,
            thumbHover: false,
            visible: false,
            dragging: false,
        });

        const anyHover = computed(() => horizontalBar.trackHover || verticalBar.trackHover);
        const anyDragging = computed(() => horizontalBar.dragging || verticalBar.dragging);

        const hide = ref(props.autoHide);
        let autoHideTimer = null;
        const startAutoHideTimer = () => {
            if (!props.autoHide || anyDragging.value || anyHover.value) {
                return;
            }

            hide.value = false;
            if (autoHideTimer) {
                clearTimeout(autoHideTimer);
            }

            autoHideTimer = setTimeout(() => {
                hide.value = true;
            }, props.autoHideDelay);
        };

        const clearAutoHideTimerWatch = (newValue) => {
            if (newValue) {
                clearTimeout(autoHideTimer);
                hide.value = false;
            } else {
                startAutoHideTimer();
            }
        };
        watch(anyDragging, clearAutoHideTimerWatch);
        watch(anyHover, clearAutoHideTimerWatch);

        const isWithinBB = (elm, e) => {
            const inpRect = elm.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            const l = inpRect.left;
            const w = l + inpRect.width;
            const t = inpRect.top;
            const h = t + inpRect.height;

            return x >= l && x <= w && y >= t && y <= h;
        };

        const onMouseMove = (e) => {
            verticalBar.trackHover = verticalTrack.value && verticalBar.visible && isWithinBB(verticalTrack.value, e);
            verticalBar.thumbHover = verticalBar.trackHover && isWithinBB(verticalThumb.value, e);
            horizontalBar.trackHover = horizontalTrack.value && horizontalBar.visible && isWithinBB(horizontalTrack.value, e);
            horizontalBar.thumbHover = horizontalBar.trackHover && isWithinBB(horizontalThumb.value, e);
        };
        const onMouseDragging = (e) => {
            if (verticalBar.dragging && dragging.startOffset) {
                const wrapperBB = wrapper.value.getBoundingClientRect();
                const trackBB = verticalTrack.value.getBoundingClientRect();
                const relative = e.clientY - wrapperBB.top - dragging.startOffset.top + (wrapperBB.top - trackBB.top);
                const scrollPercentage = Math.min(100, Math.max(0, (100 / (verticalTrack.value.offsetHeight)) * relative));

                wrapper.value.scrollTop = wrapper.value.scrollHeight * (scrollPercentage / 100);
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (horizontalBar.dragging && dragging.startOffset) {
                const wrapperBB = wrapper.value.getBoundingClientRect();
                const trackBB = horizontalTrack.value.getBoundingClientRect();
                const relative = e.clientX - wrapperBB.left - dragging.startOffset.left + (wrapperBB.left - trackBB.left);
                const scrollPercentage = Math.min(100, Math.max(0, (100 / (horizontalTrack.value.offsetWidth)) * relative));

                wrapper.value.scrollLeft = wrapper.value.scrollWidth * (scrollPercentage / 100);
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        };
        const onMouseDown = (e) => {
            verticalBar.dragging = verticalTrack.value && isWithinBB(verticalTrack.value, e);
            horizontalBar.dragging = horizontalTrack.value && isWithinBB(horizontalTrack.value, e);

            if ((verticalBar.dragging || horizontalBar.dragging) && dragging.start === null) {
                const wrapperBB = wrapper.value.getBoundingClientRect();
                dragging.start = { top: e.clientY - wrapperBB.top, left: e.clientX - wrapperBB.left };

                const thumbBB = verticalBar.dragging ? verticalThumb.value.getBoundingClientRect() : horizontalThumb.value.getBoundingClientRect();
                dragging.startOffset = {
                    top: wrapperBB.top - thumbBB.top + dragging.start.top,
                    left: wrapperBB.left - thumbBB.left + dragging.start.left,
                };

                e.preventDefault();
                e.stopImmediatePropagation();
            }
        };
        const onMouseUp = () => {
            verticalBar.dragging = horizontalBar.dragging = false;
            dragging.startOffset = dragging.start = null;
        };

        const lastScrollHeight = ref(0);
        const lastScrollWidth = ref(0);
        const updateThumbs = () => {
            verticalBar.visible = wrapper.value.scrollHeight > wrapper.value.offsetHeight;
            if (verticalBar.visible && verticalTrack.value && verticalThumb.value) {
                if (wrapper.value.scrollHeight !== lastScrollHeight.value) {
                    startAutoHideTimer();
                    lastScrollHeight.value = wrapper.value.scrollHeight;
                }
                if (verticalTrack.value.offsetHeight === 0) {
                    nextTick(updateThumbs);
                } else {
                    const vertical_size_percentage = (100 / wrapper.value.scrollHeight) * wrapper.value.offsetHeight;
                    verticalBar.size = Math.max(props.minimumSize, verticalTrack.value.offsetHeight * (vertical_size_percentage / 100));
                    const vertical_offset_percentage = (100 / (wrapper.value.scrollHeight - wrapper.value.offsetHeight)) * wrapper.value.scrollTop;
                    verticalBar.offset = (verticalTrack.value.offsetHeight - verticalBar.size) * (vertical_offset_percentage / 100);
                }
            }

            horizontalBar.visible = wrapper.value.scrollWidth > wrapper.value.offsetWidth;
            if (horizontalBar.visible && horizontalTrack.value && horizontalThumb.value) {
                if (wrapper.value.scrollWidth !== lastScrollWidth.value) {
                    startAutoHideTimer();
                    lastScrollWidth.value = wrapper.value.scrollWidth;
                }
                if (horizontalTrack.value.offsetWidth === 0) {
                    nextTick(updateThumbs);
                } else {
                    const horizontal_size_percentage = (100 / wrapper.value.scrollWidth) * wrapper.value.offsetWidth;
                    horizontalBar.size = Math.max(props.minimumSize, horizontalTrack.value.offsetWidth * (horizontal_size_percentage / 100));
                    const horizontal_offset_percentage = (100 / (wrapper.value.scrollWidth - wrapper.value.offsetWidth)) * wrapper.value.scrollLeft;
                    horizontalBar.offset = (horizontalTrack.value.offsetWidth - horizontalBar.size) * (horizontal_offset_percentage / 100);
                }
            }
        };

        const onScroll = () => {
            startAutoHideTimer();
            updateThumbs();
        };

        onMounted(() => {
            updateThumbs();
            document.addEventListener('mousemove', onMouseDragging);
            document.addEventListener('mouseup', onMouseUp);
            wrapper.value.addEventListener('scroll', onScroll, { passive: true });
        });
        onBeforeUnmount(() => {
            document.removeEventListener('mousemove', onMouseDragging);
            document.removeEventListener('mouseup', onMouseUp);
            wrapper.value.removeEventListener('scroll', onScroll);
        });

        const registerBar = (type: 'vertical' | 'horizontal', track: HTMLElement, thumb: HTMLElement) => {
            if (type === 'vertical') {
                verticalTrack.value = track;
                verticalThumb.value = thumb;
            } else {
                horizontalTrack.value = track;
                horizontalThumb.value = thumb;
            }
        };
        const slotProps = reactive<CoreScrollContainerSlotProps>({
            anyHover: computed<boolean>(() => anyHover.value),
            anyDragging: computed<boolean>(() => anyDragging.value),
            hidden: computed<boolean>(() => hide.value),
        });

        return {
            wrapper,

            verticalBar,
            horizontalBar,
            anyHover,
            anyDragging,

            onMouseMove,
            onMouseDown,
            startAutoHideTimer,
            updateThumbs,

            slotProps,
            registerBar,
        };
    },
    render() {
        // @ts-nocheck
        const tagName = this.as;
        return (
            <tagName {...this.$props.asProps(this.slotProps)} class={['hr-scroll-container', { '-disable-selection': this.anyHover || this.anyDragging }]} onMouseenter={this.startAutoHideTimer}>
                <div ref="wrapper" v-resize={this.updateThumbs} class={['hr-scroll-container__wrapper']} onMousemove={this.onMouseMove} onMouseleave={this.onMouseMove} onMousedown={this.onMouseDown}>
                    <div v-resize={this.updateThumbs} class={['hr-scroll-container__container', this.classes]}>
                        { this.$slots.default() }
                    </div>
                </div>
                { !this.$slots.verticalBar ? null : this.$slots.verticalBar(this.verticalBar)}
                { !this.$slots.horizontalBar ? null : this.$slots.horizontalBar(this.horizontalBar)}
            </tagName>
        );
    },
});
