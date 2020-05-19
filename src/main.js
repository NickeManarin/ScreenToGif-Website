import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./locales";
import VueResource from "vue-resource";
import Buefy from "buefy";
import VueShowdown from "vue-showdown";
import VueClipboard from "vue-clipboard2";
import VueGtag from "vue-gtag";

import CustomColors from "./mixins/colors.scss";

Vue.use(VueResource);
Vue.use(Buefy, {
  defaultIconPack: "unicons",
});
Vue.use(VueShowdown, {
  flavor: "github",
  options: {
    headerLevelStart: 3,
    openLinksInNewWindow: true,
    requireSpaceBeforeHeadingText: true,
  },
});
Vue.use(VueClipboard);
Vue.use(CustomColors);
Vue.use(VueGtag, { config: { id: "UA-87410077-2" } },  router);

Vue.config.productionTip = false;

Vue.prototype.$store = {
  release: {},
  releaseList: [],
  previousDate: null
};

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");