<template>
    <svg :class="[css_root, {'-spin': spin}]" :viewBox="viewBox" :style="style" v-html="content" @click="onClick" />
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from 'vue';
import IconRegistry from '@/utils/icon-registry';
import componentCss from '@/utils/component-css';

export default defineComponent({
    name: 'h-icon',
    props: {
        icon: {
            type: String,
            required: true,
        },
        width: {
            type: String,
            default: null,
        },
        height: {
            type: String,
            default: null,
        },
        size: {
            type: String,
            default: null,
        },
        strokes: {
            type: [Array, String],
        },
        fills: {
            type: [Array, String],
            default: 'currentColor',
        },
        spin: {
            type: Boolean,
        },
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const onClick = (e) => {
            ctx.emit('click', e);
        };

        const noneWhenNull = (value) => (value === null ? 'none' : value);
        const removeColorsFromTag = (tag) => {
            const regAttrs = /(\w*)="(.*?)"/gi;
            const regStyles = /([^:]+?):([^;]+);?/gi;
            return tag.replace(regAttrs, (match, attrName, attrValue) => {
                if (attrName === 'fill' || attrName === 'stroke') {
                    // Replace fill and stroke attributes with empty strings
                    return '';
                } else if (attrName === 'style') {
                    // Replace fill and stroke properties from style attribute with empty strings
                    // eslint-disable-next-line no-param-reassign
                    attrValue = attrValue.replace(regStyles, (match2, property) => (property === 'fill' || property === 'stroke' ? '' : match2));
                    return attrValue.length !== 0 ? `${attrName}="${attrValue}"` : '';
                }
                return match;
            });
        };
        const createColorAttr = (attr, value, index) => {
            if (Array.isArray(value)) {
                // If color is passed as array it should be used on tags with the matching index
                return value.length - 1 >= index ? `${attr}="${noneWhenNull(value[index])}"` : '';
            } else {
                // If color is passed as single value it should be used on all tags
                return `${attr}="${noneWhenNull(value)}"`;
            }
        };
        const injectColors = (data, strokes, fills) => {
            const regTags = /<(path|rect|circle|polygon|line|polyline|ellipse).*?>/gi;
            let index = 0;
            return data.replace(regTags, (match, tag) => {
                const fill = createColorAttr('fill', fills, index);
                const
                    stroke = createColorAttr('stroke', strokes, index);
                let fixedTag = removeColorsFromTag(match);
                fixedTag = `<${tag} ${fill} ${stroke} ${fixedTag.substr(tag.length + 1)}`;
                index++;
                return fixedTag;
            });
        };

        const content = computed(() => {
            const strokes = !props.strokes ? [] : props.strokes;
            const fills = !props.fills ? [] : props.fills;
            return injectColors(IconRegistry.icons[props.icon].data, strokes, fills);
        });
        const viewBox = computed(() => {
            if (!IconRegistry.icons[props.icon]) {
                console.warn(`No icon has been registered with the key "${props.icon}"`);
                return '';
            }
            return IconRegistry.icons[props.icon].viewBox;
        });
        const style = computed(() => {
            const s: any = {};
            s.width = props.width || props.size || IconRegistry.icons[props.icon].width;
            s.height = props.height || props.size || IconRegistry.icons[props.icon].height;

            return s;
        });

        return {
            onClick,
            content,
            viewBox,
            style,
            ...componentCss(),
        };
    },
});
</script>
