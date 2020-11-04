<template>
  <div>
    <van-popup v-model="thisshow" position="right" :style="{ height: '100%' }">
      <div class="tly_contentbox">
        <div class="tly_hometopheader">
          <span @click="thisshow = false"><van-icon name="arrow-left" /></span
          ><span>答题卡</span>
        </div>
        <div class="tly_contentbox">
          <span>英语</span>
          <span>3/3</span>
        </div>
        <div class="tly_bottombox">
          <span> 1 </span>
          <span> 2 </span>
          <span> 3 </span>
          <span> 4 </span>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="thisshow1" position="right" :style="{ height: '100%' }">
      <div class="tly_contentbox">
        <div class="tly_hometopheader">
          <span @click="thisshow1 = false"><van-icon name="arrow-left" /></span
          ><span>题目纠错</span>
        </div>
        <div class="tly_contentboxse">
          <p class="tly_contentboxsep">纠错记录</p>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">错别字</van-radio>
            <van-radio name="2">答案不匹配</van-radio>
            <van-radio name="3">解析错误</van-radio>
          </van-radio-group>
        </div>
        <div id="zwdiv"></div>
        <div class="tly_contentboxse">
          <van-field
            v-model="message"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
          />
          <div class="tlybottombox">
            <van-button plain type="info">提交</van-button>
          </div>
        </div>
      </div>
    </van-popup>
    <van-nav-bar
      placeholder
      v-show="bollens"
      :left-arrow="bollen"
      :title="names"
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon v-show="bollenss" name="search" size="18" @click="seek" />
        <div class="tly_leftbox" v-show="bollense">
          <span @click="onshow"><van-icon name="orders-o" /></span>
          <span><van-icon name="star-o" /></span>
          <span @click="onshow1"><van-icon name="service-o" /></span>
        </div>
      </template>
    </van-nav-bar>
    <div class="tly_toppaddinbox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
import { RadioGroup, Radio } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);
import { Field } from "vant";
Vue.use(Field);
export default {
  data() {
    return {
      thisshow: false,
      thisshow1: false,
      radio: "1",
      message: "",
    };
  },
  created() {},
  mounted() {
    this.$store.commit("changeleftarrows", false);
    this.$store.commit("changerightarrows", false);
    this.$store.commit("changecontentarrows", true);
  },
  methods: {
    onClickLeft() {
      var thislocal = window.localStorage.getItem("thisname");
      // console.log(thislocal != null);
      if (thislocal != null) {
        this.$router.push("/footer/Myexercise/Myexercise");
      } else {
        this.$router.go("/footer/Myexercise");
      }
    },
    seek() {
      this.$router.push("/footer/Myexercise/seek");
    },
    onshow() {
      this.thisshow = true;
    },
    onshow1() {
      this.thisshow1 = true;
    },
  },
  computed: {
    names: function () {
      return this.$store.state.thisshowheader;
    },
    bollen: function () {
      return this.$store.state.leftarrows;
    },
    bollens: function () {
      return this.$store.state.contentarrows;
    },
    bollense: function () {
      console.log("sssssss" + this.$store.state.rightarrows);
      return this.$store.state.rightarrows;
    },
    bollenss: function () {
      console.log("sssssss" + this.$store.state.rightseek);
      return this.$store.state.rightseek;
    },
  },
};
</script>
<style  lang="scss" scoped>
.tly_leftbox {
  font-size: 0.16rem;
  display: flex;
  span {
    margin: 0rem 0.1rem;
  }
}
.tly_contentbox {
  width: 100vw;
  height: 80vh;
  .tly_hometopheader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    border-bottom: 0.5px solid rgb(189, 189, 189);
    span:nth-child(1) {
      font-size: 0.25rem;
      flex: 1;
      text-align: center;
    }
    span:nth-child(2) {
      flex: 8;
      font-size: 0.15rem;
      text-align: center;
    }
  }
  .tly_contentbox {
    width: 100%;
    height: 6vh;
    border-bottom: 0.5px solid rgb(189, 189, 189);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.1rem;
    font-size: 0.1rem;
  }
  .tly_bottombox {
    display: flex;
    box-sizing: border-box;
    padding: 0.1rem;
    span {
      border: 1px solid rgb(189, 189, 189);
      width: 35px;
      height: 35px;
      border-radius: 1rem;
      text-align: center;
      line-height: 35px;
      margin: 0.1rem;
    }
  }
  .tly_contentboxse {
    box-sizing: border-box;
    margin: 0.1rem;
  }
  .tly_contentboxsep {
    box-sizing: border-box;
    margin: 0.2rem 0rem;
    color: gray;
    font-size: 0.08rem;
  }
  #zwdiv {
    height: 20vh;
    width: 100%;
    border-bottom: 0.1rem solid rgb(235, 234, 234);
  }
  .tlybottombox {
    box-sizing: border-box;
    height: 30vh;
    width: 100%;
    padding-top: 22vh;
    .van-button {
      width: 100%;
    }
  }
}
</style>
