import Tooltip from './tooltip/Tooltip';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    Tooltip,
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
