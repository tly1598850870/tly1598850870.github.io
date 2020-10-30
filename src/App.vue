<template>
<div>
  <router-view></router-view>
  <div class="envelope" @click="jbrShow()">
    <!-- <van-icon name="envelop-o" /> -->
    <span class="iconfont">&#xe606;</span>
  </div>
</div>
</template>

<script>
export default {
 // 组件名称
 name: '',
 // 组件参数 接收来自父组件的数据
 props: [],
 // 局部注册的组件
 components: {
   
 },
 // 组件状态值
 data () {
  return {
    value:'',
    message:'',
    show:false,
    jbShow:true,
  }
 },
 methods: {
  jbrShow(){
    this.$router.push('/xinfen')
  },
 },
 mounted () {

 }
}
</script> 
<style scoped lang='scss'>
html,body,#app{
  width: 3.75rem;
  height: 100%;
}

.envelope{
  width: 0.6rem;
  height: 0.6rem;
  background: #007AFF;
  border-radius: 50px;
  text-align: center;
  line-height: 0.6rem;
  color: white;
  position: fixed;
  right: 20px;
  bottom: 70px;
  z-index: 10000;
  .iconfont{
    font-size: 0.23rem;
    padding-left: 0.02rem;
  }
}
.xx{
  width: 3.75rem;
  height: 100%;
  background: #F2F3F5;
  position: absolute;
  top: 0;
  z-index: 1000;
  header{
    width: 3.75rem;
    height: 0.6rem;
    background: #007AFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    color: white;
    font-size: 0.14rem;
    .hide{
      padding-right: 0.05rem;
      padding-top: 0.03rem;
    }
  }
}
.jbShow{
  width: 3.75rem;
.ts{
  width: 3.37rem;
  font-size: 0.1rem;
  margin: 15px auto;
  color: #666666;
  margin-bottom: 30px;
}
.ly{
  margin-top: 0.2rem;
}
.van-button{
  width: 3.3rem;
  margin: 0.3rem 0.22rem;
  background: #007AFF;
  border-radius: 0.03rem;
}
}
.jbHide{
  width: 3.75rem;
  height: 587px;
  background: white;
  text-align: center;
  padding: 10px 0;
  button{
    width: 1.5rem;
    height: 0.33rem;
    border-radius: 0.05rem;
    margin-bottom: 0.13rem;
  }
  u{
    font-size: 0.14rem;
  }
  p{
    font-size: 0.13rem;
  }
}
</style>
