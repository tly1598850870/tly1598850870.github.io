<template>
  <div>
    <div class="tly_topbox">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value4" :options="option4" />
      </van-dropdown-menu>
    </div>

    <div class="tly_cntent">
      <div class="tly_dxt">
        <p><span class="tly_skyblue">单选题</span>属于同素异形体的是</p>
        <div class="tly_bottonbox">
          <van-button round hairline type="info" plain size="small" @click="to"
            >查看详情</van-button
          >
        </div>
      </div>
    </div>

    <p class="tly_bottombox">没有更多了</p>
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
      value4: "a",
      option4: [
        { text: "单选", value: "a" },
        { text: "多选", value: "b" },
        { text: "判断", value: "c" },
        { text: "连线", value: "d" },
      ],
    };
  },
  methods: {
    to() {
      this.$router.push('/footer/Myexercise/collect')
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.tly_skyblue {
  color: skyblue;
}
.tly_topbox {
  width: 40%;
}
.tly_cntent {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .tly_dxt {
    width: 90%;
    box-shadow: rgb(211, 211, 211) 0rem 0rem 0.05rem;
    box-sizing: border-box;
    padding: 0.1rem;
    margin: 0.1rem 0rem;
    border-radius: 0.05rem;
    .tly_bottonbox {
      width: 100%;
      margin: 0.3rem 0rem 0.2rem 0rem;
      display: flex;
      justify-content: flex-end;
    }
  }
}
.tly_bottombox {
  text-align: center;
  color: rgb(161, 159, 159);
}
</style>