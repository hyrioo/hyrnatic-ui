export default {
    name: 'document-event',
    mounted(element: HTMLElement & {__document_events: {[key: string]: any}}, binding: any, vnode: any) {
        element.__document_events = element.__document_events || {};
        const listener = {
            event: binding.arg,
            handler: (e: any) => {
                if (binding.expression) {
                    vnode.context[binding.expression](e);
                } else if (binding.value) {
                    binding.value(e);
                }
            },
        };
        element.__document_events[listener.event] = listener;
        document.addEventListener(listener.event, listener.handler);
    },
    beforeUnmount(element: HTMLElement & {__document_events: {[key: string]: any}}, binding: any) {
        if (element.__document_events[binding.arg]) {
            const listener = element.__document_events[binding.arg];
            document.removeEventListener(listener.event, listener.handler);
            delete element.__document_events[listener.event];
        }
        if (Object.keys(element.__document_events).length === 0) {
            // @ts-ignore
            delete element.__document_events;
        }
    },
};
