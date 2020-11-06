<template>
  <div class="box">
    <!-- 头像 -->
    <div class="user">
      <div class="user_icon">
        <!-- 登录 -->
        <div class="head">
          <section>
            <div @click="grxx">
              <img
                :src="list.avatar"
              />
              <span>{{list.nickname}}</span>
              <van-icon name="edit" />
              <h4>去约课</h4>
            </div>
          </section>
          <div class="info">
            <ul>
              <li @click="tsk">
                <h3>{{ kcNum }}</h3>
                <p>我的特色课</p>
                <span>已购特色课程的学习</span>
              </li>
              <li @click="ydy">
                <h3>{{ oto }}</h3>
                <p>一对一辅导</p>
                <span>我的一对一老师辅导</span>
              </li>
              <li @click="xxb">
                <h3>{{ integral.toFixed(2) }}</h3>
                <p>剩余学习币</p>
                <span>查看剩余学习币</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 邀请 -->
      <div class="yao">
        <div>
          <van-icon name="point-gift" />
          <section>
            <p>邀请好友注册APP，享多重好礼</p>
            <span>限时特惠，多邀多得</span>
          </section>
          <i></i>
          <i></i>
          <i></i>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- ulBox -->
      <ul class="menu">
        <li>
          <p class="menu-title">课程相关</p>
          <div class="menu-box">
            <div @click="jbr_gz()">
              <span class="iconfont van-icon icn">&#xe608;</span>
              <p>关注的老师</p>
            </div>
            <div @click="jbr_sc()">
              <span class="iconfont van-icon icn">&#xe611;</span>
              <p>我的收藏</p>
            </div>
          </div>
        </li>
        <li>
          <p class="menu-title">订单相关</p>
          <div class="menu-box">
            <div>
              <span class="iconfont van-icon ion" @click="qbdd(1)">&#xe614;</span>
              <p>课程订单</p>
            </div>
            <div>
              <span class="iconfont van-icon ion" @click="qbdd(2)">&#xe614;</span>
              <p>会员订单</p>
            </div>
            <div>
              <span class="iconfont van-icon ion" @click="qbdd(3)">&#xe614;</span>
              <p>约课订单</p>
            </div>
          </div>
        </li>
        <li>
          <p class="menu-title">我的账户</p>
          <div class="menu-box">
            <div>
              <span class="iconfont van-icon iin" @click="yh">&#xe631;</span>
              <p>优惠卷</p>
            </div>
            <div>
              <span class="iconfont van-icon iin" @click="xxk">&#xe60a;</span>
              <p>学习卡</p>
            </div>
            <div >
              <span class="iconfont van-icon iin" @click="svip">&#xe607;</span>
              <p>会员</p>
            </div>
          </div>
        </li>
        <li class="lit">
          <p class="menu-title">自助服务</p>
          <div class="menu-box">
            <div>
              <span class="iconfont van-icon inn" @click="myxx">&#xe641;</span>
              <p>我的消息</p>
            </div>
            <div>
              <span class="iconfont van-icon inn" @click="yjfk">&#xe606;</span>
              <p>意见反馈</p>
            </div>
            <div>
              <span class="iconfont van-icon inn" @click="kf">&#xe71b;</span>
              <p>在线客服</p>
            </div>
            <div>
              <van-icon name="setting-o inn" @click="tcsz"/>
              <p>设置</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
