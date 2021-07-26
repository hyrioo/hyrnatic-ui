import { mount } from '@vue/test-utils';
import Button from "./Button";
import Install from "../install";

describe("Button", () => {
    it("Check button contains label", () => {
        const label = "Text";
        const wrapper = mount(Button as any, {
            propsData: {
                label: label,
            },
            global: {
                plugins: [Install]
            },
        });
        expect(wrapper.text()).toBe(label);
    });
    it("Check button is clickable", async () => {
        const wrapper = mount(Button as any, {
            propsData: {
                label: 'Text',
            },
            global: {
                plugins: [Install]
            },
        });
        await wrapper.trigger('click');
        expect(wrapper.emitted()).toHaveProperty('click');
    });
    it("Check button can be disabled", async () => {
        const wrapper = mount(Button as any, {
            propsData: {
                label: "Text",
                disabled: true
            },
            global: {
                plugins: [Install]
            },
        });
        await wrapper.trigger('click');
        expect(wrapper.emitted()).not.toHaveProperty('click');
    });
    it("Check button is visible", async () => {
        const wrapper = mount(Button as any, {
            propsData: {
                label: "Text"
            },
            global: {
                plugins: [Install]
            },
        });
        expect(wrapper.find('button').isVisible()).toBeTruthy();
    });
    it("Check button can be hidden", async () => {
        const wrapper = mount(Button as any, {
            propsData: {
                label: "Text",
                visible: false,
            },
            global: {
                plugins: [Install]
            },
        });
        expect(wrapper.find('button').isVisible()).toBeFalsy();
    });
});