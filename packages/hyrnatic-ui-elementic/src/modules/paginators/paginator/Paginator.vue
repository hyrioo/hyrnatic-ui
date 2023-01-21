<template>
    <hr-paginator v-slot="props" v-bind="core.props" :class="[css_root]" v-on="core.listeners">
        <div :class="[css_ec('indicator'), {'-hidden': activeButton === null}]" :style="indicatorStyle" />
        <button :class="[css_ec('button')]" :disabled="props.currentPage === 1 || props.pages === 0" @click="props.onPaginationButtonClick(props.currentPage-1)">
            <h-icon :icon="Icons.arrowLeft" size="16px" />
        </button>
        <template v-for="(page, index) of props.buttons">
            <template v-if="page === props.currentPage">
                <button :key="page !== null ? page : `dots-${index}`" :ref="com => activeButton = com" :class="[css_ec('button'), '-active']" @click="props.onPaginationButtonClick(page)">
                    {{ page !== null ? page : '...' }}
                </button>
            </template>
            <template v-else>
                <button :key="page !== null ? page : `dots-${index}`" :class="[css_ec('button')]" @click="props.onPaginationButtonClick(page)">
                    {{ page !== null ? page : '...' }}
                </button>
            </template>
        </template>

        <button :class="[css_ec('button')]" :disabled="props.currentPage === props.pages || props.pages === 0" @click="props.onPaginationButtonClick(props.currentPage+1)">
            <h-icon :icon="Icons.arrowRight" size="16px" />
        </button>
    </hr-paginator>
</template>

<script lang="ts">
import {
    defineComponent, computed, ref, watch, nextTick, onMounted, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    corePaginatorCountProp,
    corePaginatorDeltaProp,
    corePaginatorModelValueProp,
    corePaginatorPageSizeProp,
    corePaginatorSetup,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';

export default defineComponent({
    name: 'h-paginator',
    props: {
        ...corePaginatorModelValueProp,
        ...corePaginatorPageSizeProp,
        ...corePaginatorCountProp,
        ...corePaginatorDeltaProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const activeButton = ref<HTMLElement | null>(null);

        const indicatorSize = ref(0);
        const indicatorOffset = ref(0);
        const indicatorStyle = computed(() => ({
            transform: `translate(${indicatorOffset.value}px, 0)`,
            width: `${indicatorSize.value}px`,
        }));
        const updateIndicator = () => {
            if (activeButton.value) {
                indicatorOffset.value = activeButton.value.offsetLeft + 4;
                indicatorSize.value = activeButton.value.offsetWidth - 8;
            }
        };
        watch(() => props.modelValue, () => {
            nextTick(updateIndicator);
        });
        onMounted(updateIndicator);

        const core = corePaginatorSetup().as('div').props(['modelValue', 'pageSize', 'count', 'delta']).events(['update:modelValue'])
            .build();

        return {
            Icons,
            core,
            activeButton,
            indicatorStyle,

            ...componentCss(),
        };
    },
});
</script>
