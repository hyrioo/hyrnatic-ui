import ResizeObserver from 'resize-observer-polyfill';

let lastId = 1;
const callbacks: {[key: string]: Function} = {};
const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    entries.forEach((entry) => {
        const el: any = entry.target;
        if (el.__resize_callback_id__) {
            callbacks[el.__resize_callback_id__]();
        }
    });
});

export default {
    name: 'resize',
    mounted(el: HTMLElement, { value }: { value: any}) {
        if (!value || typeof value !== 'function') {
            console.warn('v-resize should received a function as value');
            return;
        }
        resizeObserver.observe(el);
        // @ts-ignore
        el.__resize_callback_id__ = lastId++;
        // @ts-ignore
        callbacks[el.__resize_callback_id__] = value;
    },
    beforeUnmount(el: HTMLElement) {
        resizeObserver.unobserve(el);
        // @ts-ignore
        if (el.__resize_callback_id__) {
            // @ts-ignore
            delete callbacks[el.__resize_callback_id__];
            // @ts-ignore
            delete el.__resize_callback_id__;
        }
    },
};
