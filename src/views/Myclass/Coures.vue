<template>
  <div class="box">
    <div>
      <header>
        <van-nav-bar title="特色课">
          <template #right>
            <van-icon name="search" size="18" @click="search()" />
          </template>
        </van-nav-bar>
        <van-dropdown-menu>
          <van-dropdown-item title="分类" ref="item1" class="Fl">
            <div class="fenlei" v-for="(item, key) in jbrFl" :key="key">
                <p>{{ item.name }}</p>
                <ul>
                  <li v-for="(i,k) in item.child" :key="k"
                  :style="{
                    background: Active1 == k ? '#EBEEFE' : '#f5f5f5',
                    color: Active1 == k ? '#EB6100' : '',}"
                    @click="act1(k,i.id)">
                    {{ item.child[k].name }}
                  </li>
                </ul>
              </div>
              <div class="fenlei" v-for="name in jbrF2" :key="name.id">
                  <p>学科</p>
                  <ol>
                    <li v-for="(n,ind) in name.child" :key="ind"
                      :style="{
                        background: Active2 == ind ? '#EBEEFE' : '#f5f5f5',
                        color: Active2 == ind ? '#EB6100' : '',}"
                        @click="act2(ind,n.id)">
                        {{ name.child[ind].name }}
                      </li>
                  </ol>
              </div>
            <div class="but">
              <button class="cz" @click="cz">重置</button>
              <button class="qd" @click="qd()">确定</button>
            </div>
          </van-dropdown-item>
          <van-dropdown-item title="排序" ref="item2">
            <ul class="ul">
              <li
                v-for="(item, key) in jbrarr"
                :key="key"
                :style="{ color: jbrPx == key ? '#EB6100' : '' }"
                @click="jbrpx(item.type,key)"
              >
                {{ item.name }}
              </li>
            </ul>
          </van-dropdown-item>
          <van-dropdown-item title="筛选" ref="item3">
            <div class="jbr_topsx">
              <ul class="uu" v-for="(item,key) in jbrF3" :key="key">
                <li
                  :style="{
                    background: jbrActive == key ? '#EBEEFE' : '#f5f5f5',
                    color: jbrActive == key ? '#EB6100' : '',
                  }"
                  @click="jbract(key,item.type)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </header>
    </div>
    <div class="cont">
       <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check='false'
          error-text='加载失败，请点击重试'
        >
          <dl @click="jbrXq(item.id,item)" v-for='(item,key) in newList' :key='key'>
            <dt>
              <p class="title">{{item.title}}</p>
              <van-icon name="clock-o" class="jbr_icon" />
              <span>{{ item.start_play_date | time }} | 共{{item.total_periods}}课时</span>
              <div class="jbr_lq">
                <img :src="item.teachers_list[0].teacher_avatar" alt="" />
                <span>{{ item.teachers_list[0].teacher_name }}</span>
                <p class="p" v-show="item.has_buy == 1">
                  <img src="../../assets/bm.png" alt="">
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
      </van-list>
    </div>
  </div>
</template>

