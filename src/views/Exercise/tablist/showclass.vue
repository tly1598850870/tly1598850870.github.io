<template>
  <div>
    <div id="top">
      <div id="conterbox">
        <span @click="tosubject">
          <span></span>
          <span>题库选择</span>
        </span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.commit("changeleftarrows", true);
    this.$store.commit("changeshow", this.$route.query.name);
  },
  methods: {
    tosubject() {
      this.$router.push("/footer/Myexercise/question");
    },
  },
};
</script>
<style lang="scss"  scoped>
#top {
  height: 7vh;
  padding-top: 10px;
  background: gainsboro;
  box-sizing: border-box;
  overflow: hidden;
  #conterbox {
    width: 100%;
    height: 6vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    span:nth-child(1) {
      flex: 5;
    }
    span:nth-child(2) {
      flex: 1;
    }
  }
}
</style>