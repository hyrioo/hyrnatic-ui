import StepsNavigator from '@/modules/steps/step/StepsNavigator';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    StepsNavigator,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        installComponents(app, components);
        installed = true;
    },
};
