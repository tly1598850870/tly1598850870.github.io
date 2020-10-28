<template>
    <div>
        <header>
            <span @click="fan()">〈</span>
            <input v-model="value" @input="s()" type="text" placeholder="请输入内容">
            <span @click="fan()" v-show="!isShow">取消</span>
            <span v-show="isShow"  @click="ls()">搜索</span>
        </header>
        <div class="ls">
            <div class="lsss">
                <h5>历史搜索</h5>
                <p><van-icon name="delete" @click="del()" /></p>
            </div>
            <div class="ssls">
                <ul>
                    <li v-for="(item,key) in searchLs" :key="key">
                        {{ item.val }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value:'',
            searchLs:JSON.parse(localStorage.getItem('ls'))||[],
            isShow:false,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        s(){
            if(this.value == ''){
                this.isShow = false
            }else{
                this.isShow = true
            }
        },
        ls(){
            let obj = {
                val:this.value
            }

            this.searchLs.push(obj)
            console.log(this.searchLs)

            this.value = ''
        },
        fan(){
            // this.$router.go(-1)
            this.$router.push('/footer/coures')
        },
        del(){
            this.searchLs = []
            localStorage.removeItem('ls')
        }
    },
    watch: {
        searchLs:{
            handler(val){
                localStorage.setItem('ls',JSON.stringify(val))
            }
        }
    }
};
</script>

<style scoped lang='scss'>
header{
    width: 3.75rem;
    height: 0.5rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span{
        font-size: 0.13rem;
    }
    span:nth-child(3){
        font-size: 0.13rem;
        color: #D2D2D1;
    }
    span:nth-child(1){
        font-size: 0.14rem;
        color: #7C7C7C;
    }
    input{
        width: 2.7rem;
        height: 0.27rem;
        background: #E4E7ED;
        border: 1px solid #E4E7ED;
        border-radius: 0.5rem;
        text-indent: 10px;
        font-size: 0.15rem;
    }
}
.ls{
    width: 3.75rem;
    height: 1.67rem;
    // background: pink;
    margin-top: 0.1rem;
    .lsss{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
        box-sizing: border-box;
        p{
            color: #D1D1D1;
        }
    }
    .ssls{
        width: 3.75rem;
        ul{
            width: 3.75rem;
            display: flex;
            flex-wrap: wrap;
            li{
                background: #F7F7F7;
                margin-left: 0.1rem;
                text-align: center;
                padding: 5px 10px;
                margin: 5px 10px;
                box-sizing: border-box;
                border-radius: 0.5rem;
                font-size: 0.1rem;
            }
        }
    }
}
</style>
