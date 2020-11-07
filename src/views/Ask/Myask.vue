<template>
     
  <div id="zhx_shopping">
    <div class="zhx_content">
      <div class="zhx_top">约课记录</div>
      <van-tabs swipeable>
        <van-tab class="zhx_sxlvan1" title="待上课">
          <!-- 图片 -->
          <img
            class="zhx_picture"
            src="../../assets/pic/yue-nothing.png"
            alt=""
          />
          <div v-show="showdl==false">
            <div class="zhx_sxlh6">请登录后查看相关内容</div>
            <!-- 路由跳转 -->
            <div class="zhx_registration" @click="todl">登录/注册</div>
          </div>
          <div v-show="showdl">
            <div class="zhx_sxlh6">还没有上课记录</div>
            <!-- 路由跳转 -->
            <div class="zhx_registration" @click="toyk">立即约课</div>
          </div>
        </van-tab>
        <van-tab title="已上课">
          <img
            class="zhx_picture"
            src="../../assets/pic/yue-nothing.png"
            alt=""
          />
          <div v-show="showdl==false">
            <div class="zhx_sxlh6">请登录后查看相关内容</div>
            <div class="zhx_registration" @click="todl">登录/注册</div>
          </div>

          <div v-show="showdl">
            <div class="zhx_sxlh6">还没有上课记录</div>
            <!-- 路由跳转 -->
            <div class="zhx_registration"   @click="toyk">立即约课</div>
          </div>
        </van-tab>

        <van-tab title="已取消">
          <img
            class="zhx_picture"
            src="../../assets/pic/yue-nothing.png"
            alt=""
          />
          <div class="zhx_sxlh6" v-show="showdl">还没有取消上课记录哦</div>
          <div v-show="showdl==false">
            <div class="zhx_sxlh6">请登录后查看相关内容</div>
            <div class="zhx_registration" @click="todl">登录/注册</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
        
  </div>
</template>

<script>
export default {
  data() {
    return {
      showdl: false,
    };
  },
  created() {},
  mounted() {
    if (sessionStorage.getItem("token") == null) {
      this.showdl = false;
    } else {
      this.showdl = true;
    }
    console.log(this.showdl);
  },
  methods: {
    todl(){
      this.$router.push("/login")
    },
    toyk(){
      this.$router.push("/coach")
      
    }
  },
};
</script>

<style scoped>
.zhx_top {
  width: 100%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  color: #898989;
  font-size: 0.2rem;
}
.zhx_dsktitle {
  width: 100%;
  height: 10rem;
  background: #f0f2f5;
}
.zhx_picture {
  width: 2rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
}

.zhx_registration {
  width: 1rem;
  height: 0.33rem;
  background: #eb6100;
  margin-left: 1.4rem;
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.33rem;
  font-size: 0.14rem;
}
.zhx_sxlh6 {
  text-align: center;
  font-size: 0.14rem;
  margin-top: 0.1rem;
  color: #b7b7b7;
  /* font-weight: 800; */
}
</style>
