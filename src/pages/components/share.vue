<template>
	<div class="share-wrap">
		<transition name="fade">
			<div class="cover" @click="closeAct" v-show="showShare"></div>
		</transition>
		<transition name="slide">
	    <ul class="share-list" v-show="showShare">
	        <li class="share-item" ref="weixin" @click="wxShare">
	            <p class="img">
	                <img src="img/xhdpi/安卓 copy 18.png">
	            </p>
	            <p class="text">微信好友</p>
	        </li>
	        <li class="share-item">
	            <p class="img">
	                <img src="img/xhdpi/安卓 copy 15.png">
	            </p>
	            <p class="text">新浪微博</p>
	        </li>
	        <li class="share-item">
	            <p class="img">
	                <img src="img/xhdpi/安卓 copy 13.png">
	            </p>
	            <p class="text">收藏</p>
	        </li>
	        <li class="share-item">
	            <p class="img">
	                <img src="img/xhdpi/安卓 copy 14.png">
	            </p>
	            <p class="text">举报</p>
	        </li>
	         <li class="share-item">
	            <p class="img">
	                <img src="img/xhdpi/安卓 copy 21.png">
	            </p>
	            <p class="text">复制链接</p>
	        </li>
	    </ul>
	  </transition>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				showShare: false
			}
		},
		mounted () {
			this.$pubsub.$on("openShare",()=>{
				this.showShare = true;
			})
		},
		methods: {
			closeAct () {
				this.showShare = false;
			},
			wxShare () {
				mui.plusReady(()=>{
	        //获得分享服务
	        plus.share.getServices(
            function(services){
              console.log('获得分享服务成功');
              console.log(JSON.stringify(services));
              //获得微信分享服务
              weixinService = services[3];//新浪微博
              weixinService = services[2];
              //授权认证操作
              weixinService.authorize(
                  function(service){
                    console.log('授权认证成功');
                    console.log(JSON.stringify(service));
                    //分享
                    service.send(
                        {
                          content: '一款娱乐休闲网络社交、分享平台',
                          thumbs: ['img/xhdpi/安卓 copy 25.png'],
                          href: 'https://cn.vuejs.org/',
                          title: '微趣',
                          geo: {
                            latitude: 22.62844265999999,
                            longitude: 113.83456019
                          },
                          extra: {
                            scene: 'WXSceneSession'
                          }
                        },
                        function(){
                          console.log('分享成功');
                          console.log(JSON.stringify(weixinService));
                        },
                        function(){
                          console.log('分享失败');
                        }
                      );
                    },
                    function(){
                      console.log('授权认证失败');
                    }
              );                  
            },
            function(error){
              console.log('获得分享服务失败');
            }
	        )
				})
			}
		}
	}
</script>
<style scoped>
.cover {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 100;
	background: rgba(0,0,0,0.5);
}
.share-list {
	position: absolute;
	left: 0;
	bottom: 0;
	display:flex;
	background:#fff;
	z-index: 110;
	width: 100%;
	padding: .11rem .15rem;
	flex-wrap: wrap;
}
.share-item { 
	margin-right: .24rem;
	margin-bottom: .19rem;
	text-align: center;
}
.text {
	font-family: SourceSansPro-Regular;
	font-size: .12rem;
	color: #999999;
	height: .15rem;
	line-height: .15rem;
}
.img {
	width: .4rem;
	height: .4rem;
	margin: 0 auto .05rem;
}
.img img {
	width: 100%;
}
	@keyframes slideIn {
		0%{transform: translateY(100%);}
		100%{transform: translateY(0%);}
	}
	@keyframes slideOut {
		0%{transform: translateY(0%);}
		100%{transform: translateY(100%);}
	}
	.slide-enter-active {
		animation: slideIn 300ms;
	}
	.slide-leave-active {
		animation: slideOut 300ms;
	}
	@keyframes fadeIn {
		0%{opacity: 0;}
		100%{opacity: 1;}
	}
	@keyframes fadeOut {
		0%{opacity: 1;}
		100%{opacity: 0;}
	}
	.fade-enter-active {
		animation: fadeIn 400ms;
	}
	.fade-leave-active {
		animation: fadeOut 400ms;
	}
</style>