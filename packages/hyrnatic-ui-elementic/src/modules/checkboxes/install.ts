import Checkbox from './checkbox/Checkbox.vue';
import { CoreCheckboxInstall, ModuleHelper, StringHelper } from '@hyrioo/hyrnatic-ui-core';
import checkStroke from './custom-icons/check-stroke';
import IconRegistry from '../../utils/icon-registry';
import { App } from 'vue';

const moduleId = 'elementic-checkboxes';
export const components = {
    Checkbox,
};
const dependencies = {
    CoreCheckboxInstall,
};

export const CheckboxIcons: {
    [key: string]: {
        width: number,
        height: number,
        viewBox: string,
        data: string,
    } | string
} = {
    checkStroke: checkStroke,
};

export default {
    install: (app: App, options?: object) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        Object.keys(CheckboxIcons).forEach((key) => {
            const newKey = StringHelper.kebabize(key);
            IconRegistry.register(newKey, CheckboxIcons[key]);
            CheckboxIcons[key] = newKey;
        });
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};