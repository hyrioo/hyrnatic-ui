import { installDirectives } from '../../utils/package';
import ClickOutside from './directives/click-outside';
import DocumentEvent from './directives/document-event';
import Resize from './directives/resize';

let installed = false;
const directives = {
    ClickOutside,
    DocumentEvent,
    Resize,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        // installComponents(app, components);
        installDirectives(app, directives);
        installed = true;
    },
};
