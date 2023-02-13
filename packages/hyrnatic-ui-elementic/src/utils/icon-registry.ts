declare type SvgIcon = {
    viewBox: string;
    width: string | number;
    height: string | number;
    data: string;
}

export const icons: { [key: string]: SvgIcon } = {};

export function register(name: string, svg: SvgIcon) {
    icons[name] = svg;
}

export function registerMDI(name: string, path: string) {
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
