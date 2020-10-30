<template>
    <div class="box">
        <div class="header">
            <header>
                <span @click="fan()">〈</span>
                <span>预约课程</span>
                <span></span>
            </header>
        </div>
        <div class="jj">
            <dl class="js">
                <dt>
                    <img src="../../assets/155.jpg" alt="">
                </dt>
                <dd>
                    <p class="lq">李青</p>
                    <p class="sex">女 <span>7年教龄</span></p>
                    <p class="gz">
                        <button v-show="!gzShow" @click="xq()" class="but">查看详情</button>
                    </p>
                </dd>
            </dl>
        </div>
        <div class="date">
            <div class="sj">
                <span class="gang"></span>
                <span class="xzsj">选择时间</span>
                <span class="bjsj">（北京时间）</span>
            </div>
        </div>
        <div class="rqsj">
            <!-- <ul>
                <li>周一</li>
                <li>周二</li>
                <li>周三</li>
                <li>周四</li>
                <li>周五</li>
                <li>周六</li>
                <li>周日</li>
            </ul> -->
            <van-tabs v-model="active">
                <van-tab v-for="(item,key) in date" :key="key" 
                    :title="item.name+item.rq">

                </van-tab>
            </van-tabs>
        </div>
        
        <div class="xx">
            <img src="../../assets/zwxx.png" alt="">
            <p>暂无信息</p>
        </div>
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
            date:[
                {name:'周四',rq:'10/29',tab:0},
                {name:'周五',rq:'10/30',tab:1},
                {name:'周六',rq:'10/31',tab:2},
                {name:'周日',rq:'11/01',tab:3},
                {name:'周一',rq:'11/02',tab:4},
                {name:'周二',rq:'11/03',tab:5},
                {name:'周三',rq:'11/04',tab:6},
                {name:'周四',rq:'11/05',tab:7},
                {name:'周五',rq:'11/06',tab:8},
                {name:'周六',rq:'11/07',tab:9},
                {name:'周日',rq:'11/08',tab:10},
                {name:'周一',rq:'11/09',tab:11},
                {name:'周二',rq:'11/10',tab:12},
                {name:'周三',rq:'11/11',tab:13},
            ],
            active:0,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        xq(){
            this.$router.push('/teacher')
        },
        fan(){
            this.$router.go(-1)
        },
        yy(){
            this.$toast('请选择预约时间')
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
    height: 1rem;
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
        }
        dd{
            display: flex;
            .lq{
                width: 2rem;
                height: 0.27rem;
                line-height: 0.27rem;
                margin-left: 0.13rem;
                margin-top: -0.01rem;
                font-size: 0.15rem;
            }
            .sex{
                width: 2rem;
                height: 0.27rem;
                margin-left: -1.3rem;
                margin-top: 0.3rem;
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
                    border: 1px solid #EB6100;
                    background: white;
                    font-size: 0.13rem;
                    color: #EB6100;
                }
            }
        }
    }
}
.date{
    width: 3.75rem;
    margin-top: 0.43rem;
    .sj{
        padding: 0.1rem 0.1rem;
        box-sizing: border-box;
        .gang{
            border: 2px solid #EB6100;
            background: #EB6100;
            margin: 0 0.1rem;
        }
        .xzsj{
            color: #595959;
            font-size: 0.15rem;
        }
        .bjsj{
            color: #595959;
            font-size: 0.11rem;
        }
    }
}
.rqsj{
    width: 3.5rem;
    background: white;
    border-radius: 0.05rem;
    margin: 0.1rem auto;
    ul{
        width: 100%;
        display: flex;
        li{
            height: 0.5rem;
            line-height: 0.5rem;
            flex: 1;
            text-align: center;
        }
    }
}
.xx{
    width: 3.75rem;
    height: 3.7rem;
    padding: 0.15rem 1rem;
    box-sizing: border-box;
    p{
        margin-left: 0.6rem;
    }
}
</style>
