/*
帖子详情和一级评论接口
http://127.0.0.1:8080/topic/getTopicInfo
参数:
	id
*/
const GET_GETTOPICINFO_URL='/topic/getTopicInfo';


/*
二级评论接口
http://127.0.0.1:8080/reply/getReplyByParentId
参数:
	topicId,
	page
 */

const GET_GETREPLYBYPARENTID_URL = "/reply/getReplyByParentId"






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
	GET_GETTOPICINFO_URL,
	GET_GETREPLYBYPARENTID_URL,
    GET_AuthCode_URL,
    GET_LOGIN_URL
}