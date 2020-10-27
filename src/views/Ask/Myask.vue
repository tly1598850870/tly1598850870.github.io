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
          <div class="zhx_sxlh6">请登录后查看相关内容</div>
          <router-view></router-view>
          <!-- 路由跳转 -->
          <router-link to=""
            ><div class="zhx_registration">登录/注册</div></router-link
          >
          <router-view></router-view>
        </van-tab>
        <van-tab title="已上课">
          <img
            class="zhx_picture"
            src="../../assets/pic/yue-nothing.png"
            alt=""
          />
          <div class="zhx_sxlh6">请登录后查看相关内容</div>
          <router-link to=""
            ><div class="zhx_registration">登录/注册</div></router-link
          >
        </van-tab>

        <van-tab title="已取消">
          <img
            class="zhx_picture"
            src="../../assets/pic/yue-nothing.png"
            alt=""
          />
          <div class="zhx_sxlh6">请登录后查看相关内容</div>
          <router-link to=""
            ><div class="zhx_registration">登录/注册</div></router-link
          >
        </van-tab>
      </van-tabs>
    </div>
        
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
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
  border-bottom: 1px solid gray;
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
  height: 0.4rem;
  background: #eb6100;
  margin-left: 1.4rem;
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.14rem;
}
.zhx_sxlh6 {
  text-align: center;
  font-size: 0.18rem;
  margin-top: 0.1rem;
  color: gray;
  /* font-weight: 800; */
}
</style>
