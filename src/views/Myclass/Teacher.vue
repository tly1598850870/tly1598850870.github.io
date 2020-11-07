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
                    <dl @click="jbrXq()" v-for="(item,key) in tlist" :key="key">
                        <dt>
                        <p>{{ item.title }}</p>
                        <!-- <van-icon name="clock-o" class="jbr_icon" /> -->
                        <span>共{{ item.total_periods }}课时</span>
                        <!-- <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span> -->
                        <p class="jbr_lq">
                            <img :src="item.teachers_list[0].teacher_avatar" alt="" />
                            {{ item.teachers_list[0].teacher_name }}
                        </p>
                        </dt>
                        <dd>
                        <p>
                            <span>{{ item.brows_num }}人报名</span>
                            <span class="jbr_mf" :style="{color:item.price>0?'red':'#44A426'}" >
                                <img src="@/assets/money.png" alt="" v-show="item.price>0">
                                {{ item.price>0?(item.price/100).toFixed(2):'免费' }}
                            </span>
                        </p>
                        </dd>
                    </dl>
                </div>
            </van-tab>
            <van-tab title="学员评价">
                <div class='xuexi'>
                    <div class="jbr_pj" v-show="!flag">
                        <div class="u">
                            <span v-for="(item,key) in show?tag:tag2" :key="key">
                                {{ item.title }}({{ item.count }})
                            </span>
                        </div>
                        <p class="sx" v-show="!show" @click="show = true">∨</p>
                        <p class="sx" v-show="show" @click="show = false">∧</p>
                    </div>
                    <div class='pj' v-for="(item,key) in Xypl" :key="key">
                        <div class='xypj'>
                            <img :src="item.avatar" alt="">
                            <van-rate size='14px' :touchable='false' v-model="item.grade" color='#EA7A2F' void-color='#EA7A2F' />
                        </div>
                        <p class='pl'>
                            <span v-for="(item,key) in content" :key="key">
                                {{ item }}
                            </span>
                        </p>
                        <p class='nr'>
                            {{ item.content }}
                        </p>
                    </div>
                    <div class='zwpl' v-show="flag">
                        <img src="../../assets/课程空.png" alt="">
                        <p>暂无评论</p>
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
            flag:2,
            tlist:[],
            Xypl:[],
            tag:[],
            tag2:[],
            content:[],
            show:false,
        };
    },
    created() {

    },
    mounted() {
        this.xid = this.$route.query.id
        this.jsList();
        this.lsList();
        this.tList();
        this.xypl();
        // this.xypl1()
    },
    methods: {
        async gz(id){
            let { data } = await this.$Axios.get(`/api/app/teacher/collect/${id}`)
            console.log(data)
            if(this.flag == 1){
                let { data:res } = await this.$Axios.get(`/api/app/teacher/${id}`)
                this.flag = res.data.flag
                this.$toast.success('已取消')
            }else{
                let { data:res } = await this.$Axios.get(`/api/app/teacher/${id}`)
                this.flag = res.data.flag
                this.$toast.success('已关注')
            }
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
            console.log(this.jslist)
        },
        async lsList(){
            let { data } = await this.$Axios.get(`/api/app/teacher/${this.xid}`)
            console.log(data.data)
            this.flag = data.data.flag
            this.lslist.push(data.data.teacher)
            // console.log(this.lslist)
            this.cid = this.lslist[0].id
        },
        async tList(){
            
            let { data } = await this.$Axios.post(`/api/app/teacher/mainCourse`,{
                page: 1, limit: 10, teacher_id:this.xid
            })
            // console.log(data)
            this.tlist = data.data.list
        },
        async xypl(){
            let { data } = await this.$Axios.post(`/api/app/teacher/comment`,{
                page: 1, limit: 10, teacher_id:this.xid
            })
            // console.log(data)
            this.Xypl = data.data.comment.list
            // console.log(this.Xypl)
            if(this.Xypl.tag_content == null){
                this.content = '' 
            }else{
                this.content = this.Xypl[0].tag_content
            }
            this.content = this.content.split(',')
            // console.log(this.content)
            this.tag = data.data.tag
            console.log(this.tag)
        },
        async xypl1(){
            let { data } = await this.$Axios.post(`/api/app/teacher/comment`,{
                page: 1, limit: 10, teacher_id:this.xid
            })
            // console.log(data)
            this.tag2 = data.data.tag
            this.tag2.length = 3
            console.log(this.tag2)
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
    padding: 0.1rem 0;
    box-sizing: border-box;
    .sx{
        width: 0.18rem;
        height: 0.18rem;
        float: right;
        border-radius: 0.5rem;
        background: #DDDDDD;
        color: #EDEDED;
        text-align: center;
        line-height: 0.18rem;
        position: absolute;
        top: -0.02rem;
        right: -0.1rem;
    }
    .jbr_pj{
        width: 3rem;
        margin: 0 auto;
        margin-bottom: 0.1rem;
        position: relative;
        .u{
            display: flex;
            flex-wrap: wrap;
            span{
                width: 0.7rem;
                border: 1px solid #EA7A2F;
                padding: 0.03rem 0.03rem;
                font-size: 0.1rem;
                text-align: center;
                margin: 0.1rem 0.1rem;
                color: #EA7A2F;
                border-radius: 0.03rem;
            }
        }
    }
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
    .zwpl{
        img{
            width: 1.5rem;
            height: 1.5rem;
            margin-left: 1.15rem;
        }
        p{
            margin-left: 1.55rem;
            color: #8C8C8C;
            font-size: 0.15rem;
        }
    }
}

</style>
