<template>
    <label :class="[css_root]">
        <span :class="[css_ec('text')]">{{ text }}</span>
        <input :class="[css_ec('input')]" :multiple="multiple" type="file" :accept="accept" @change="filesChanged" />
        <div :class="[css_ec('suffix')]">
            {{ label }}
        </div>
    </label>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, nextTick, onBeforeUpdate, onMounted, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreAutocompleteSetup,
    coreAutocompleteDisabledProp,
    coreAutocompleteItemsProp,
    coreAutocompleteModelModifiersProp,
    coreAutocompleteModelValueProp,
    CoreAutocompleteSlotProps,
    CoreAutocompleteReturn,
    corePopperMatchReferenceSizeModifier,
    CorePopperComponent,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-file-input',
    props: {
        modelValue: {
            type: [Object, FileList],
        },
        multiple: {
            type: Boolean,
        },
        accept: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: 'Choose file',
        }
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const selectedFiles = ref();

        const text = computed(() => {
            if (props.modelValue === null) {
                return null;
            } else if (props.modelValue.constructor.name === 'FileList') {
                const value = props.modelValue as FileList;
                if (value.length > 1) {
                    return `${value.length} files selected`;
                } else if (value.length === 1) {
                    return value[0].name;
                } else {
                    return null;
                }
            } else {
                const value = props.modelValue as File;
                return value.name;
            }
        });

        const filesChanged = (e: InputEvent) => {
            const target = e.target as HTMLInputElement;
            const files = target.files;
            let value = null;
            if (files.length) {
                value = props.multiple ? files : files[0];
            }
            ctx.emit('update:modelValue', value);
        };

        return {
            ...componentCss(),
            selectedFiles,
            filesChanged,
            text,
        };
    },
});
</script>
