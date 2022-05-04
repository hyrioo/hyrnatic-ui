import TabItem from './tab/TabItem';
import TabsNavigator from './tab/TabsNavigator';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-tabs';
const components = {
    TabItem,
    TabsNavigator,
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
