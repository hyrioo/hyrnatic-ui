<template>
    <div class="navigation">
        <h2>Development</h2>
        <router-link :to="{name: 'installation'}" :active-class="'active'">Installation</router-link>
        <router-link :to="{name: 'installation'}" :active-class="'active'">Quick start</router-link>
        <router-link :to="{name: 'installation'}" :active-class="'active'">Custom theme</router-link>
        <h2>Modules</h2>
        <template v-for="module in modules">
            <h3>{{ module.name }}</h3>
            <router-link v-for="page of module.pages" :key="page.route" :to="{name: page.route}" :active-class="'active'">{{ page.text }}</router-link>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const modules = [
            {
                name: 'Alerts',
                pages: [
                    { route: 'alert', text: 'Alert' },
                ]
            },
            {
                name: 'Buttons',
                pages: [
                    { route: 'button', text: 'Button' },
                    { route: 'icon-button', text: 'Icon Button' },
                    // { route: 'link-button', text: 'Link Button' },
                ]
            },
            {
                name: 'Checkboxes',
                pages: [
                    { route: 'checkbox', text: 'Checkbox' },
                ]
            },
            {
                name: 'Collapses',
                pages: [
                    { route: 'collapse', text: 'Collapse' },
                    { route: 'inline-collapse', text: 'Inline Collapse' },
                ]
            },
            {
                name: 'Date pickers',
                pages: [
                    { route: 'date-picker', text: 'Date picker' },
                ]
            },
            {
                name: 'Dialogs',
                pages: [
                    { route: 'dialog', text: 'Dialog' },
                ]
            },
            {
                name: 'Drawers',
                pages: [
                    { route: 'drawer', text: 'Drawer' },
                ]
            },
            {
                name: 'Dropdowns',
                pages: [
                    { route: 'dropdown', text: 'Dropdown' },
                ]
            },
            {
                name: 'Icons',
                pages: [
                    { route: 'icon', text: 'Icon' },
                ]
            },
            {
                name: 'Inputs',
                pages: [
                    { route: 'input', text: 'Input' },
                ]
            },
            {
                name: 'Lists',
                pages: [
                    { route: 'list', text: 'List' },
                ]
            },
            {
                name: 'Notifications',
                pages: [
                    { route: 'notification', text: 'Notification' },
                ]
            },
            {
                name: 'Paginators',
                pages: [
                    { route: 'paginator', text: 'Paginator' },
                ]
            },
            {
                name: 'Progress bars',
                pages: [
                    { route: 'progress-bar', text: 'Progress bar' },
                ]
            },
            {
                name: 'Radio buttons',
                pages: [
                    { route: 'radio-button', text: 'Radio Button' },
                ]
            },
            {
                name: 'Scroll containers',
                pages: [
                    { route: 'scroll-container', text: 'Scroll Container' },
                ]
            },
            {
                name: 'Selects',
                pages: [
                    { route: 'select', text: 'Select' },
                ]
            },
            {
                name: 'Spinners',
                pages: [
                    { route: 'spinner', text: 'Spinner' },
                ]
            },
            {
                name: 'Steps',
                pages: [
                    { route: 'step', text: 'Step' },
                ]
            },
            {
                name: 'Switches',
                pages: [
                    { route: 'switch', text: 'Switch' },
                ]
            },
            {
                name: 'Tabs',
                pages: [
                    { route: 'tab', text: 'Tab' },
                ]
            },
            {
                name: 'Tables',
                pages: [
                    { route: 'table', text: 'Table' },
                ]
            },
            {
                name: 'Tooltips',
                pages: [
                    { route: 'tooltip', text: 'Tooltip' },
                ]
            },
        ];

        return {
            modules,
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

    h3 {
        color: rgba(#4A5C5C, .72);
        font-size: 13px;
        margin: 0 0 4px;
        margin-top: 16px;

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
        position: relative;

        &:hover {
            padding-left: 8px;
        }

        &.active {
            padding-left: 8px;
            font-weight: bold;

            &:before{
                transform: translate(-8px, 0);
                opacity: 1;
            }
        }

        &:before{
            content: '';
            height: 24px;
            width: 3px;
            background: #319C9C;
            left: 0;
            top: 4px;
            display: block;
            position: absolute;
            opacity: 0;
            transform: translate(0, 0);
            transition: transform 256ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity 256ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }
    }
}
</style>
