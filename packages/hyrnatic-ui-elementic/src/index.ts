import AlertsInstall from './modules/alerts/install';
import ButtonsInstall from './modules/buttons/install';
import CheckboxesInstall from './modules/checkboxes/install';
import CollapsesInstall from './modules/collapses/install';
import DatePickersInstall from './modules/date-pickers/install';
import DialogsInstall from './modules/dialogs/install';
import DrawersInstall from './modules/drawers/install';
import DropdownsInstall from './modules/dropdowns/install';
import FloatingInstall from './modules/floating/install';
import FragmentsInstall from './modules/fragments/install';
import IconsInstall from './modules/icons/install';
import InputsInstall from './modules/inputs/install';
import ListsInstall from './modules/lists/install';
import NotificationsInstall from './modules/notifications/install';
import PaginatorsInstall from './modules/paginators/install';
import PopoversInstall from './modules/popovers/install';
import ProgressBarsInstall from './modules/progress-bars/install';
import RadioButtonsInstall from './modules/radio-buttons/install';
import ScrollContainersInstall from './modules/scroll-containers/install';
import SelectsInstall from './modules/selects/install';
import SlidersInstall from './modules/sliders/install';
import SpinnersInstall from './modules/spinners/install';
import StepsInstall from './modules/steps/install';
import SwitchesInstall from './modules/switches/install';
import TabsInstall from './modules/tabs/install';
import TablesInstall from './modules/tables/install';
import TooltipsInstall from './modules/tooltips/install';
import './icons';
// import './scss/build.scss';


const modules = {
    AlertsInstall,
    ButtonsInstall,
    CheckboxesInstall,
    CollapsesInstall,
    DatePickersInstall,
    DialogsInstall,
    DrawersInstall,
    DropdownsInstall,
    FloatingInstall,
    FragmentsInstall,
    IconsInstall,
    InputsInstall,
    ListsInstall,
    NotificationsInstall,
    PaginatorsInstall,
    PopoversInstall,
    ProgressBarsInstall,
    RadioButtonsInstall,
    ScrollContainersInstall,
    SelectsInstall,
    SlidersInstall,
    SpinnersInstall,
    StepsInstall,
    SwitchesInstall,
    TabsInstall,
    TablesInstall,
    TooltipsInstall,
};

export default {
    install: (app: App, options?: object) => {
        Object.values(modules).forEach((module) => {
            module.install(app, options);
        });
    },
};

export { DialogManager, NotificationManager } from '@hyrioo/hyrnatic-ui-core';

export { coreFloatingArrowReference } from '@hyrioo/hyrnatic-ui-core';

export { createCoreStepItem } from '@hyrioo/hyrnatic-ui-core';
export type { CoreStepsNavigatorStepItem } from '@hyrioo/hyrnatic-ui-core';

export type { CoreTableSortDefinition } from '@hyrioo/hyrnatic-ui-core';

export { default as SimpleNotification } from './modules/notifications/notification/SimpleNotification.vue';

export * as IconRegistry from './utils/icon-registry';