import Select from '@/modules/selects/select/Select';
import SelectItem from '@/modules/selects/select/SelectItem';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    Select,
    SelectItem,
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
