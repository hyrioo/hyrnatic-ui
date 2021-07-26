export type Module = {
    install(app, options): void;
}
export function isModuleInstalled(app, id) {
    return app.__hyrnatic_ui_installed && app.__hyrnatic_ui_installed.indexOf(id) !== -1;
}
export function markModuleAsInstalled(app, id) {
    if(!app.__hyrnatic_ui_installed) {
        app.__hyrnatic_ui_installed = [];
    }
    app.__hyrnatic_ui_installed.push(id);
}
export function installComponents(app, components) {
    Object.keys(components).forEach((key) => {
        app.component(components[key].name, components[key]);
    });
}
export function installDirectives(app, directives) {
    Object.keys(directives).forEach((key) => {
        app.directive(directives[key].name, directives[key]);
    });
}
export function installDependencies(app, options: object, dependencies: {[key: string]: Module}) {
    Object.values(dependencies).forEach((dependency) => {
        dependency.install(app, options);
    });
}

export default {
    installComponents,
    installDependencies,
    installDirectives,
    isModuleInstalled,
    markModuleAsInstalled,
}
