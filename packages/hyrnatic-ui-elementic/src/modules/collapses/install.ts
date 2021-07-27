import Collapse from './collapse/Collapse.vue';
import CollapseItem from './collapse-item/CollapseItem.vue';
import InlineCollapse from './inline-collapse/InlineCollapse.vue';
import TransitionsInstall from '../transitions/install';
import { CoreCollapsesInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
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
