import { App, Directive } from 'vue';
import { Component } from '@vue/runtime-core';
export declare type Module = {
    install(app: App, options?: object): void;
};
export declare function isModuleInstalled(app: App, id: string): any;
export declare function markModuleAsInstalled(app: App, id: string): void;
export declare function installComponents(app: App, components: {
    [key: string]: Component & {
        name: string;
    };
}): void;
export declare function installComponentAlias(app: App, alias: string, component: Component): void;
export declare function installDirectives(app: App, directives: {
    [key: string]: Directive & {
        name: string;
    };
}): void;
export declare function installDependencies(app: App, dependencies: {
    [key: string]: Module;
}, options?: object): void;
declare const _default: {
    installComponents: typeof installComponents;
    installComponentAlias: typeof installComponentAlias;
    installDependencies: typeof installDependencies;
    installDirectives: typeof installDirectives;
    isModuleInstalled: typeof isModuleInstalled;
    markModuleAsInstalled: typeof markModuleAsInstalled;
};
export default _default;
