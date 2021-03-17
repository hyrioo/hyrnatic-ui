import Input from '@/modules/inputs/input/Input';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    Input,
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
