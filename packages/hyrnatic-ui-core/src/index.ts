// import transitions from './transitions';
import CommonInstall from './modules/common/install';

import ButtonsInstall from './modules/buttons/install';
import CheckboxesInstall from './modules/checkboxes/install';
import CollapsesInstall from './modules/collapses/install';
import DialogsInstall from './modules/dialogs/install';
import DropdownsInstall from './modules/dropdowns/install';
import FragmentsInstall from './modules/fragments/install';
import InputsInstall from './modules/inputs/install';
import PaginatorsInstall from './modules/paginators/install';
import ProgressBarsInstall from './modules/progress-bars/install';
import RadioButtonsInstall from './modules/radio-buttons/install';
import ScrollContainersInstall from './modules/scroll-containers/install';

import SelectsInstall from './modules/selects/install';
import StepsInstall from './modules/steps/install';
import TablesInstall from './modules/tables/install';
import TabsInstall from './modules/tabs/install';
import TooltipsInstall from './modules/tooltips/install';

const modules = {
    CommonInstall,
    ButtonsInstall,
    CheckboxesInstall,
    CollapsesInstall,
    DialogsInstall,
    DropdownsInstall,
    FragmentsInstall,
    InputsInstall,
    PaginatorsInstall,
    ProgressBarsInstall,
    RadioButtonsInstall,
    ScrollContainersInstall,
    SelectsInstall,
    StepsInstall,
    TablesInstall,
    TabsInstall,
    TooltipsInstall,
};

export default {
    install: (app, options) => {
        Object.values(modules).forEach((module) => {
            module.install(app, options);
        });
    },
};


/**
 * Buttons
 */
export { default as CoreButtonsInstall } from './modules/buttons/install';
export {
    coreButtonSetup,
    coreButtonDisabledProp,
    coreButtonVisibleProp,
    coreButtonLoadingProp,
} from './modules/buttons/button/Button';
export type {
    CoreButtonSlotProps,
} from './modules/buttons/button/Button';


/**
 * Checkboxes
 */
export { default as CoreCheckboxInstall } from './modules/checkboxes/install';
export {
    coreCheckboxSetup,
    coreCheckboxModelValueProp,
    coreCheckboxValueProp,
    coreCheckboxDisabledProp,
    coreCheckboxVisibleProp,
    coreCheckboxIndeterminateProp,
} from './modules/checkboxes/checkbox/Checkbox';
export type {
    CoreCheckboxSlotProps,
} from './modules/checkboxes/checkbox/Checkbox';


/**
 * Collapses
 */
export { default as CoreCollapsesInstall } from './modules/collapses/install';
export {
    coreCollapseSetup,
    coreCollapseAccordionProp,
    coreCollapseModelValueProp,
} from './modules/collapses/collapse/Collapse';
export {
    coreCollapseItemSetup,
    coreCollapseItemIdProp,
} from './modules/collapses/collapse/CollapseItem';
export {
    coreCollapseInlineSetup,
    coreInlineCollapseModelValueProp
} from './modules/collapses/inline-collapse/InlineCollapse';
export type {
    CoreCollapseSlotProps,
} from './modules/collapses/collapse/Collapse';
export type {
    CoreCollapseItemSlotProps,
} from './modules/collapses/collapse/CollapseItem';
export type {
    CoreCollapseInlineSlotProps,
} from './modules/collapses/inline-collapse/InlineCollapse';


/**
 * Date pickers
 */
export { default as CoreDatePickersInstall } from './modules/date-pickers/install';
export {
    coreDatePickerSetup,
    coreDatePickerModelValueProp,
    coreDatePickerValueFormatProp,
    coreDatePickerDisabledProp,
    coreDatePickerVisibleProp,
    coreDatePickerMultipleProp,
    coreDatePickerClearableProp,
    coreDatePickerDisabledDateProp,
    coreDatePickerFirstDayOfWeekProp,
} from './modules/date-pickers/date-picker/DatePicker';
export type {
    CoreDatePickerSlotProps,
} from './modules/date-pickers/date-picker/DatePicker';


/**
 * Dialogs
 */
export { default as CoreDialogsInstall } from './modules/dialogs/install';
export {
    coreDialogSetup,
    coreDialogVisibleProp,
} from './modules/dialogs/dialog/Dialog';
export type {
    CoreDialogSlotProps,
} from './modules/dialogs/dialog/Dialog';
export * as DialogManager from './modules/dialogs/dialog/DialogManager';


