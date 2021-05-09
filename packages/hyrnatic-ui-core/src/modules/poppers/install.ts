import Popper from './popper/Popper';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    Popper,
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
