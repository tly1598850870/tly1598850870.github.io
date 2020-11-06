<template>
  <div>
    <div id="shouye">
      <div class="content">
        <div class="block">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,key) in banner" :key="key">
              <img
                :src="item.banner_img"
                alt=""
                class="zhx_img_lunbo"
              />
            </van-swipe-item>
          </van-swipe>
        </div>

        <div class="zhx_nav">
          <div class="nav">
            <ul>
              <li @click="coures">
                  <img src="../../assets/pic/characteristic.png" alt="" />
                  <p>特色课</p>
              </li>
              <li @click="ydy">
                  <img src="../../assets/pic/coach.png" alt="" />
                  <p>一对一辅导</p>
              </li>
              <li @click="date">
                  <img src="../../assets/pic/Study-Calendar.png" alt="" />
                  <p>学习日历</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 名师阵容 -->
        <div class="teacher_list">
          <div class="teacher_item">
            <div class="Boutique" >
              <div class="title">{{ ms }}</div>
                <dl v-for="(item,key) in sylistms.list" :key="key" @click="js(item.teacher_id,item)">
                  <dt><img :src="item.teacher_avatar" alt=""></dt>
                  <dd>
                    <p>{{ item.teacher_name }}</p>
                    <p>{{ item.introduction }}</p>
                  </dd>
                </dl>
            </div>
          </div>
        </div>
        
        <div class="course">
          <div class="Boutique">
          <!-- 精品课程 -->
            <div class="title">{{ jp }}</div>
          </div>
          <ul v-for="(item,key) in sylistjp.list" :key="key" @click="jpkc(item.id,item)">
            <li class="tit">
              {{ item.title }}
            </li>
            <li class="hour">共{{ item.total_periods }}课时</li>
            <li class="teacher">
              <img
                :src="item.teachers_list[0].teacher_avatar"
                alt=""
              />
              <span>{{ item.teachers_list[0].teacher_name }}</span>
              <p class="p" v-show="item.has_buy == 1">
                <img src="../../assets/bm.png" alt="">
              </p>
            </li>
            <li class="del">
              <span class="apply">{{ item.sales_num }}人已报名</span>
              <!-- <span class="cost" >免费</span> -->
              <span class="cost" :style="{color:item.price>0?'red':'#44A426'}" >
                <img src="@/assets/money.png" alt="" v-show="item.price>0">
                {{ item.price>0?(item.price/100).toFixed(2):'免费' }}
              </span>
            </li>
          </ul>
        </div>
        <!-- 推荐课程 -->
        <div class="course">
          <div class="title">{{ tj }}</div>
          <ul v-for="(item,key) in sylisttj.list" :key="key" @click="jpkc(item.id,item)">
            <li class="tit">{{ item.title }}</li>
            <li class="hour">共{{ item.total_periods }}课时</li>
            <li class="teacher">
              <img
                :src="item.teachers_list[0].teacher_avatar"
                alt=""
              />
              <span>{{ item.teachers_list[0].teacher_name }}</span>
              <p class="p" v-show="item.has_buy == 1">
                <img src="../../assets/bm.png" alt="">
              </p>
            </li>
           
              <li class="del">
              <span class="apply">{{ item.sales_num }}人已报名</span>
             
              <span class="cost" :style="{color:item.price>0?'red':'#44A426'}" >
                <img src="@/assets/money.png" alt="" v-show="item.price>0">
                {{ item.price>0?(item.price/100).toFixed(2):'免费' }}
              </span>
            </li>
          </ul>
        </div>
        <!-- 明星讲师 -->
        <div class="title">{{ mx }}</div>
        <div class="item" v-for="(item,key) in sylistmx.list" :key="key" @click="mxjs(item.teacher_id)">
          <img
            :src="item.teacher_avatar"
            alt=""
          />
          <div class="zhx_baib">
            <div class="zhx_bai">{{ item.teacher_name }}<span class="rank">{{ item.level_nameze }}</span></div>
            <p class="describe">
              {{ item.introduction }}
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="mat"></div> -->
      <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <div class="block1" >
            <span class="cuo" @click="cuo()">X</span>
            <img src="../../assets/登录飞机.png" alt="">
            <p>赶紧登录一下吧</p>
            <p class="yy">立即预约一对一辅导，浏览更多视频课程~</p>
            <button @click="dl()">立即登录</button>
          </div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Button, Calendar } from 'vant';
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  //  components: {
  //      Db,
  //  },
  // 组件状态值
  data() {
    return {
      banner:[],
      sylistms:[],
      sylistjp:[],
      sylisttj:[],
      sylistmx:[],
      ms:'',
      jp:'',
      tj:'',
      mx:'',
      act:JSON.parse(localStorage.getItem('act'))||1,
      free:0,
      xid:0,
      flag:false,
      show:false,
    };
  },
  filters: {
    fixT(val){
      return (val/100).toFixed(2)
    }
  },
  mounted () {
    this.bann()
    this.syList()
    // this.bm()
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    date() {
      if(sessionStorage.getItem('token') == null){
        this.show = true
      }else{
        this.$router.push('/calendar')
      }
    },
    cuo(){
      this.show = false
    },
    dl(){
      this.$router.push('/login')
    },
    ydy(){
      this.$router.push('/coach')
    },
    coures(){
      // this.act = 1
      this.$store.state.act = 1
      // localStorage.setItem('act',JSON.stringify(this.act))
      this.$router.push('/footer/coures')
    },
    async bann(){
      let { data } = await this.$Axios.get('api/app/banner')
      this.banner=data.data
    },
    async syList(){
      let { data } = await this.$Axios.get('api/app/recommend/appIndex')
      console.log(data)
      this.sylistms=data.data[0]
      this.sylistjp=data.data[1]
      this.sylisttj=data.data[2]
      this.sylistmx=data.data[3]
      console.log(this.sylistjp)
      console.log(this.sylisttj)

      this.ms = this.sylistms.channel_info.name
      this.jp = this.sylistjp.channel_info.name
      this.tj = this.sylisttj.channel_info.name
      this.mx = this.sylistmx.channel_info.name


    },
    async bm(){
      let { data } = await this.$Axios.post(`/api/app/courseChapter`,{id:this.xid})
      console.log(data)
      this.item=data.data
      this.free = this.item[0].is_free
    },
    js(id,item){
      if(sessionStorage.getItem('token') == null){
        this.show = true
      }else{
        this.$router.push({
          path:'/teacher',
          query:{
            id:id,
            item:item
          }
        })
      }
    },
    jpkc(id,item){
      console.log(id)
      this.$router.push({
        path:'/cod',
        query:{
          id:id,
          item:item,
        }
      })
    },
    mxjs(id){
      console.log(id)
      this.$router.push({
        path:'/teacher',
        query:{
          id:id
        }
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.zhx_img_lunbo {
  height: 1.6rem;
  width: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.my-swipe .zhx_img_lunbo{
  height: 2rem;
}
.block {
  width: 100%;
  height: 0.5rem;
}
.content {
  margin-bottom: 0.57rem;
  height: 100%;
  background: rgb(240, 242, 245);
  img {
    display: block;
  }
}

.nav {
  width: 100%;
  position: relative;
  left: 0;
  top: 1.25rem;
  // z-index: 100;
  ul {
    width: 100%;
    display: flex;
    li {
      width: 1rem;
      height: 1.08rem;
      background: #fff;
      margin-left: 0.19rem;
      border-radius: 10%;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-left: 0.38rem;
        margin-top: 0.3rem;
      }
      p {
        text-align: center;
        margin-top: 0.13rem;
        font-size: 0.1rem;
        font-weight: 400;
        color: #8c8c8c;
      }
    }
  }
}
.home {
  background: #f0f2f5;
}
.van-swipe-item {
  width: 100%;
}
.van-swipe-item img {
  width: 100%;
}
.plate {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 3rem;
  margin-top: -0.8rem;
}
.plate div {
  height: 2rem;
  z-index: 999;
  width: 2rem;
  background: white;
  border-radius: 0.3rem;
  text-align: center;
  font-size: 0.25rem;
}
.plate div img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.3rem;
}
.teacher_list {
  margin-top: 1.5rem;
}
.teacher_item {
  width: 90%;
  margin-left: 5%;
}
.title {
  border-left: red 0.03rem solid;
  padding-left: 0.1rem;
  font-size: 0.15rem;
  margin: 0.2rem 0.2rem;
}
.item {
  margin-top: 0.1rem;
  width: 90%;
  height: 0.8rem;
  font-size: 0.2rem;
  background: white;
  // border-radius: 0.1rem;
  display: flex;
  justify-content: space-around;
   margin-left: 0.2rem;
}
.itemm {
  margin-top: 0.1rem;
  width: 100%;
  height: 0.8rem;
  font-size: 0.2rem;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.itemm img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.zhx_yang {
  font-size: 0.15rem;
  margin-top: 0.1rem;
}
.title_de {
  font-size: 0.18rem;
}
.item img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  margin-top: 0.17rem;
  margin-left: 0.1rem;
}
.zhx_bai {
  font-size: 0.14rem;
  margin-left: 0.2rem;
  margin-top: 0.23rem;
}
.zhx_baib{
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.describe {
  width: 2.7rem;
  color: rgb(177, 174, 174);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.1rem;
  margin-left: 0.2rem;
}
.describers {
  color: rgb(177, 174, 174);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.1rem;
}
.course {
  width: 90%;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.course ul {
  width: 90%;
  padding: 10px 20px;
  margin-top: 0.2rem;
  margin-left: -0.04rem;
  background: white;
  border-radius: 0.1rem;
}
.course ul img {
  width: 0.31rem;
  height: 0.31rem;
  border-radius: 50%;
}
.course .tit {
  padding-top: 0.1rem;
}
.tit_p {
  font-size: 0.18rem;
  height: 0.3rem;
}
.hour {
  font-size: 0.13rem;
  color: #666;
  margin-top: 0.05rem;
}
.teacher {
  height: 0.8rem;
  border-bottom: 0.01rem solid rgba(218, 212, 212, 0.45);
  display: flex;
  align-items: center;
  font-size: 0.3rem;
  position: relative;
  .p{
    width: 0.7rem;
    height: 0.6rem;
    position: absolute;
    right: 0.1rem;
    top: -0.31rem;
    img{
      width: 0.7rem;
      height: 0.6rem;
    }
  }
}
.teacher span {
  margin-left: 0.1rem;
  font-size: 0.13rem;
  color: rgba(0, 0, 0, 0.45);
}

.del {
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.apply {
  font-size: 0.13rem;
  color: gray;
}
.cost {
  font-size: 0.16rem;
  color: rgb(80, 158, 34);
  img {
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 0.5rem;
    margin-right: 0.07rem;
  }
}
ul .cost img {
  width: 0.18rem;
  height: 0.18rem;
  float: left;
}
.cost span {
  color: red;
  margin-left: 0.1rem;
  float: left;
}
.mat {
  width: 100%;
  height: 0.5rem;
}
.rank {
  font-size: 0.13rem;
  color: rgb(226, 134, 80);
  margin-left: 0.1rem;
}

span {
  font-size: 0.18rem;
}
dl{
  width: 3.4rem;
  height: 0.81rem;
  padding: 0.2rem 0.17rem;
  box-sizing: border-box;
  background: white;
  dt{
    float: left;
    margin-right: 0.13rem;
    img{
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 0.5rem;
    }
  }
  dd{
    margin-top: -0.2rem;
    font-size: 0.13rem;
    p:nth-child(2){
      font-size: 0.13rem;
      color: #B7B7B7;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.wrapper {
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