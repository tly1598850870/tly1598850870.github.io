<template>
  <div class="box">
    <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu :overlay='false' :duration=0 >
      <van-dropdown-item
        title="选择上课时间"
        @open="sk" @close='sk'
        ref="item1"
      >
        <div class="tly_topbox">
          <div>
            <p class="p">日期</p>
            <van-calendar
              :show-subtitle="false"
              :show-title="false"
              :poppable="false"
              :show-confirm="false"
              @confirm="onConfirm"
              :style="{ height: '33vh', width: '100%' }"
            />
          </div>
          <div class="content_tly">
            <div>
              <el-time-select
                v-model="sdata"
                :picker-options="{
                  start: '0:00',
                  step: '1:00',
                  end: '23:00',
                }"
                placeholder="选择时间"
              >
              </el-time-select>
            </div>
            <div>
              <el-time-select
                v-model="sdata1"
                :picker-options="{
                  start: '0:01',
                  step: '0:01',
                  end: '0:59',
                }"
                placeholder="选择时间"
              >
              </el-time-select>
            </div>
          </div>
        </div>
      </van-dropdown-item>
      <div class="bottombotton" v-show="tlyshow">
        <van-button type="default" @click="czs">重置</van-button>
        <van-button type="warning"  @click="wc" style="background:#EB6100">确定</van-button>
      </div>
    <van-dropdown-item @open="ls" @close='ls' title="选择老师条件" ref="item">
      <p>老师类型</p>
      <ul class="ul">
        <li v-for="(item,key) in jbrF1" :key="key"
          :style="{
            background: jbrActive1 == key ? '#EBEEFE' : '#f5f5f5',
            color: jbrActive1 == key ? '#EB6100' : '',
          }"
          @click="jbrA1(key,item.tab)"
        >
          {{ item.name }}
        </li>
      </ul>
      <p>只看</p>
      <div class="zk">
          <input type="checkbox" v-model="check" @click="jbrA5(1)" >已关注
          <input type="checkbox" v-model="che" @click="jbrA6(1)" >上过课的
      </div>
      <p>性别</p>
      <div class="sex">
        <ul>
          <li v-for="(item,key) in jbrF4" :key="key"
          :style="{
            background: jbrActive2 == key ? '#EBEEFE' : '#f5f5f5',
            color: jbrActive2 == key ? '#EB6100' : '',
          }"
          @click="jbrA2(key,item.tab)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="nj">
        <p>年级</p>
        <ul class="ull">
          <li v-for="(item,key) in jbrF2" :key="key"
          :style="{
            background: jbrActive3 == key ? '#EBEEFE' : '#f5f5f5',
            color: jbrActive3 == key ? '#EB6100' : '',
          }"
          @click="jbrA3(key,item.tab)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="km">
        <p>学科</p>
        <ul class="ul">
          <li v-for="(item,key) in jbrF3" :key="key"
            :style="{
            background: jbrActive4 == key ? '#EBEEFE' : '#f5f5f5',
            color: jbrActive4 == key ? '#EB6100' : '',
          }"
          @click="jbrA4(key,item.tab)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="but">
        <button class="cz" @click="cz">重置</button>
        <button class="qd" @click="qd()">确定</button>
      </div>
    </van-dropdown-item>
  </van-dropdown-menu>
    <div class="cont" v-show="!flag">
      <p class="ssjg" v-show="sFlag">"{{ name }}"搜索结果</p>
      <dl v-for="(item, key) in yylist" :key="key">
        <dt><img :src="item.avatar" alt="" /></dt>
        <dd>
          <p>{{ item.real_name }}
          <span class="gz">{{ item.is_collect==1?'已关注':'' }}</span>
          </p>
          <p class="sex">
            <span>
              {{ item.sex == 0 ? "男" : "女" }}
            </span>
            <span>{{ item.teach_age }}年教龄</span>
          </p>
          <button @click="yy(item.teacher_id)" class="btn">预约</button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Calendar } from "vant";

