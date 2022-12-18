import ProgressBar from './progress-bar/ProgressBar';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';
import { App } from 'vue';

const moduleId = 'core-progress-bars';
const components = {
    ProgressBar,
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
