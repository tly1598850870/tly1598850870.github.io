<template>
    <div class="box">
        <van-nav-bar
        title="我的收藏"
        left-arrow
        @click-left="onClickLeft"
        :fixed='true'
        />
        <div class="cont">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <dl v-for='(item,key) in newList' :key='key'>
                <span class="xing" @click="qxsc(item.collect_id)">★</span>
                <dt @click="jbrXq(item.course_id,item)">
                <p class="title">{{item.title}}</p>
                <van-icon name="clock-o" class="jbr_icon" />
                <span>{{ item.start_play_date | time }} | 共{{item.total_periods}}课时</span>
                <div class="jbr_lq">
                    <img :src="item.teachersAvatar" alt="" />
                    <span>{{ item.teachers }}</span>
                </div>
                </dt>
                <dd @click="jbrXq(item.course_id,item)">
                <p>
                    <span>{{ item.sales_num }}人已报名</span>
                    <span class="jbr_jg" :style="{color:item.price>0?'red':'red'}">
                    <img src="@/assets/money.png" alt="" v-show="item.price>0">
                    <img src="@/assets/money.png" alt="" v-show="item.price==0">
                    {{ item.price>0?(item.price/100).toFixed(2):item.price }}
                    </span>
                </p>
                </dd>
            </dl>
            </van-list>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newList:[],
            loading: false,
            finished: false,
        };
    },
    created() {

    },
    mounted() {
        this.newlist()
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        async newlist(){
            let { data } = await this.$Axios.get('/api/app/collect?page=1&limit=10&type=1')
            console.log(data)
            this.newList = data.data.list
        },
         onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.newList.length >= this.newList.length) {
                this.finished = true;
                }
            }, 1000);
        },
        jbrXq(id,item){
            this.$router.push({
                path:'/cod',
                query:{
                    id:id,
                    item:item
                }
            })
        },
        async qxsc(id){
            let { data } = await this.$Axios.put(`/api/app/collect/cancel/${id}/1`)
            console.log(data)
            this.$toast('取消收藏成功')
            setTimeout(()=>{
                this.newlist()
            },1000)
        }
    }
};
</script>

<style scoped lang='scss'>
.box{
    width: 3.75rem;
    height: 800px;
    // height: 100%;
    background: #F0F2F5;
}
.cont {
  width: 3.75rem;
  height: 100%;
  padding: 3px 0;
  box-sizing: border-box;
  margin-bottom: 52px;
  margin-top: 0.46rem;
}
dl {
  width: 3.45rem;
  border-radius: 5px;
  background: white;
  margin: 15px auto;
  padding: 0.01rem 10px;
  box-sizing: border-box;
  .xing{
    font-size: 0.2rem;
    float: right;
    margin-top: 0.05rem;
    color: #EB6100;
}
  dt {
    .title{
      font-size: 0.16rem;
      margin: 10px 0;
    }
    .jbr_icon {
      font-size: 0.13rem;
      color: #d5d5d5;
    }
    span {
      font-size: 0.13rem;
      color: #666666;
      margin-left: 0.07rem;
    }
    .jbr_lq {
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.45);
      display: flex;
      align-items: center;
      padding: 0.1rem 0;
      position: relative;
      .p{
        width: 0.63rem;
        height: 0.5rem;
        position: absolute;
        right: 0.1rem;
        top: -0.31rem;
        img{
          width: 0.63rem;
          height: 0.5rem;
        }
      }
    }
    img {
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 0.5rem;
      margin-right: 0.07rem;
    }
  }
  dd {
    margin: 10px 0;
    border-top: 0.01rem solid #eee;
    p {
      padding: 0.05rem 0;
      box-sizing: border-box;
      line-height: 0rem;
      span {
        font-size: 0.12rem;
        color: rgba(0, 0, 0, 0.45);
      }
      .jbr_mf {
        float: right;
        margin-right: 0.1rem;
        color: #44a426;
        font-size: 0.16rem;
      }
      .jbr_jg{
        float: right;
        margin-right: 0.1rem;
        color: red;
        font-size: 0.16rem;
      }
    }
  }
}
</style>
