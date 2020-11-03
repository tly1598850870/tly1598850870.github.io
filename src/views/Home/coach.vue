<template>
  <div class="box">
    <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="cont">
      <dl v-for="(item,key) in yylist" :key="key">
        <dt><img :src="item.avatar" alt=""></dt>
        <dd>
          <p>{{ item.real_name }}</p>
          <p class="sex">
            <span>
              {{ item.sex == 0?"男":'女' }}
            </span>
            <span>{{ item.teach_age }}年教龄</span>
          </p>
          <button @click="yy(item.teacher_id)" class="but">预约</button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "选择上课时间", value: 0 }
      ],
      option2: [
        { text: "选择下课时间", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      page:1,
      limit:20,
      yylist:[],
      cid:JSON.parse(localStorage.getItem('cid'))||0
    };
  },
  mounted () {
    this.yyList()
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    search(){
      this.$router.push('/search')
    },
    yy(id){
      localStorage.setItem('cid',JSON.stringify(id))
      this.$router.push({
        path:'/neworder',
        query:{
          id:id
        }
      })
    },
    async yyList(){
      let { data } = await this.$Axios.get('/api/app/otoCourse')
      console.log(data)
      this.yylist=data.data
    }
  },
};
</script>

<style scoped lang='scss'>
.box{
  width: 3.75rem;
  height: 100%;
  background: #F0F2F5;
}
.cont{
  dl{
    width: 3.75rem;
    background: white;
    dt{
      box-sizing: border-box;
      padding: 0.15rem 0.1rem;
      float: left;
      img{
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 0.5rem;
      }
    }
    dd{
      box-sizing: border-box;
      padding: 0.01rem 0.1rem;
      p{
        font-size: 0.15rem;
      }
      .sex{
        font-size: 0.13rem;
        color: #b7b7b7;
        margin-top: -0.1rem;
      }
      .but{
        width: 0.7rem;
        height: 0.3rem;
        border-radius: 0.5rem;
        border: 1px solid #EBEEFE;
        background: #EBEEFE;
        font-size: 0.13rem;
        color: #EB6100;
        float: right;
        margin-top: -0.47rem;
      }
    }
  }
}
</style>