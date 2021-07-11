<template>
    <div class="navigation">
        <h2>Development</h2>
        <router-link :to="{name: 'installation'}" :active-class="'active'">Installation</router-link>
        <router-link :to="{name: 'installation'}" :active-class="'active'">Quick start</router-link>
        <router-link :to="{name: 'installation'}" :active-class="'active'">Custom theme</router-link>
        <h2>Components</h2>
        <router-link v-for="page of pages" :key="page.route" :to="{name: page.route}" :active-class="'active'">{{ page.text }}</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const pages = [
            { route: 'alert', text: 'Alert' },
            { route: 'button', text: 'Button' },
            { route: 'checkbox', text: 'Checkbox' },
            { route: 'collapse', text: 'Collapse' },
            { route: 'date-picker', text: 'Date picker' },
            { route: 'dialog', text: 'Dialog' },
            { route: 'drawer', text: 'Drawer' },
            { route: 'dropdown', text: 'Dropdown' },
            { route: 'icon', text: 'Icon' },
            { route: 'icon-button', text: 'Icon Button' },
            { route: 'inline-collapse', text: 'Inline Collapse' },
            { route: 'input', text: 'Input' },
            { route: 'list', text: 'List' },
            { route: 'paginator', text: 'Paginator' },
            { route: 'progress-bar', text: 'Progress bar' },
            { route: 'radio-button', text: 'Radio Button' },
            { route: 'scroll-container', text: 'Scroll Container' },
            { route: 'select', text: 'Select' },
            { route: 'spinner', text: 'Spinner' },
            { route: 'step', text: 'Step' },
            { route: 'switch', text: 'Switch' },
            { route: 'tab', text: 'Tab' },
            { route: 'table', text: 'Table' },
            { route: 'tooltip', text: 'Tooltip' },
        ];
        return {
            pages,
        };
    },
});
</script>

<style lang="scss">
.navigation {
    width: 200px;
    flex-shrink: 0;
    border-right: 2px solid rgba(#319C9C, .32);
    padding-top: 32px;

    h2 {
        color: #319C9C;
        font-size: 16px;
        margin: 0 0 12px;
        margin-top: 32px;

        &:first-child {
            margin-top: 0;
        }
    }

    a {
        line-height: 32px;
        text-decoration: none;
        display: block;
        color: #319C9C;
        transition: padding-left 256ms cubic-bezier(0.4, 0.0, 0.2, 1);
        padding-left: 0;

        &:hover {
            padding-left: 8px;
        }

        &.active {
            font-weight: bold;
        }
    }
}
</style>
