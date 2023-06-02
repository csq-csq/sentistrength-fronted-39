import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css';
import request from "@/utils/request";
import * as echarts from 'echarts';
import VueViewer, { directive as viewerDirective } from 'v-viewer';
import 'viewerjs/dist/viewer.css';

Vue.use(VueViewer)
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.request=request();
Vue.prototype.$echarts = echarts

Vue.directive('viewer', viewerDirective({
  debug: true
}));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
