import List from './list/List.vue';
import ListItem from './list-item/ListItem.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-lists';
const components = {
    List,
    ListItem,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
