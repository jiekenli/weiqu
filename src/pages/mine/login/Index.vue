<template>
<div>
    <router-view></router-view>  
    <app-content id="login">
        <div class="loginBox">
        <span class="circle"></span>
        <img src="img/xhdpi/安卓 copy 25.png" class="headImg">
        <form action="" class="loginForm">
            <label>
                <input type="text" ref="tel" placeholder="请输入手机号" class="inp">
            </label>
            <label>
                <input type="text" class="inp" placeholder="请输入验证码">
                <p class="verification-code"  @click="getCode()"><span>获取验证码</span>
                <i ref="timeNum">30</i></p>
                
            </label>
            <!-- <p class="regist">还没注册？点击<a @click="goRegisterAction">注册</a></p> -->
            <button class="loginBtn"  @click="loginAction">登&nbsp;录</button>
            
        </form>
        <p class="tips">登录则代表你已阅读并同意<a @click="goAgreementAction">《微趣使用条款》</a></p>
        </div>
    </app-content>  
</div>
</template>
<script>
import Vuex from "vuex";
export default {
   computed:{  
        ...Vuex.mapState({
            username:(state)=>{
                return state.user.username
            }
        })
    },
    methods:{
        // 点击倒计时 获取验证码
        getCode(){
            this.$refs.timeNum.style.display="block";
            this.$refs.timeNum.previousElementSibling.innerHTML="倒计时：";
             let time=30;
            let timer= setInterval(()=>{
                time--;              
                this.$refs.timeNum.innerHTML=time+"s";
                if(time==0){
                    clearInterval(timer);
                    this.$refs.timeNum.style.display="none";
                    this.$refs.timeNum.previousElementSibling.innerHTML="获取验证码";
                }
            },1000)
        },
        //点击进入注册页面
        // goRegisterAction(){
        //     this.$router.push({name:'register'})
        // }
        //点击登录
        loginAction(){
         this.$store.dispatch("modifyUsername",this.$refs.tel.value);
         console.log(this.username,this.$refs.tel.value)
        },
        goAgreementAction(){
            this.$router.push({name:"agreement"})
        }
       
    },
    mounted(){
 
    }
}
</script>

<style scoped>
#login{width:100%;height:100%;background:#f5f5f5;position:absolute;top:0;bottom:0; z-index: 2;}
.loginBox{height:100%;padding-bottom:1.5rem;}
.circle{width:1.16rem;height:1.16rem;display:block;position: absolute;left:50%;transform: translateX(-50%);border:2px solid #fff;border-radius: 50%;top:-0.88rem;}
.headImg{width:1rem;height:1rem;border-radius: 50%;position:absolute;background:#99c7ff;left:50%;transform: translateX(-50%);top:-0.75rem;}
.loginForm{margin:1.25rem .3rem 0;background:#fff;border-radius:.2rem;padding:.71rem .25rem 0;padding-bottom:.375rem;}

.loginForm label{height:.48rem;position:relative;display:block;width:100%;margin-bottom: 0.38rem;}
.margin-b{margin-bottom: 0.38rem;}
.loginForm .inp{width:100%;display:block;border-radius:.24rem;height:100%;padding:0 .18rem;box-sizing: border-box;line-height:.48rem;color:#666;font-size:.14rem;border:1px solid #60A7FF;}
.prompt{font-size: 0.08rem;color:red;}
.loginBtn{background:#60a7ff;display:block;width:100%;height:.48rem;font-size:.15rem;color:#fff;line-height:.48rem;border-radius:.24rem;}
.verification-code{font-size:0.08rem;position: absolute;right:0.1rem;top:0;color:#ccc;line-height:.48rem;display: flex;}
.verification-code i{display: none;color:#333;}
.tips{position:absolute;bottom:0rem;font-size: .06rem;width:100%;text-align:center;color:#999;}
.tips a{color:#60a7ff;font-size:.09rem;}
.regist{color:#ccc;font-size: 0.1rem;text-align:right;margin:0.05rem  0.15rem 0.25rem; }
.regist a{color:#60a7ff;}
</style>
