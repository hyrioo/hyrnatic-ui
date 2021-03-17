export declare type Module = {
    install(app: any, options: any): void;
};
export declare function installComponents(app: any, components: any): void;
export declare function installDirectives(app: any, directives: any): void;
export declare function installDependencies(app: any, options: object, dependencies: {
    [key: string]: Module;
}): void;
declare const _default: {
    installComponents: typeof installComponents;
    installDependencies: typeof installDependencies;
    installDirectives: typeof installDirectives;
};
export default _default;
