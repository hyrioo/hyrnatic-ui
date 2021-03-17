export default {

    isEmpty(array: any[]): boolean {
        return Array.isArray(array) && array.length === 0;
    },

    remove(array: any[], item: any): any[] {
        return array.filter((i) => i !== item);
    },

    next(array: any[], startIndex: number, filter = undefined): any {
        const startIndex2 = startIndex === null ? 0 : startIndex + 1;
        for (let i = startIndex2; i < array.length; i++) {
            if (filter === undefined || filter(array[i])) {
                return array[i];
            }
        }
        for (let i = 0; i < startIndex2; i++) {
            if (filter === undefined || filter(array[i])) {
                return array[i];
            }
        }

        return null;
    },

    prev(array: any[], startIndex: number, filter = undefined): any {
        const startIndex2 = startIndex === null ? array.length - 1 : startIndex - 1;
        for (let i = startIndex2; i >= 0; i--) {
            if (filter === undefined || filter(array[i])) {
                return array[i];
            }
        }
        for (let i = array.length - 1; i > startIndex2; i--) {
            if (filter === undefined || filter(array[i])) {
                return array[i];
            }
        }

        return null;
    },

    simpleSort(a, b, invert): number {
        const isNumber = (value) => !Number.isNaN(Number(value));
        let result;
        if (!isNumber(a)) {
            if (!isNumber(b)) { // a and b are strings
                result = a.localeCompare(b);
            } else { // a string and b number
                result = 1; // a > b
            }
        } else if (!isNumber(b)) { // a number and b string
            result = -1; // a < b
        } else { // a and b are numbers
            result = parseFloat(a) - parseFloat(b);
        }

        if (invert) {
            result *= -1;
        }
        return result;
    },
};
