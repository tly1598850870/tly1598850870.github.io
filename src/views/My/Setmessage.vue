    <template>
  <div class="info">
    <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" left-text=""/>    
    <ul>
      <li @click="xjnc">
        <span>昵称</span>
        <span>{{name}}</span>
      </li>
      <li @click="xjsex">
        <span>性别</span>
        <span>{{xb}}</span>
      </li>
      <li>
        <span>出生日期</span>
        <span>{{userinfo.birthday==0?"请选择":userinfo.birthday}}</span>
      </li>
      <li @click="city">
        <span>所在城市</span>
        <span>{{cs}}</span>
      </li>
      <li>
        <span>学科</span>
        <span>{{xk}}</span>
      </li>
      <li>
        <span>年级</span>
        <span>{{nj}}</span>
      </li>
    </ul>
<van-button
        round
        block
        type="info"
        native-type="submit"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="tj"
      >确定</van-button>

    <!-- 城市信息 -->
    <van-popup position="bottom" v-model="cityShow">
      <!-- <van-picker show-toolbar title="标题" :columns="cityEdit" /> -->
      <p v-for="item in cityEdit" :key="item.id">{{item.area_name}}</p>
    </van-popup>
  </div>
</template>


<script>
import {userInfo} from '@/utils/api'
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
      cityShow: false,
      userinfo: [],
      user: [],
      cityEdit: [],
      cs:'',
      xk:'',
      nj:'',
      xb:'',
      name:'',
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    showPopup() {
      this.show = true;
    },
    onClickLeft(){
        this.$router.go(-1)
    },
    async info() {
      let res = await userInfo();
      this.userinfo = res.data.data;
      this.name=this.userinfo.nickname;
      console.log(res);
      if(this.userinfo.sex==3){
          this.xb="保密"
      }else if(this.userinfo.sex==1){
          this.xb="女"
      }else if(this.userinfo.sex==2){
          this.xb="男"
      }
      if(this.userinfo.province_name==0){
          this.cs="请选择"
      }
      if(this.userinfo.arr==[]){
          this.xk="",
          this.nj="请选择"
      }
      },
    
    // 城市信息
    async city() {
      let { data } = await AjaxEditSonArea();
      this.cityShow = true;
      this.cityEdit = data;
    },
    // 修改信息
    async userEdit() {
      let data = await AjaxEditUser();
      this.user = res.data;
      console.log(data);
    },
    tj(){

    },
    xjnc(){
      this.$router.push({
        name:"Xjnc",
        params:{name:this.name}
      })
    },
    xjsex(){
      this.$router.push({
        name:"Sex",
        params:{name:this.sb}
      })
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.info();
  }
};
</script> 


<style scoped lang="scss">
.info {
  width: 100%;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
    height: 0.45rem;
    align-items: center;
    font-size: 0.18rem;
    background-color: #fff;
  }
  ul {
    background: #fff;
    margin: 2.66667vw 0;
    padding: 1.33333vw 4vw;
    li:before {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 2.66667vw;
      height: 2.66667vw;
      border-top: 1px solid #b7b7b7;
      border-right: 1px solid #b7b7b7;
    }
    li:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 1px;
      background-color: #f5f5f5;
    }
    li {
      height: 14.66667vw;
      line-height: 14.66667vw;
      display: flex;
      justify-content: space-between;
      position: relative;
      span:first-child {
        font-size: 3.73333vw;
        color: #595959;
      }
      img {
        width: 9.86667vw;
        height: 9.86667vw;
        border-radius: 50%;
        vertical-align: middle;
      }
      span:nth-child(2) {
        color: #8c8c8c;
        font-size: 3.73333vw;
        margin-right: 6.66667vw;
      }
    }
  }
}
</style>
