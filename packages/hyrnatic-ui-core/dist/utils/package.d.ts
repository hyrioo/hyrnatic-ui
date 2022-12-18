export declare type Module = {
    install(app: any, options: any): void;
};
export declare function isModuleInstalled(app: any, id: any): any;
export declare function markModuleAsInstalled(app: any, id: any): void;
export declare function installComponents(app: any, components: any): void;
export declare function installComponentAlias(app: any, alias: any, component: any): void;
export declare function installDirectives(app: any, directives: any): void;
export declare function installDependencies(app: any, options: object, dependencies: {
    [key: string]: Module;
}): void;
declare const _default: {
    installComponents: typeof installComponents;
    installComponentAlias: typeof installComponentAlias;
    installDependencies: typeof installDependencies;
    installDirectives: typeof installDirectives;
    isModuleInstalled: typeof isModuleInstalled;
    markModuleAsInstalled: typeof markModuleAsInstalled;
};
export default _default;
