import Vue from 'vue'
import Vuex from 'vuex'
import userModule from "./userInfo.js"
import cart from './cart.js'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
// 过滤出某些数据持久化缓存，只设置  modules有效
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  // reducer: (state) => {
  //   return {
  //     user: state.user
  //   }
  // },
  // filter: (mutation) => {
  //   return mutation.type === 'modifyUser';
  // },
  modules: ['user']
});
export default new Vuex.Store({
  modules:{
    user:userModule,
    cart: cart,
  },
  plugins: [vuexLocal.plugin],
})
