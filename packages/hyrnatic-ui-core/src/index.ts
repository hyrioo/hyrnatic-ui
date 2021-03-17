import Main from './main';

export default Main;


export { default as CoreButtonsInstall } from '@/modules/buttons/install';
export {
    coreButtonSetup,
    CoreButtonSlotProps,
    coreButtonDisabledProp,
    coreButtonVisibleProp,
    coreButtonLoadingProp,
} from '@/modules/buttons/button/Button';


export { default as CoreCheckboxInstall } from '@/modules/checkboxes/install';
export {
    coreCheckboxSetup,
    CoreCheckboxSlotProps,
    coreCheckboxModelValueProp,
    coreCheckboxValueProp,
    coreCheckboxDisabledProp,
    coreCheckboxVisibleProp,
    coreCheckboxIndeterminateProp,
} from '@/modules/checkboxes/checkbox/Checkbox';


export { default as CoreCollapsesInstall } from '@/modules/collapses/install';
export {
    coreCollapseSetup,
    CoreCollapseSlotProps,
    coreCollapseAccordionProp,
    coreCollapseModelValueProp,
} from '@/modules/collapses/collapse/Collapse';
export {
    coreCollapseItemSetup,
    CoreCollapseItemSlotProps,
    coreCollapseItemIdProp,
} from '@/modules/collapses/collapse/CollapseItem';
export {
    coreCollapseInlineSetup,
    CoreCollapseInlineSlotProps,
    coreInlineCollapseModelValueProp
} from '@/modules/collapses/inline-collapse/InlineCollapse';


export { default as CoreDialogsInstall } from '@/modules/dialogs/install';
export {
    coreDialogSetup,
    CoreDialogSlotProps,
    coreDialogVisibleProp,
} from '@/modules/dialogs/dialog/Dialog';
export * as DialogManager from '@/modules/dialogs/dialog/DialogManager';


export { default as CoreInputsInstall } from '@/modules/inputs/install';
export {
    coreInputSetup,
    CoreInputSlotProps,
    coreInputModelValueProp,
    coreInputModelModifiersProp,
    coreInputDisabledProp,
    coreInputReadonlyProp,
} from '@/modules/inputs/input/Input';


export { default as CorePoppersInstall } from '@/modules/poppers/install';
export {
    corePopperSetup,
    CorePopperSlotProps,
    CorePopperComponent,
    corePopperReferenceProp,
    corePopperVisibleProp,
    corePopperMinimumWidthProp,
    corePopperFixedWidthProp,
    corePopperKeepProp,
    corePopperOptionsProp,
    corePopperModifiersProp,
    corePopperTransitionProp,
    corePopperClassesProp,
    corePopperRootClassesProp,
    defaultPopperOptions,
} from '@/modules/poppers/popper/Popper';
export { default as corePopperAfterUpdateModifier } from '@/modules/poppers/modifiers/after-update';
export { default as corePopperApplyMaxSizeModifier } from '@/modules/poppers/modifiers/apply-max-size';
export { default as corePopperArrowPositionModifier } from '@/modules/poppers/modifiers/arrow-position';
export { default as corePopperBroadcastSizeModifier } from '@/modules/poppers/modifiers/broadcast-size';
export { default as corePopperMatchReferenceSizeModifier } from '@/modules/poppers/modifiers/match-reference-size';
export { default as corePopperMinimumReferenceSizeModifier } from '@/modules/poppers/modifiers/minimum-reference-size';


export { default as CoreScrollContainersInstall } from '@/modules/scroll-containers/install';
export {
    coreScrollContainerSetup,
    CoreScrollContainerSlotProps,
    coreScrollContainerHorizontalProp,
    coreScrollContainerVerticalProp,
    coreScrollContainerAutoHideProp,
    coreScrollContainerAutoHideDelayProp,
    coreScrollContainerMinimumSizeProp,
    coreScrollContainerClassesProp,
} from '@/modules/scroll-containers/scroll-container/ScrollContainer';


export { default as CoreSelectsInstall } from '@/modules/selects/install';
export {
    coreSelectSetup,
    CoreSelectSlotProps,
    coreSelectModelValueProp,
    coreSelectDisabledProp,
    coreSelectMultipleProp,
    coreSelectAllowClearProp,
    coreSelectHideOnSelectProp,
} from '@/modules/selects/select/Select';
export {
    coreSelectItemSetup,
    CoreSelectItemSlotProps,
    coreSelectItemValueProp,
    coreSelectItemDisabledProp,
} from '@/modules/selects/select/SelectItem';


export { default as CoreTablesInstall } from '@/modules/tables/install';
export {
    coreTableSetup,
    CoreTableSlotProps,
    coreTableDataProp,
    coreTableRowKeyProp,
    coreTableSelectableProp,
    coreTableSelectedRowsProp,
    coreTableSortProp,
} from '@/modules/tables/table/Table';
export {
    coreTableColumnSetup,
    coreTableColumnPropertyProp,
    coreTableColumnFormatterProp,
    coreTableColumnSortableProp,
    coreTableColumnDataProp,
    coreTableColumnOrderProp,
    coreTableColumnComponentProp,
} from '@/modules/tables/table/TableColumn';
export {
    coreTableRowSetup,
    CoreTableRowSlotProps,
    coreTableRowColumnsProp,
    coreTableRowRowProp,
} from '@/modules/tables/table/TableRow';
export { default as CoreTableColumn } from '@/modules/tables/table/Column';
export { default as CoreTableRow } from '@/modules/tables/table/Row';
export { TableProvide as CoreTableProvide, SortDefinition as CoreTableSortDefinition } from '@/modules/tables/table/TableTypes';


export { default as ModuleHelper } from '@/utils/package';
