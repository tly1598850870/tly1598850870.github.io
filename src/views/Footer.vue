<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="$store.state.act" active-color="#FD620B">
      <van-tabbar-item @click="ly()">
        <span class="iconfont">&#xe7f1;</span>
        <p>首页</p>
      </van-tabbar-item>
      <van-tabbar-item @click="ly()">
        <span class="iconfont">&#xe602;</span>
        <p>课程</p>
      </van-tabbar-item>
      <van-tabbar-item @click="ly()">
        <span class="iconfont">&#xe62d;</span>
        <p>约课记录</p>
      </van-tabbar-item>
      <van-tabbar-item @click="ly()">
        <span class="iconfont">&#xe786;</span>
        <p>练习</p>
      </van-tabbar-item>
      <van-tabbar-item @click="ly()">
        <span class="iconfont">&#xe601;</span>
        <p>我的</p>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      // active: JSON.parse(localStorage.getItem('act'))||0,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {
    // active:{
    //   handler(val){
    //     localStorage.setItem('act',JSON.stringify(val))
    //   },deep:true
    // }
  },
  // 组件方法
  methods: {
    ly(){
      // localStorage.setItem('act',JSON.stringify(this.active))

      switch(this.$store.state.act){
        case 0 : this.$router.push('/footer/myhome');break
        case 1 : this.$router.push('/footer/coures');break
        case 2 : this.$router.push('/footer/myask');break
        case 3 : this.$router.push('/footer/Myexercise/Myexercise');break
        case 4 : this.$router.push('/footer/mywd');break
      }
    }
  },
  mounted () {
    // localStorage.setItem('act',JSON.stringify(this.active))
    let src = String(window.location.href.split('#')[1])
    if(src == '/footer/myhome'){
      this.$store.state.act = 0
    }
    if(src == '/footer/coures'){
      this.$store.state.act = 1
    }
    if(src == '/footer/myask'){
      this.$store.state.act = 2
    }
    if(src == '/footer/Myexercise/Myexercise'){
      this.$store.state.act = 3
    }
    if(src == '/footer/mywd'){
      this.$store.state.act = 4
    }
  }
};
</script>
<style scoped lang='scss'>
.envelope{
  width: 0.6rem;
  height: 0.6rem;
  background: #007AFF;
  border-radius: 50px;
  text-align: center;
  line-height: 0.67rem;
  color: white;
  font-size: 0.25rem;
  position: fixed;
  right: 20px;
  bottom: 70px;
}
.van-tabbar{
  z-index: 1000;
  text-align: center;
  .iconfont{
    font-size: 0.22rem;
  }
  p{
    margin-top: 5px;
    font-size: 0.1rem;
  }
}
</style>
