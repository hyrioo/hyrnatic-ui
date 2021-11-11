<script lang="tsx">
import { defineComponent, SetupContext, TransitionGroup, h } from 'vue';
import componentCss from '../../../utils/component-css';

export default defineComponent({
    name: 'h-list',
    props: {
        animate: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, ctx: SetupContext) {
        return {
            ...componentCss(),
        };
    },
    render() {
        if(this.animate) {
            return h(TransitionGroup, {name: 'list-complete', tag: 'ul', class: this.css_root}, this.$slots.default);
        } else {
            return h('ul', {class: this.css_root}, this.$slots.default());
        }
    },
});
</script>
