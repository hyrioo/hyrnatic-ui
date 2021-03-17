import ResizeObserver from 'resize-observer-polyfill';

let lastId = 1;
const callbacks = {};
const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        const el: any = entry.target;
        if (el.__resize_callback_id__) {
            callbacks[el.__resize_callback_id__]();
        }
    });
});

export default {
    name: 'resize',
    mounted(el, { value, arg, modifiers }) {
        if (!value || typeof value !== 'function') {
            console.warn('v-resize should received a function as value');
            return;
        }
        resizeObserver.observe(el);
        el.__resize_callback_id__ = lastId++;
        callbacks[el.__resize_callback_id__] = value;
    },
    beforeUnmount(el) {
        resizeObserver.unobserve(el);
        if (el.__resize_callback_id__) {
            delete callbacks[el.__resize_callback_id__];
            delete el.__resize_callback_id__;
        }
    },
};
