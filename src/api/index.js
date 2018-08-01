
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


//首页/推荐获取帖子
const HOME_RECOMMEND_URL = "/topic/getTopicPage";
//首页/特别关注数据
const HOME_ATTENTIN_URL = "/topic/getAttentionTopic";
//进入帖子用户的主页
const HOME_USER_INFO = "/topic/getUserInfo";
//点击（收藏按钮），收藏该帖子
const HOME_ADD_COLLECT = "/topic/addCollect";
//点击（关注按钮），添加关注
const HOME_ADD_ATTENTION = "/user/addAttention";
//点击（帖子或评论按钮），进入帖子详情页
const HOME_POSTS_DETAIL = "/topic/getTopicInfo";
//点击(一级评论），获取此评论下面的二级评论的信息
//参数: topicId page
const HOME_SON_POST = "/reply/getReplyByParentId";
//点击我不感兴趣,取消关注
const HOME_CANCEL_COLLECT ="/user/deletedAttentionUser";
//点击打赏弹出框中的（赏），进行打赏
const HOME_ADD_REWARD = "/topic/addReward";
//点赞接口
const HOME_ADD_LIKE = "/topic/addLike";
export default {
    HOME_RECOMMEND_URL,
    HOME_ATTENTIN_URL,
    HOME_USER_INFO,
    HOME_ADD_COLLECT,
    HOME_POSTS_DETAIL,
    HOME_SON_POST,
    HOME_ADD_ATTENTION,
    HOME_CANCEL_COLLECT,
    GET_AuthCode_URL,
    GET_LOGIN_URL,
    HOME_ADD_REWARD,
    HOME_ADD_LIKE
}
