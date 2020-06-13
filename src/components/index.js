import Vue from 'vue';

import wTitle from './w-title/w-title.vue';
import wFooter from './w-footer/w-footer.vue';
import wPage from './w-page/w-page.vue';
import wAlert from './w-alert/w-alert.vue';

Vue.component(wTitle.name, wTitle);
Vue.component(wFooter.name, wFooter);
Vue.component(wPage.name, wPage);
Vue.component(wAlert.name, wAlert);