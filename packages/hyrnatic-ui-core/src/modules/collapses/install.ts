import Collapse from '@/modules/collapses/collapse/Collapse';
import CollapseItem from '@/modules/collapses/collapse/CollapseItem';
import InlineCollapse from '@/modules/collapses/inline-collapse/InlineCollapse';
import { installComponents } from '@/utils/package';

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
