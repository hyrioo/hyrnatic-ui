import { PropType } from 'vue';
import { ComponentInternalInstance } from '@vue/runtime-core';
export declare const coreComponentAsProp: {
    as: {
        type: StringConstructor;
        default: null;
    };
};
export declare const coreComponentAsPropsProp: {
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: null;
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
export declare function setupBuilder<SP>(instance: ComponentInternalInstance): {
    /**
     * Render the renderless spinner with a wrapper
     * @param tag HTML tag to use as wrapper
     * @param func Callback to apply properties to the wrapper element
     */
    as(tag: string, func?: (slotProps: SP) => any): any;
    /**
     * Proxy properties as computed from the instance to the renderless spinner
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
