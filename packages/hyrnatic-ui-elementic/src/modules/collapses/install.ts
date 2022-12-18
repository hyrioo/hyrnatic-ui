import Collapse from './collapse/Collapse.vue';
import CollapseItem from './collapse-item/CollapseItem.vue';
import InlineCollapse from './inline-collapse/InlineCollapse.vue';
import TransitionsInstall from '../transitions/install';
import { CoreCollapsesInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-collapses';
const components = {
    Collapse,
    CollapseItem,
    InlineCollapse,
};
const dependencies = {
    CoreCollapsesInstall,
    TransitionsInstall,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
