import {
    mdiCheck,
    mdiChevronDown,
    mdiChevronUp,
    mdiClose,
    mdiDotsHorizontal,
    mdiLoading,
    mdiMinus,
    mdiArrowLeft,
    mdiArrowRight,
    mdiPlus, mdiCalendarMonth,
} from '@mdi/js';
import IconRegistry from './utils/icon-registry';
import { StringHelper } from '@hyrioo/hyrnatic-ui-core';

const icons = {
    calendarMonth: mdiCalendarMonth,
    check: mdiCheck,
    chevronDown: mdiChevronDown,
    chevronUp: mdiChevronUp,
    close: mdiClose,
    dotsHorizontal: mdiDotsHorizontal,
    loading: mdiLoading,
    minus: mdiMinus,
    arrowLeft: mdiArrowLeft,
    arrowRight: mdiArrowRight,
    plus: mdiPlus,
};

Object.keys(icons).forEach((key) => {
    const newKey = StringHelper.kebabize(key);
    IconRegistry.registerMDI(newKey, icons[key]);
    icons[key] = newKey;
});

export default icons;
