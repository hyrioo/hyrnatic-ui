export type Module = {
    install(app, options): void;
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
}
