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
    <div class="tly_bottombotton">
      <van-button plain size="small" type="info">上一题</van-button>
      <van-button plain size="small" type="info">下一题</van-button>
    </div>
    <div class="tly_graybox"></div>
    <div class="tly_bottom_box">
      <div class="tly_bottomxz">
        <p><span class="tly_gray">正确答案：</span><span class="tly_blue">A,D</span></p>
        <p><span class="tly_gray">正确答案：</span><span class="tly_red">A,D</span></p>
      </div>
      <div>
          <p class="tly_graybig">考点：</p>
          <div class="tly_fl">
              <span class="tly_bluesbox">生物史学</span>
          </div>
          <p class="tly_graybig">解析：</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { RadioGroup, Radio } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);
export default {};
</script>
<style lang="scss">
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
  height: 50vh;
  box-sizing: border-box;
  padding: 0.2rem;
}
.tly_blue {
  color: blue;
}
.tly_topp {
  display: flex;
  font-size: 0.09rem;
}
.tly_graybox {
  height: 1vh;
  background: gainsboro;
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
.tly_bottombotton {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
}
.van-radio {
  padding: 0.1rem;
}
.tly_gray{
    color: gray;
    font-size: 0.12rem;
}
.tly_bluesbox{
    padding: 0.05rem;
    background: skyblue;
    color: white;
    font-size: 0.09rem;
    border-radius:0.15rem ;
}
.tly_graybig{
    color: gray;
    font-size: 0.15rem;
}
.tly_blue{
    color: blue;
    font-size: 0.12rem;
}
.tly_fl{
    display: flex;
}
.tly_red{
   color: peru;
    font-size: 0.12rem; 
}
.tly_conterbox {
  width: 100%;
}
.tly_bottom_box {
  box-sizing: border-box;
  padding: 0.2rem;
  p{
      padding: 0.1rem 0rem;
  }
}
.tly_bottomxz {
  display: flex;
  p {
    flex: 1;
  }
}
</style>