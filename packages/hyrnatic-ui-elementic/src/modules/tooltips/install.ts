import Tooltip from './tooltip/Tooltip.vue';
import { CoreTooltipsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import PopperInstall from '../poppers/install';
import iconRegistry from '../../utils/icon-registry';
import tooltipArrow from './custom-icons/tooltip-arrow';

const moduleId = 'elementic-tooltips';
const components = {
    Tooltip,
};
const dependencies = {
    CoreTooltipsInstall,
    PopperInstall,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        iconRegistry.register('tooltip-arrow', tooltipArrow);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
