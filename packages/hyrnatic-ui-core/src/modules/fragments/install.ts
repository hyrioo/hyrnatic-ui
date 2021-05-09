import FragmentContainer from './fragment/FragmentContainer';
import { installComponents } from '../../utils/package';

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
