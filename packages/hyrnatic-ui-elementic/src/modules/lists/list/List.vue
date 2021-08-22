<script lang="tsx">
import { computed, defineComponent, SetupContext, TransitionGroup } from 'vue';
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

        const attrs = computed(() => {
            if(props.animate){
                return {
                    name: 'list-complete',
                    tag: 'ul',
                }
            } else {
                return null;
            }
        })

        return {
            ...componentCss(),
            attrs,
        };
    },
    render() {
        return this.animate ? (
            <TransitionGroup name="list-complete" tag="ul" class={this.css_root}>
                {this.$slots.default()}
            </TransitionGroup>
        ) : (
            <ul class={this.css_root}>
                {this.$slots.default()}
            </ul>
        );
    },
});
</script>
