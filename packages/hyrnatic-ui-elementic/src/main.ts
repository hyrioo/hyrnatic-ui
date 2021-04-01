// import AlertInstall from './modules/alerts/install';
import ButtonInstall from '@/modules/buttons/install';
import CheckboxInstall from './modules/checkboxes/install';
import CollapseInstall from './modules/collapses/install';
import DialogInstall from './modules/dialogs/install';
import DrawerInstall from './modules/drawers/install';
// import DropdownInstall from './modules/dropdowns/install';
// import FragmentsInstall from './modules/fragments/install';
import IconInstall from '@/modules/icons/install';
import InputInstall from './modules/inputs/install';
// import ListInstall from './modules/lists/install';
// import PaginatorInstall from './modules/paginators/install';
import PopperInstall from './modules/poppers/install';
// import ProgressBarInstall from './modules/progress-bars/install';
// import RadioButtonInstall from './modules/radio-buttons/install';
import ScrollContainerInstall from './modules/scroll-containers/install';
import SelectInstall from './modules/selects/install';
// import StepInstall from './modules/steps/install';
// import SwitchInstall from './modules/switches/install';
// import TabInstall from './modules/tabs/install';
import TableInstall from './modules/tables/install';
// import TooltipInstall from './modules/tooltips/install';
// import transitions from './transitions';
// import directives from './directives';
import './icons';
import './scss/build.scss';


const modules = {
    // AlertInstall,
    ButtonInstall,
    CheckboxInstall,
    CollapseInstall,
    DialogInstall,
    DrawerInstall,
    // DropdownInstall,
    // FragmentsInstall,
    IconInstall,
    InputInstall,
    // ListInstall,
    // PaginatorInstall,
    PopperInstall,
    // ProgressBarInstall,
    // RadioButtonInstall,
    ScrollContainerInstall,
    SelectInstall,
    // StepInstall,
    // SwitchInstall,
    // TabInstall,
    TableInstall,
    // TooltipInstall,
};

export default {
    install: (app, options) => {
        Object.values(modules).forEach((module) => {
            module.install(app, options);
        });
        /*Object.keys(transitions).forEach((key) => {
            const transition = transitions[key];
            app.alert(transition.name, transition);
        });
        Object.keys(directives).forEach((key) => {
            const directive = directives[key];
            app.directive(directive.name, directive);
        });*/
    },
};
