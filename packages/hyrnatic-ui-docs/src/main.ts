import { createApp } from 'vue';
import './scss/hyrnatic-ui-core.scss';
import HyrnaticUICore from '@core/main';
import HyrnaticUIElementic from '@elementic/main';
import iconRegistry from '@core/utils/icon-registry';
import {
    mdiKey,
    mdiInformationOutline,
    mdiAlertCircleOutline,
    mdiCloseCircleOutline,
    mdiCheckCircleOutline,
} from '@mdi/js';
import App from './App.vue';
import router from './router';

iconRegistry.registerMDI('key', mdiKey);
iconRegistry.registerMDI('information-outline', mdiInformationOutline);
iconRegistry.registerMDI('alerts-circle-outline', mdiAlertCircleOutline);
iconRegistry.registerMDI('close-circle-outline', mdiCloseCircleOutline);
iconRegistry.registerMDI('check-circle-outline', mdiCheckCircleOutline);

const app = createApp(App);
app.use(HyrnaticUICore);
app.use(HyrnaticUIElementic);
app.use(router);
app.mount('#app');
