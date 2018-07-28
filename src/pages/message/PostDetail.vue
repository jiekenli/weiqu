<template>
<div>
	<!--帖子详情 页面-->
	<app-content  id="postdetail">	
		<!--头部-->
		<header>
			<img src="img/xhdpi/安卓 copy 41.png" class="return" @click="toReturn()">
			<h3 class="title">帖子详情</h3>
		</header>
		
		<!--帖子-->

				<post></post>

			
		<!--评论区-->
		<div class="comment">
			<h3>评论</h3>
			<!--一级评论-->
			<div class="forcom" v-for="data in getcomInfo">
				<div class="com">
					<span><img src="img/xhdpi/安卓 copy 33.png"/></span>
					<span>
						<h4>{{data.User.username}}</h4>
						<i>{{data.createDate}}</i>
					</span>
					<span @click="ShowInput()"><img src="img/xhdpi/安卓 copy 33.png"/></span>
				</div>
				
				<p  @click="ShowInput()">{{data.context}}</p>
				
				<!--二级评论-->
				<ul class="list">
					<li v-for="data in getReplyInfo">
						<h2>{{data.User.username}}:</h2>
						<span>{{data.context}}</span>
					</li>
					
				</ul>
			</div>
			
		</div>
		
	</app-content>
	
	<!--消息输入框-->	
	<transition name="Input">
		<div class="message" v-show="isShow">
			<label><input type="text"/></label>
			<button>发送</button>
		</div>
	</transition>
	
</div>
</template>

<script>
import {getTopicData,getReplyData} from '../../services/messageService.js'
import Post from "../../common/Post.vue"

export default {
	components:{
		Post
	},
	data(){
		return {
			isShow:'',
			//帖子详情数据
			getTopicInfo:[],
			//一级评论数据
			getcomInfo:[],
			//二级评论数据
			getReplyInfo:[]
		}
		
	},
	methods:{
		//返回到消息页面
		toReturn(){
			this.$router.push({
				name:'release'
			})
		},
		//显示输入框
		ShowInput(){
			this.isShow = !this.isShow;
		}
		
	},
	mounted(){
		//帖子详情 和 一级评论数据
		getTopicData().then((result)=>{
			this.getTopicInfo = result.Topic;
			this.getcomInfo = result.Replys;
			
		})
		//二级评论数据
		getReplyData().then((result)=>{
			this.getReplyInfo = result;
			console.log(this.getReplyInfo)
		})
	}
}
</script>

<style scoped>

#postdetail{
	background: #F5F5F5;
	position: absolute;
	left: 0;
	bottom: 0;
	top: 0;
	z-index: 100;
	overflow: auto;
}

/*头部*/
header{
	height: 0.48rem;
	background: #fff;
}
header .return{
	width: 0.14rem;
	height: 0.14rem;
	position: absolute;
	top: 34px;
	left: 20px;
	color: #333;
}
header .title{
	font-size: 0.18rem;
	color: #333;
	text-align: center;
	line-height: 0.48rem;
}

/*帖子*/

/*评论区*/
.comment{
	padding-left: 0.14rem;
	background: #fff;
	padding-bottom: 0.5rem;

}
.comment h3{
	font-size: 0.16rem;
	color: #333;
	border-bottom: 1px solid #979797;
	height: 0.3rem;
	line-height: 0.3rem;
}
.forcom{
	margin: 0.1rem 0;
}
.comment .com{
	display: flex;
}
.comment .com span{
	justify-content: center;
	margin: 0.07rem 0;
}
.comment .com span:nth-child(1) img{
	width: 0.25rem;
	height: 0.25rem;
}
.comment .com span:nth-child(2){
	margin-left: 0.05rem;
}
.comment .com span:nth-child(3) img{
	margin-left: 2rem!important;
}
.comment .com span:nth-child(3) img{
	width: 0.1rem;
	height: 0.1rem;
	margin-left: 2.21rem;
}
.comment p{
	font-size: 0.13rem;
	color: #999;
	width: 3.03rem;
	margin-left: 0.26rem;
	margin-bottom: 0.12rem;
	line-height: 0.17rem;
}
/*列表*/
.list{
	width: 3.02rem;
	margin-left: 0.26rem;
	background: #F0F0F0;
	padding-left: 0.08rem;
	padding-top: 0.08rem;
	padding-bottom: 0.06rem;
}
.list li{
	line-height: 0.2rem;
	display: flex;
}
.list li h2{
	font-size: 0.13rem;
	color: #68A2F7;
}
.list li span{
	font-size: 0.13rem;
	color: #999;
}

.message{
	width: 100%;
	height: 0.5rem;
	background: #AFAFAF;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 200;
}

.message input{
	width: 2.5rem;
	height: 0.3rem;
	border-radius: 0.1rem;
	margin-top: 0.08rem;
	margin-left: 0.2rem;
	
}
.message button{
	width: 0.5rem;
	height: 0.3rem;
	line-height: 0.3rem;
	background: #D8D8D8;
	text-align: center;
	font-size: 0.14rem;
	color: #333;
	border-radius: 0.08rem;
	position: absolute;
	right: 54px;
	top: 20px;
}

/*输入框的动画*/
@keyframes InputIn{
	0%{transform: translateY(80%);}
	100%{transform: translateY(0%);}
}
@keyframes InputOut{
	0%{transform: translateY(0%);}
	100%{transform: translateY(80%);}
}
.Input-enter-active{
	animation: InputIn 300ms;
}
.Input-leave-active{
	animation: InputOut 300ms;
}
</style>