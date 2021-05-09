import AlertsInstall from './modules/alerts/install';
import ButtonsInstall from './modules/buttons/install';
import CheckboxesInstall from './modules/checkboxes/install';
import CollapsesInstall from './modules/collapses/install';
import DialogsInstall from './modules/dialogs/install';
import DrawersInstall from './modules/drawers/install';
import DropdownsInstall from './modules/dropdowns/install';
import FragmentsInstall from './modules/fragments/install';
import IconsInstall from './modules/icons/install';
import InputsInstall from './modules/inputs/install';
import ListsInstall from './modules/lists/install';
import PaginatorsInstall from './modules/paginators/install';
import PoppersInstall from './modules/poppers/install';
import ProgressBarsInstall from './modules/progress-bars/install';
import RadioButtonsInstall from './modules/radio-buttons/install';
import ScrollContainersInstall from './modules/scroll-containers/install';
import SelectsInstall from './modules/selects/install';
import StepsInstall from './modules/steps/install';
import SwitchesInstall from './modules/switches/install';
import TabsInstall from './modules/tabs/install';
import TablesInstall from './modules/tables/install';
import TooltipsInstall from './modules/tooltips/install';
import './icons';
import './scss/build.scss';


const modules = {
    AlertsInstall,
    ButtonsInstall,
    CheckboxesInstall,
    CollapsesInstall,
    DialogsInstall,
    DrawersInstall,
    DropdownsInstall,
    FragmentsInstall,
    IconsInstall,
    InputsInstall,
    ListsInstall,
    PaginatorsInstall,
    PoppersInstall,
    ProgressBarsInstall,
    RadioButtonsInstall,
    ScrollContainersInstall,
    SelectsInstall,
    StepsInstall,
    SwitchesInstall,
    TabsInstall,
    TablesInstall,
    TooltipsInstall,
};

export default {
    install: (app, options) => {
        console.log('Install all', modules);
        Object.values(modules).forEach((module) => {
            module.install(app, options);
        });
    },
};
