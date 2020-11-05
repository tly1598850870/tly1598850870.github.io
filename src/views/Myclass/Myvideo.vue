<template>
  <div>
    <van-nav-bar
      title="视频"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
    <div class="video" v-show="flag">
        <video src="http://dal4jd-video.baijiayun.com/ffea28e04d9cd82c9af715b54f0e1b34/5fa39b6e/00-x-upload/video/29969864_84db3d0dd4dd4801d38dafdd8c5014b4_aBcTcPkP.mp4?fid=30634399&uuid=uuid-83669575-5683-4db7-814f-98aab109e3e9" 
        width='100%' height='230px' controls
        muted>
        </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoid:0,
      id:0,
      token:'',
      flag:false,
    };
  },
  created() {},
  mounted() {
        this.videoid = this.$route.query.videoid
        this.id = this.$route.query.id
        this.video()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async video() {
      let { data } = await this.$Axios.get(
        `/api/app/getPlayToken/video_id=${this.videoid}/course_id=${this.id}`
      );
      console.log(data)
      if(data.code == 201){
        this.$toast(data.msg)
        this.flag = false
      }else{
        this.flag = true
        this.token = data.data.token
        sessionStorage.setItem('videoToken',data.data.token)
      }
    },
  },
};
</script>

<style scoped lang="scss">
.video{
        margin-top: 0.37rem;
}
</style>
