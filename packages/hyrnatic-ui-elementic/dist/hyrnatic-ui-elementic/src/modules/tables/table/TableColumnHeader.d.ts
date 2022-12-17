import { PropType } from 'vue';
import { CoreTableSortDefinition } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    column: {
        type: ObjectConstructor;
    };
    sort: {
        type: PropType<CoreTableSortDefinition>;
        default: any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    sort: CoreTableSortDefinition;
} & {
    column?: Record<string, any>;
}>, {
    sort: CoreTableSortDefinition;
}>;
export default _default;
