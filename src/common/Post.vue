<template>
<!--帖子-->
<div class="main">
	<div class="com">
		<!--<span><img :src="getTopicInfo.User.portraitURL"/></span>-->
		<span><img src="img/xhdpi/images/touxiang.png"/></span>
		
		<span>
			<h4>{{getUserInfo.username}}</h4>
			<i>{{getTopicInfo.createDate}}</i>
		</span>
		<span><img src="img/xhdpi/安卓 copy 5.png"/></span>
	</div>
	
	<p>{{getTopicInfo.context}}</p>
	<ul class="ul01">
		<li v-for="data in getTopicInfo.pictureUrl">
			<img :src="data"/>
		</li>
	</ul>
	
	<ul class="ul02">
		<li>
			<span><img src="img/xhdpi/安卓 copy 32.png"/></span>
			<span>{{getTopicInfo.collectNumber}}</span>
		</li>
		<li>
			<span><img src="img/xhdpi/安卓 copy 35.png"/></span>
			<span>{{getTopicInfo.rewardNumber}}</span>
		</li>
		<li>
			<span><img src="img/xhdpi/安卓 copy 34.png"/></span>
			<span>{{getTopicInfo.replyNumber}}</span>
		</li>
		<li>
			<span><img src="img/xhdpi/安卓 copy 36.png"/></span>
			<span>{{getTopicInfo.likeNumber}}</span>
		</li>
		 
	</ul>	
</div>
</template>

<script>
import {getTopicData,getReplyData} from '../services/messageService.js'

export default {
	data(){
		return {
			//帖子详情数据
			getTopicInfo:[],
			getUserInfo:[]
		}
		
	},
	mounted(){
		//帖子详情 和 一级评论数据
		getTopicData().then((result)=>{
			this.getTopicInfo = result.Topic;
			this.getUserInfo = result.Topic.User;
		})
	}
}
</script>

<style scoped>
/*帖子*/	
.main{
	background: #fff!important;
	width: 100%;
	height: 2.77rem;
	padding-left: 0.15rem;
	margin-top: 0.1rem;
	margin-bottom: 0.09rem;
}
.main p{
	margin-right: 0.3rem;
	margin-bottom: 0.08rem;
}
.main .ul01{
	overflow: hidden;
	margin-right: 0.3rem;
}
.main .ul01 li{
	width: 1.07rem;
	height: 1.07rem;
	float: left;
	margin: 0 0.01rem;
}
.main .ul01 li img{
	float: left;
	width: 1.07rem;
	height: 1.07rem;
	margin: 0 0.01rem;	
}
/*------------------------*/
/*和评论区复用的样式*/
.main .ul02{
	overflow: hidden;
	margin-right: 0.3rem;
	display: flex;
}
.main .ul02 li{
	flex: 1;
	display: flex;
	justify-content: center;
	text-align: center;
}
.main .ul02 li span{
	margin-top: 0.2rem;
	font-size: 0.12rem;
}
.main .ul02 li span:nth-child(2){
		font-size: 0.12rem;
		color: #999;
		margin-left: 0.02rem;
}

/*------------------------*/
.main .com{
	display: flex;
}
.main .com span{
	justify-content: center;
	margin: 0.07rem 0;
}
.main .com span:nth-child(1) img{
	width: 0.25rem;
	height: 0.25rem;
}
.main .com span:nth-child(2){
	margin-left: 0.05rem;
}

.main .com span:nth-child(3) img{
	width: 0.1rem;
	height: 0.1rem;
	margin-left: 2.21rem;
}

</style>