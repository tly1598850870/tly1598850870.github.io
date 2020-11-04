<template>
<div>
    <van-nav-bar title="修改个人信息" left-arrow @click-left="onClickLeft" left-text="" right-text="保存" @click-right="onClickRight"/>
    <van-cell-group class="tx">
  <van-field v-model="nan" readonly @click="nans"/>
  <van-icon v-if="flag" name="success" color="#1989fa" />
</van-cell-group>
<van-cell-group class="tx">
  <van-field v-model="nv" readonly @click="nvs"/>
  <van-icon v-if="flags" name="success" color="#1989fa" />
</van-cell-group>
</div>
</template>

<script>
import {sex} from '@/utils/api'
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
     sex:'',
     nan:'男',
     nv:'女',
     sexs:'',
     flag:"",
     flags:"",
 }
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {
    async onClickRight(){
         let res = await sex(this.sexs);
         console.log(res)
         this.$router.push("/setmessage")
     },
     onClickLeft(){
         this.$router.go(-1)
     },
     nans(){
       this.sexs=0
       this.flag=true
       this.flags=false
     },
     nvs(){
       this.sexs=1
       this.flags=true
       this.flag=false
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
    this.sex= this.$route.params.name
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
.tx{
  display:flex;
  align-items:center;
}

</style>
