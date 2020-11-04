<template>
  <div>
    <div id="top">
      <div id="conterbox">
        <span @click="tosubject">
          <span><van-icon name="label-o" /></span>
          <span>题库选择</span>
        </span>
        <span>
          <van-icon name="setting-o" @click="showPopup" />
        </span>
      </div>
    </div>
    <div class="tly_conterbox">
      <div class="tly_samllbox" v-for="(item, index) in showlist" :key="index">
        <span><van-icon name="close" /></span> <span>{{ item.name }}</span
        ><span>15/35 </span>
      </div>
    </div>
    <van-popup
      class="bottomshowbox"
      v-model="show"
      position="bottom"
      :style="{ height: '30%' }"
    >
      <div class="tly_bottomshowbox">
        <h3>考点专练设置</h3>
        <div class="tly_contentbox">
          <van-radio-group v-model="radio">
            <van-radio name="1">随机十五道</van-radio>
            <van-radio name="2">按顺序做题 </van-radio>
          </van-radio-group>
        </div>
        <div class="tly_bottombox">
          <van-button type="danger" @click="down">确定</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { RadioGroup, Radio } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  data() {
    return {
      showlist: JSON.parse(localStorage.getItem("showlist")) || [],
      show: false,
      radio: "1",
    };
  },
  mounted() {
    this.$store.commit("changeleftarrows", true);
    this.$store.commit("changeshow", "习题详情");
    this.change();
  },
  methods: {
    tosubject() {
      this.$router.push("/footer/Myexercise/question");
    },
    async change() {
      var { data } = await this.$Axios.get(
        "/api/app/examPoint" + this.$route.query.name
      );
      console.log(data.data);
      if (data.data != []) {
        for (let index = 0; index < data.data.length; index++) {
          console.log(111111);
          this.showlist.push(data.data[index]);
        }
        // console.log(this.showlist);
        localStorage.setItem("showlist", JSON.stringify(this.showlist));
        // console.log(localStorage.getItem("changeshow"));
      }
    },
    showPopup() {
      this.show = true;
    },
    down(){
      this.show = false;
    }
  },
};
</script>
<style lang="scss"  scoped>
#top {
  height: 7vh;
  padding-top: 10px;
  background: rgb(243, 241, 241);
  box-sizing: border-box;
  overflow: hidden;

  #conterbox {
    width: 100%;
    height: 6vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.1rem;
    span:nth-child(1) {
      flex: 5;
    }
    span:nth-child(2) {
      flex: 1;
      text-align: center;
    }
  }
}
.tly_conterbox {
  box-sizing: border-box;
  padding: 0rem 0.1rem;
  .tly_samllbox {
    height: 7vh;
    width: 100%;
    border: 1px solid rgb(206, 206, 206);
    margin-bottom: 0.1rem;
    border-radius: 0.05rem;
    display: flex;
    align-items: center;
    text-align: center;
    span:nth-child(1) {
      flex: 1;
    }
    span:nth-child(2) {
      flex: 5;
    }
    span:nth-child(3) {
      flex: 1;
    }
  }
}
.bottomshowbox {
  box-sizing: border-box;
  padding: 0.1rem;
  .tly_bottomshowbox {
    h3 {
      margin: 0;
      padding: 0;
      text-align: center;
    }
    .tly_contentbox {
      height: 15vh;
      width: 100%;
      display: flex;
      .van-radio-group {
        display: flex;
        flex-wrap: wrap;
        .van-radio {
          width: 100%;
          height: 5vh;
        }
      }
    }
    .tly_bottombox {
      width: 100%;
      height: 8vh;
      .van-button {
        width: 100%;
      }
    }
  }
}
</style>