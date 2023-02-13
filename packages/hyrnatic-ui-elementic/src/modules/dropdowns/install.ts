import Dropdown from './dropdown/Dropdown.vue';
import DropdownItem from './dropdown-item/DropdownItem.vue';
import DropdownItemDivider from './dropdown-item-divider/DropdownItemDivider.vue';
import DropdownItemHeader from './dropdown-item-header/DropdownItemHeader.vue';
import { CoreDropdownsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import FloatingInstall from '../floating/install';
import { App } from 'vue';

const moduleId = 'elementic-dropdowns';
const components = {
    Dropdown,
    DropdownItem,
    DropdownItemDivider,
    DropdownItemHeader,
};
const dependencies = {
    CoreDropdownsInstall,
    FloatingInstall,
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
