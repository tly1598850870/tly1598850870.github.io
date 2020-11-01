<template>
    <div class="box">
        <header>
            <span @click="onClickLeft">〈</span>
            <span v-show="!isShow">{{ title }}</span>
            <span v-show="isShow">{{ txt1 }}</span>
            <span v-show="isShow">{{ txt2 }}</span>
            <span v-show="isShow">{{ txt3 }}</span>
            <van-icon name="share-o" size="18" @click="fx()" />
        </header>
        <div class="jbrcont">
            <div class="cont">
                <van-overlay :show="show" @click="fx()">
                    <div class="wrapper">
                        <div class="block">
                            <p>分享</p>
                            <img src="@/assets/ewm.png" alt="">
                        </div>
                    </div>
                </van-overlay>
            </div>
            <div class="content">
                <dl v-for="(item,key) in newList" :key='key'>
                    <dt>
                        <p>
                            <span class="lls">{{ item.title }}</span>
                            <span v-show="!scShow" class="xing" @click="sc()">☆</span>
                            <span v-show="scShow" class="xing" @click="sc()">★</span>
                        </p>
                        <span class="jbr_mf">
                            <img src="@/assets/money.png" alt="">
                            {{ item.total_periods.toFixed(2) }}
                        </span>
                        <p>
                            <span>共{{item.sales_num}}课时 | {{ item.brows_num }}人已报名</span>
                        </p>
                        <span>开课时间: {{ item.start_play_date | time }}</span>
                    </dt>
                    <dd></dd>
                </dl>
            </div>
            <div class="jbrJxtd">
                <p>教学团队</p>
                <p class="jbr_lq" @click="lqxq"  v-for="(item,key) in newList" :key='key'>
                    <img :src="item.teachers_list[0].teacher_avatar" alt="" /><br>
                    <span>{{ item.teachers_list[0].teacher_name }}</span>
                </p>
            </div>
            <div class="kcjs">
                <p>课程介绍</p>
            </div>

            <div class="kcdg">
                <p id="dg">课程大纲</p>
                <div class="hf" @click="bm()">
                    <span class="dian">·</span>
                    <span class="hui">回放</span>
                    <span class="one">第一讲第一课时</span>
                </div>
                <div class="lq" @click="bm()">
                    <span>李青</span>
                    <span>03月16日 18:30 - 19:30</span>
                </div>
                <div class="hf" @click="bm()">
                    <span class="dian">·</span>
                    <span class="hui">回放</span>
                    <span class="one">第一讲第二课时</span>
                </div>
                <div class="lq" @click="bm()">
                    <span>李青</span>
                    <span>03月16日 18:30 - 19:30</span>
                </div>
                <div class="hf" @click="bm()">
                    <span class="dian">·</span>
                    <span class="hui">回放</span>
                    <span class="one">第二讲第一课时</span>
                </div>
                <div class="lq" @click="bm()">
                    <span>李青</span>
                    <span>03月16日 18:30 - 19:30</span>
                </div>
                <div class="hf" @click="bm()">
                    <span class="dian">·</span>
                    <span class="hui">回放</span>
                    <span class="one">第二讲第二课时</span>
                </div>
                <div class="lq" @click="bm()">
                    <span>李青</span>
                    <span>03月16日 18:30 - 19:30</span>
                </div>
                <div class="hf" @click="bm()">
                    <span class="dian">·</span>
                    <span class="hui">回放</span>
                    <span class="one">第二讲第三课时</span>
                </div>
                <div class="lq" @click="bm()">
                    <span>李青</span>
                    <span>03月16日 18:30 - 19:30</span>
                </div>
                <div class="hf" @click="bm()">
                    <span class="dian">·</span>
                    <span class="hui">回放</span>
                    <span class="one">第二讲第四课时</span>
                </div>
                <div class="lq" @click="bm()">
                    <span>李青</span>
                    <span>03月16日 18:30 - 19:30</span>
                </div>
                <div class="hf" @click="bm()">
                    <span class="dian">·</span>
                    <span class="hui">回放</span>
                    <span class="one">第二讲第五课时</span>
                </div>
                <div class="lq" @click="bm()">
                    <span>李青</span>
                    <span>03月16日 18:30 - 19:30</span>
                </div>
                <div class="hf" @click="bm()">
                    <span class="dian">·</span>
                    <span class="hui">回放</span>
                    <span class="one">第二讲第六课时</span>
                </div>
                <div class="lq" @click="bm()">
                    <span>李青</span>
                    <span>03月16日 18:30 - 19:30</span>
                </div>
            </div>
            <div class="kcpl">
                <p class="pj">课程评论</p>
                <div v-show="!listShow" class="pl" v-for="(item,key) in $store.state.pl" :key="key">
                    <img src="@/assets/177.jpg" alt="">
                    <p class="name">power</p>
                    <van-rate :touchable='false' v-model="item.val" color='#EA7A2F' void-color='#EA7A2F' />
                    <p class="sj">2020-04-23 14:56</p>
                    <p class="nr">{{ item.title }}</p>
                </div>
                <div v-show="listShow" class="zwpl">
                    <img src="../../assets/zwpl.png" alt="">
                    <p>暂无评论</p>
                </div>
            </div>
        </div>
        <footer>
            <van-button v-show="!bmxx" @click="ljbm">立即报名</van-button>
            <van-button v-show="bmxx" @click="xx">立即学习</van-button>
        </footer>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data() {
        return {
            show:false,
            title:'课程详情',
            // txt:'课程介绍 课程大纲 课程评论',
            txt1:'课程介绍 ',
            txt2:'课程大纲 ',
            txt3:'课程评论 ',
            isShow:false,
            scShow:JSON.parse(localStorage.getItem('sc'))||false,
            bmxx:JSON.parse(localStorage.getItem('bm'))||false,
            newList:[],
            listShow:false,
            list:[],
        };
    },
    created() {

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.pl()
        this.newlist()
        this.kcpl()
    },
    methods: {
        kcpl(){
            console.log(this.$store.state.pl)
            if(this.$store.state.pl.length == 0){
                this.listShow = true
            }
        },
        async pl(){
            let { data } = await this.$Axios.post('/api/app/courseChapter')
            console.log(data)
        },
        onClickLeft(){
            this.$router.go(-1)
        },
        fx(){
            this.show = !this.show
        },
        bm(){
            if(sessionStorage.getItem('token') != null){
                this.$toast('回放未生成')
            }else{
                this.$toast('请先报名')
            }
        },
        ljbm(){
            if(!this.bmxx){
                this.$toast.success('成功')
                this.bmxx = true
                localStorage.setItem('bm',JSON.stringify(this.bmxx))
            }
        },
        xx(){
            this.$router.push({
                path:'/study',
                query:{
                    title:'李老师16号到22号地理大课堂开课啦'
                }
            })
        },
        sc(){
            if(sessionStorage.getItem('token') != null){
                if(this.scShow){
                    this.scShow = false
                    this.$toast('取消收藏')
                    
                }else{
                    this.scShow = true
                    this.$toast('收藏成功')
                }
            }else{
                this.$router.push('/')
            }
            localStorage.setItem('sc',JSON.stringify(this.scShow))
        },
        lqxq(){
            if(sessionStorage.getItem('token') != null){
                this.$router.push('/teacher')
            }else{
                this.$router.push('/')
            }
        },
        newlist(){
            this.newList.push(JSON.parse(localStorage.getItem('newlist')))
            console.log(this.newList)

        },
        handleScroll() {
            //滚动条滚动时，距离顶部的距离
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // 判断是否下拉了所需长（高）度，若满足，则返回顶部图标出现
            if (this.scrollTop > 80) {
                this.isShow = true
            } else {
                this.isShow = false
            }
            console.log(this.scrollTop)
        },
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
};
</script>

