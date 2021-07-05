import DatePicker from './date-picker/DatePicker';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    DatePicker,
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
