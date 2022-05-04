import Dropdown from './dropdown/Dropdown.vue';
import DropdownItem from './dropdown-item/DropdownItem.vue';
import DropdownItemDivider from './dropdown-item-divider/DropdownItemDivider.vue';
import DropdownItemHeader from './dropdown-item-header/DropdownItemHeader.vue';
import { CoreDropdownsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-dropdowns';
const components = {
    Dropdown,
    DropdownItem,
    DropdownItemDivider,
    DropdownItemHeader,
};
const dependencies = {
    CoreDropdownsInstall,
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
