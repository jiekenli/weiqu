import axios from "axios";
import API from "../api/index.js";
//获取首页推荐页帖子数据
export function getRecommendPage(page) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_RECOMMEND_URL,{
			params: {
				page
			}
		})
		.then(res=>{
			resolve(res.data.topics)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}
//获取首页/特别关注数据
export function getAttentionPage(page) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_ATTENTIN_URL,{
			params: {
				page
			}
		})
		.then(res=>{
			resolve(res.data.topics)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}

//获取首页点击头像进入用户详情页数据
export function getHomeUserPage(id) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_USER_INFO,{
			params: {
				id
			}
		})
		.then(res=>{
			resolve(res.data)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}
//点击（收藏按钮），收藏该帖子
export function addCollectData(id) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_ADD_COLLECT,{
			params: {
				topicId: id
			}
		})
		.then(res=>{
			resolve(res)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}
//点击点赞
export function addLikeData(id) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_ADD_LIKE,{
			params: {
				topicId: id
			}
		})
		.then(res=>{
			resolve(res)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}
//点击（关注按钮），添加关注
export function addAttentionData(id) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_ADD_COLLECT,{
			params: {
				topicId: id
			}
		})
		.then(res=>{
			resolve(res)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}
//点击我不感兴趣,取消关注
export function cancelAttentionData(id) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_CANCEL_COLLECT,{
			params: {
				topicId: id
			}
		})
		.then(res=>{
			resolve(res)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}
//点击打赏弹出框中的（赏），进行打赏 
export function addRewardData(topicId,number) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_ADD_REWARD,{
			params: {
				topicId,
				number
			}
		})
		.then(res=>{
			resolve(res)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}
//点击（帖子或评论按钮），进入帖子详情页
export function PostsDetailPage(id) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_POSTS_DETAIL,{
			params: {
				id
			}
		})
		.then(res=>{
			resolve(res.data)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}
//点击(一级评论），获取此评论下面的二级评论的信息
//参数: topicId page
export function getSonPost(id,page) {
	return new Promise((resolve,reject)=>{
		axios.get(API.HOME_SON_POST,{
			params: {
				topicId:id,
				page
			}
		})
		.then(res=>{
			resolve(res.data.Replys)
		})
		.catch(err=>{
			console.log(err);
		})
	})
}