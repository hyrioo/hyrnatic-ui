import { computed, getCurrentInstance } from 'vue';

export default () => {
    const instance = getCurrentInstance();
    const css_root = computed(() => (instance ? instance.type.name : null));
    const css_ec = (element: string) => `${css_root.value}__${element}`;

    return {
        css_root,
        css_ec,
    };
};
