<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item title="筛选" ref="item">
        <div class="tly_box">
          <van-sidebar v-model="activeKey" @change="changeitem">
            <van-sidebar-item
              v-for="(item, index) in optionitem"
              :key="index"
              :title="item.name"
            />
          </van-sidebar>
          <div class="tly_showbox">
            <p v-for="(items, index) in optionitemes" :key="index">
              {{ items.name }}
            </p>
          </div>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="tly_nullbox">
      <img src="http://localhost:8080/%E8%80%83%E5%8D%B7.png" alt="">
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  mounted() {
    this.$store.commit("changeshow", this.$route.query.name);
    this.$store.commit("changeleftarrows", true);
  },
  data() {
    return {
      activeKey: 0,
      value1: 0,
      value2: "a",
      show: false,
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      optionitem: [
        {
          name: "全部",
          option: {},
        },
        {
          name: "中考真题",
          option: [{ name: "数学" }],
        },
        {
          name: "化学",
          option: [{ name: "初三化学" }],
        },
        {
          name: "英语",
          option: [{ name: "小学英语" }],
        },
      ],
      optionitemes: [],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    changeitem(index) {
      this.optionitemes = [];
      // console.log(this.optionitem[index].option);
      this.optionitem[index].option.forEach((element) => {
        this.optionitemes.push(element);
      });
      // console.log(this.optionitemes);
    },
  },
};
</script>
<style lang="scss">
.tly_box {
  width: 100%;
  height: 40vh;
  background: white;
  display: flex;
}
.tly_showbox{
    width: 70%;
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