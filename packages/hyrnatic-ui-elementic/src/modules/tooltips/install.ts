import TooltipCoreInstall from '@core/modules/tooltips/install';
import PopperInstall from '@elementic/modules/poppers/install';
import Tooltip from '@elementic/modules/tooltips/tooltip/Tooltip.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import iconRegistry from '@core/utils/icon-registry';
import tooltipArrow from './custom-icons/tooltip-arrow';

let installed = false;
const components = {
    Tooltip,
};
const dependencies = {
    TooltipCoreInstall,
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
