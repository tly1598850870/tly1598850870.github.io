<template>
  <div>
    <van-popup v-model="thisshow" position="right" :style="{ height: '100%' }">
      <div class="tly_contentbox"></div>
    </van-popup>
    <van-popup v-model="thisshow1" position="right" :style="{ height: '100%' }">
      <div class="tly_contentbox"></div>
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
          <span @click="onshow">题目导航</span>
          <span>收藏</span>
          <span @click="onshow1">题目纠错</span>
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
    this.$store.commit("changecontentarrows", true);
    
  },
  methods: {
    onClickLeft() {
      var thislocal = window.localStorage.getItem("thisname");
      // console.log(thislocal != null);
      if (thislocal != null) {
        this.$router.push("/footer/Myexercise/Myexercise");
      } else {
        this.$router.go(-1);
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
      return this.$store.state.rightarrows;
    },
    bollenss: function(){
      console.log('sssssss'+this.$store.state.rightseek);
      return this.$store.state.rightseek
    }
  },
};
</script>

<style  leng="scss" scoped>
.tly_leftbox {
  font-size: 0.02rem;
}
.tly_contentbox {
  width: 100vw;
  height: 110vh;
}
</style>