/**
 * Dropdowns
 */
export { default as CoreDropdownsInstall } from './modules/dropdowns/install';
export {
    coreDropdownSetup,
    coreDropdownDisabledProp,
    coreDropdownHideOnClickProp,
    coreDropdownSplitButtonProp,
    coreDropdownVisibleProp,
} from './modules/dropdowns/dropdown/Dropdown';
export {
    coreDropdownItemSetup,
    coreDropdownItemDisabledProp,
} from './modules/dropdowns/dropdown/DropdownItem';
export type {
    CoreDropdownSlotProps,
} from './modules/dropdowns/dropdown/Dropdown';
export type {
    CoreDropdownItemSlotProps,
    CoreDropdownItemInstance,
    CoreDropdownProvide,
    CoreDropdownItemReturn,
} from './modules/dropdowns/dropdown/DropdownItem';


/**
 * Fragments
 */
export { default as CoreFragmentsInstall } from './modules/fragments/install';
export {
    coreFragmentContainerSetup,
    coreFragmentContainerActiveProp,
} from './modules/fragments/fragment/FragmentContainer';
export type {
    CoreFragmentContainerSlotProps,
} from './modules/fragments/fragment/FragmentContainer';


/**
 * Inputs
 */
export { default as CoreInputsInstall } from './modules/inputs/install';
export {
    coreInputSetup,
    coreInputModelValueProp,
    coreInputModelModifiersProp,
    coreInputDisabledProp,
    coreInputReadonlyProp,
} from './modules/inputs/input/Input';
export type {
    CoreInputSlotProps,
} from './modules/inputs/input/Input';
export {
    coreAutocompleteSetup,
    coreAutocompleteModelValueProp,
    coreAutocompleteModelModifiersProp,
    coreAutocompleteDisabledProp,
    coreAutocompleteItemsProp,
} from './modules/inputs/autocomplete/Autocomplete';
export type {
    CoreAutocompleteSlotProps,
    CoreAutocompleteReturn,
} from './modules/inputs/autocomplete/Autocomplete';


/**
 * Paginators
 */
export { default as CorePaginatorsInstall } from './modules/paginators/install';
export {
    corePaginatorSetup,
    corePaginatorModelValueProp,
    corePaginatorPageSizeProp,
    corePaginatorCountProp,
    corePaginatorDeltaProp,
} from './modules/paginators/paginator/Paginator';
export type {
    CorePaginatorSlotProps,
} from './modules/paginators/paginator/Paginator';


/**
 * Popper
 */
export { default as CorePoppersInstall } from './modules/poppers/install';
export {
    corePopperSetup,
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
} from './modules/poppers/popper/Popper';
export type {
    CorePopperSlotProps,
    CorePopperComponent,
} from './modules/poppers/popper/Popper';
export { default as corePopperAfterUpdateModifier } from './modules/poppers/modifiers/after-update';
export { default as corePopperApplyMaxSizeModifier } from './modules/poppers/modifiers/apply-max-size';
export { default as corePopperArrowPositionModifier } from './modules/poppers/modifiers/arrow-position';
export { default as corePopperBroadcastSizeModifier } from './modules/poppers/modifiers/broadcast-size';
export { default as corePopperMatchReferenceSizeModifier } from './modules/poppers/modifiers/match-reference-size';
export { default as corePopperMinimumReferenceSizeModifier } from './modules/poppers/modifiers/minimum-reference-size';


/**
 * Progress bars
 */
export { default as CoreProgressBarsInstall } from './modules/progress-bars/install';
export {
    coreProgressBarSetup,
    coreProgressBarValueProp,
    coreProgressBarMinimumProp,
    coreProgressBarMaximumProp,
} from './modules/progress-bars/progress-bar/ProgressBar';
export type {
    CoreProgressBarSlotProps,
} from './modules/progress-bars/progress-bar/ProgressBar';


/**
 * Radio buttons
 */
export { default as CoreRadioButtonsInstall } from './modules/radio-buttons/install';
export {
    coreRadioButtonSetup,
    coreRadioButtonDisabledProp,
    coreRadioButtonModelValueProp,
    coreRadioButtonValueProp,
} from './modules/radio-buttons/radio-button/RadioButton';
export type {
    CoreRadioButtonSlotProps,
} from './modules/radio-buttons/radio-button/RadioButton';


/**
 * Scroll containers
 */
