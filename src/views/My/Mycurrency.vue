<template>
<div>
    <van-nav-bar
  title="我的余额"
  left-text=""
  right-text="余额明细"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<div class="xxt">
    <p>我的余额</p>
    <p class="bp">0学习币</p>
</div>
<ul>
    <li>
        <p class="qpd">3000.00学习币</p>
        <p class="qp">￥3000.00</p>
    </li>
    <li>
        <p class="qpd">3000.00学习币</p>
        <p class="qp">￥3000.00</p>
    </li>
</ul>
<footer>
    <h4>充值说明</h4>
    <p>学习币是网校中专有的一种虚拟货币，大家可以用学习币购买网课</p>
</footer>
<div class="dw">
    <van-button type="primary" disabled color="#CCCCCC" size="large" >立即充值</van-button>
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
 components: {},
 // 组件状态值
 data () {
 return {}
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {
     onClickLeft(){
        this.$router.go(-2)
        //  this.$router.go(-1)
     },
     onClickRight(){
         
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
    //  this.$Axios.get("/api/app/coin/coinRank?").then((res)=>{
    //      console.log(res)
    //  })
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
.xxt{
    display: flex;
    box-sizing: border-box;
    padding: 0 0.2rem;
}
ul{
    background: rgb(240, 239, 239);
    text-align: center;
    height: 1.7rem;
    padding-top: 0.2rem;
}
li{
    width:3.5rem;
    height: 0.64rem;
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    margin-left: 0.12rem;
    background: #fff;
    box-sizing: border-box;
    padding: 0 0.2rem 0 0.2rem ;
    border-radius: 0.1rem;
}
.bp{
    margin-left: 0.15rem;
    color: #ff944b;
}
.qp{
    font-size: 0.14rem;
    color: red;
}
.qpd{
    font-size: 0.14rem;
}
footer{
    box-sizing: border-box;
    padding: 0 0.2rem;
    p{
        font-size: 0.14rem;
        color: rgb(155, 154, 154);
    }
}
.dw{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;
}
</style>
