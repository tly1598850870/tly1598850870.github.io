<template>
  <div>
    <van-nav-bar
      v-show="bollens"
      :left-arrow="bollen"
      :title="name"
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon v-show="bollen" name="search" size="18" @click="seek" />
      </template>
    </van-nav-bar>
    <router-view></router-view>
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
      console.log(111);
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
      return this.$store.state.contentarrows;
    },
  },
};
</script>

<style scoped>
</style>
