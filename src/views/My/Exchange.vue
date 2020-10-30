<template>
<div>
    <van-nav-bar title="学习卡兑换" left-text  left-arrow @click-left="onClickLeft"  />
    <div class="box">
        <div class="xmc_bk">
      <van-cell-group>
        <van-field v-model="card"  type="num" placeholder="请输入学习卡卡号" label="卡号：" />
      </van-cell-group>
    </div>
    <div class="xmc_bk">
      <van-field v-model="password" type="password" placeholder="请输入学习卡密码" label="密码：" />
    </div>
    </div>
    <van-button
        round
        block
        type="info"
        native-type="submit"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="tj"
      >立即兑换</van-button>
</div>
</template>

<script>
export default {
 // 组件名称
 name: '',
 // 组件参数 接收来自父组件的数据
 props: [],
 // 局部注册的组件
 components: {},
 // 组件状态值
 data () {
 return {
     card:'',
     password:'',
 }
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {
     onClickLeft(){
          this.$router.go(-1)
      },
      tj(){

      }
 },
 /**
 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
 */
 created () {
 },
 /**
 /**
 * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
 * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
 */
 mounted () {
 },
 /**
 * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
 * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
 */
 updated () {
 },
 /**
 * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
 */
 activated () {
 },
 /**
 * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
 */
 deactivated () {
 },
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.xmc_bk {
  border-bottom: 1px solid #ebedf0;
  margin-bottom: 0.1rem;
}
.xmc_btn {
  background: none;
  border: none;
  color: rgb(236, 108, 22);
}
.box{
    margin-bottom:0.4rem;
    margin-top: 0.2rem;
}
</style>