// import { AjaxMy } from "../utils/myApi";
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: {}, // 组件状态值
  data() {
    return {
      flag: false,
      list: JSON.parse(sessionStorage.getItem("user")),
      jsq:"",
      active:JSON.parse(sessionStorage.getItem('act'))||0,
      kcNum:0,
      integral:0,
      oto:0,
    }
  }, // 计算属性
  computed: {},
   // 组件方法
  methods: {
    xxb(){
      this.$router.push("/mycurrency")
    },
    svip(){
      console.log(1)
      this.$router.push("/vip")
    },
    ydy(){
      this.active = 2
      sessionStorage.setItem('act',JSON.stringify(this.active))
      this.$router.push("/footer/myask")
    },
    tsk(){
      this.$router.push("/mycoures")
    },
    qbdd(a){
      this.jsq=a
      this.$router.push({
        name:"Order",
        params:{v:this.jsq}
      })
    },
    yh(){
      this.$router.push("/coupon")
    },
    kf(){
      this.$router.push("/xinfen")
    },
    xxk(){
      this.$router.push("/card")
    },
    grxx(){
      this.$router.push("/info")
    },
    jbr_gz(){
      this.$router.push('/gzls')
    },
    jbr_sc(){
      this.$router.push('/scls')
    },
    myxx(){
      this.$router.push("/message")
    },
    yjfk(){
      this.$router.push("/feedback")
    },
    tcsz(){
      this.$router.push("/options")
    },
    async num(){
      let { data } = await this.$Axios.get('/api/app/getUCenterInfo')
      console.log(data)
      this.kcNum = data.data.courses
      this.integral = data.data.integral
      this.oto = data.data.oto
    },
    
  },
  watch: {
    active(val){
      sessionStorage.setItem('act',JSON.stringify(val))
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */


  created() {},
  mounted() {
    this.num()
  }
};
</script> 


<style lang="scss" scoped >
.box {
  width: 100%;
}
.user_icon {
  width: 3.75rem;
  height: 2.2rem;
  background: url("../../assets/user_bg.ab306a5c.png") no-repeat top center;
  background-size: 3.75rem 1.2rem;
  padding: 0.48rem 0.15rem 0;
  box-sizing: border-box;
  background-color: #fff;
  .head {
    width: 3.45rem;
    height: 1.72rem;
    background-color: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.01rem #ccc;
    section {
      width: 3.45rem;
      height: 0.77rem;
      div {
        width: 3.3rem;
        height: 0.62rem;
        padding: 0.15rem 0 0 0.15rem;
        display: flex;
        align-items: center;
        position: relative;
        img {
          width: 0.5rem;
          border-radius: 50%;
        }
        span {
          margin-left: 0.1rem;
        }
        .van-icon {
          margin-left: 0.1rem;
          color: #f2995a;
        }
        h4 {
          width: 0.55rem;
          height: 0.25rem;
          position: absolute;
          background-color: #eb6100;
          text-align: center;
          line-height: 0.25rem;
          color: #fff;
          top: 0.33rem;
          right: 0;
          font-size: 0.12rem;
          font-weight: normal;
          border-radius: 0.15rem 0 0 0.15rem;
        }
      }
    }
    .info {
      width: 3.45rem;
      height: 0.81rem;
      ul {
        width: 3.45rem;
        height: 0.81rem;
        display: flex;
        li {
          text-align: center;
          width: 1.14rem;
          height: 0.81rem;
          h3 {
            line-height: 0.35rem;
            font-size: 0.24rem;
            color: #eb6100;
          }
          p {
            font-size: 0.12rem;
            margin-bottom: 0.05rem;
            color: #595959;
          }
          span {
            color: #b7b7b7;
            font-size: 0.1rem;
          }
        }
      }
    }
  }
}
// 邀请
.yao {
  width: 3.75rem;
  height: 0.6rem;
  background-color: #fff;
  padding: 0.15rem 0.15rem 0 0.15rem;
  box-sizing: border-box;
  div {
    border-radius: 0.4rem;
    width: 100%;
    height: 0.45rem;
    background: linear-gradient(-90deg, #f2995a, #eb6100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
    box-sizing: border-box;
    .van-icon {
      color: #fff;
      font-size: 0.24rem;
    }
    section {
      color: #fff;
      p {
        font-size: 0.12rem;
      }
      span {
        font-size: 0.1rem;
      }
    }
  }
}
//
.menu {
  width: 3.75rem;
  background-color: #fff;
  padding: 0 0.15rem;
  box-sizing: border-box;
  li {
    border-bottom: 1px solid rgb(240, 239, 239);
    padding: 0.2rem 0;
    box-sizing: border-box;
    .menu-title {
      color: #333;
      font-size: 0.16rem;
    }
    .menu-box {
      width: 100%;
      display: flex;
      div {
        width: 0.84rem;
        height: 0.6rem;
        text-align: center;
        .van-icon {
          font-size: 0.22rem;
          line-height: 0.44rem;
        }
        p {
          font-size: 0.12rem;
        }
      }
    }
  }
}
*{
  margin: 0;
  padding: 0;
}
.lit{
  margin-bottom: 0.5rem;
}
.icn{
  color: #ff944b;
}
.ion{
  color: #fc5500;
}
.iin{
  color: #ffaf00;
}
.inn{
  color: #ff9a2a;
}
</style>