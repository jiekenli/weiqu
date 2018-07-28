import axios from 'axios'
import API from '../api/index.js'

//帖子详情和一级评论的数据
export function getTopicData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.GET_GETTOPICINFO_URL)
		.then(response=>{
//			console.log(response.data)
			resolve(response.data)
		})
		.catch(error=>{
			console.log(error)
		})
	})
}

//二级评论
export function getReplyData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.GET_GETREPLYBYPARENTID_URL)
		.then(response=>{
			resolve(response.data.Replys)
		})
		
		.catch(error=>{
			console.log(error)
		})
	})
}
