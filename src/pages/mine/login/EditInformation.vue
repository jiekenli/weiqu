<template>
<div>
    
<div class="pages bg1">
    <app-header :title="conten" >
    </app-header>
    <app-content  id="pageContent">
        <div class="headInfo">
            <img src="img/xhdpi/headerImg.png"  />
            <p>头像会用作公开资料</p>
        </div>
        <ul class="edit-info">
            <li v-for="(item,i) in editList" :key="i" @click="editInfoAction(i)">
                <span>{{item}}:</span>
                <p class="list-info">ddddd</p>
                <img  src="img/xhdpi/right copy 48.png"></li>
        </ul>
    </app-content>
</div>
    <filter-content v-show="isShow==0">1nihao a a aa</filter-content>
    <!-- <filter-content v-show="isShow==1">2nihao a a aa</filter-content> -->
    <!-- <filter-content v-show="isShow==2">3nihao a a aa</filter-content> -->
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'编辑资料',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:1
            },
            isShow:-1,
            editList:['昵称','性别','生日','个人简介']
        }
    },
    methods:{
        editInfoAction(i){
            this.$pubsub.$emit("show-con");
             this.isShow=i;
             console.log(i)
        }
        //   openPicker() {
            // this.$refs.picker.open();
        // }
    }
}
</script>
<style scoped>
.headInfo{width:100%;background:#fff;padding-top:0.3rem;box-sizing: border-box;}
.headInfo img{width:1.25rem;height:1.25rem;display: block;margin:0 auto;border-radius:50%;}
.headInfo p{font-size:0.14rem;color:#424242;text-align: center;padding:0.16rem 0 0.15rem;}
.edit-info {margin-top:0.1rem;padding: 0 0.15rem;box-sizing: border-box;background:#fff;}
.edit-info li{height: 0.46rem;line-height: 0.46rem; border-bottom:1px dotted #979797;  color: #333333;     font-size: 0.15rem;display: flex;}

.edit-info span{flex:1;display: block;}
.edit-info img{display: none; width: 0.15rem; height: 0.15rem; padding-top: 0.15rem;}
.edit-info .list-info{float:right;}

</style>