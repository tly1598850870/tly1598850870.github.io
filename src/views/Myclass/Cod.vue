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
                <dl>
                    <dt>
                        <p>
                            <span class="lls">李老师16号到22号地理大课堂开课啦</span>
                            <span v-show="!scShow" class="xing" @click="sc()">☆</span>
                            <span v-show="scShow" class="xing" @click="sc()">★</span>
                        </p>
                        <span class="jbr_mf">免费</span>
                        <p>
                            <span>共8课时 | 134人已报名</span>
                        </p>
                        <span>开课时间: 020.03.16 18:30 - 2020.03.22 15:00</span>
                    </dt>
                    <dd></dd>
                </dl>
            </div>
            <div class="jbrJxtd">
                <p>教学团队</p>
                <p class="jbr_lq">
                <img src="@/assets/155.jpg" alt="" /><br>
                李青
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
                <p class="pl">课程评论</p>
                <div class="pl">
                    <img src="@/assets/177.jpg" alt="">
                    <p class="name">power</p>
                    <p class="Xing">★★★★★</p>
                    <p class="sj">2020-04-23 14:56</p>
                </div>
                <p class="nr">今天写完静态页面</p>
                <div class="pl">
                    <img src="@/assets/155.jpg" alt="">
                    <p class="name">二珂</p>
                    <p class="Xing">★★★☆☆</p>
                    <p class="sj">2020-07-23 18:06</p>
                </div>
                <p class="nr">今天发新专辑</p>
                <div class="pl">
                    <img src="@/assets/13.jpg" alt="">
                    <p class="name">ys</p>
                    <p class="Xing">★★★★☆</p>
                    <p class="sj">2020-05-25 17:31</p>
                </div>
                <p class="nr">一起进步</p>
                <div class="pl">
                    <img src="@/assets/32.jpg" alt="">
                    <p class="name">魏巍</p>
                    <p class="Xing">★★☆☆☆</p>
                    <p class="sj">2020-08-13 20:37</p>
                </div>
                <p class="nr">街拍吧</p>
                <div class="pl">
                    <img src="@/assets/35.jpg" alt="">
                    <p class="name">jsy</p>
                    <p class="Xing">★☆☆☆☆</p>
                    <p class="sj">2020-07-13 16:40</p>
                </div>
                <p class="nr">同意楼上</p>
                <div class="pl">
                    <img src="@/assets/59.jpg" alt="">
                    <p class="name">gcj</p>
                    <p class="Xing">★★★★☆</p>
                    <p class="sj">2020-08-15 13:01</p>
                </div>
                <p class="nr">风景挺好...</p>
            </div>
        </div>
        <footer>
            <van-button>立即报名</van-button>
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
            scShow:false,
        };
    },
    created() {

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.pl()
    },
    methods: {
        async pl(){
            // let { data } = await this.$Axios.post('/api/app/teacher/comment')
            // console.log(data)
        },
        onClickLeft(){
            this.$router.go(-1)
        },
        fx(){
            this.show = !this.show
        },
        bm(){
            this.$toast('请先报名')
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
    // directives:{
    //     drag:{

    //     }
    // }
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
        p{
            padding: 0px 10px;
            font-size: 0.14rem;
        }
        .Xing{
            font-size: 0.2rem;
            color: #EB6100;
        }
        .sj{
            color: #999999;
            font-size: 0.13rem;
        }
    }
    .nr{
        margin-top: -10px;
        margin-left: 45px;
        font-size: 0.13rem;
        color: #999999;
    }
}
</style>
