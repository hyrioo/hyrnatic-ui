export default {
    name: 'document-event',
    mounted(element, binding, vnode) {
        element.__document_events = element.__document_events || {};
        const listener = {
            event: binding.arg,
            handler: (e) => {
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
    beforeUnmount(element, binding) {
        if (element.__document_events[binding.arg]) {
            const listener = element.__document_events[binding.arg];
            document.removeEventListener(listener.event, listener.handler);
            delete element.__document_events[listener.event];
        }
        if (Object.keys(element.__document_events).length === 0) {
            delete element.__document_events;
        }
    },
};
