export default {
    /**
     * Get a nested property of an object
     * @param obj
     * @param property
     */
    getProperty(obj: any, property: string): any {
        let data = obj;
        const props = property.split('.');
        props.every((p) => {
            if (data[p] === undefined) {
                return null;
            } else {
                data = data[p];
            }
            return data !== null;
        });
        return data;
    },
};
