<template>
  <div>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="tly_bigbox">
      <div class="tly_showbox">
        <p><span>物理史学</span><span class="tly_blue">0</span><span>/8</span></p>
        <div class="tly_contentbox">
          <p>
            <span>答题时长：</span><span>0分41秒</span><span>正确率：</span
            ><span>0%</span>
          </p>
          <p><span>提交时间：</span><span>2020-10-28 15:16:53</span></p>
        </div>
        <div class="tly_ann">
            <van-button round plain  type="info" size="mini" @click="toanalysis">查看解析</van-button>
            <van-button round  plain type="info" size="mini">重新练习</van-button>
        </div>
      </div>
      <div class="tly_showbox"></div>
    </div>
    <p class="tly_bottombox">没有更多了</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部", value: 0 },
        { text: "套卷练习", value: 1 },
        { text: "仿真模考", value: 2 },
        { text: "考点转练", value: 2 },
      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "今天", value: "b" },
        { text: "7天", value: "c" },
      ],
    };
  },
  mounted() {
    this.$store.commit("changeshow", this.$route.query.name);
    this.$store.commit("changeleftarrows", true);
    console.log(this.$store.state.leftarrows);
  },
  methods: {
      toanalysis(){
          this.$router.push("/footer/Myexercise/analysis")
      }
  },
};
</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
.tly_bigbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .tly_showbox {
    border-radius: 0.1rem;
    margin: 0.1rem 0rem;
    width: 95%;
    height: 20vh;
    box-shadow: rgb(194, 194, 194) 0rem 0rem 0.08rem;
    box-sizing: border-box;
    padding: 0.15rem;
  }
}
.tly_bottombox {
  text-align: center;
  font-size: 0.08rem;
  color: rgb(155, 155, 155);
}
.tly_contentbox{
    color: gray;
    font-size: 0.05rem;
    
}
.tly_ann{
    font-size: 0.03rem;
    width: 40%;
    margin: 3vh 0vw 0vh 53vw;
}
.tly_blue{
    color: blue;
}
</style>