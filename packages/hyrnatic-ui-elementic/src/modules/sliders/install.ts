import Slider from './slider/Slider.vue';
import { CoreSlidersInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-sliders';
export const components = {
    Slider,
};
const dependencies = {
    CoreSlidersInstall,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
