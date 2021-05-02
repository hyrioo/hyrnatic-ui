import List from './list/List.vue';
import ListItem from './list/ListItem.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

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
