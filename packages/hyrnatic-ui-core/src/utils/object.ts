export default {
    /**
     * Get a nested property of an object
     * @param obj
     * @param property
     */
    getProperty(obj: object, property: string): any {
        let data = obj;
        const props = property.split('.');
        props.forEach((p) => {
            if (data[p] === undefined) {
                return null;
            }
            data = data[p];
        });
        return data;
    },
};
