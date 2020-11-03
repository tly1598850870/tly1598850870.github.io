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
            <dl class="js" v-for="(item,key) in lslist" :key="key">
                <dt>
                    <img :src="item.avatar" alt="">
                </dt>
                <dd>
                    <p class="lq">{{ item.teacher_name }} <span>{{ item.level_name }}</span></p>
                    <p class="sex">{{ item.sex == 0?"男":'女' }} 
                        <span>{{ item.teach_age }}年教龄</span>
                    </p>
                    <p class="gz">
                        <button v-show="flag==2" @click="gz(item.id)" class="but">关注</button>
                        <button v-show="flag==1" @click="gz(item.id)" class="btn">已关注</button>
                    </p>
                </dd>
                <ul>
                    <li v-for="(item,key) in lslist[0].tag_content" :key="key">
                        {{ item }}
                    </li>
                </ul>
            </dl>
        </div>
        <van-tabs v-model="active" class='tabs'>
            <van-tab title="讲师介绍">
                <ul>
                    <li v-for="(item,key) in jslist.attr" :key="key">
                        <span>{{ item.attr_name }}</span>
                        <span class='qi'>{{ item.attr_value[0].attr_value_name }}</span>
                    </li>
                    <li>
                        <span class='ls'>老师简介</span>
                        <p>
                            <span class='lsjj'>
                                {{ jslist.intro }}
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
            <van-button @click="yy()">立即预约</van-button>
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
            xid:0,
            jslist:[],
            lslist:[],
            cid:0,
            flag:JSON.parse(localStorage.getItem('gz'))||2,
            // arrid:JSON.parse(localStorage.getItem('arrid'))||[],
            // flag:2,
        };
    },
    created() {

    },
    mounted() {
        this.xid = this.$route.query.id
        // console.log(this.xid)

        this.jsList();
        this.lsList();
    },
    methods: {
        gz(id){
            this.$Axios.get(`/api/app/teacher/collect/${id}`).then((res) => {
                console.log(res)
                // let obj ={
                //     id:id
                // }
                this.flag = res.data.data.flag

                if(this.flag == 1){
                    this.flag = 1
                    this.$toast.success('已关注')
                    localStorage.setItem('gz',JSON.stringify(this.flag))
                }else{
                    this.flag = 2
                    this.$toast.success('已取消')
                }
                
                // let index = this.arrid.findIndex((i,k) => {
                //     return i.id === obj.id
                // })

                // console.log(index)

                // if(index == -1){
                //     this.arrid.push(obj)
                // }else{
                //     return false
                // }
                // console.log(this.arrid)
            })
        },
        fan(){
            this.$router.go(-1)
        },
        yy(id){
            this.$router.push({
                path:'/neworder',
                query:{
                    id:this.cid
                }
            })
        },
        async jsList(){
            let { data } = await this.$Axios.get(`/api/app/teacher/info/${this.xid}`)
            this.jslist=data.data
            // console.log(this.jslist)
        },
        async lsList(){
            let { data } = await this.$Axios.get(`/api/app/teacher/${this.xid}`)
            this.lslist.push(data.data.teacher)
            console.log(this.lslist)
            this.cid = this.lslist[0].id
            // console.log(this.cid)
        },
    },
    watch: {
        arrid:{
            handler(val){
                localStorage.setItem('arrid',JSON.stringify(val))
            }
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
                width: 1rem;
                margin-top: 0.01rem;
                font-size: 0.14rem;
                span{
                    font-size: 0.12rem;
                    color: #EA7A2F;
                }
            }
            .sex{
                width: 1rem;
                margin-left: -0.85rem;
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
                    padding: 0.05rem 0.05rem;
                    box-sizing: border-box;
                    border-radius: 0.5rem;
                    border: 1px solid #EBEEFE;
                    background: #EBEEFE;
                    font-size: 0.13rem;
                    color: #EB6100;
                }
                .btn{
                    width: 0.7rem;
                    font-size: 0.15rem;
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
                margin: 0 0.05rem;
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
        // height: 3.3rem;
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
                margin-bottom: 0.31rem;
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
