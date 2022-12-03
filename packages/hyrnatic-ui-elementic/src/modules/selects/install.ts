import Select from './select/Select.vue';
import SelectItem from './select-item/SelectItem.vue';
import SelectItemDivider from './select-item-divider/SelectItemDivider.vue';
import SelectItemHeader from './select-item-header/SelectItemHeader.vue';
import { CoreSelectsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import FloatingInstall from '../floating/install';
import ScrollContainersInstall from '../scroll-containers/install';

const moduleId = 'elementic-selects';
const components = {
    Select,
    SelectItem,
    SelectItemDivider,
    SelectItemHeader,
};
const dependencies = {
    CoreSelectsInstall,
    FloatingInstall,
    ScrollContainersInstall,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
