import { App } from 'vue';
declare const _default: {
    install: (app: App, options?: object) => void;
};
export default _default;
export { DialogManager, NotificationManager } from '@hyrioo/hyrnatic-ui-core';
export { coreFloatingArrowReference } from '@hyrioo/hyrnatic-ui-core';
export { createCoreStepItem } from '@hyrioo/hyrnatic-ui-core';
export type { CoreStepsNavigatorStepItem } from '@hyrioo/hyrnatic-ui-core';
export type { CoreTableSortDefinition } from '@hyrioo/hyrnatic-ui-core';
export { default as SimpleNotification } from './modules/notifications/notification/SimpleNotification.vue';
export * as IconRegistry from './utils/icon-registry';
