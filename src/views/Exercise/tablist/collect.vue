<template>
  <div>
    <p class="tly_topsmillbox">
      <span>物理</span
      ><span><span class="tly_blue">0</span><span>/8</span></span>
    </p>
    <div class="tly_conterbox">
      <p class="tly_topp">
        <span class="tly_bluebox">多选</span><span>1</span
        ><span>下列叙述正确的是</span>
      </p>
      <van-radio-group v-model="radio">
        <van-radio name="1" shape="square">单选框 1</van-radio>
        <van-radio name="2" shape="square">单选框 2</van-radio>
      </van-radio-group>
    </div>
    <div class="conter_backrgray"></div>
    <div class="tly_bottomboxs">
      <p>
        <span class="tly_gray">正确答案:</span><span class="tly_blue">C</span>
      </p>
      <p class="tly_contep"><span class="tly_gray"> 考点 </span></p>
      <div class="tly_fl">
        <span class="tly_bluesbox">生物史学</span>
      </div>
      <p class="tly_bottombox">
        <span class="tly_gray">解析:</span>
        <span>222222222222<br>
        1</span>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { RadioGroup, Radio } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  data() {
    return {
      radio: 0,
    };
  },
  mounted() {
    console.log('sssssss'+this.$store.state.rightseek);
    this.$store.commit("changerightarrows", true);
    this.$store.commit("changerightseek", false);
    // console.log(true);
  },
  destroyed() {
    console.log('sssssss'+this.$store.state.rightseek);
    this.$store.commit("changerightarrows",false );
    this.$store.commit("changerightseek", true);
    // console.log(false);
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.tly_topsmillbox {
  width: 100%;
  height: 5vh;
  border-bottom: 0.01rem solid gainsboro;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.06rem;
  font-size: 0.09rem;
}
.tly_conterbox {
  height: 40vh;
  box-sizing: border-box;
  padding: 0.2rem;
}
.tly_blue {
  color: blue;
}
.tly_bottomboxs {
  width: 100%;
  box-sizing: border-box;
  padding: 0.1rem;
}
.tly_contep {
  box-sizing: border-box;
  padding: 0.1rem 0rem 0rem 0rem;
}
.tly_topp {
  display: flex;
  font-size: 0.09rem;
}
.tly_graybox {
  height: 1vh;
  background: gainsboro;
}
.tly_gray {
  color: #818181;
  font-size: 0.14rem;
}
.tly_bluebox {
  height: 3vh;
  width: 0.5rem;
  text-align: center;
  align-items: center;
  background: rgb(65, 161, 199);
  color: white;
  border-radius: 0.05rem 0rem 0.05rem 0rem;
  box-sizing: border-box;
}
.van-radio {
  padding: 0.1rem;
}
.tly_blue {
  color: blue;
  font-size: 0.14rem;
}
.tly_conterbox {
  width: 100%;
}
.tly_bottombox {
  display: flex;
  span:nth-child(1) {
    flex: 1;
  }
  span:nth-child(2) {
    flex: 4;
  }
}
.tly_bluesbox {
  padding: 0.05rem;
  background: skyblue;
  color: white;
  font-size: 0.09rem;
  border-radius: 0.15rem;
}
.tly_fl {
  display: flex;
  box-sizing: border-box;
  margin: 0.1rem 0rem;
}
.tly_bottom_box {
  box-sizing: border-box;
  padding: 0.2rem;
  p {
    padding: 0.1rem 0rem;
  }
}
.conter_backrgray {
  width: 100%;
  height: 1vh;
  background: gainsboro;
}
</style>