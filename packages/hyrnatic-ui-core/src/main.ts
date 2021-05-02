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
        /*Object.keys(transitions).forEach((key) => {
            const transition = transitions[key];
            app.component(transition.name, transition);
        });*/
    },
};