Vue.use(Calendar);
export default {
  data() {
    return {
      switch1: false,
      switch2: false,
      check:false,
      che:false,
      jbrActive1:-1,
      jbrActive2:-1,
      jbrActive3:-1,
      jbrActive4:-1,
      jbrid1:-1,
      jbrid2:-1,
      jbrid3:-1,
      jbrid4:-1,
      jbrid5:0,
      jbrid6:0,
      page:1,
      limit:20,
      yylist:[],
      cid:JSON.parse(localStorage.getItem('cid'))||0,
      jbrF1:[
        {name:'M1',tab:4},
        {name:'M2',tab:5},
        {name:'M3',tab:6},
        {name:'M4',tab:7},
        {name:'M5',tab:8},
        {name:'M6',tab:9},
        {name:'M7',tab:10},
        {name:'M8',tab:11},
        {name:'M9',tab:12},
        {name:'M10',tab:13},
        {name:'M11',tab:14},
        {name:'M12',tab:15},
        {name:'M13',tab:16},
        {name:'M14',tab:17},
        {name:'M15',tab:18},
        {name:'M16',tab:19},
        {name:'M17',tab:20},
        {name:'M18',tab:21},
        {name:'M19',tab:22},
        {name:'M20',tab:23},
      ],
      jbrF2:[
        {name:'小学一年级',tab:18},
        {name:'小学二年级',tab:19},
        {name:'小学三年级',tab:20},
        {name:'小学四年级',tab:21},
        {name:'小学五年级',tab:22},
        {name:'小学六年级',tab:23},
        {name:'初一',tab:1},
        {name:'初二',tab:2},
        {name:'初三',tab:3},
        {name:'高一',tab:4},
        {name:'高二',tab:5},
        {name:'高三',tab:6},
      ],
      jbrF3:[
        {name:'语文',tab:7},
        {name:'数学',tab:8},
        {name:'英语',tab:6},
        {name:'物理',tab:12},
        {name:'化学',tab:13},
        {name:'生物',tab:24},
        {name:'信息技术',tab:26},
      ],
      jbrF4:[
        {name:'男',tab:0},
        {name:'女',tab:1},
      ],
      jbrF5:[
        {name:'已关注',tab:1},
        {name:'上过课的',tab:1},
      ],
      flag:false,
      arr:[],
      str:'',
      sdata: "",
      sdata1: "",
      value: 0,
      switch1: false,
      switch2: false,
      page: 1,
      limit: 20,
      yylist: [],
      cid: JSON.parse(localStorage.getItem("cid")) || 0,
      date: "",
      tlyshow: false,
      sFlag:false,
      val:'',
      name:'',
    };
  },
  mounted() {
    this.val = this.$route.query.val
    this.name = this.$route.query.name
    this.yylist = this.val.data;
    console.log(this.val)
    console.log(this.name)
    console.log(this.yylist)
    if(this.$route.query.name == undefined || this.$route.query.name == ''){
      this.sFlag = false
      return false
    }
    if(this.yylist != undefined){
      this.sFlag = true
    }else{
      this.yyList();
      this.sFlag = false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/footer/myhome');
      this.$store.state.act = 0
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
    search() {
      this.$router.push("/sou");
    },
    yy(id) {
      localStorage.setItem("cid", JSON.stringify(id));
      this.$router.push({
        path: "/neworder",
        query: {
          id: id,
        },
      });
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.date = this.formatDate(date);
    },
    async yyList() {
      let { data } = await this.$Axios.get("/api/app/otoCourse");
      this.yylist = data.data;
    },
    czs() {
      this.date = "";
      this.sdata = "";
      this.sdata1 = "";
      this.$refs.item1.toggle();
    },
    wc() {
      console.log(
        this.date +
          "," +
          this.sdata.split(":")[0] +
          "," +
          this.sdata1.split(":")[1]
      );
      this.$refs.item1.toggle();
    },
    jbrA1(k,tab){
      this.jbrActive1 = k
      this.jbrid1 = tab
    },
    jbrA2(k,tab){
      this.jbrActive2 = k
      this.jbrid2 = tab
    },
    jbrA3(k,tab){
      this.jbrActive3 = k
      this.jbrid3 = tab
    },
    jbrA4(k,tab){
      this.jbrActive4 = k
      this.jbrid4 = tab
    },
    jbrA5(tab){
      this.jbrid5 = tab
      console.log(this.jbrid5)
    },
    jbrA6(tab){
      this.jbrid6 = tab
      // console.log(this.jbrid6)
    },
    async yyList(){
      let { data } = await this.$Axios.get('/api/app/otoCourse')
      this.yylist=data.data
    },
    ls(){
      this.flag = !this.flag
    },
    sk(){
      this.flag = !this.flag
      this.tlyshow = !this.tlyshow
    },
    cz(){
      this.jbrActive1 = this.jbrActive2 = this.jbrActive3 = this.jbrActive4 = -1
      this.jbrid1 = this.jbrid2 = this.jbrid3 = this.jbrid4 = this.jbrid5 = this.jbrid6 = -1
      this.arr = []
      this.str = ''
      this.$refs.item.toggle();
      this.check = false
      this.che = false
    },
    async qd(){
      this.$refs.item.toggle();
      this.arr = []
      this.str = ''
      
      if(this.jbrid3 != -1){
        this.arr.push(this.jbrid3)
      }
      if(this.jbrid4 != -1){
        this.arr.push(this.jbrid4)
      }
      if(this.jbrid1 == -1){
        this.jbrid1 = 0
      }
      if(this.jbrid2 == -1){
        this.jbrid2 = 0
      }
      if(this.jbrid5 == -1){
        this.jbrid5 = 0
      }
      if(this.jbrid6 == -1){
        this.jbrid6 = 0
      }

      if(this.jbrid3 == -1 && this.jbrid4 == -1){
        this.arr = []
        this.str = ''
      }

      if(this.check == false && this.che == false){
        this.arr = []
        this.str = ''
        // console.log(this.che)
        // console.log(this.check)
        setTimeout(() => {
          this.check = false
          this.che = false
          this.yyList();
        }, 100);
      }

      // console.log(this.arr)
      this.str = this.arr.join(' ')
      // console.log(this.str)

      let { data } = await this.$Axios.get(
        `/api/app/otoCourse?page=1&limit=10&start_time=&end_time=&level_id=${this.jbrid1}&is_collect=${this.jbrid5}&is_attended=${this.jbrid6}&sex=${this.jbrid2}&attr_val_id=${this.str}`
      )
      // console.log(data)
      this.yylist=data.data
    }
  },
};
</script>

<style scoped lang='scss'>
.box {
  width: 3.75rem;
  height: 70%;
  background: #f0f2f5;
}
.tly_topbox {
  width: 100%;
  height: 65vh;
  background: rgb(230, 230, 230);
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0.1rem;
  .van-calendar__header {
    width: 100% !important;
    .van-calendar__weekdays {
      width: 100% !important;
      display: flex;
    }
  }
  div:nth-child(1) {
    width: 100%;
    height: 50vh;
    background: white;
    box-sizing: border-box;
    padding: 0.1rem;
    color: rgb(110, 110, 110);

    .p {
      margin: 0rem 0rem 0.1rem 0rem;
      padding: 0;
      font-size: 0.08rem;
    }
    .div {
      display: flex;
      padding-bottom: 0.1rem;
      height: 3vh;
      span {
        flex: 1;
        text-align: center;
        font-size: 0.06rem;
      }
    }
  }
  div:nth-child(2) {
    box-sizing: border-box;
    padding: 0.1rem;
    width: 100%;
    height: 10vh;
    background: white;
    display: flex;
    align-items: center;
    div {
      margin: 0px;
      padding: 0px;
      height: 6vh;
      flex: 1;
      .el-date-editor {
        height: 6vh;
      }
    }
  }
}
.bottombotton {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 7vh;
  background: white;
  z-index: 9999;
  font-size: 0.16rem;
  .van-button:nth-child(1) {
    width: 50%;
    height: 100%;
    .van-button__content {
      height: 100%;
      background: rgba(100, 148, 237, 0);
      color: orangered;
      font-size: 0.17rem;
    }
  }
  .van-button:nth-child(2) {
    width: 50%;
    height: 100%;
    .van-button__content {
      height: 100%;
      background: rgba(100, 148, 237, 0);
      color: white;
      font-size: 0.17rem;
    }
  }
}
.van-nav-bar{
  width: 3.75rem;
  position: fixed;
  top: 0;
}
.van-dropdown-menu{
  margin-top: 0.45rem;
}
.cont{
  margin-top: -0.16rem;
  .ssjg{
    margin-top: 0.2rem;
    margin-left: 0.13rem;
    font-size: 0.13rem;
    color: #8C8C8C;
  }
}
.cont {
  dl {
    width: 3.6rem;
    background: white;
    margin-left: 0.07rem;
    dt {
      box-sizing: border-box;
      padding: 0.15rem 0.1rem;
      float: left;
      img {
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 0.5rem;
      }
    }
    dd {
      box-sizing: border-box;
      padding: 0.01rem 0.1rem;
      p {
        font-size: 0.15rem;
      }
      .gz{
        font-size: 0.13rem;
        color: #EA7A2F;
      }
      .sex {
        font-size: 0.13rem;
        color: #b7b7b7;
        margin-top: -0.1rem;
      }
      .btn{
        width: 0.7rem;
        height: 0.3rem;
        border-radius: 0.5rem;
        border: 1px solid #ebeefe;
        background: #ebeefe;
        font-size: 0.13rem;
        color: #eb6100;
        float: right;
        margin-top: -0.47rem;
      }
    }
  }
}
.but{
  width: 3.75rem;
  font-size: 0.17rem;
  position: fixed;
  bottom: 0;
  .cz{
    width: 50%;
    height: 0.47rem;
    color: #EB6100;
    background: white;
    border: 1px solid white;
    // border: 1px solid #eee;
  }
  .qd{
    width: 50%;
    height: 0.47rem;
    border: #EB6100;
    background: #EB6100;
    color: white;
  }
}
.van-dropdown-item{
  p{
    font-size: 0.13rem;
    margin-left: 0.15rem;
    color: #595959;
  }
  .ul{
    width: 3.5rem;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-left: 0.01rem;
    border-bottom: 1px solid #EBEEFE;
    margin: 0 auto;
    li{
      width: 0.61rem;
      height: 0.33rem;
      background: #F5F5F5;
      text-align: center;
      line-height: 0.33rem;
      font-size: 0.13rem;
      margin: 0.1rem 0.13rem;
      color: #646464;
    }
  }
  .zk{
    width: 3.5rem;
    margin: 0 auto;
    font-size: 0.13rem;
    display: flex;
    color: #8C8C8C;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #EBEEFE;
    input{
      width: 0.17rem;
      height: 0.17rem;
    }
    input:nth-child(2){
      margin-left: 0.2rem;
    }
  }
  .sex{
    width: 3.5rem;
    margin: 0 auto;
    font-size: 0.13rem;
    display: flex;
    align-items: center;
    color: #8C8C8C;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #EBEEFE;
    ul{
      display: flex;
      li{
        width: 0.61rem;
        height: 0.33rem;
        background: #F5F5F5;
        text-align: center;
        line-height: 0.33rem;
        font-size: 0.13rem;
        margin: 0.05rem 0.07rem;
        color: #646464;
      }
    }
  }
  .nj{
    width: 3.5rem;
    margin: 0 auto;
    font-size: 0.13rem;
    color: #8C8C8C;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #EBEEFE;
  }
  .ull{
    width: 3.5rem;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-left: 0.01rem;
    margin: 0 auto;
    li{
      width: 0.7rem;
      height: 0.33rem;
      background: #F5F5F5;
      text-align: center;
      line-height: 0.33rem;
      font-size: 0.13rem;
      margin: 0.1rem 0.07rem;
      color: #646464;
    }
  }
}

</style>