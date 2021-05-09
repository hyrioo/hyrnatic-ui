import {
    computed,
    ComputedRef,
    defineComponent,
    getCurrentInstance, h, reactive,
    SetupContext,
} from 'vue';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '../../../utils/component';

export const corePaginatorModelValueProp = {
    modelValue: {
        type: Number,
        required: true,
    },
};
export const corePaginatorPageSizeProp = {
    pageSize: {
        type: Number,
        required: true,
    },
};
export const corePaginatorCountProp = {
    count: {
        type: Number,
        required: true,
    },
};
export const corePaginatorDeltaProp = {
    delta: {
        type: Number,
        default: 1,
    },
};

export type CorePaginatorSlotProps = {
    currentPage: ComputedRef<number>;
    pages: ComputedRef<number>;
    buttons: ComputedRef<number[]>;
    onPaginationButtonClick: (page: number) => void;
}

export function corePaginatorSetup() {
    return setupBuilder<CorePaginatorSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-paginator',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...corePaginatorModelValueProp,
        ...corePaginatorPageSizeProp,
        ...corePaginatorCountProp,
        ...corePaginatorDeltaProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const pages = computed(() => Math.ceil(props.count / props.pageSize));
        const paginationButtons = computed<number[]>(() => {
            const c = props.modelValue;
            const p = pages.value;
            const range = [];
            const rangeWithDots = [];
            let l;
            range.push(1);
            for (let i = c - props.delta; i <= c + props.delta; i++) {
                if (i < p && i > 1) {
                    range.push(i);
                }
            }
            if (p !== 1) {
                range.push(p);
            }

            range.forEach((i) => {
                if (l) {
                    if (i - l === 2) {
                        rangeWithDots.push(l + 1);
                    } else if (i - l !== 1) {
                        rangeWithDots.push(null);
                    }
                }
                rangeWithDots.push(i);
                l = i;
            });
            return rangeWithDots;
        });

        const onPaginationButtonClick = (page) => {
            if (page !== null) {
                ctx.emit('update:modelValue', page);
            }
        };

        const slotProps = reactive<CorePaginatorSlotProps>({
            currentPage: computed(() => props.modelValue),
            pages,
            buttons: paginationButtons,
            onPaginationButtonClick,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            slotProps,
            defaultRender,
        };
    },
    render() {
        if (this.$props.as) {
            return h(this.$props.as, { ...this.$props.asProps(this.slotProps) }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
