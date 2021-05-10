import { createApp } from 'vue';
import './scss/hyrnatic-ui-core.scss';
import HyrnaticUIElementic,  { IconRegistry } from '@hyrioo/hyrnatic-ui-elementic';
import {
    mdiKey,
    mdiInformationOutline,
    mdiAlertCircleOutline,
    mdiCloseCircleOutline,
    mdiCheckCircleOutline,
} from '@mdi/js';
import App from './App.vue';
import router from './router';

IconRegistry.registerMDI('key', mdiKey);
IconRegistry.registerMDI('information-outline', mdiInformationOutline);
IconRegistry.registerMDI('alert-circle-outline', mdiAlertCircleOutline);
IconRegistry.registerMDI('close-circle-outline', mdiCloseCircleOutline);
IconRegistry.registerMDI('check-circle-outline', mdiCheckCircleOutline);

const app = createApp(App);
app.use(HyrnaticUIElementic);
app.use(router);
app.mount('#app');
