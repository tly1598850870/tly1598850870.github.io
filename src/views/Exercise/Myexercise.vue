<template>
  <div>
    <van-nav-bar :title="name" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
          
  },
  methods: {},
  computed: {
        name:function(){
                return this.$store.state.thisshowheader
        }
  },
};
</script>

<style scoped>

</style>
