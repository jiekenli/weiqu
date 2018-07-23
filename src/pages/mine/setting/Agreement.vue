<template>
<div class="pages bg2">
    <app-header :title="conten">
    </app-header>
    <app-content id="pageContent">
       <p class="about-list">
           一、微趣不对用户发表的内容的正确性进行保证。<br /><br />
        二、用户在微趣发表的内容仅表明个人的立场和观点，并不代表微趣的立场或观点。发表者需自行对所发表的内容复责，因所发表的内容引发的一切纠纷，由该内容的发表者承担全部法律及连带责任，微趣不承担任何法律及连带责任。<br /><br />
        三、微趣不保证服务一定能满足用户的需求，也不保证服务不会</p>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'用户协议',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                close:true,
                closeInfo:'关闭',
                id:1
            }
        }
    }
}
</script>
<style scoped>

</style>