import { installDirectives } from '@/utils/package';
import ClickOutside from '@/modules/common/directives/click-outside';
import DocumentEvent from '@/modules/common/directives/document-event';
import Resize from '@/modules/common/directives/resize';

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
