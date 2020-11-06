<template>
    <div>
        <header>
            <span @click="fan()">〈</span>
            <input v-model="value" @input="s()" @change="s()" type="text" placeholder="请输入内容">
            <span @click="fan()" v-show="!isShow">取消</span>
            <span v-show="isShow"  @click="ls()">搜索</span>
        </header>
        <div class="ls" v-show="!flag">
            <div class="lsss">
                <h5>历史搜索</h5>
                <p><van-icon name="delete" @click="del()" /></p>
            </div>
            <div class="ssls">
                <ul>
                    <li @click="val(item.val)" v-for="(item,key) in searchLs" :key="key">
                        {{ item.val }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="sou" @change="s()">
            <dl @click="jbrXq(item.id,item)" v-for='(item,key) in newList' :key='key'>
            <dt>
              <p class="title">{{item.title}}</p>
              <van-icon name="clock-o" class="jbr_icon" />
              <span>{{ item.start_play_date | time }} | 共{{item.total_periods}}课时</span>
              <div class="jbr_lq">
                <img :src="item.teachers_list[0].teacher_avatar" alt="" />
                <span>{{ item.teachers_list[0].teacher_name }}</span>
                <p class="p" v-show="item.has_buy == 1">
                  <img src="../assets/bm.png" alt="">
                </p>
              </div>
            </dt>
            <dd>
              <p>
                <span>{{ item.brows_num }}人已报名</span>
                <span class="jbr_jg" :style="{color:item.price>0?'red':'#44A426'}">
                  <img src="@/assets/money.png" alt="" v-show="item.price>0">
                  {{ item.price>0?(item.price/100).toFixed(2):'免费' }}
                </span>
              </p>
            </dd>
          </dl>
        </div>
        <div class="zwjg" v-show="!isflag">
            <img src="../assets/课程空.png" alt="">
            <p>暂无搜索结果</p>
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
            flag:false,
            isflag:false,
            newList:[],
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
                this.flag = false
                this.isflag = false
            }else{
                this.isShow = true
                this.flag = true
            }
        },
        async ls(){
            let { data } = await this.$Axios.get(`/api/app/courseBasis?limit=10&page=1&course_type=0&keywords=${this.value}`)
            console.log(data)
            this.newList = data.data.list
            console.log(this.newList)

            if(this.newList == []){
                this.isflag = true
            }

            let obj = {
                val:this.value
            }

            let index = this.searchLs.findIndex((i,k) => {
                return this.value == i.val
            })

            console.log(index)

            if(index == -1){
                this.searchLs.unshift(obj)
                console.log(this.searchLs)
                if(this.searchLs.length > 5){
                    this.searchLs.pop()
                    console.log(this.searchLs)
                }
            }else{
                return false
            }

            this.value = ''
        },
        fan(){
            // this.$router.go(-1)
            this.$router.push('/footer/coures')
        },
        del(){
            this.searchLs = []
            localStorage.removeItem('ls')
        },
        val(v){
            this.value = v
            if(this.value != ''){
                this.isShow = true
            }else{
                this.isShow = false
            }
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
    position: fixed;
    top: 0;
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
    height: 2rem;
    z-index: 1000;
    background: white;
    position: absolute;
    top: 0.5rem;
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
.zwjg{
    width: 3.75rem;
    padding: 0 1.17rem;
    box-sizing: border-box;
    position: absolute;
    top: 0.5rem;
    img{
        width: 1.5rem;
        height: 1.5rem;
    }
    p{
        font-size: 0.15rem;
        color: #8C8C8C;
        margin-left: 0.27rem;
    }
}
.sou{
    width: 3.75rem;
    z-index: 1000;
    background: #F8F8F8;
    position: absolute;
    top: 0.5rem;
}
dl {
  width: 3.45rem;
  border-radius: 5px;
  background: white;
  margin: 15px auto;
  padding: 0.01rem 10px;
  box-sizing: border-box;
  dt {
    .title{
      font-size: 0.16rem;
      margin: 10px 0;
    }
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
      padding: 0.1rem 0;
      position: relative;
      .p{
        width: 0.63rem;
        height: 0.5rem;
        position: absolute;
        right: 0.1rem;
        top: -0.31rem;
        img{
          width: 0.63rem;
          height: 0.5rem;
        }
      }
    }
    img {
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 0.5rem;
      margin-right: 0.07rem;
    }
  }
  dd {
    margin: 10px 0;
    border-top: 0.01rem solid #eee;
    p {
      padding: 0.05rem 0;
      box-sizing: border-box;
      line-height: 0rem;
      span {
        font-size: 0.12rem;
        color: rgba(0, 0, 0, 0.45);
      }
      .jbr_mf {
        float: right;
        margin-right: 0.1rem;
        color: #44a426;
        font-size: 0.16rem;
      }
      .jbr_jg{
        float: right;
        margin-right: 0.1rem;
        color: red;
        font-size: 0.16rem;
        img{
          margin-top: -0.5rem;
        }
      }
    }
  }
}
</style>
