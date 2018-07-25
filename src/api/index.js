
/*
发送短信验证码接口
url:http://127.0.0.1:8080/user/getAuthCode
参数：
    Phone
*/ 
const GET_AuthCode_URL='/user/getAuthCode';

/*
登录的接口
http://127.0.0.1:8080/user/login
参数：
Phone：手机号码
authCode：验证码
*/
const GET_LOGIN_URL='/user/login';

export default {
    GET_AuthCode_URL,
    GET_LOGIN_URL
}