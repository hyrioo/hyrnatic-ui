import Collapse from '@/modules/collapses/collapse/Collapse.vue';
import CollapseItem from '@/modules/collapses/collapse/CollapseItem.vue';
import InlineCollapse from '@/modules/collapses/inline-collapse/InlineCollapse.vue';
import TransitionsInstall from '@/modules/transitions/install';
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
