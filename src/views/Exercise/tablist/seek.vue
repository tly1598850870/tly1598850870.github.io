<template>
  <div>
    <van-nav-bar left-text="" left-arrow>
      <template #title>
        <van-search
          v-model="value"
          shape="round"
          background="white"
          placeholder="请输入搜索关键词"
          @focus="changes"
        />
      </template>
      <template #right>
        <span v-show="showseek" @click="seeks">搜索</span>
        <span v-show="showseek==false" @click="showseek=false">取消</span>
      </template>
    </van-nav-bar>
    <div class="tly_seek" v-show="showseek==false">
      <h4>搜索历史</h4>
      <div>
        <span v-for="(item, index) in showseeks" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="tly_seeklist" v-show="showseek==true">
        搜索列表
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      seekl: [],
      showseek:false,
    };
  },
  mounted() {
    this.$store.commit("changecontentarrows", false);
    console.log(true);
  },
  destroyed() {
    this.$store.commit("changecontentarrows", true);
    console.log(false);
  },
  methods: {
      changes(){
            this.showseek=true 
      },
      seeks(){
          this.seekl.unshift(this.value)
          this.showseek=false 
          console.log(this.showseeks);
      }
  },
  computed: {
    showseeks: function () {
      return this.seekl.slice(0,3);
    },
  },
};
</script>
<style lang="scss"  scoped>
* {
  margin: 0;
  padding: 0;
}
.tly_seek {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem;
}
.tly_seeklist{
  box-sizing: border-box;
  padding: 0.2rem;  
}
</style>