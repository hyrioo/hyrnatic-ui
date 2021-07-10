import { computed, PropType, reactive } from 'vue';

export type DocsDescriptor = {
    origin: 'core' | string;
    description: string;
    type: string[];
    values: string[];
    default: any;
}

export const coreComponentAsProp = {
    as: {
        type: String,
        default: null,
        docs: {
            origin: 'core',
            description: 'Render the core component as tag',
            type: 'string',
            values: null,
            default: null,
        }
    },
};
export const coreComponentAsPropsProp = {
    asProps: {
        type: Function as PropType<(slotProps) => any>,
        default: null,
        docs: {
            origin: 'core',
            description: 'Callback to set props on the rendered tag',
            type: 'function',
            values: null,
            default: null,
        }
    },
};

function noop() {
    return {};
}

export function proxyProps(props: { [key: string]: any }, proxies: string[]) {
    const obj: { [key: string]: any } = {};
    proxies.forEach((key) => {
        obj[key] = computed(() => props[key]);
    });
    return obj;
}

export function proxyEvents(instance: any, events: string[]) {
    const obj: { [key: string]: any } = {};
    events.forEach((key) => {
        obj[key] = (...args) => instance.emit(key, ...args);
    });
    return obj;
}

export function setupBuilder<SP>(instance) {
    const props: any = reactive({});
    const listeners: any = {};
    const setup = {
        /**
         * Render the renderless alert with a wrapper
         * @param tag HTML tag to use as wrapper
         * @param func Callback to apply properties to the wrapper element
         */
        as(tag: string, func: (slotProps: SP) => any = noop) {
            props.as = tag;
            props.asProps = func;
            return setup;
        },
        /**
         * Proxy properties as computed from the instance to the renderless alert
         * @param proxies
         */
        props(proxies: string[]) {
            proxies.forEach((key) => {
                this.setProp(key, computed(() => instance.props[key]));
            });
            return setup;
        },
        /**
         * Sets a property to a value
         * @param key
         * @param value
         */
        setProp(key: string, value: any) {
            props[key] = value;
            return setup;
        },
        /**
         * Proxy events from the renderless to the instance
         * @param events
         */
        events(events: string[]) {
            events.forEach((key) => {
                listeners[key] = (...args) => instance.emit(key, ...args);
            });
            return setup;
        },
        build() {
            return {
                props,
                listeners,
            };
        },
    };
    return setup;
}
