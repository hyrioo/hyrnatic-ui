import Checkbox from '@/modules/checkboxes/checkbox/Checkbox';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    Checkbox,
};
const dependencies = {
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
