<template>
<div class="pages bg1">
    <app-header :title="conten">
    </app-header>  
    <app-content>
       <ul class="reviewBox">
           <li v-for="(item,index) in reviewData" :key="index">
               <p class="title">
                   <img :src="item.imgSrc" />
                   <span>{{item.user}}</span>
                </p>
                <p class="detail">
                    <span>{{item.info}}</span>
                    <i  class="examine" :class="{notThrough:item.stateClass==false}">{{item.state}}</i>
                </p>
           </li>
       </ul>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'审核',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:2
            },
            reviewData:[
                {imgSrc:'img/xhdpi/headerImg.png',user:'委婉的鱼',info:'照片墙效果设计照片墙效果设计',state:'审核中',stateClass:true},
                {imgSrc:'img/xhdpi/headerImg.png',user:'委婉的鱼',info:'照片墙效果设计照片墙效果设计',state:'审核中',stateClass:true},
                {imgSrc:'img/xhdpi/headerImg.png',user:'委婉的鱼',info:'照片墙效果设计照片墙效果设计',state:'审核中',stateClass:true},
                {imgSrc:'img/xhdpi/headerImg.png',user:'委婉的鱼',info:'照片墙效果设计照片墙效果设计',state:'审核中',stateClass:true},
                {imgSrc:'img/xhdpi/headerImg.png',user:'委婉的鱼',info:'照片墙效果设计照片墙效果设计',state:'未通过',stateClass:false},
               
            ]
        }
    },
}
</script>
<style scoped>
.reviewBox{margin:.1rem .155rem;width:3.29rem;background:#fff;}
.reviewBox li{padding:.06rem 0.07rem 0.105rem;border-bottom:1px solid #979797;}
.reviewBox li .title{display: flex;}
.reviewBox .title img{width:.26rem;height:.26rem;display: inline-block;margin-right:.1rem;border-radius:50%;}
.reviewBox .title span{flex:1;padding-top:.06rem;color:#424242;font-size:.14rem;line-height: .2rem;}
.reviewBox .detail{margin-top:.06rem;height:.22rem;}
.reviewBox .detail span{color:#424242;font-size:.15rem;}
.reviewBox .detail .examine{color:#424242;font-size:.11rem;border:1px solid #979797;border-radius:.12rem;padding:0 .15rem;float:right;line-height:.2rem;}
.reviewBox .detail .notThrough{color:red;}
</style>
