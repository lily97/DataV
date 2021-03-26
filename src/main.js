import Vue from 'vue'
import App from './App.vue'
import './assets/common.less'
import dataV from '@jiaminghi/data-view'
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN"; // lang i18n

Vue.config.productionTip = false
Vue.use(dataV)

// 地图插件
import GaodeMap from "vue-amap";
Vue.use(GaodeMap);
GaodeMap.initAMapApiLoader({
    key: "327ac35f51577352a2caf5dcf9a2789e",
    v: "1.4.15"
});
Vue.use(ElementUI, {
    locale
});
new Vue({
    render: h => h(App)
}).$mount('#app')