import { App, Directive } from 'vue';
import { Component } from '@vue/runtime-core';

export type Module = {
    install(app: App, options?: object): void;
}
export function isModuleInstalled(app: App, id: string) {
    // @ts-ignore
    return app.__hyrnatic_ui_installed && app.__hyrnatic_ui_installed.indexOf(id) !== -1;
}
export function markModuleAsInstalled(app: App, id: string) {
    // @ts-ignore
    if(!app.__hyrnatic_ui_installed) {
        // @ts-ignore
        app.__hyrnatic_ui_installed = [];
    }
    // @ts-ignore
    app.__hyrnatic_ui_installed.push(id);
}
export function installComponents(app: App, components: {[key: string]: Component & {name: string}}) {
    Object.keys(components).forEach((key: string) => {
        app.component(components[key].name, components[key]);
    });
}
export function installComponentAlias(app: App, alias: string, component: Component) {
    app.component(alias, component);
}
export function installDirectives(app: App, directives: {[key: string]: Directive & {name: string}}) {
    Object.keys(directives).forEach((key) => {
        app.directive(directives[key].name, directives[key]);
    });
}
export function installDependencies(app: App, dependencies: {[key: string]: Module}, options?: object) {
    Object.values(dependencies).forEach((dependency) => {
        dependency.install(app, options);
    });
}

export default {
    installComponents,
    installComponentAlias,
    installDependencies,
    installDirectives,
    isModuleInstalled,
    markModuleAsInstalled,
}
