import ProgressBar from '@/modules/progress-bars/progress-bar/ProgressBar';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    ProgressBar,
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
