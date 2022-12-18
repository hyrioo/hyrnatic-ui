export default {
    name: 'click-outside',
    mounted(element: any, binding: any) {
        // Expression must be a function
        if (typeof binding.value !== 'function') {
            console.warn(`[v-click-outside:] provided expression '${binding.expression}' is not a function`);
            return;
        }
        element.__click_outside_event = 'click';
        element.__click_outside_handler = (e: MouseEvent) => {
            if (binding.modifiers.bubble || (!element.contains(e.target) && element !== e.target)) {
                binding.value(e);
            }
        };
        document.addEventListener(element.__click_outside_event, element.__click_outside_handler);
    },
    beforeUnmount(element: any) {
        document.removeEventListener(element.__click_outside_event, element.__click_outside_handler);
        delete element.__click_outside_handler;
        delete element.__click_outside_event;
    },
};
