<template>
  <div>
    <van-popup v-model="thisshow" position="right" :style="{ height: '100%' }">
      <div class="tly_contentbox">
        <div class="tly_hometopheader">
          <span @click="thisshow=false"><van-icon name="arrow-left" /></span><span>答题卡</span>
        </div>
        <div class="tly_contentbox">
          <span>英语</span>
          <span>3/3</span>
        </div>
        <div class="tly_bottombox">
          <span>
            1
          </span>
          <span>
            2
          </span>
          <span>
            3
          </span>
          <span>
            4
          </span>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="thisshow1" position="right" :style="{ height: '100%' }">
      <div class="tly_contentbox">
        <div class="tly_hometopheader">
          <span @click="thisshow1=false"><van-icon name="arrow-left" /></span><span>题目纠错</span>
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
export default {
  data() {
    return {
      thisshow: false,
      thisshow1: false,
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
  .tly_hometopheader{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    border-bottom:0.5px solid rgb(105, 105, 105) ;
    span:nth-child(1){
      font-size: 0.25rem;
      flex: 1;
      text-align: center;
    }
    span:nth-child(2){
      flex: 8;
      font-size: 0.15rem;
      text-align: center;
    }
  }
  .tly_contentbox{
    width: 100%;
    height: 6vh;
    border-bottom:0.5px solid  rgb(105, 105, 105)  ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.1rem;
    font-size: 0.1rem;
  }
  .tly_bottombox{
    display: flex;
    box-sizing: border-box;
    padding: 0.1rem;
    span{
      border: 1px solid gray;
      width: 35px;
      height: 35px;
      border-radius: 1rem;
      text-align: center;
      line-height: 35px;
      margin: 0.1rem;
    }
  }
}
</style>
