<template>
  <div>
    <div class="xmc_t">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt
      />
    </div>
    <div class="xmc_inp">
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" placeholder="请输入手机号" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </div>
    <div class="xmc_mm">
        <p @click="goPass">找回密码</p>
        <p @click="toPass">注册/验证码登录</p>
    </div>
    <div class="xmc_tj">
        <van-button round block type="info" native-type="submit" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="tj">
      登录
    </van-button>
    </div>
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
      tel: "",
      password: "",
      act: JSON.parse(sessionStorage.getItem('act'))||4,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  watch: {
    act(val){
      sessionStorage.setItem('act',JSON.stringify(val))
    }
  },
  // 组件方法
  methods: {
      goPass(){
          this.$router.push("/goPass")
      },
      toPass(){
          this.$router.push("/toPass")
      },
      tj(){
        console.log(this.tel)
        if(this.tel==""){
        this.$toast('请输入正确手机号或密码');
        return false
      }else if(this.password==""){
        this.$toast('请输入正确手机号或密码');
        return false
       }
        this.$Axios.post("/api/app/login",{
          mobile:this.tel,
          password:this.password,
          type:1
        }).then((res)=>{
          console.log(res)
          sessionStorage.setItem("token",res.data.data.remember_token)
          sessionStorage.setItem("user",JSON.stringify(res.data.data))
          this.act=4
          this.$router.push("/footer/mywd")
        })
        
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
  mounted() {},
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
</script>
<style scoped lang='scss'>
.xmc_t {
  height: 0.5rem;
  padding: 0.5rem 0.7rem;
}
img {
  width: 2.36rem;
  height: 0.52rem;
}
.van-cell{
    border-bottom: 1px solid #ebedf0 !important;
}
.xmc_inp{
    width: 3.5rem;
    box-sizing: border-box;
    padding: 0.2rem 0.3rem;
    font-size:0.18rem;
}
.xmc_mm{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 0.4rem;
    p{
        font-size: 0.12rem;
        color: rgb(151, 149, 149);
    }
}
.van-button--block{
    width: 3rem;
    border: none;
    
}
.xmc_tj{
    box-sizing: border-box;
    padding: 0.5rem 0.3rem;
}
</style>
