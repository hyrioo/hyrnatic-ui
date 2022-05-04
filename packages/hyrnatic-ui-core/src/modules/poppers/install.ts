import Popper from './popper/Popper';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-poppers';
const components = {
    Popper,
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
