declare type SvgIcon = {
    viewBox: string;
    width: string | number;
    height: string | number;
    data: string;
}

export const icons: { [key: string]: SvgIcon } = {};

export function register(name, data) {
    icons[name] = data;
}

export function registerMDI(name, path) {
    icons[name] = {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
        data: `<path d="${path}" />`,
    };
}

export default {
    register,
    registerMDI,
    icons,
};
