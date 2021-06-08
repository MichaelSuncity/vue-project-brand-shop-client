import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import dateFilter from '@/filters/date.filter';
import messagePlugin from './utils/message.plugin';
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader';
import VueMeta from 'vue-meta';
import "./registerServiceWorker";


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(VueMeta)
Vue.use(titlePlugin)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)
Vue.filter('date', dateFilter)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
