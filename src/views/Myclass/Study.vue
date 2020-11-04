<template>
    <div class="box">
        <header>
            <span @click="onClickLeft">〈</span>
            <span class="title">{{ title }}</span>
            <van-icon name="calendar-o" size="18" @click="rl()" />
        </header>
        <div class="info">
            <span>共8课时</span>
            <span class="jdt"></span>
            <span>已学习0%</span>
        </div>
        <div class="sp">
            <div class="kc" @click="bm()" v-for="(item,key) in newlist" :key="key">
                <div class="hf">
                    <span class="dian">·</span>
                    <span class="hui">[回放]</span>
                    <span class="one">{{ item.periods_title }}</span>
                </div>
                <div class="lq">
                    <span>{{ item.teachers.length > 0?item.teachers[0].teacher_name:'' }}</span>
                    <span>{{ item.start_play }}</span>
                </div>
                <div class="ks">
                    <span class="jdt"></span>
                    <span>已观看0%</span>
                </div>
            </div>
        </div>
        <footer>
            <ul>
                <li @click="xpl">
                    <van-icon name="edit" />
                    <span>写评论</span>
                </li>
                <li @click="kcxq">
                    <van-icon name="apps-o" />
                    <span>课程详情</span>
                </li>
                <li @click="del">
                    <van-icon name="delete" />
                    <span>移除列表</span>
                </li>
            </ul>
        </footer>
        <van-popup v-model="show">
            <span class="cuo" @click="cuo()">X</span><br>
            <div class="pj">
                <span class="xing">星级:
                    <van-rate :touchable='true' v-model="value" color='#EA7A2F' void-color='#EA7A2F' />
                </span><br>
                <span class="nr">内容:</span>
                <textarea cols="30" rows="5" v-model="fbpl"></textarea><br>
                <button @click="fb()">发布</button>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'',
            show:false,
            value:5,
            fbpl:'',
            xid:'',
            newlist:[],
        };
    },
    created() {

    },
    mounted() {
       this.title = this.$route.query.title
       this.xid = this.$route.query.id
       this.kc()
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        rl(){
            this.$router.push('/date')
        },
        bm(){
            this.$toast('回放未生成')
        },
        xpl(){
            this.show = true
        },
        cuo(){
            this.show = false
            this.fbpl = ''
        },
        kcxq(){
            this.$router.push({
                path:'/cod',
                query:{
                    id:this.xid,
                    item:this.newlist
                }
            })
        },
        async fb(){
            let { data } = await this.$Axios.post(`/api/app/myStudy/comment`,{
                grade: this.value,
                content: this.fbpl,
                course_id: this.xid,
                type: 1
            })
            console.log(data)

            if(data.code == 201){
                this.$toast(data.msg)
            }else{
                this.$toast('发布成功')
                this.show = false
                this.fbpl = ''
            }

            if(this.fbpl == ''){
                this.$toast('评价内容 必须填写')
                return false
            }

            // let index = this.$store.state.pl.findIndex((i,k) => {
            //     return i.title == this.fbpl
            // })
            // console.log(index)

            // let obj={
            //     val:this.value,
            //     title:this.fbpl,
            // }

            // if(index == -1){
            //     if(this.fbpl != ''){
            //         this.$store.commit('pinglun',obj)
            //         this.show = false
            //         this.$toast('评价成功')
            //         this.fbpl = ''
            //     }else{
            //         this.$toast('评价内容 必须填写')
            //     }
            // }else{
            //     this.$toast('已评论无法再次评论')
            // }
            // console.log(this.$store.state.pl)
        },
        async del(){
            let {data} = await this.$Axios.delete(`/api/app/myStudy/course/${this.xid}`)
            console.log(data)
            let {data:res} = await this.$Axios.get(`/api/app/myStudy/course/${this.xid}`)
            this.newlist = res.data.periods
            this.$toast.success('成功')
            setTimeout(() => {
                this.$router.push('/mycoures')
            }, 1000);
        },
        async kc(){
            let {data} = await this.$Axios.get(`/api/app/myStudy/course/${this.xid}`)
            console.log(data)
            this.newlist = data.data.periods
            console.log(this.newlist)
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
    width: 2rem;
    font-size: 0.17rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    color: #595959;
  }
}
.info{
    margin-top: 0.47rem;
    height: 0.5rem;
    border-bottom: 1px solid #F5F5F5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.13rem;
    box-sizing: border-box;
    padding: 0 5px;
    color: #595959;
    .jdt{
        width: 2.2rem;
        height: 0.03rem;
        border: 1px solid #F5F5F5;
        background: #F5F5F5;
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
            width: 2.3rem;
            font-size: 0.1rem;
            color: #595959;
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
    .ks{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.12rem;
        box-sizing: border-box;
        padding: 0 5px;
        color: #595959;
        margin-top: -10px;
        .jdt{
            width: 2.3rem;
            height: 0.02rem;
            border: 1px solid #F5F5F5;
            background: #F5F5F5;
        }
    }
}
footer{
    width: 3.75rem;
    position: fixed;
    bottom: 0;
    height: 0.37rem;
    line-height: 0.37rem;
    background: white;
    ul{
        width: 3.75rem;
        display: flex;
        align-items: center;
        li{
            flex: 1;
            color: #8C8C8C;
            font-size: 0.13rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .van-icon{
                font-size: 0.15rem;
            }
        }
    }
}
.van-popup{
    width: 3.5rem;
    height: 2.55rem;
    border-radius: 0.03rem;
    padding: 10px 10px;
    box-sizing: border-box;
    .cuo{
        float: right;
    }
    .pj{
        padding: 1px 7px;
        .xing{
            display: block;
            font-size: 0.14rem;
        }
        .nr{
            display: block;
            margin-top: 0.17rem;
        }
        textarea{
            display: block;
            margin-left: 0.5rem;
            margin-top: -0.2rem;
            border: 1px solid #ddd;
        }
        button{
            width: 0.7rem;
            height: 0.3rem;
            font-size: 0.13rem;
            background: #eb6100;
            border: 1px solid #eb6100;
            border-radius: 0.03rem;
            margin: 0 auto;
            font-weight: 400;
            color: #fff;
            text-align: center;
            margin-left: 1.3rem;
        }
    }
}
</style>
