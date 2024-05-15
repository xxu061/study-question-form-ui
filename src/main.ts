import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp, provide, inject } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/Store'
import HighchartsVue from 'highcharts-vue';
import QuestionService from './service/QuestionService'
import UnknownMajorAssistant from './components/UnknownMajorAssistant.vue'
import KnownMajorAssistant from './components/KnownMajorAssistant.vue'


const app = createApp(App); 
// Provide the value within a component
app.provide("QuestionService", new QuestionService());
// eslint-disable-next-line vue/multi-word-component-names
app.component('UnknownMajorAssistant', UnknownMajorAssistant);
app.component('KnownMajorAssistant', KnownMajorAssistant);
// provideQuestionService();
app.use(HighchartsVue);
app.use(router);
app.use(store);

app.mount('#app');