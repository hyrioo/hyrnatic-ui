import { createRouter, createWebHistory, Router } from 'vue-router';

import Installation from './pages/Installation.vue';

import Alert from './pages/Alert.vue';
import Button from './pages/buttons/button/Button.vue';
import Checkbox from './pages/checkboxes/checkbox/Checkbox.vue';
import Collapse from './pages/collapses/collapse/Collapse.vue';
import DatePicker from './pages/date-pickers/date-picker/DatePicker.vue';
import Dialog from './pages/dialogs/dialog/Dialog.vue';
import Drawer from './pages/drawers/drawer/Drawer.vue';
import Dropdown from './pages/dropdowns/dropdown/Dropdown.vue';
import Icon from './pages/icons/icon/Icon.vue';
import IconButton from './pages/buttons/icon-button/IconButton.vue';
import InlineCollapse from './pages/collapses/inline-collapse/InlineCollapse.vue';
import Input from './pages/inputs/input/Input.vue';
import List from './pages/lists/list/List.vue';
import Notification from './pages/notifications/notification/Notification.vue';
import Paginator from './pages/paginators/paginator/Paginator.vue';
import ProgressBar from './pages/progress-bars/progress-bar/ProgressBar.vue';
import RadioButton from './pages/RadioButton.vue';
import Slider from './pages/sliders/slider/Slider.vue';
import ScrollContainer from './pages/ScrollContainer.vue';
import Select from './pages/Select.vue';
import Spinner from './pages/Spinner.vue';
import Step from './pages/Step.vue';
import Switch from './pages/Switch.vue';
import Tab from './pages/Tab.vue';
import Table from './pages/Table.vue';
import Tooltip from './pages/Tooltip.vue';

const componentPage = (name, page) => ({
    name,
    path: `/${name}`,
    component: page,
});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        componentPage('installation', Installation),

        componentPage('alert', Alert),
        componentPage('button', Button),
        componentPage('checkbox', Checkbox),
        componentPage('collapse', Collapse),
        componentPage('date-picker', DatePicker),
        componentPage('dialog', Dialog),
        componentPage('drawer', Drawer),
        componentPage('dropdown', Dropdown),
        componentPage('icon', Icon),
        componentPage('icon-button', IconButton),
        componentPage('inline-collapse', InlineCollapse),
        componentPage('input', Input),
        componentPage('list', List),
        componentPage('notification', Notification),
        componentPage('paginator', Paginator),
        componentPage('progress-bar', ProgressBar),
        componentPage('radio-button', RadioButton),
        componentPage('slider', Slider),
        componentPage('scroll-container', ScrollContainer),
        componentPage('select', Select),
        componentPage('spinner', Spinner),
        componentPage('step', Step),
        componentPage('switch', Switch),
        componentPage('tab', Tab),
        componentPage('table', Table),
        componentPage('tooltip', Tooltip),
    ],
});

export function useRouter(): Router {
    return router as Router;
}

export default router;
