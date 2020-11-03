<template>
  <div>
    <p class="tly_top">考点练习</p>
    <div class="tly_nullbox">
      <img src="http://localhost:8080/%E8%80%83%E5%8D%B7.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("changeshow", this.$route.query.name);
    this.$store.commit("changeleftarrows", true);
    // console.log(this.$store.state.leftarrows);
    // console.log("考点练习");
  },
};
</script>
<style lang="scss">
.tly_top {
  margin-top: 10vh;
}
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