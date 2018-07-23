import Vue from 'vue'
import Vuex from 'vuex'
import userModule from "./userInfo.js"
Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
   user:userModule
 }
})
