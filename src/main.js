import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/style.css";

Vue.config.productionTip = false;

import AOS from "aos";
import "aos/dist/aos.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import bottomNavigationVue from "bottom-navigation-vue";

Vue.use(bottomNavigationVue);

// import CountryFlag from "vue-country-flag";
// Vue.component("country-flag", CountryFlag);

import "toastify-js/src/toastify.css";

import { Icon } from "@iconify/vue2";
Vue.component("i-icon", Icon);

new Vue({
  router,
  store,
  mounted(){
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
