import Select from './select/Select.vue';
import SelectItem from './select/select-item/SelectItem.vue';
import SelectItemDivider from './select/select-item-divider/SelectItemDivider.vue';
import SelectItemHeader from './select/select-item-header/SelectItemHeader.vue';
import { CoreSelectsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import FloatingInstall from '../floating/install';
import ScrollContainersInstall from '../scroll-containers/install';
import { App } from 'vue';
import SimpleSelect from './simple-select/SimpleSelect.vue';

const moduleId = 'elementic-selects';
const components = {
    SimpleSelect,
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
    install: (app: App, options?: object) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
