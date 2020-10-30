<template>
  <div>
    <van-nav-bar
      fixed="true"
      v-show="bollens"
      :left-arrow="bollen"
      :title="name"
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon v-show="bollen" name="search" size="18" @click="seek" />
      </template>
    </van-nav-bar>
    <div class="tly_toppaddinbox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.$store.commit("changeleftarrows", false);
    this.$store.commit("changecontentarrows", true);
  },
  methods: {
    onClickLeft() {
      var thislocal = window.localStorage.getItem("thisname");
      console.log(thislocal != null);
      if (thislocal != null) {
        this.$router.push("/footer/Myexercise/Myexercise");
      } else {
        this.$router.go(-1);
      }
    },
    seek() {
      this.$router.push("/footer/Myexercise/seek");
    },
  },
  computed: {
    name: function () {
      return this.$store.state.thisshowheader;
    },
    bollen: function () {
      return this.$store.state.leftarrows;
    },
    bollens: function () {
      console.log(this.$store.state.contentarrows);
      return this.$store.state.contentarrows;
    },
  },
};
</script>

<style scoped>
.tly_toppaddinbox{
  padding-top:10vh ;
}
</style>
