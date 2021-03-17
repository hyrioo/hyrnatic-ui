import Button from '@/modules/buttons/button/Button';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    Button,
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