<script>
import Xq from "./Cod";
import $ from "jquery";
// import { jbrKc } from '@/utils/api'
import { Search, Loading } from 'vant';
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      jbrFl: [],
      jbrF2: [],
      jbrActive: 0,
      Active1: -1,
      Active2: -1,
      jbrPx: 0,
      jbrarr: [
        {name:"综合排序",type:0},
        {name:"最新",type:1},
        {name:"最热",type:2},
        {name:"价格从低到高",type:3},
        {name:"价格从高到低",type:4},
      ],
      jbrF3: [
        {name:"全部",type:0},
        {name:"大班课",type:2},
        {name:"小班课",type:3},
        {name:"公开课",type:4},
        {name:"点播课",type:5},
        {name:"面授课",type:7},
        {name:"音频课",type:8},
        {name:"系统课",type:9},
        {name:"图文课",type:10},
        {name:"会员课",type:6},
      ],
      newList:[],
      page:1,
      limit:10,
      loading: false,
      finished: false,
      refreshing: false,
      timer:null,
      id1:-1,
      id2:-1,
      arr:[],
      str:'',
    };
  },
  components: {
    Xq,
  },
  created() {},
  mounted() {
    this.fl();
    this.px();
    this.newlist();
  },
  methods: {
    onConfirm() {
      this.$refs.item1.toggle();
      this.$refs.item2.toggle();
      this.$refs.item3.toggle();
    },
    async jbract(k,tab) {
      this.jbrActive = k;
      this.$refs.item3.toggle();
      let { data } = await this.$Axios.get(
        `/api/app/courseBasis?page=1&limit=10&course_type=${tab}&classify_id=&order_by=&attr_val_id=&is_vip=0`
      )
      console.log(data)
      this.newList=data.data.list
      console.log(this.newList)
    },
    async jbrpx(tab,k) {
      this.jbrPx = k;
      this.$refs.item2.toggle();
      let { data } = await this.$Axios.get(
        `/api/app/courseBasis?page=1&limit=10&course_type=0&classify_id=&order_by=${tab}&attr_val_id=&is_vip=0`
      )
      console.log(data)
      this.newList=data.data.list
      console.log(this.newList)
      // switch(item){
      //   case '综合排序':
      //     this.newlist()
      //   break;
      //   case '价格从低到高':
      //     this.newList.sort((a, b) => {
      //       return a.total_periods - b.total_periods
      //     })
      //   break;
      //   case '价格从高到低':
      //       this.newList.sort((a, b) => {
      //         return b.total_periods - a.total_periods
      //       })
      //   break;
      // }
    },
    async newlist(){
      this.loading = true
      let { data } = await this.$Axios.get(`/api/app/courseBasis?page=${this.page}&limit=${this.limit}`)
      // console.log(data)
      this.loading = false
      this.newList=data.data.list
      // console.log(this.newList)
    },
    async fl() {
      let { data } = await this.$Axios.get("/api/app/courseClassify");
      // console.log(data);
      this.jbrFl.push(data.data.attrclassify[0]);
      this.jbrF2.push(data.data.attrclassify[1]);
    },
    async px() {
      let { data } = await this.$Axios.get(
        `/api/app/courseBasis?order_by=${this.jbrPx}`
      );
    },
    act1(k,id) {
      this.Active1 = k;
      this.id1 = id
      console.log(this.id1)
    },
    act2(ind,id) {
      this.Active2 = ind;
      this.id2 = id
      console.log(this.id2)
    },
    jbrXq(id,item) {
      console.log(id)
      // let xm = JSON.parse(localStorage.getItem('newlist'))
      this.$router.push({
        path:"/cod",
        query:{
          id:id,
          item:item
        }
      });
      // localStorage.setItem('newlist',JSON.stringify(item))
    },
    search(){
      this.$router.push('/search')
    },
    cz(){
      this.Active1 = -1
      this.Active2 = -1
      this.id1 = -1
      this.id2 = -1
      this.$refs.item1.toggle();
      this.arr = []
      this.str = ''
      this.newlist()
    },
    async qd(){
      this.$refs.item1.toggle();
      // console.log(this.id1,this.id2)
      this.arr = []
      this.str = ''
      if(this.id1 != -1){
        this.arr.push(this.id1)
      }
      if(this.id2 != -1){
        this.arr.push(this.id2)
      }

      if(this.id1 == -1 && this.id2 == -1){
        this.arr = []
        this.str = ''
      }
      console.log(this.arr)
      this.str = this.arr.join(' ')
      console.log(this.str)
      let { data } = await this.$Axios.get(
        `/api/app/courseBasis?page=1&limit=10&course_type=0&classify_id=&order_by=&attr_val_id=${this.str}&is_vip=0&`
      )
      console.log(data)
      this.newList=data.data.list
      // console.log(this.newList)
    },
    onLoad() {
        // this.$refs.Lod.check();
        setTimeout(() => {
          this.limit+=7
          // this.limit.page++
          this.newlist()
          
          // 加载状态结束
          // this.loading = false;

          // 数据全部加载完成
          if (this.newList.length<=0) {
            this.finished = true;
          }
        }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 3.75rem;
  height: 100%;
  background: #f0f2f5;
}
header {
  width: 3.75rem;
  position: fixed;
  top: 0;
  z-index: 100;
}
.cont {
  width: 3.75rem;
  height: 100%;
  padding: 3px 0;
  box-sizing: border-box;
  margin-top: 100px;
  margin-top: 95px;
  margin-bottom: 52px;
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
.jbr_topsx {
  // width: 3.75rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.1rem 0.06rem;
  .uu{
    li{
      width: 0.7rem;
      height: 0.33rem;
      background: #f5f5f5;
      text-align: center;
      line-height: 0.33rem;
      margin: 0.1rem 0.1rem;
      font-size: 0.14rem;
    }
  }
}
.ul {
  width: 3.75rem;
  li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
    font-size: 0.14rem;
  }
}
.Fl{
  width: 3.75rem;
  p{
    font-size: 0.14rem;
    text-indent: 0.1rem;
  }
  ul{
    width: 3.75rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #eee;
    li{
      width: 0.7rem;
      height: 0.33rem;
      background: #f5f5f5;
      text-align: center;
      line-height: 0.33rem;
      margin: 0.05rem 0.05rem;
      font-size: 0.14rem;
    }
  }
  ol{
    width: 3.75rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #eee;
    li{
      width: 0.7rem;
      height: 0.33rem;
      background: #f5f5f5;
      text-align: center;
      line-height: 0.33rem;
      margin: 0.05rem 0.05rem;
      font-size: 0.14rem;
    }
  }
  .but{
    width: 3.75rem;
    margin-bottom: 0.15rem;
    box-sizing: border-box;
    padding: 10px 10px;
    font-size: 0.13rem;
    .cz{
      width: 1.7rem;
      height: 0.33rem;
      margin-left: 0.05rem;
      background: white;
      border: 1px solid #DADADA;
      border-radius: 0.03rem;
    }
    .qd{
      width: 1.7rem;
      height: 0.33rem;
      margin-left: 0.07rem;
      border: #EB6100;
      background: #EB6100;
      color: white;
      border-radius: 0.03rem;
    }
  }
}
</style>
