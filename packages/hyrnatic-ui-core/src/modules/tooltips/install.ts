import Tooltip from './tooltip/Tooltip';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-tooltips';
const components = {
    Tooltip,
};

export default {
    install: (app, options) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
