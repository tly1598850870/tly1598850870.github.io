<template>
<div>
  <router-view></router-view>
  <!-- <div class="envelope" @mousedown="down" @touchstart.stop="down"
      @mousemove="move" @touchmove.stop="move"
      @mouseup="end" @touchend.stop="end"
      :style="{top:position.y+'px', left:position.x+'px'}">
    <span class="iconfont" @click="jbrShow()">&#xe606;</span>
  </div> -->
</div>
</template>

<script>
import a from "./plugins/meiqia"
// 鼠标位置和div的左上角位置 差值
var dx,dy
var screenWidth = window.screen.width
var screenHeight = window.screen.height
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
    flags: false,
      position: {
        x: 320,
        y: 600
      },
  }
 },
 methods: {
  jbrShow(){
      sessionStorage.setItem("token","")
      this.$router.push('/xinfen')
  },
  // down(event){
  //     this.flags = true;
  //     var touch ;
  //     if(event.touches){
  //         touch = event.touches[0];
  //     }else {
  //         touch = event;
  //     }
  //     console.log('鼠标点所在位置', touch.clientX,touch.clientY)
  //     console.log('div左上角位置', event.target.offsetTop,event.target.offsetLeft)
  //   },
  //   move() {
  //     if (this.flags) {
  //       var touch ;
  //       if (event.touches) {
  //         touch = event.touches[0];
  //       } else {
  //         touch = event;
  //       }
  //       // 定位滑块的位置
  //       this.position.x = touch.clientX -20;
  //       this.position.y = touch.clientY -20;
  //       console.log(this.position.x,this.position.y )
  //       // 限制滑块超出页面
  //       // console.log('屏幕大小', screenWidth, screenHeight )
  //       if (this.position.x < 0) {
  //         this.position.x = 0
  //       } else if (this.position.x > screenWidth - touch.target.clientWidth) {
  //         this.position.x = screenWidth - touch.target.clientWidth
  //       }
  //       if (this.position.y < 0) {
  //         this.position.y = 0
  //       } else if (this.position.y > screenHeight - touch.target.clientHeight) {
  //         this.position.y = screenHeight - touch.target.clientHeight
  //       }
  //       //阻止页面的滑动默认事件
  //       document.addEventListener("touchmove",function(){
  //           event.preventDefault();
  //       },false);
  //     }
  //   },
  //   //鼠标释放时候的函数
  //   end(){
  //     console.log('end')
  //     this.flags = false;
  //   },

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

// .envelope{
//   width: 0.6rem;
//   height: 0.6rem;
//   background: #007AFF;
//   border-radius: 50px;
//   text-align: center;
//   line-height: 0.6rem;
//   color: white;
//   position: fixed;
//   right: 20px;
//   bottom: 70px;
//   z-index: 10000;
//   .iconfont{
//     font-size: 0.23rem;
//     padding-left: 0.02rem;
//   }
// }
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
