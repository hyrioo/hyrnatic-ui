import { PropType } from 'vue';
export declare const coreComponentAsProp: {
    as: {
        type: StringConstructor;
        default: any;
    };
};
export declare const coreComponentAsPropsProp: {
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: any;
    };
};
export declare function proxyProps(props: {
    [key: string]: any;
}, proxies: string[]): {
    [key: string]: any;
};
export declare function proxyEvents(instance: any, events: string[]): {
    [key: string]: any;
};
export declare function setupBuilder<SP>(instance: any): {
    /**
     * Render the renderless alert with a wrapper
     * @param tag HTML tag to use as wrapper
     * @param func Callback to apply properties to the wrapper element
     */
    as(tag: string, func?: (slotProps: SP) => any): any;
    /**
     * Proxy properties as computed from the instance to the renderless alert
     * @param proxies
     */
    props(proxies: string[]): any;
    /**
     * Sets a property to a value
     * @param key
     * @param value
     */
    setProp(key: string, value: any): any;
    /**
     * Proxy events from the renderless to the instance
     * @param events
     */
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
