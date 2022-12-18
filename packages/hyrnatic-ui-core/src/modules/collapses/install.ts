import Collapse from './collapse/Collapse';
import CollapseItem from './collapse/CollapseItem';
import InlineCollapse from './inline-collapse/InlineCollapse';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';
import { App } from 'vue';

const moduleId = 'core-collapses';
const components = {
    Collapse,
    CollapseItem,
    InlineCollapse,
};

export default {
    install: (app: App, options?: object) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
