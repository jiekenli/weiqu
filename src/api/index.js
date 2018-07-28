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
export default {
    HOME_RECOMMEND_URL,
    HOME_ATTENTIN_URL,
    HOME_USER_INFO,
    HOME_ADD_COLLECT,
    HOME_POSTS_DETAIL,
    HOME_SON_POST,
    HOME_ADD_ATTENTION
}
