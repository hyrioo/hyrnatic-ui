declare const _default: {
    isEmpty(array: any[]): boolean;
    remove(array: any[], item: any): any[];
    next(array: any[], startIndex: number | null, filter?: ((item: any) => boolean) | null): any;
    prev(array: any[], startIndex: number | null, filter?: ((item: any) => boolean) | null): any;
    simpleSort(a: any, b: any, invert: boolean): number;
};
export default _default;
