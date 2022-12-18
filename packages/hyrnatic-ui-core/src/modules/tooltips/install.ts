import Tooltip from './tooltip/Tooltip';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';
import { App } from 'vue';

const moduleId = 'core-tooltips';
const components = {
    Tooltip,
};

export default {
    install: (app: App, options?: object) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
