// import transitions from './transitions';
import CommonInstall from './modules/common/install';

import ButtonsInstall from './modules/buttons/install';
import CheckboxesInstall from './modules/checkboxes/install';
import CollapsesInstall from './modules/collapses/install';
import DialogsInstall from './modules/dialogs/install';
import DropdownsInstall from './modules/dropdowns/install';
import FloatingInstall from './modules/floating/install';
import FragmentsInstall from './modules/fragments/install';
import InputsInstall from './modules/inputs/install';
import NotificationsInstall from './modules/notifications/install';
import PaginatorsInstall from './modules/paginators/install';
import ProgressBarsInstall from './modules/progress-bars/install';
import RadioButtonsInstall from './modules/radio-buttons/install';
import ScrollContainersInstall from './modules/scroll-containers/install';
import SelectsInstall from './modules/selects/install';
import SlidersInstall from './modules/sliders/install';
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
    FloatingInstall,
    FragmentsInstall,
    InputsInstall,
    NotificationsInstall,
    PaginatorsInstall,
    ProgressBarsInstall,
    RadioButtonsInstall,
    ScrollContainersInstall,
    SelectsInstall,
    SlidersInstall,
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
    default as coreButton,
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
export {
    default as coreDialogWrapper,
} from './modules/dialogs/dialog/DialogWrapper';
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
 * Floating
 */
export { default as CoreFloatingInstall } from './modules/floating/install';
export {
    coreFloatingSetup,
    coreFloatingReferenceProp,
    coreFloatingVisibleProp,
    coreFloatingKeepProp,
    coreFloatingTransitionProp,
    coreFloatingPlacementProp,
    coreFloatingMiddlewareProp,
    coreFloatingClassesProp,
} from './modules/floating/floating/Floating';
export type {
    CoreFloatingSlotProps,
} from './modules/floating/floating/Floating';



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
    coreInputTypeProp,
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
 * Notifications
 */
export { default as CoreNotificationsInstall } from './modules/notifications/install';
export {
    coreNotificationSetup,
    coreNotificationVisibleProp,
} from './modules/notifications/notification/Notification';
export type {
    CoreNotificationSlotProps,
} from './modules/notifications/notification/Notification';
export {
    coreNotificationWrapperSetup,
    coreNotificationWrapperNameProp,
} from './modules/notifications/notification/NotificationWrapper';
export type {
    CoreNotificationWrapperSlotProps,
} from './modules/notifications/notification/NotificationWrapper';
export * as NotificationManager from './modules/notifications/notification/NotificationManager';


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
 * Selects
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
 * Sliders
 */
export { default as CoreSlidersInstall } from './modules/sliders/install';
export {
    coreSliderSetup,
    coreSliderModelValueProp,
    coreSliderDisabledProp,
    coreSliderMinimumProp,
    coreSliderMaximumProp,
    coreSliderStepSizeProp,
} from './modules/sliders/slider/Slider';
export type {
    CoreSliderSlotProps,
} from './modules/sliders/slider/Slider';



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
    coreTooltipHideDelayProp,
    coreTooltipShowDelayProp,
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

export { coreComponentAsProp } from './utils/component';