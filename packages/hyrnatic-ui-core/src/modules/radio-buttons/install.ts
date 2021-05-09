import RadioButton from './radio-button/RadioButton';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    RadioButton,
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
