<template>
    <div class="box">
        <div class="header">
            <header>
                <span @click="fan()">〈</span>
                <span>讲师详情</span>
                <span></span>
            </header>
        </div>
        <div class="jj">
            <dl class="js">
                <dt>
                    <img src="../../assets/155.jpg" alt="">
                </dt>
                <dd>
                    <p class="lq">李青 <span>M13</span></p>
                    <p class="sex">女 <span>7年教龄</span></p>
                    <p class="gz">
                        <button v-show="!gzShow" @click="gz()" class="but">关注</button>
                        <button v-show="gzShow" @click="gz()" class="btn">已关注</button>
                    </p>
                </dd>
                <ul>
                    <li v-for="(item,key) in arr" :key="key">
                        {{ item }}
                    </li>
                </ul>
            </dl>
        </div>
        <van-tabs v-model="active" class='tabs'>
            <van-tab title="讲师介绍">
                <ul>
                    <li>
                        <span>教学年龄</span>
                        <span class='qi'>7年</span>
                    </li>
                    <li>
                        <span>授课价格</span>
                        <span class='qi'>200学习币</span>
                    </li>
                    <li>
                        <span class='ls'>老师简介</span>
                        <p>
                            <span class='lsjj'>
                                教学最大的特点就是通俗易懂，幽默风趣，
                                因此也深受同学们的喜爱 毕业于华东师范大学，
                                地理研究生硕士，专业知识毋庸置疑；在职地理老师，
                                外带学生30%A+，40%A，差的学生也在B。；因为能教出成绩也受家长们的信任。
                                教学成果颇多，辅导的学生成绩明显提升。
                            </span>
                        </p>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="主讲课程">
                <div class="cont">
                    <dl @click="jbrXq()">
                        <dt>
                        <p>李老师16号到22号地理大课堂开课啦</p>
                        <van-icon name="clock-o" class="jbr_icon" />
                        <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
                        <p class="jbr_lq">
                            <img src="@/assets/155.jpg" alt="" />
                            李青
                        </p>
                        </dt>
                        <dd>
                        <p>
                            <span>134人已报名</span>
                            <span class="jbr_mf">免费</span>
                        </p>
                        </dd>
                    </dl>
                    <dl @click="jbrXq()">
                        <dt>
                            <p>李老师16号到22号地理大课堂开课啦</p>
                            <van-icon name="clock-o" class="jbr_icon" />
                            <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
                            <p class="jbr_lq">
                                <img src="@/assets/155.jpg" alt="" />
                                李青
                            </p>
                            </dt>
                            <dd>
                            <p>
                                <span>134人已报名</span>
                                <span class="jbr_mf">免费</span>
                            </p>
                            </dd>
                    </dl>
                    <dl @click="jbrXq()">
                        <dt>
                            <p>李老师16号到22号地理大课堂开课啦</p>
                            <van-icon name="clock-o" class="jbr_icon" />
                            <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
                            <p class="jbr_lq">
                                <img src="@/assets/155.jpg" alt="" />
                                李青
                            </p>
                        </dt>
                        <dd>
                            <p>
                                <span>134人已报名</span>
                                <span class="jbr_mf">免费</span>
                            </p>
                        </dd>
                    </dl>
                    <dl @click="jbrXq()">
                        <dt>
                            <p>李老师16号到22号地理大课堂开课啦</p>
                            <van-icon name="clock-o" class="jbr_icon" />
                            <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
                            <p class="jbr_lq">
                                <img src="@/assets/155.jpg" alt="" />
                                李青
                            </p>
                        </dt>
                        <dd>
                            <p>
                                <span>134人已报名</span>
                                <span class="jbr_mf">免费</span>
                            </p>
                        </dd>
                    </dl>
                    <dl @click="jbrXq()">
                        <dt>
                            <p>李老师16号到22号地理大课堂开课啦</p>
                            <van-icon name="clock-o" class="jbr_icon" />
                            <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
                            <p class="jbr_lq">
                                <img src="@/assets/155.jpg" alt="" />
                                李青
                            </p>
                        </dt>
                        <dd>
                            <p>
                                <span>134人已报名</span>
                                <span class="jbr_mf">免费</span>
                            </p>
                        </dd>
                    </dl>
                </div>
            </van-tab>
            <van-tab title="学员评价">
                <div class='xuexi'>
                    <div class='pj'>
                        <div class='xypj'>
                            <img src="../../assets/32.jpg" alt="">
                            <p class="Xing">★★★★★</p>
                        </div>
                        <p class='pl'>
                            <span v-for="(item,key) in arr" :key="key">
                                {{ item }}
                            </span>
                        </p>
                        <p class='nr'>
                            老师讲课声音特好听，节奏紧凑，提神醒脑。很棒
                        </p>
                    </div>
                    <div class='pj'>
                        <div class='xypj'>
                            <img src="../../assets/32.jpg" alt="">
                            <p class="Xing">★★★★★</p>
                        </div>
                        <p class='pl'>
                            <span v-for="(item,key) in arr" :key="key">
                                {{ item }}
                            </span>
                            <span>有责任心</span>
                            <span>分析到位</span>
                        </p>
                        <p class='nr'>
                            老师讲的挺好的，讲解专业，非常感谢
                        </p>
                    </div>
                    <div class='pj'>
                        <div class='xypj'>
                            <img src="../../assets/32.jpg" alt="">
                            <p class="Xing">★★★★★</p>
                        </div>
                        <p class='pl'>
                            <span v-for="(item,key) in arr" :key="key">
                                {{ item }}
                            </span>
                        </p>
                        <p class='nr'>
                            老师讲课声音特好听，节奏紧凑，提神醒脑。很棒
                        </p>
                    </div>
                    <div class='pj'>
                        <div class='xypj'>
                            <img src="../../assets/32.jpg" alt="">
                            <p class="Xing">★★★★★</p>
                        </div>
                        <p class='pl'>
                            <span v-for="(item,key) in arr" :key="key">
                                {{ item }}
                            </span>
                            <span>有责任心</span>
                            <span>分析到位</span>
                        </p>
                        <p class='nr'>
                            老师讲的挺好的，讲解专业，非常感谢
                        </p>
                    </div>
                    <div class='pj'>
                        <div class='xypj'>
                            <img src="../../assets/32.jpg" alt="">
                            <p class="Xing">★★★★★</p>
                        </div>
                        <p class='pl'>
                            <span v-for="(item,key) in arr" :key="key">
                                {{ item }}
                            </span>
                        </p>
                        <p class='nr'>
                            老师讲课声音特好听，节奏紧凑，提神醒脑。很棒
                        </p>
                    </div>
                    <div class='pj'>
                        <div class='xypj'>
                            <img src="../../assets/32.jpg" alt="">
                            <p class="Xing">★★★★★</p>
                        </div>
                        <p class='pl'>
                            <span v-for="(item,key) in arr" :key="key">
                                {{ item }}
                            </span>
                            <span>有责任心</span>
                            <span>分析到位</span>
                        </p>
                        <p class='nr'>
                            老师讲的挺好的，讲解专业，非常感谢
                        </p>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
        <footer>
            <van-button @click="yy">立即预约</van-button>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gzShow:JSON.parse(localStorage.getItem('gz'))||false,
            arr:[
                '深入浅出',
                '言简意赅',
                '幽默风趣',
                '亲和力强'
            ],
            newlist:[],
            active:0,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        gz(){
            if(this.gzShow){
                this.gzShow = false
                this.$toast.success('已取消')
                
            }else{
                this.gzShow = true
                this.$toast.success('已关注')
            }

            localStorage.setItem('gz',JSON.stringify(this.gzShow))
        },
        fan(){
            this.$router.go(-1)
        },
        yy(){
            this.$router.push('/neworder')
        }
    }
};
</script>

