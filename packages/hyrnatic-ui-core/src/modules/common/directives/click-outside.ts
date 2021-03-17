export default {
    name: 'click-outside',
    mounted(element, binding) {
        // Expression must be a function
        if (typeof binding.value !== 'function') {
            console.warn(`[v-click-outside:] provided expression '${binding.expression}' is not a function`);
            return;
        }
        element.__click_outside_event = 'click';
        element.__click_outside_handler = (e) => {
            if (binding.modifiers.bubble || (!element.contains(e.target) && element !== e.target)) {
                binding.value(e);
            }
        };
        document.addEventListener(element.__click_outside_event, element.__click_outside_handler);
    },
    beforeUnmount(element) {
        document.removeEventListener(element.__click_outside_event, element.__click_outside_handler);
        delete element.__click_outside_handler;
        delete element.__click_outside_event;
    },
};
