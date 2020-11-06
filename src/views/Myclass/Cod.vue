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
                            <!-- <img src="@/assets/ewm.png" alt=""> -->
                            <qriously :value="initQCode" :size="150" />
                        </div>
                    </div>
                </van-overlay>
            </div>
            <div class="content">
                <dl v-for="(item,key) in newList" :key='key'>
                    <dt>
                        <p>
                            <span class="lls">{{ item.title }}</span>
                            <span v-show="collect == 0" class="xing" @click="sc()">☆</span>
                            <span v-show="collect == 1" class="xing" @click="sc()">★</span>
                        </p>
                        <span class="jbr_mf" :style="{color:item.price>0?'red':'#EB6100'}" >
                            <img src="@/assets/money.png" alt="" v-show="item.price>0">
                            {{ item.price>0?(item.price/100).toFixed(2):'免费' }}
                        </span>
                        <p>
                            <span>共{{item.total_periods}}课时 | {{ item.sales_num }}人已报名</span>
                        </p>
                    </dt>
                    <dd></dd>
                </dl>
            </div>
            <div class="jbrJxtd">
                <p>教学团队</p>
                <p class="jbr_lq" @click="lqxq(item.teacher_id)"  v-for="(item,key) in teacher" :key='key'>
                    <img :src="item.avatar" alt="" /><br>
                    <span>{{ item.teacher_name }}</span>
                </p>
            </div>
            <div class="kcjs">
                <p>课程介绍</p>
                <p v-for="(item,key) in newList" :key='key'>
                    <span v-html="item.course_details"></span>
                </p>
            </div>

            <div class="kcdg">
                <p id="dg">课程大纲</p>
                <div v-for="(item,key) in Video" :key='key'>
                    <div class="hf" @click="bm(item)">
                        <span class="dian">·</span>
                        <span class="hui" v-show="item.is_playback == 0">回放</span>
                        <span class="one">{{ item.periods_title }}</span>
                    </div>
                    <div class="lq" @click="bm(item)" v-show="item.is_playback == 0">
                        <span>{{ item.teachers.length > 0?item.teachers[0].teacher_name:'' }}</span>
                        <span>{{ item.start_play }}</span>
                    </div>
                </div>
            </div>
            <div class="kcpl">
                <p class="pj">课程评论</p>
                <div v-show="listShow==false" class="pl" v-for="(item,key) in Pl" :key="key">
                    <img :src="item.avatar" alt="">
                    <span class="name">{{ item.nickname }}</span>
                    <van-rate size='14px' :touchable='false' v-model="item.grade" color='#EA7A2F' void-color='#EA7A2F' />
                    <p class="sj">{{ item.created_at | formatDate }}</p>
                    <p class="nr">{{ item.content }}</p>
                </div>
                <div v-show="listShow==true" class="zwpl">
                    <img src="../../assets/zwpl.png" alt="">
                    <p>暂无评论</p>
                </div>
            </div>
        </div>
         <van-overlay :show="flag" @click="flag = false">
            <div class="wrapper1" @click.stop>
            <div class="block1" >
                <span class="cuo" @click="cuo()">X</span>
                <img src="../../assets/登录飞机.png" alt="">
                <p>赶紧登录一下吧</p>
                <p class="yy">立即预约一对一辅导，浏览更多视频课程~</p>
                <button @click="dl()">立即登录</button>
            </div>
            </div>
        </van-overlay>
        <footer>
            <!-- <van-button v-show="!bmxx" @click="ljbm">立即报名</van-button> -->
            <van-button @click="ljbm">
                {{ buy == 1?'立即学习':'立即报名' }}
            </van-button>
            <!-- <van-button v-show="bmxx" @click="xx">立即学习</van-button> -->
        </footer>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data() {
        return {
            flag:false,
            show:false,
            title:'课程详情',
            // txt:'课程介绍 课程大纲 课程评论',
            txt1:'课程介绍 ',
            txt2:'课程大纲 ',
            txt3:'课程评论 ',
            isShow:false,
            scShow:JSON.parse(localStorage.getItem('sc'))||false,
            // bmxx:JSON.parse(localStorage.getItem('bm'))||false,
            newList:[],
            listShow:false,
            list:[],
            xid:0,
            teacher:[],
            Video:[],
            Pl:[],
            item:[],
            free:0,
            buy:0,
            price:0,
            istitle:'',
            cid:0,
            collect:0,
            qxid:0,
            bf:'',
            vid:'',
            initQCode:'https://www.jianshu.com/p/21aadfa95e1f',
        };
    },
    created() {

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.xid = this.$route.query.id
        this.item = this.$route.query.item
        console.log(this.item)
        if(this.item.hasOwnProperty('has_buy') == false){
            this.buy = 1
            console.log(this.buy)
        }else{
            this.buy = this.item.has_buy
            console.log(this.buy)
        }
        this.pl()
        this.newlist()
        this.video()
        // this.bm()
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        fx(){
            this.show = !this.show
        },
        async bm(item){
            let { data } = await this.$Axios.get('/api/app/getPcRoomCode/course_id=287/chapter_id=933')
            console.log(data)
            console.log(item)
            if(sessionStorage.getItem('token') != null){
                if(this.buy == 0){
                    if(this.price > 0){
                        this.$toast('请购买之后观看')
                        return false
                    }else{
                        this.$toast('请先报名')
                        return false
                    }
                }else{
                    if(this.bf == 1){
                        if(item.datum.length == 0){
                            this.vid = 0
                        }else{
                            this.vid = item.datum[0].course_basis_id
                        }
                        this.$router.push({
                            path:'myvideo',
                            query:{
                                videoid:item.video_id,
                                id:this.vid
                            }
                        })
                        return false
                    }else{
                        this.$toast(data.msg)
                        return false
                    }
                }
            }else{
                this.$router.push('/login')
            }
        },
        async ljbm(){
            if(sessionStorage.getItem('token') != null){
                if(this.buy == 0){
                    if(this.price > 0){
                        this.$router.push({
                            path:'/bmfk',
                            query:{
                                id:this.xid
                            }
                        })
                    }else{
                        let { data } = await this.$Axios.post('/api/app/order/downOrder',{
                            shop_id: this.xid,
                            type: 3
                        })
                        console.log(data)
                        if(data.code == 200){
                            let { data } = await this.$Axios.get(`/api/app/courseInfo/basis_id=${this.xid}`)
                            console.log(data)
                            this.buy = data.data.info.is_buy
                            this.$toast.success('成功')
                        }else{
                            this.$toast.success(data.msg)
                        }
                    }
                }else{
                    this.$router.push({
                        path:'/study',
                        query:{
                            id:this.xid,
                            title:this.istitle
                        }
                    })
                }
            }else{
                this.$router.push('/login')
            }
        },
        async sc(){
            if(sessionStorage.getItem('token') != null){
                if(this.collect == 1){
                    let { data } = await this.$Axios.put(`/api/app/collect/cancel/${this.qxid}/1`)
                    let { data:res } = await this.$Axios.get(`/api/app/courseInfo/basis_id=${this.xid}`)
                    this.collect = res.data.info.is_collect
                    this.scShow = false
                    this.$toast('取消收藏')
                    
                }else{
                    let { data } = await this.$Axios.post('/api/app/collect',{
                        course_basis_id: this.xid,
                        type: 1
                    })
                    let { data:res } = await this.$Axios.get(`/api/app/courseInfo/basis_id=${this.xid}`)
                    this.collect = res.data.info.is_collect
                    this.scShow = true
                    this.$toast('收藏成功')
                }
            }else{
                this.flag = true
            }
            
            // if(sessionStorage.getItem('token') != null){
            //     if(this.scShow){
            //         this.scShow = false
            //         this.$toast('取消收藏')
                    
            //     }else{
            //         this.scShow = true
            //         this.$toast('收藏成功')
            //     }
            // }else{
            //     this.$router.push('/')
            // }
            // localStorage.setItem('sc',JSON.stringify(this.scShow))
        },
        cuo(){
            this.flag = false
        },
        dl(){
            this.$router.push('/login')
        },
        lqxq(id){
            if(sessionStorage.getItem('token') != null){
                this.$router.push({
                    path:'/teacher',
                    query:{
                        id:id
                    }
                })
            }else{
                this.$router.push('/login')
            }
        },
        async newlist(){
            let { data } = await this.$Axios.get(`/api/app/courseInfo/basis_id=${this.xid}`)
            // console.log(data)
            this.newList.push(data.data.info)
            console.log(this.newList)
            this.collect = this.newList[0].is_collect
            this.qxid = this.newList[0].collect_id
            this.buy = this.newList[0].is_buy
            this.teacher = data.data.teachers
            this.price = this.newList[0].price
            this.istitle = this.newList[0].title
        },
        async video(){
            let { data } = await this.$Axios.post(`/api/app/courseChapter/`,{id:this.xid})
            // console.log(data)
            this.Video = data.data
            console.log(this.Video)
            this.bf = this.Video[0].is_playback
        },
        async pl(){
            let { data } = await this.$Axios.post(`/api/app/courseComment`,{id:this.xid,page: 1,limit: 10})
            // console.log(data)
            this.Pl = data.data.list
            // console.log(this.Pl)
            if(this.Pl.length == 0){
                this.listShow = true
            }else{
                this.listShow = false
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
            // console.log(this.scrollTop)
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
        width: 3.3rem;
        display: block;
        font-size: 0.16rem;
        color: black;
    }
    .xing{
        font-size: 0.23rem;
        float: right;
        margin-top: -0.4rem;
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
    // height: 1.5rem;
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
    background: white;
    box-sizing: border-box;
    padding: 0.01rem 0.1rem;
    margin-top: 0.12rem;
    font-size: 0.14rem;
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
        padding: 0.07rem 0;
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
            padding: 0rem 0.05rem;
            line-height: 0.22rem;
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
    margin-left: 0.2rem;
    margin-top: -0.1rem;
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
            width: 1rem;
        }
        .sj{
            width: 0.8rem;
            color: #999999;
            font-size: 0.13rem;
        }
        .nr{
            width: 3rem;
            margin-top: 0.01rem;
            margin-left: 0.4rem;
            font-size: 0.13rem;
            color: #999999;
        }
        .name{
            font-size: 0.13rem;
            margin-right: 0.05rem;
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
.wrapper1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block1 {
  width: 2.83rem;
  height: 3.45rem;
  background-color: #fff;
  z-index: 10000;
  border-radius: 0.05rem;
  .cuo{
    float: right;
    margin: 0.1rem 0.1rem;
    font-size: 0.15rem;
    color: #8C8C8C;
  }
  img{
    width: 2.83rem;
    height: 1.8rem;
    margin-top: -0.1rem;
  }
  p{
    margin-left: 0.85rem;
    font-size: 0.15rem;
  }
  .yy{
    margin-left: 0.27rem;
    margin-top: -0.13rem;
    font-size: 0.1rem;
    color: #999999;
  }
  button{
    width: 2.35rem;
    height: 0.4rem;
    border-radius: 0.5rem;
    border: #EB6100;
    background: #EB6100;
    color: white;
    margin-left: 0.27rem;
    margin-top: 0.12rem;
    font-size: 0.15rem;
  }
}
</style>
