import Select from './select/Select.vue';
import SelectItem from './select/SelectItem.vue';
import SelectItemDivider from './select/SelectItemDivider.vue';
import SelectItemHeader from './select/SelectItemHeader.vue';
import { CoreSelectsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import PoppersInstall from '../poppers/install';
import ScrollContainersInstall from '../scroll-containers/install';

let installed = false;
const components = {
    Select,
    SelectItem,
    SelectItemDivider,
    SelectItemHeader,
};
const dependencies = {
    CoreSelectsInstall,
    PoppersInstall,
    ScrollContainersInstall,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        installed = true;
    },
};
