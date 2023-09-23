import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/style.css";

Vue.config.productionTip = false;

import $request from "./axios"
Vue.prototype.$request = $request

import toastify from "toastify-js";
Vue.prototype.toastify = toastify

// Plugins
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

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

import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);

import { Icon } from "@iconify/vue2";
Vue.component("i-icon", Icon);

import PincodeInput from "vue-pincode-input";
Vue.component("PincodeInput", PincodeInput);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import VueQr from 'vue-qr'
Vue.component("v-qr",VueQr);

import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";

new Vue({
  router,
  store,
  mounted(){
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
