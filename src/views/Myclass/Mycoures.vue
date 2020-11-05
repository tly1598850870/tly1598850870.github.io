<template>
    <div class="box">
        <header>
            <span @click="onClickLeft">〈</span>
            <span class="title">我的学习</span>
            <van-icon name="calendar-o" size="18" @click="rl()" />
        </header>
        <van-tabs @click="onClick">
            <van-tab v-for="(item,index) in List" :key="index" :title="item.name+'('+item.num+')'" >
                <div  class="kc" @click="bm(i.course_id,i.title)" v-show="item.num!=0" v-for="(i,key) in newList" :key="key">
                    {{ i.title }}
                    <div class="lq">
                        <span>{{ i.start_play_date | time }} | 共{{i.section_num}}课时</span> 
                    </div>
                    <div class="ks">
                        <van-progress
                        stroke-width="3px"
                        color='#eb6100'
                        pivot-text=''
                        :percentage="i.progress_rate" />
                        <span>已学习{{ i.progress_rate }}%</span>
                    </div>
                </div>
                <div class="kong" v-show="item.num==0">
                    <img src="../../assets/课程空.png" alt="">
                    <p>还没有课程，快去选择课程学习吧</p>
                    <van-button type="warning" @click="xzkc()">选择课程</van-button>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            List:[],
            newList:[],
            tab:2,
            type:[],
        };
    },
    created() {

    },
    mounted() {
        this.list();
    },
    methods: {
        async list() {
            let { data } = await this.$Axios.get(`/api/app/myStudy/${this.tab}`);
            // console.log(data)
            this.List = data.data.typeNum
            this.newList = data.data.courseList
            console.log(this.List)
            console.log(this.newList)
        },
        onClickLeft(){
            this.$router.go(-1)
        },
        rl(){
            this.$router.push('/date')
        },
        async on(Tab){
            let { data } = await this.$Axios.get(`/api/app/myStudy/${Tab}`);
            this.List = data.data.typeNum
            this.newList = data.data.courseList
        },
        async onClick(Tab,title) {
            this.tab = this.List[Tab].type
            this.on(this.tab)
        },
        xzkc(){
            this.$router.push('/footer/coures')
        },
        bm(id,title){
            this.$router.push({
                path:'/study',
                query:{
                    id:id,
                    title:title,
                }
            })
        }
    }
};
</script>

<style scoped lang='scss'>
header {
  width: 3.75rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background: white;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 10px;
  .title{
    font-size: 0.17rem;
    margin-left: 0.13rem;
  }
}
.van-tabs{
    margin-top: 0.52rem;
}
.kong{
    width: 3.75rem;
    text-align: center;
    padding: 1.3rem 0;
    box-sizing: border-box;
    img{
        width: 1.5rem;
        height: 1.5rem;
    }
    p{
        color: #8C8C8C;
        font-size: 0.15rem;
    }
    .van-button{
        height: 0.31rem;
        background: #EB6100;
        border-radius: 0.03rem;
        font-size: 0.13rem;
        margin-top: 0.2rem;
    }
}
.sp{
    margin-bottom: 0.43rem;
}
.kc{
    width: 3.4rem;
    border: 1px solid #E9E9E9;
    border-radius: 0.03rem;
    margin: 0.1rem auto;
    padding: 15px 10px;
    box-sizing: border-box;
    .hf{
        display: flex;
        span{
            padding: 0px 5px;
            line-height: 0.23rem;
        }
        .dian{
            color: #EB6100;
            font-weight: 600;
            font-size: 0.23rem;
            margin-top: -5px;
        }
        .hui{
            color: white;
            font-size: 0.1rem;
            color: #EA7A2F;
        }
        .one{
            font-size: 0.1rem;
            color: #595959;
        }
    }
    .lq{
        padding: 0.07rem 0;
        padding-bottom: 0.2rem;
        box-sizing: border-box;
        display: flex;
        font-size: 0.13rem;
        span{
            padding: 0 0.07rem;
            color: #8C8C8C;
        }
    }
    .ks{
        width: 2.5rem;
        position: relative;
        span{
            position: absolute;
            right: -0.7rem;
            top: -0.07rem;
            font-size: 0.1rem;
            color: #8C8C8C;
        }
    }
    // .ks{
    //     display: flex;
    //     // justify-content: space-between;
    //     align-items: center;
    //     font-size: 0.12rem;
    //     box-sizing: border-box;
    //     padding: 0 5px;
    //     color: #595959;
    //     margin-top: -10px;
    //     .jdt{
    //         // width: 2.3rem;
    //         width: 1rem;
    //         height: 0.02rem;
    //         border: 1px solid #F5F5F5;
    //         background: #F5F5F5;
    //         margin-right: 0.15rem;
    //     }
    // }
}
</style>
