
const state = {
    username:null,
    useId:null,
    password:null,
    sex:null
}

const getters = {
    //判断用户是否登录
    isLogin(state){
        if(state.username){
            return true;
        }else{
            return false;
        }
    }
}

const mutations = {
    //修改用户名
  modifyUser(state,val){
    state.username=val;
  }
}

const actions = {
    modifyUsername(context,params){
        context.commit("modifyUser",params)
    }
}

export default {
    
    state,
    getters,
    mutations,
    actions
  
}

