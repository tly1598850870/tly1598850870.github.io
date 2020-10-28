<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active">
  <van-tab title="全部订单">
      <div class="box">
          <div class="nav">
              <p class="p1">订单编号：2020102820434487853</p>
              <p class="p2">交易完成</p>
          </div>
          <div>
              <p class="p3">每时每课-初二物理-牛顿第一定律＆二力平衡知识点</p>
              <p class="p4">时间：2020.10.28 20:43</p>
              <p class="p5">
                  <span>实付款：</span>
                  <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png">
                  <span>0</span>
              </p>
          </div>
      </div>
  </van-tab>
  <van-tab title="待支付">内容 2</van-tab>
  <van-tab title="已完成">内容 3</van-tab>
  <van-tab title="已取消">内容 4</van-tab>
</van-tabs>
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
        jsq:'',
        title:'',
        active: 0,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
      onClickLeft(){
          this.$router.go(-1)
      }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
 /**
 * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
 * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
 */
  mounted() {
      this.jsq=this.$route.params.v
      console.log(this.jsq)
      if(this.jsq==1){
          this.title="课程订单"
      }else if(this.jsq==2){
          this.title="会员订单"
      }else if(this.jsq==3){
          this.title="约课订单"
      }
  },
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {}
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
.box{
    border: 1px solid rgb(233, 233, 233);
    width:3.5rem;
    height:1.4rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
    margin-left: 0.12rem;
    margin-top: 0.2rem;
    border-radius: 0.1rem;
}
.nav{
    display:flex;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 0.14rem;
    height:0.4rem;
    line-height: 0.4rem;
    border-bottom: 1px solid rgb(231, 231, 231);
}
img{
    width:0.12rem;
}
.p2{
    color:#fc5500;
}
.p3,.p4,.p5{
    margin-top: 0.1rem;
    font-size: 0.14rem;
}
.p4,.p5{
    color: rgb(134, 130, 130);
}
</style>
