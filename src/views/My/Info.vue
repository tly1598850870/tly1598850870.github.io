<template>
  <div class="info">
    <div class="header">
      <van-icon name="arrow-left" @click="onClickLeft" />
      <p>个人信息</p>
      <p></p>
    </div>
    <ul class="ul-box">
      <li @click="imgShow = true">
        <span>头像</span>
        <span>
          <img :src="userinfo.avatar" alt />
        </span>
      </li>
      <li @click="xjnc">
        <span>昵称</span>
        <span>{{name}}</span>
      </li>
      <li @click="xjsex">
        <span>性别</span>
        <span>{{xb}}</span>
      </li>
      <li @click="xsr">
        <span>出生日期</span>
        <span>{{sr}}</span>
      </li>
      <van-popup v-model="shows" position="bottom" :style="{ height: '40%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="sjwc"
          @cancel="sjqx"
        />
      </van-popup>
      <li @click="city">
        <span>所在城市</span>
        <span>{{cs}}</span>
      </li>
      <van-popup v-model="showss" position="bottom" :style="{ height: '45%' }">
        <van-area
            title=""
            :area-list="areaList"
            @change="onChange"
            @confirm="onConfirm"
            @cancel="sjqx"
          />
      </van-popup>
      <li @click="xuek">
          <span>学科</span>
        <span>{{arrsr}}</span>
      </li>
      <li @click="nnj">
        <span>年级</span>
        <span>{{nj}}</span>
      </li>
      <van-popup v-model="showsss" position="bottom" :style="{ height: '40%' }">
        <van-picker
            show-toolbar
            :columns="nianj.value"
            @confirm="Confirm"
            @cancel="sjqx"
            value-key="name"
          />
      </van-popup>
    </ul>
    <van-popup position="bottom" v-model="imgShow">
      <ul class="photo">
        <li>
          拍照
          <input type="file" accept="image/*" capture="camera" id="takePhoto" @change="takePhoto" />
        </li>
        <li>
          从手机相册中选择
          <input type="file" accept="image/*" id="takePhoto" @change="takePhoto" />
        </li>
        <li @click="imgShow=false">取消</li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import {
  getData,
  AjaxEditUser,
  AjaxEditSonArea,
  AjaxEditImg,
  userInfo,city,province,district,attribute,AjaxGai
} from "../../utils/api";
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
      imgShow: false,
      nickname: "",
      userinfo: [],
      cityEdit: [],
      path: "",
      userinfo: [],
      user: [],
      // cityEdit: [],
      cs: "",
      arrsr:'',
      // zy:'',
      xk: "",
      nj: "",
      xb: "",
      ssss: "",
      sr: "",
      aaa:'',
      bbb:'',
      ccc:'',
      xueke:'',
      nianj:'',
      asrsr:[],
      // njarr:{},
      shows: false,
      showss: false,
      showsss: false,
      minDate: new Date(1995, 0, 1),
      maxDate: new Date(2025, 0, 1),
      currentDate: new Date(),
      provinceId: "110000",
      cityId: "110100", 
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 昵称
    xjnc() {
      this.$router.push({
        ssss: "Xjnc",
        params: { name: this.ssss }
      });
    },
    showPopup() {
      this.show = true;
    },
    // 个人信息获取
    async info() {
      let res = await getData();
      this.userinfo = res.data.data;
      console.log(res);
    },
    name() {
      this.nicknameShow = true;
    },
    // 头像
    async takePhoto(e) {
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      let data = await AjaxEditImg(formData);
      console.log(data);
      if (data.data.code == 200) {
        this.path = data.data.data.path;
        console.log(data.data.data.path)
        await AjaxEditUser({ avatar: this.path });
        this.info();
        this.imgShow = false;
      } else {
        this.$toast(data.msg);
        this.imgShow = false;
      }
    },
    // 城市信息
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.push("/Footer/Mywd");
    },
    async info() {
      let res = await userInfo();
      this.userinfo = res.data.data;
      this.name = this.userinfo.nickname;
      console.log(res);
      if (this.userinfo.sex == 3) {
        this.xb = "保密";
      } else if (this.userinfo.sex == 1) {
        this.xb = "女";
      } else if (this.userinfo.sex == 0) {
        this.xb = "男";
      }
      if (this.userinfo.province_name == 0) {
        this.cs = "请选择";
      }else{
        this.cs = `${this.userinfo.province_name},${this.userinfo.city_name},${this.userinfo.district_name}`;
      }
      if (this.userinfo.birthday == 0) {
        this.sr = "请选择";
      } else {
        this.sr = this.userinfo.birthday;
      }
      let arr=""
      let asr=[]
      this.userinfo.attr.forEach((item)=>{
        asr.push(item.attr_val_id)
        arr+=item.attr_value+""
        console.log(arr,asr)
      })
      this.asrsr=asr
      this.arrsr=arr
    },
    // 城市信息
     city() {
      this.showss = true;
    },
    async tj() {
    let {data}=  await AjaxGai(this.userinfo.attr,this.userinfo.avatar,this.sr,this.bbb.id,this.bbb.name,this.ccc.id,this.ccc.name,this.name,this.aaa.id,this.aaa.name,this.xb,this.arrsr,this.asrsr);
      console.log(data)
      this.$router.push("/Mywd");
    },
    // 昵称
    xjnc() {
      this.$router.push({
        name: "Xjnc",
        params: { name: this.name }
      });
    },
    // 性别
    xjsex() {
      this.$router.push({
        name: "Sex",
        params: { name: this.sb }
      });
    },
    // 出生日期
    xsr() {
      this.shows = true;
    },
    sjwc(val) {
      console.log(val);
      let n = val.getFullYear();
      let y =
        val.getMonth() + 1 > 9
          ? val.getMonth() + 1
          : "0" + (val.getMonth() + 1);
      let r = val.getDate() > 9 ? val.getDate() : "0" + val.getDate();
      console.log(n, y, r);
      this.sr = `${n}-${y}-${r}`;
      // this.$forceUpdate();
      console.log(this.sr);
      this.shows = false;
    },
    sjqx() {
      this.shows = false;
      this.showss = false;
      this.showsss = false;
    },
    onConfirm(val) {
      console.log(val);
      let a=[];
      val.forEach((i,index)=>{
        a.push(i.name)
      })
      this.aaa=val[0]
      this.bbb=val[1]
      this.ccc=val[2]
      console.log(this.aaa)
      this.cs=a.join(",")
      this.showss = false;
      let {data} = AjaxGai(this.aaa.code,this.bbb.code,this.ccc.code)
    },
    province() {
      return province().then(res => {
        let obj = {};
        res.data.data.forEach(res => {
          obj[res.id] = res.area_name;
        });
        this.areaList.province_list = obj;

        return city(this.provinceId).then(res => {
          let obj1 = {};
          res.data.data.forEach(res => {
            obj1[res.id] = res.area_name;
          });
          this.areaList.city_list = obj1;

          return district( this.cityId).then(res => {
            let obj3 = {};
            res.data.data.forEach(res => {
              obj3[res.id] = res.area_name;
            });
            this.areaList.county_list = obj3;

          });
        });
      });
    },
    onChange(e, value, index) {
      if (index == 0) {
        return city(value[index].code).then(res => {
          let obj1 = {};
          res.data.data.forEach(res => {
            obj1[res.id] = res.area_name;
          });
          this.areaList.city_list = obj1;
          return district(res.data.data[0].id).then(res => {
            let obj3 = {};
            res.data.data.forEach(res => {
              obj3[res.id] = res.area_name;
            });
            this.areaList.county_list = obj3;
          });
        });
      } else if (index == 1) {
        return district(value[1].code).then(res => {
          let obj3 = {};
          res.data.data.forEach(res => {
            obj3[res.id] = res.area_name;
          });
          this.areaList.county_list = obj3;
        });
      }
    },
    async attribute(){
      let {data} = await attribute()
      console.log(data)
      data.data.forEach((i)=>{
        console.log(i)
        this.xueke=data.data[1]
        this.nianj=data.data[0]
        console.log(this.xueke)
      })
    },
    xuek(){
      this.$router.push({
        path:"/setinfo",
        query:this.xueke
      })
    },
    nnj(){
      this.showsss=true
      console.log(this.nianj)
    },
    Confirm(val){
      console.log(val)
      this.nj=val.name
      this.showsss=false
    }
    
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.info();
    this.province();
    this.attribute()
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
  .ul-box {
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
  .photo {
    width: 100%;
    height: 1.5rem;
    background: #fff;
    li {
      position: relative;
      width: 100%;
      display: block;
      text-align: center;
      line-height: 0.5rem;
      color: #030303;
      font-weight: 300;
      input {
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
