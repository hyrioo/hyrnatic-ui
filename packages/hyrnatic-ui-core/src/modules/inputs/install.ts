import Input from './input/Input';
import Autocomplete from './autocomplete/Autocomplete';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    Input,
    Autocomplete,
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
