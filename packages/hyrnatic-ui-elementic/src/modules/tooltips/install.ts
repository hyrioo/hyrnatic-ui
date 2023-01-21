import Tooltip from './tooltip/Tooltip.vue';
import { CoreTooltipsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import FloatingInstall from '../floating/install';
import iconRegistry from '../../utils/icon-registry';
import tooltipArrow from './custom-icons/tooltip-arrow';
import { App } from 'vue';

const moduleId = 'elementic-tooltips';
export const components = {
    Tooltip,
};
const dependencies = {
    CoreTooltipsInstall,
    FloatingInstall,
};

export default {
    install: (app: App, options?: object) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        iconRegistry.register('tooltip-arrow', tooltipArrow);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
