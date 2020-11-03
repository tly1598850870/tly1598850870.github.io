<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <div class="tly_nullbox">
      <img src="http://localhost:8080/%E8%80%83%E5%8D%B7.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.commit("changeshow", this.$route.query.name);
    this.$store.commit("changeleftarrows", true);
    // console.log(this.$store.state.leftarrows);
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "a",
      option1: [
        { text: "全部", value: 0 },
        { text: "模拟考试", value: 1 },
        { text: "正式考试", value: 2 },
      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "未开始", value: "b" },
        { text: "进行中", value: "c" },
        { text: "已结束", value: "c" },
      ],
      option3: [
        { text: "全部", value: "a" },
        { text: "已做", value: "b" },
        { text: "未做", value: "c" },
      ],
    };
  },
};
</script>
<style lang="scss">
  .tly_nullbox{
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    img{
        width: 100%;
    }
}
</style>