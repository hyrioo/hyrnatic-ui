import TabItem from '@/modules/tabs/tab/TabItem';
import TabsNavigator from '@/modules/tabs/tab/TabsNavigator';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    TabItem,
    TabsNavigator,
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
