declare type SvgIcon = {
    viewBox: string;
    width: string | number;
    height: string | number;
    data: string;
};
export declare const icons: {
    [key: string]: SvgIcon;
};
export declare function register(name: any, data: any): void;
export declare function registerMDI(name: any, path: any): void;
declare const _default: {
    register: typeof register;
    registerMDI: typeof registerMDI;
    icons: {
        [key: string]: SvgIcon;
    };
};
export default _default;
