import ScrollContainer from './scroll-container/ScrollContainer';
import {
    installComponents,
    installDependencies,
    isModuleInstalled,
    markModuleAsInstalled,
    Module
} from '../../utils/package';
import CommonInstall from '../common/install';
import { App } from 'vue';

const moduleId = 'core-scroll-containers';
const components = {
    ScrollContainer,
};
const dependencies = {
    CommonInstall,
};

export default {
    install: (app: App, options?: object) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installDependencies(app, dependencies, options);
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
