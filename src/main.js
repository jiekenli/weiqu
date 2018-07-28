import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.prototype.$pubsub = new Vue();
//公共的头
import AppHeader from './common/AppHeader.vue'
Vue.component('app-header', AppHeader);
//公共的身体
import AppContent from './common/AppContent.vue'
Vue.component('app-content', AppContent);
//公共的底部
import foot from './common/foot.vue'
Vue.component('app-foot', foot);
// 公共滤镜
import FilterContent from "./pages/components/FilterContent.vue";
Vue.component('filter-content',FilterContent);

Vue.prototype.$pubsub=new Vue();

Vue.config.productionTip = false
new Vue({
    router,
    store,
    components: {
        App
    },
    render: h=>h(App)
}).$mount('#app')