import Paginator from '@/modules/paginators/paginator/Paginator';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    Paginator,
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
