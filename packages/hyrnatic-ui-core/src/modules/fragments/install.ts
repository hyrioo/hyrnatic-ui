import { installComponents } from '@/utils/package';
import FragmentContainer from '@/modules/fragments/fragment/FragmentContainer';

let installed = false;
const components = {
    FragmentContainer,
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
