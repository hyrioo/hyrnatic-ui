import Collapse from './collapse/Collapse';
import CollapseItem from './collapse/CollapseItem';
import InlineCollapse from './inline-collapse/InlineCollapse';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    Collapse,
    CollapseItem,
    InlineCollapse,
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
