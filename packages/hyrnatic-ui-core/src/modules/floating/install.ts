import Floating from './floating/Floating';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-floating';
const components = {
    Floating,
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
