import FragmentContainer from './fragment/FragmentContainer';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-fragments';
const components = {
    FragmentContainer,
};

export default {
    install: (app, options) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
