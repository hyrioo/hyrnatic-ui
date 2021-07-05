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
    mdiPlus, mdiCalendarMonth, mdiChevronLeft, mdiChevronRight, mdiChevronDoubleRight, mdiChevronDoubleLeft,
} from '@mdi/js';
import IconRegistry from './utils/icon-registry';
import { StringHelper } from '@hyrioo/hyrnatic-ui-core';

const icons = {
    arrowLeft: mdiArrowLeft,
    arrowRight: mdiArrowRight,
    calendarMonth: mdiCalendarMonth,
    check: mdiCheck,
    chevronDoubleLeft: mdiChevronDoubleLeft,
    chevronDoubleRight: mdiChevronDoubleRight,
    chevronDown: mdiChevronDown,
    chevronLeft: mdiChevronLeft,
    chevronRight: mdiChevronRight,
    chevronUp: mdiChevronUp,
    close: mdiClose,
    dotsHorizontal: mdiDotsHorizontal,
    loading: mdiLoading,
    minus: mdiMinus,
    plus: mdiPlus,
};

Object.keys(icons).forEach((key) => {
    const newKey = StringHelper.kebabize(key);
    IconRegistry.registerMDI(newKey, icons[key]);
    icons[key] = newKey;
});

export default icons;
