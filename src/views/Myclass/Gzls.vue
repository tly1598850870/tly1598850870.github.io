<template>
    <div class="box">
        <van-nav-bar
        title="我的关注"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-cell>
                <dl v-for="(item,key) in list" :key="key">
                    <dt>
                        <img :src="item.avatar" alt="">
                    </dt>
                    <dd>
                        <p>
                            {{ item.teacher_name }}
                            <span>{{ item.level_name }}</span>
                            <button @click="qxgz(item.collect_id)">取消关注</button>
                        </p>
                        <p class="title">{{ item.introduction }}</p>
                        
                    </dd>
                </dl>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[],
            loading: false,
            finished: false,
        };
    },
    created() {

    },
    mounted() {
        this.gz()
    },
    methods: {
        async gz(){
            let { data } = await this.$Axios.get('/api/app/collect?page=1&limit=10&type=2&')
            console.log(data)
            this.list = data.data.list
            console.log(this.list)
        },
        qxgz(id){
            this.$Axios.put(`/api/app/collect/cancel/${id}/2`).then((res) => {
                console.log(res)
                this.$toast('取消关注成功')
                setTimeout(()=>{
                    this.gz()
                },1000)
                
            })
        },
        onClickLeft(){
            this.$router.go(-1)
        },
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= this.list.length) {
                this.finished = true;
                }
            }, 1000);
        },
    }
};
</script>

<style scoped lang='scss'>
.box{
    width: 3.75rem;
    background: #F0F2F5;
    height: 1000px;
}
.van-cell{
    background: #F0F2F5;
}
dl{
    width: 3.5rem;
    height: 0.75rem;
    background: white;
    padding: 0.1rem 0.1rem;
    box-sizing: border-box;
    dt{
        float: left;
        img{
            width: 0.45rem;
            height: 0.45rem;
        }
    }
    dd{
        padding: 0 0.1rem;
        box-sizing: border-box;
        p{
            margin-top: 0rem;
            position: relative;
            span{
                margin-left: 0.07rem;
                font-size: 0.13rem;
                color: #ea7a2f;
            }
            button{
                position: absolute;
                top: 0.1rem;
                right: 0.05rem;
                border-radius: 0.5rem;
                border: #FDEFE5;
                background: #FDEFE5;
                font-size: 0.12rem;
                color: #eb6100;
                padding: 0.03rem 0.1rem;
            }
        }
        .title{
            width: 2rem;
            font-size: 0.12rem;
            color: #b7b7b7;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
            margin-top: -0.14rem;
        }
    }
}
</style>
