import ScrollContainer from './scroll-container/ScrollContainer';
import {
    installComponents,
    installDependencies,
    isModuleInstalled,
    markModuleAsInstalled,
    Module
} from '../../utils/package';
import CommonInstall from '../common/install';

const moduleId = 'core-scroll-containers';
const components = {
    ScrollContainer,
};
const dependencies = {
    CommonInstall,
};

export default {
    install: (app, options) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installDependencies(app, options, dependencies);
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
