import PopperInstall from '@/modules/poppers/install';
import Tooltip from './tooltip/Tooltip.vue';
import { CoreTooltipsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import iconRegistry from '@/utils/icon-registry';
import tooltipArrow from './custom-icons/tooltip-arrow';

let installed = false;
const components = {
    Tooltip,
};
const dependencies = {
    CoreTooltipsInstall,
    PopperInstall,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        iconRegistry.register('tooltip-arrow', tooltipArrow);
        installed = true;
    },
};
