<template>
  <div class="box">
    <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item
        v-model="value1"
        title="选择上课时间"
        @open="tlyshow = true"
        @close="tlyshow = false"
        ref="item"
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
        <van-button type="default" @click="cz">重置</van-button>
        <van-button type="warning" @click="wc">完成</van-button>
      </div>
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="cont">
      <dl v-for="(item, key) in yylist" :key="key">
        <dt><img :src="item.avatar" alt="" /></dt>
        <dd>
          <p>{{ item.real_name }}</p>
          <p class="sex">
            <span>
              {{ item.sex == 0 ? "男" : "女" }}
            </span>
            <span>{{ item.teach_age }}年教龄</span>
          </p>
          <button @click="yy(item.teacher_id)" class="but">预约</button>
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
      sdata: "",
      sdata1: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "选择上课时间", value: 0 }],
      option2: [
        { text: "选择下课时间", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      page: 1,
      limit: 20,
      yylist: [],
      cid: JSON.parse(localStorage.getItem("cid")) || 0,
      date: "",
      tlyshow: false,
    };
  },
  mounted() {
    this.yyList();
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    search() {
      this.$router.push("/search");
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
      console.log(this.date);
    },
    async yyList() {
      let { data } = await this.$Axios.get("/api/app/otoCourse");
      console.log(data);
      this.yylist = data.data;
    },
    cz() {
      this.date = "";
      this.sdata = "";
      this.sdata1 = "";
    },
    wc() {
      // console.log(this.sdata.split(":")[0]);
      // console.log(this.sdata1.split(":")[1]);
      console.log(
        this.date +
          "," +
          this.sdata.split(":")[0] +
          "," +
          this.sdata1.split(":")[1]
      );
      this.$refs.item.toggle(false);
    },
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
  .van-button:nth-child(1) {
    width: 50%;
    height: 100%;
    .van-button__content {
      height: 100%;
      background: rgba(100, 148, 237, 0);
      color: orangered;
    }
  }
  .van-button:nth-child(2) {
    width: 50%;
    height: 100%;
    .van-button__content {
      height: 100%;
      background: rgba(100, 148, 237, 0);
      color: white;
    }
  }
}
.cont {
  dl {
    width: 3.75rem;
    background: white;
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
      .sex {
        font-size: 0.13rem;
        color: #b7b7b7;
        margin-top: -0.1rem;
      }
      .but {
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
</style>