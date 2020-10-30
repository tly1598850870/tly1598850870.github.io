<template>
  <div>
    <div class="xmc_t">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt
      />
    </div>
    <div class="xmc_bd">
      <div class="xmc_bk">
        <van-field v-model="tel" center clearable placeholder="请输入手机号">
          <template #button>
            <button v-show="!flag" class="xmc_btn" @click="dlyz">发送验证码</button>
            <button v-show="flag" class="xmc_btn clock" disabled>60秒后重试</button>
          </template>
        </van-field>
      </div>
      <div class="xmc_bk">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入短信验证码" />
        </van-cell-group>
      </div>
      <div class="xmc_mm">
        <span>*未注册的手机号将自动注册</span>
        <span @click="login">使用密码登录</span>
      </div>
    </div>
    <div class="xmc_tj">
      <van-button
        round
        block
        type="info"
        native-type="submit"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="tj"
      >登录</van-button>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
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
      value: "",
      flag:false
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    login(){
      this.$router.push("/")
    },
    dlyz(){
      if(this.tel==""){
        this.$toast('请先输入手机号');
        return false
      }
      this.flag=true
      this.sendCode()
      this.$Axios.post("/api/app/smsCode",{
        mobile:this.tel,
        sms_type:"login"
      }).then((res)=>{
        console.log(res)
      })
    },
    tj(){
      if(this.tel==""){
        this.$toast('请输入手机号');
        return false
      }
      if(this.value==""){
        this.$toast('请输入验证码');
        return false
      }
      this.$Axios.post("/api/app/login",{
        mobile:this.tel,
        sms_code:this.value,
        client:1 ,
        type:2
      }).then((res)=>{
        console.log(res)
        sessionStorage.setItem("token",res.data.data.remember_token)
        if(res.data.data.is_new==1){
          sessionStorage.setItem("sms",this.value)
          sessionStorage.setItem("tel",this.tel)
          this.$router.push("/passxg")
        }else{
          this.$router.push("/footer/mywd")
        }
      })

    },
    sendCode() {
    let timer_num = 60;
    let timeClock=setInterval(()=>{
        timer_num--;
        $('.clock').html(timer_num+"秒后重试");
       
        if (timer_num == 0) {
          this.flag=false;
          console.log(this.flag)
            clearInterval(timeClock);
            $('.clock').hide().siblings().show();
        } 
    },1000)
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
<style scoped lang="scss">
.xmc_t {
  height: 0.5rem;
  padding: 0.5rem 0.7rem;
}
img {
  width: 2.36rem;
  height: 0.52rem;
}
.xmc_btn {
  background: none;
  border: none;
  color: rgb(236, 108, 22);
}
.xmc_bd {
  width: 3.5rem;
  box-sizing: border-box;
  padding: 0.1rem 0.3rem;
  font-size: 0.18rem;
}
.xmc_mm {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.2rem;
  span {
    font-size: 0.12rem;
    color: rgb(151, 149, 149);
  }
}
.xmc_bk {
  border-bottom: 1px solid #ebedf0;
  margin-bottom: 0.1rem;
}
.xmc_tj{
    box-sizing: border-box;
    padding: 0.5rem 0.3rem;
}
</style>
