// import transitions from './transitions';
import CommonInstall from './modules/common/install';

import ButtonInstall from './modules/buttons/install';
import CheckboxInstall from './modules/checkboxes/install';
import CollapseInstall from './modules/collapses/install';
import DialogInstall from './modules/dialogs/install';
import DropdownInstall from './modules/dropdowns/install';
import InputInstall from './modules/inputs/install';
import ProgressBarInstall from './modules/progress-bars/install';
import RadioButtonInstall from './modules/radio-buttons/install';
import ScrollContainerInstall from './modules/scroll-containers/install';

import SelectInstall from './modules/selects/install';
import StepInstall from './modules/steps/install';
import TabInstall from './modules/tabs/install';
import TableInstall from './modules/tables/install';

const modules = {
    CommonInstall,
    ButtonInstall,
    CheckboxInstall,
    CollapseInstall,
    DialogInstall,
    DropdownInstall,
    InputInstall,
    ProgressBarInstall,
    RadioButtonInstall,
    ScrollContainerInstall,
    SelectInstall,
    StepInstall,
    TabInstall,
    TableInstall,
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
