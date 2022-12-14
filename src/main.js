import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import i18n from './locales/i18n';
//icons

const app = createApp(App);


app.use(PrimeVue);
app.use(i18n); //inject

app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber)
app.component('InputMask', InputMask);
app.component('pv-dropdown', Dropdown);

app.mount('#app')
