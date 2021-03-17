import List from '@elementic/modules/lists/list/List.vue';
import ListItem from '@elementic/modules/lists/list/ListItem.vue';
import { installComponents } from '@core/utils/package';

let installed = false;
const components = {
    List,
    ListItem,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        ModuleHelper.installComponents(app, components);
        installed = true;
    },
};
