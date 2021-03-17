import {
    defineComponent, SetupContext, inject, computed, PropType,
} from 'vue';
import componentCss from '@/utils/component-css';
import { CoreTableColumn, CoreTableSortDefinition, CoreTableProvide } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-table-column-header',
    props: {
        column: {
            type: Object,
        },
        sort: {
            type: Object as PropType<CoreTableSortDefinition>,
            default: null,
        },
    },
    setup(props, ctx: SetupContext) {
        const table = inject<CoreTableProvide>('table');
        const sortClass = computed(() => {
            if (props.sort.key === null) {
                return '-unsorted';
            }
            if (props.sort.key === props.column.property) {
                return `-sorting-${props.sort.direction}`;
            }
            return null;
        });

        const onClick = () => {
            table.setSorting(props.column.property);
        };

        const component = componentCss();

        const renderSortingIcon = () => (
            <div onClick={onClick} class={[component.css_ec('sorting-icon'), sortClass.value]}>
                <h-icon class={[component.css_ec('sort-up')]} icon="chevron-up" size="16px" />
                <h-icon class={[component.css_ec('sort-down')]} icon="chevron-down" size="16px" />
            </div>
        );

        return () => (
            <th class={[component.css_root.value, { '-sortable': props.column.sortable }]}>
                <div class={[component.css_ec('container')]}>
                    <div class={[component.css_ec('content')]}>
                        {props.column.headerTemplate ? props.column.headerTemplate({ data: props.column.data }) : props.column.data.label }
                    </div>
                    {props.column.sortable ? renderSortingIcon() : null}
                </div>
            </th>
        );
    },
});
