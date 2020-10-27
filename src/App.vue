import { Button } from 'vant';
<template>
<div>
  <router-view></router-view>
  <div class="envelope" @click="jbrShow()">
    <van-icon name="envelop-o" />
  </div>
  <div class="xx" v-show="show">
    <header>
      <p>给我们留言</p>
      <p class="hide" @click="jbrHide()">﹀</p>
    </header>
    <div class="jbShow" v-show="jbShow==true">
      <p class="ts">您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</p>
      <van-cell-group>
        <van-field v-model="value" label="手机" placeholder="请输入手机号" />
      </van-cell-group>
      <van-field
        v-model="message"
        rows="3"
        autosize
        label="留言内容"
        type="textarea"
        placeholder="请输入"
        class="ly"
      />
      <van-button type="info" @click="tj()">提交</van-button>
    </div>
    <div class="jbHide" v-show="jbShow==false">
      <h3>留言成功</h3>
      <p>我们会尽快联系你</p>
      <van-button type="info" @click="jbrHide()">关闭</van-button><br>
      <u @click="jbHide()">再次留言</u>
    </div>
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
 return {}
  return {
    value:'',
    message:'',
    show:false,
    jbShow:true
  }
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {},
 /**
 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
 */
 methods: {
  tj(){
    if(this.value == ''){
      this.$toast('请至少填写一项联系方式');
    }else if(this.message == ''){
      this.$toast('请保持留言内容在1~1000字符内');
    }
    if(this.value != ''){
      let phone = /^1[345678]\d{9}$/
      if(phone.test(this.value)){
        setTimeout(()=>{
          this.jbShow = false
        },1300)
      }else{
        this.$toast('请正确填写手机号');
      }
    }
  },
  jbrShow(){
    this.show = true
  },
  jbrHide(){
    this.show = false
  },
  jbHide(){
    this.jbShow = true
    this.value = this.message = ''
  }
 },
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
  line-height: 0.67rem;
  color: white;
  font-size: 0.25rem;
  position: fixed;
  right: 20px;
  bottom: 70px;
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
