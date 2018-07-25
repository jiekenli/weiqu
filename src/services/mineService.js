import axios from "axios";
import API from "../api";
// 获取验证码
export  function getAuthCode(phone){
    return new Promise((resolve,reject)=>{
        axios.get(API.GET_AuthCode_URL,{
            params:{
                phone
            }
        }).then(res=>{
            resolve(res)
        }).catch(error=>{
            console.log(error)
        })
    })
}

// 登录
export function getLogin(phone,authCode){
    return new Promise((resolve,reject)=>{
        axios.get(API.GET_LOGIN_URL,{
            params:{
                phone,
                authCode
            }
        }).then(res=>{
            resolve(res);

        }).cathc(error=>{
            console.log(error)
        })
    })
}