<style scoped lang='scss'>
.box{
    width: 3.75rem;
    height: 100%;
    background: #F0F2F5;
    display: flex;
    flex-direction: column;
}
.jbrcont{
    overflow: hidden;
    flex: 1;
    .jbrbox{
        min-height: 101%;
    }
}
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
}
footer{
  width: 3.75rem;
  position: fixed;
  bottom: 0;
  .van-button{
    width: 3.75rem;
    height: 0.45rem;
    background: #EB6100;
    color: white;
    font-size: 0.18rem;
  }
}
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 2.4rem;
    height: 2.3rem;
    background-color: #fff;
    text-align: center;
    border-radius: 0.05rem;
    z-index: 100;
  }
.content {
  width: 3.75rem;
  padding: 3px 0;
  box-sizing: border-box;
  margin-top: 30px;
}
dl {
  width: 3.75rem;
  height: 1.6rem;
  background: white;
  margin: 14px auto;
  padding: 1px 10px;
  box-sizing: border-box;
  margin-top: 0.3rem;
  dt {
    .jbr_icon {
      font-size: 0.13rem;
      color: #d5d5d5;
    }
    .lls{
        font-size: 0.16rem;
        color: black;
    }
    .xing{
        font-size: 0.23rem;
        float: right;
        margin-top: -0.05rem;
    }
    .xing:nth-child(3){
        color: #EB6100;
    }
    span {
      font-size: 0.13rem;
      color: #666666;
    }
    .jbr_mf {
        margin-right: 0.1rem;
        color: #EB6100;
        font-size: 0.16rem;
    }
  }
}
.jbrJxtd{
    width: 3.75rem;
    height: 1.5rem;
    background: white;
    margin-top: -5px;
    padding: 1px 10px;
    box-sizing: border-box;
    .jbr_lq {
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.45);
      margin-left: 17px;
    }
    img {
      width: 0.39rem;
      height: 0.39rem;
      border-radius: 0.5rem;
      margin-right: 0.07rem;
    }
}
.kcjs{
    width: 3.75rem;
    height: 0.7rem;
    background: white;
    box-sizing: border-box;
    padding: 0.01rem 0.1rem;
    margin-top: 0.12rem;
    margin-bottom: 0.1rem;
}
.kcdg{
    width: 3.75rem;
    background: white;
    box-sizing: border-box;
    padding: 0.01rem 0.1rem;
    margin-top: 0.12rem;
    margin-bottom: 0.1rem;
    .hf{
        display: flex;
        span{
            padding: 0px 10px;
        }
        .dian{
            color: #EB6100;
            font-weight: 600;
            font-size: 0.2rem;
        }
        .hui{
            line-height: 0.23rem;
            color: white;
            font-size: 0.1rem;
            background: #EA7A2F;
            border-radius: 0.03rem;
        }
        .one{
            font-size: 0.1rem;
            color: #595959;
        }
    }
}
.lq{
    padding: 0.07rem 0;
    padding-bottom: 0.2rem;
    box-sizing: border-box;
    display: flex;
    font-size: 0.11rem;
    span{
        padding: 0 0.07rem;
        color: #8C8C8C;
    }
}
.kcpl{
    width: 3.75rem;
    background: white;
    box-sizing: border-box;
    padding: 0.01rem 0.1rem;
    margin-top: 0.12rem;
    margin-bottom: 0.47rem;
    img{
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 0.5rem;
      margin-right: 0.07rem;
    }
    .pl{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        p{
            padding: 0px 10px;
            font-size: 0.14rem;
        }
        .sj{
            color: #999999;
            font-size: 0.13rem;
            width: 1.2rem;
            text-align: right;
        }
        .nr{
            margin-top: 0.01rem;
            margin-left: 0.4rem;
            font-size: 0.13rem;
            color: #999999;
        }
    }
    .zwpl{
        width: 3.75rem;
        img{
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 0;
            margin-left: 1.1rem;
        }
        p{
            margin-left: 1.5rem;
            margin-top: -0.05rem;
            font-size: 0.15rem;
            color: #8C8C8C;
        }
    }

}
</style>
