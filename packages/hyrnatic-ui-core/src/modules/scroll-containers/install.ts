import ScrollContainer from '@/modules/scroll-containers/scroll-container/ScrollContainer';
import { installComponents, installDependencies, Module } from '@/utils/package';
import CommonInstall from '@/modules/common/install';

let installed = false;
const components = {
    ScrollContainer,
};
const dependencies = {
    CommonInstall,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        installDependencies(app, options, dependencies);
        installComponents(app, components);
        installed = true;
    },
};
