<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
        <div v-show="page=='recommended'">
            <h1>推荐</h1>
            
        </div>
        <div v-show="page=='special'">
            <h1>关注的人</h1>
        </div>
        
    </app-content>
</div>

</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
    data(){
        return{
            page:'recommended',
            conten:{
                left:'推荐',
                right:'关注的人',
                show:false,
                rightshow:true,
                arrowright:false,
                showleft:true,
                searchDetails:false
            }
        }
    },
    computed: {
        // ...mapState({
        //     username: (state) => {
        //         return state.user.username;
        //     }
        // }),
        // ...mapGetters({
        //     isLogin: 'user/isLogin'
        // })
        ...mapState('user', [
            'username'
        ]),
        ...mapGetters('user', [
            'isLogin'
        ])
    },
    methods: {
        ...mapMutations('user', [
            'modifyUser'
        ]),
        ...mapActions('user', [
            'modifyUsername'
        ])
    },
    mounted(){
        console.log(this.username, 111);
        console.log(this.isLogin, 'isLogin');
        this.modifyUsername('jdkjf');
        console.log(this.username, 333);
        console.log(this.isLogin, 'isLogin');
        this.$pubsub.$on('show-page',(data)=>{
            this.page = data;
        })
    }
}
</script>