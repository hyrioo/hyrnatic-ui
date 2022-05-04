import { installDirectives, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';
import ClickOutside from './directives/click-outside';
import DocumentEvent from './directives/document-event';
import Resize from './directives/resize';

const moduleId = 'core-common';
const directives = {
    ClickOutside,
    DocumentEvent,
    Resize,
};

export default {
    install: (app, options) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        // installComponents(app, components);
        installDirectives(app, directives);
        markModuleAsInstalled(app, moduleId);
    },
};
