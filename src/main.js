import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.config.productionTip = false;

import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '9346cf56a5a3dce11dd7d107a05ffae8',
  v: '1.4.4',
  plugin: [
      'AMap.Scale',
      'AMap.OverView',
      'AMap.ToolBar',
      'AMap.MapType',
      'AMap.PlaceSearch',
      'AMap.Geolocation',
      'AMap.CircleEditor'
  ],
  uiVersion: '1.0.11'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
