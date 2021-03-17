import Select from '@/modules/selects/select/Select.vue';
import SelectItem from '@/modules/selects/select/SelectItem.vue';
import SelectItemDivider from '@/modules/selects/select/SelectItemDivider.vue';
import SelectItemHeader from '@/modules/selects/select/SelectItemHeader.vue';
import { CoreSelectsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import PoppersInstall from '@/modules/poppers/install';
import ScrollContainersInstall from '@/modules/scroll-containers/install';

let installed = false;
const components = {
    Select,
    SelectItem,
    SelectItemDivider,
    SelectItemHeader,
};
const dependencies = {
    CoreSelectsInstall,
    PoppersInstall,
    ScrollContainersInstall,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        installed = true;
    },
};
