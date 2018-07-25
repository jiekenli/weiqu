<template>
<div>
    <router-view></router-view>  
    <app-content id="login">
        <div class="loginBox">
        <span class="circle"></span>
        <img src="img/xhdpi/安卓 copy 25.png" class="headImg">
        <form action="" class="loginForm">
            <label>
                <input type="text" ref="tel" @change="telAction" placeholder="请输入手机号" class="inp">
                <p class="prompt" ref="telPrompt"></p>
            </label>
            <label>
                <input type="text" class="inp" @blur="getCodeAction" ref="authCode" placeholder="请输入验证码">
                <p class="verification-code"  @click="getCode()"><span>获取验证码</span>
                <i ref="timeNum">30</i></p>
                <p class="prompt" ref="codePrompt">验证码错误</p>
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
import {getAuthCode,getLogin} from "../../../services/mineService.js";
export default {
    data(){
        return{
            codeVal:null
        }
    },
   computed:{  
        ...Vuex.mapState({
            username:(state)=>{
                return state.user.username
            }
        })
    },
    methods:{
        // 手机号码验证
        telAction(){
             let telReg=/^(13|15|18)[0-9]{9}$/;
             let val = this.$refs.tel.value;
             if(!val.match(telReg)){
                this.$refs.telPrompt.innerText="电话号码无效或存在特殊字符";
                this.$refs.tel.value=''
             }else{
                  this.$refs.telPrompt.innerText="正确";
             }
        },
        // 点击倒计时 获取验证码   
        getCode(){
            
            if(this.$refs.tel.value){
                this.$refs.timeNum.style.display="block";
                this.$refs.timeNum.previousElementSibling.innerHTML="倒计时：";
                let timer=null;
                clearInterval(timer);
                let time=30;
                timer= setInterval(()=>{
                    time--;              
                    this.$refs.timeNum.innerHTML=time+"s";
                    if(time==0){
                        clearInterval(timer);
                        this.$refs.timeNum.style.display="none";
                        this.$refs.timeNum.previousElementSibling.innerHTML="获取验证码";
                    }
                },1000)
                getAuthCode(this.$refs.tel.value).then(res=>{
                    console.log(res)
                    this.codeVal=res.data;
                    this.$refs.codePrompt.innerText=res.data;
                })
                // console.log(this.$refs.tel.value)
            }else{
                this.$refs.telPrompt.innerText="请输入手机号码";
            }
            
        },
        // 验证码
        getCodeAction(){
            if(this.$refs.authCode.value !=this.codeVal){
                this.$refs.codePrompt.innerText="验证码错误，请重新输入"
            }else{
                this.$refs.codePrompt.innerText="正确"
            }
        },
        //点击登录
        loginAction(){
            if(this.$refs.tel.value,this.$refs.authCode.value){
                console.log(this.$refs.authCode.innerText)
                // getLogin(this.$refs.tel.value,this.$refs.authCode.innerText).then(res=>{
                //     // console.log(res)
                // })
            
             this.$store.dispatch("user/modifyUsername",this.$refs.tel.value)
             console.log(this.username)
            this.$router.push("/")
            }
           
        },
        // 点击进入《微趣使用条款》
        goAgreementAction(){
            this.$router.push({name:"loginAgreement"})
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

.loginForm label .prompt{padding-left:.2rem;margin-top:.05rem;}
.margin-b{margin-bottom: 0.38rem;}
.loginForm .inp{width:100%;display:block;border-radius:.24rem;height:100%;padding:0 .18rem;box-sizing: border-box;line-height:.48rem;color:#666;font-size:.14rem;border:1px solid #60A7FF;}
.prompt{font-size: 0.08rem;color:red;}
.loginBtn{background:#60a7ff;display:block;width:100%;height:.48rem;font-size:.15rem;color:#fff;line-height:.48rem;border-radius:.24rem;}
.verification-code{font-size:0.12rem;position: absolute;right:0;top:0;color:#ccc;line-height:.48rem;display: flex;width:.78rem;}
.verification-code i{display: none;color:#333;}
.tips{position:absolute;bottom:0rem;font-size: .06rem;width:100%;text-align:center;color:#999;}
.tips a{color:#60a7ff;font-size:.09rem;}
.regist{color:#ccc;font-size: 0.1rem;text-align:right;margin:0.05rem  0.15rem 0.25rem; }
.regist a{color:#60a7ff;}
</style>
