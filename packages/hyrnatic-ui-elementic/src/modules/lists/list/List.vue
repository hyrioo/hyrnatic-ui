<script lang="tsx">
import { defineComponent, SetupContext, TransitionGroup, h, provide, computed } from 'vue';
import componentCss from '../../../utils/component-css';

export default defineComponent({
    name: 'h-list',
    props: {
        animate: {
            type: Boolean,
            default: true,
        },
        listStyle: {
            type: String,
            default: 'line'
        }
    },
    setup(props, ctx: SetupContext) {
        const listStyle = computed(() => props.listStyle);
        provide('list-style', listStyle);

        return {
            ...componentCss(),
        };
    },
    render() {
        if(this.animate) {
            return h(TransitionGroup, {name: 'list-complete', tag: 'ul', class: [this.css_root]}, this.$slots.default);
        } else {
            return h('ul', {class: [this.css_root]}, this.$slots.default());
        }
    },
});
</script>
