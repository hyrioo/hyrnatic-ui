export default {
    /**
     * Get a nested property of an object
     * @param obj
     * @param property
     */
    getProperty(obj: object, property: string): any {
        let data = obj;
        const props = property.split('.');
        props.every((p) => {
            if (data[p] === undefined) {
                data = null;
            } else {
                data = data[p];
            }
            return data !== null;
        });
        return data;
    },
};
