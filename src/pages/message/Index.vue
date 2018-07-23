<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content id="com">
    	<!--通知页面-->
    	<ul v-show="showFlag == 'recommended'">
    		<li v-for="data in recomList" @handleNotice="handleNoticeAction">
    			<div><img :src="data.imgUrl"></div>
    			<div>
    				<h3>{{data.notice}}</h3>
    				<p>{{data.content}}</p>
    				<span>{{data.time}}</span>
    			</div>
    		</li>
    	</ul>
    	
    	<!--私信页面-->
    	<ul v-show="showFlag == 'special'">
    		<li v-for="data in speList" @handleNotice="handleNoticeAction">
    			<div><img :src="data.imgUrl"></div>
    			<div>
    				<h3>{{data.notice}}</h3>
    				<p>{{data.content}}</p>
    				<span>{{data.time}}</span>
    			</div>
    		</li>
    	</ul>
    
    </app-content>
    <app-foot></app-foot>
</div>

</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'通知',
                right:'私信',
                show:false,
                rightshow:true,
                arrowright:false,
                showleft:true,
                searchDetails:false,
                
            },
            //页面初始展示页面
            showFlag:'recommended',
            //通知页面数据
            recomList:[
            	{
            		imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1387376278,472522834&fm=27&gp=0.jpg',
            		notice:'您关注的微趣小可爱更新内容啦',
            		content:'一早上起来头发睡成这样，请问这是什么新发',
            		time:'6-10'
            	},
            	{
            		imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1387376278,472522834&fm=27&gp=0.jpg',
            		notice:'您关注的微趣小可爱更新内容啦',
            		content:'一早上起来头发111睡成这样，请问这是什么新发',
            		time:'6-10'
            	}
            ],
            //私信页面数据
           speList:[
           		{
            		imgUrl:'http://img0.imgtn.bdimg.com/it/u=1805457239,1796297509&fm=27&gp=0.jpg',
            		notice:'1111您关注的微趣小可爱更新内容啦',
            		content:'一早上起来头发睡成这样，请问这是什么新发',
            		time:'6-10'
            	},
            	{
            		imgUrl:'http://img0.imgtn.bdimg.com/it/u=1805457239,1796297509&fm=27&gp=0.jpg',
            		notice:'1111您关注的微趣小可爱更新内容啦',
            		content:'一早上起来头发111睡成这样，请问这是什么新发',
            		time:'6-10'
            	}
           ]
            
        }
    },
    methods:{
    	//接收头部传过来的值
    	handleNoticeAction(noticePage){
    		this.showFlag = noticePage;
    		
    	}
    }
}
</script>
<style scoped>
#com{
	background: #F5F5F5;
		
}
ul{
	background: #FFF;
	margin-top: 0.11rem;
	padding-left: 0.15rem;
}
ul li{
	display: flex;
	padding-top: 0.12rem;
	padding-bottom: 0.1rem;
	border-bottom: 1px solid #979797;
	position: relative;
}

ul li img{
	width: 0.4rem;
	height: 0.4rem;
	margin-right: 0.1rem;
}	
ul li h3{
	font-size: 0.14rem;
	color: #333;
	line-height: 0.2rem;
}
ul li p{
	font-size: 0.12rem;
	color: #999;	
	line-height: 0.17rem;
	
}
ul li span{
	font-size: 0.12rem;
	color: #999;	
	position: absolute;
	right: 13px;
	top: 16px;
}
</style>