<style scoped lang='scss'>
.box{
    width: 3.75rem;
    height: 100%;
    background: #F0F2F5;
    margin-bottom: 0.5rem;
}
.header{
    width: 3.75rem;
    height: 1rem;
    // background: #5081E5;
    background-image: linear-gradient(#61B2FC, #5081E5);
    header{
        color: white;
        font-size: 0.17rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding-right: 0.18rem;
        padding-top: 0.1rem;
    }
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
.jj{
    width: 3.55rem;
    height: 1.28rem;
    background: white;
    border-radius: 0.05rem;
    position: absolute;
    top: 0.43rem;
    left: 0.1rem;
    z-index: 100;
    padding: 10px;
    box-sizing: border-box;
    img{
        width: 0.42rem;
        height: 0.42rem;
        border-radius: 0.5rem;
        float: left;
    }
    .js{
        dt{
            float: left;
            margin-right: 10px;
        }
        dd{
            display: flex;
            .lq{
                margin-top: 0.01rem;
                font-size: 0.15rem;
                span{
                    font-size: 0.12rem;
                    color: #EA7A2F;
                }
            }
            .sex{
                margin-left: -0.58rem;
                margin-top: 0.25rem;
                font-size: 0.1rem;
                color: #B7B7B7;
            }
            .gz{
                width: 2.1rem;
                text-align: right;
                margin-top: 0.05rem;
                margin-left: 0.1rem;
                .but{
                    width: 0.7rem;
                    height: 0.3rem;
                    border-radius: 0.5rem;
                    border: 1px solid #EBEEFE;
                    background: #EBEEFE;
                    font-size: 0.13rem;
                    color: #EB6100;
                }
                .btn{
                    width: 0.7rem;
                    height: 0.3rem;
                    border: none;
                    background: white;
                    outline: none;
                    color: #B7B7B7;
                }
            }
        }
        ul{
            display: flex;
            li{
                flex: 1;
                font-size: 0.13rem;
                padding: 0.05rem 0.1rem;
                background: #FFE4D3;
                color: #EA7A2F;
                margin: 0.05rem 0.05rem;
                border-radius: 0.5rem;
                font-size: 0.1rem;
                text-align: center;
            }
        }
    }
}
.tabs{
    margin-top: 0.85rem;
    ul{
        width: 3.75rem;
        height: 3.3rem;
        background: white;
        box-sizing: border-box;
        li{
            padding: 0.2rem 0.2rem;
            font-size: 0.13rem;
            color: #8C8C8C;
            .qi{
                margin-left: 0.2rem;
            }
            p{
                width: 2.8rem;
                margin-left: 0.66rem;
                margin-top: -0.23rem;
            }
            .lsjj{
                line-height: 0.31rem;
            }
        }
    }
}
.cont {
  width: 3.75rem;
  height: 100%;
  padding: 3px 0;
  box-sizing: border-box;
  margin-bottom: 0.45rem;
    dl{
    width: 3.45rem;
    height: 1.9rem;
    border-radius: 0.05rem;
    background: white;
    margin: 0.15rem auto;
    padding: 0.01rem 0.1rem;
    box-sizing: border-box;
    dt {
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
        }
        img {
        width: 0.35rem;
        height: 0.35rem;
        border-radius: 0.5rem;
        margin-right: 0.07rem;
        }
    }
    dd {
        margin: 0;
        border-top: 0.01rem solid #eee;
        p {
        span {
            font-size: 0.13rem;
            color: rgba(0, 0, 0, 0.45);
        }
        .jbr_mf {
            float: right;
            margin-right: 0.1rem;
            color: #44a426;
            font-size: 0.16rem;
        }
        }
    }
    }
}
.xuexi{
    width: 3.75rem;
    background: white;
    .pj{
        .xypj{
            width: 3.75rem;
            height: 100%;
            display: flex;
            align-items: center;
            img{
                width: 0.3rem;
                height: 0.3rem;
                border-radius: 0.5rem;
                margin: 0 0.17rem;
            }
            .Xing{
                font-size: 0.17rem;
                color: #EA7A2F;
            }
        }
        .pl{
            display: flex;
            flex-wrap: wrap;
            margin-top: -0.07rem;
            margin-left: 0.43rem;
            span{
                display: inline-block;
                width: 0.95rem;
                height: 0.25rem;
                background: #F5F5F5;
                color: #8C8C8C;
                font-size: 0.13rem;
                line-height: 0.27rem;
                margin-left: 0.1rem;
                margin-top: 0.1rem;
                text-align: center;
                border-radius: 0.05rem;
            }
        }
        .nr{
            margin-left: 0.53rem;
            margin-top: -0.06rem;
            font-size: 0.13rem;
            color: #999999;
        }
    }
}

</style>