export { default as CoreScrollContainersInstall } from './modules/scroll-containers/install';
export {
    coreScrollContainerSetup,
    coreScrollContainerHorizontalProp,
    coreScrollContainerVerticalProp,
    coreScrollContainerAutoHideProp,
    coreScrollContainerAutoHideDelayProp,
    coreScrollContainerMinimumSizeProp,
    coreScrollContainerClassesProp,
} from './modules/scroll-containers/scroll-container/ScrollContainer';
export type {
    CoreScrollContainerSlotProps,
} from './modules/scroll-containers/scroll-container/ScrollContainer';


/**
 * Select
 */
export { default as CoreSelectsInstall } from './modules/selects/install';
export {
    coreSelectSetup,
    coreSelectModelValueProp,
    coreSelectDisabledProp,
    coreSelectMultipleProp,
    coreSelectAllowClearProp,
    coreSelectHideOnSelectProp,
    coreSelectCompareProp,
} from './modules/selects/select/Select';
export {
    coreSelectItemSetup,
    coreSelectItemValueProp,
    coreSelectItemDisabledProp,
} from './modules/selects/select/SelectItem';
export type {
    CoreSelectSlotProps,
} from './modules/selects/select/Select';
export type {
    CoreSelectItemSlotProps,
    CoreSelectProvide,
    CoreSelectItemReturn,
    CoreSelectItemInstance,
} from './modules/selects/select/SelectItem';


/**
 * Steps
 */
export { default as CoreStepsInstall } from './modules/steps/install';
export {
    createCoreStepItem,
    coreStepsNavigatorSetup,
    coreStepsNavigatorModelValueProp,
    coreStepsNavigatorStepsProp,
} from './modules/steps/step/StepsNavigator';
export type {
    CoreStepsNavigatorSlotProps,
    CoreStepsNavigatorReturn,
    CoreStepsNavigatorStepItem,
    CoreStepsNavigatorDetailedStepItem,
} from './modules/steps/step/StepsNavigator';


/**
 * Tables
 */
export { default as CoreTablesInstall } from './modules/tables/install';
export {
    coreTableSetup,
    coreTableDataProp,
    coreTableRowKeyProp,
    coreTableSelectableProp,
    coreTableSelectedRowsProp,
    coreTableSortProp,
} from './modules/tables/table/Table';
export {
    coreTableColumnSetup,
    coreTableColumnPropertyProp,
    coreTableColumnFormatterProp,
    coreTableColumnSortableProp,
    coreTableColumnDataProp,
    coreTableColumnOrderProp,
    coreTableColumnComponentProp,
} from './modules/tables/table/TableColumn';
export {
    coreTableRowSetup,
    coreTableRowColumnsProp,
    coreTableRowRowProp,
} from './modules/tables/table/TableRow';
export type {
    CoreTableSlotProps,
} from './modules/tables/table/Table';
export type {
    CoreTableRowSlotProps,
} from './modules/tables/table/TableRow';
export { default as CoreTableColumn } from './modules/tables/table/Column';
export { default as CoreTableRow } from './modules/tables/table/Row';
export type { TableProvide as CoreTableProvide, SortDefinition as CoreTableSortDefinition } from './modules/tables/table/TableTypes';


/**
 * Tabs
 */
export { default as CoreTabsInstall } from './modules/tabs/install';
export {
    coreTabItemSetup,
    coreTabItemIdProp,
    coreTabItemIdDisabledProp,
} from './modules/tabs/tab/TabItem';
export {
    coreTabsNavigatorSetup,
    coreTabsNavigatorModelValueProp,
} from './modules/tabs/tab/TabsNavigator';
export type {
    CoreTabItemSlotProps,
    CoreTabItemInstance,
    CoreTabsNavigatorProvide,
    CoreTabsNavigatorReturn,
} from './modules/tabs/tab/TabItem';
export type {
    CoreTabsNavigatorSlotProps,
} from './modules/tabs/tab/TabsNavigator';


/**
 * Tooltips
 */
export { default as CoreTooltipsInstall } from './modules/tooltips/install';
export {
    coreTooltipSetup,
    coreTooltipModelValueProp,
    coreTooltipTriggerProp,
} from './modules/tooltips/tooltip/Tooltip';
export type {
    CoreTooltipSlotProps,
} from './modules/tooltips/tooltip/Tooltip';


/**
 * Utils
 */
export { default as ArrayHelper } from './utils/array';
export { default as ObjectHelper } from './utils/object';
export { default as StringHelper } from './utils/string';
export { default as ModuleHelper } from './utils/package';