<template>
  <div>
    <div id="shouye">
      <div class="content">
        <div class="block">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img
                src="../../assets/pic/banner/1.jpg"
                alt=""
                class="zhx_img_lunbo"
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="../../assets/pic/banner/2.jpg"
                alt=""
                class="zhx_img_lunbo"
              />
            </van-swipe-item>
            <van-swipe-item
              ><img
                src="../../assets/pic/banner/3.jpg"
                alt=""
                class="zhx_img_lunbo"
            /></van-swipe-item>
          </van-swipe>
        </div>

        <div class="zhx_nav">
          <div class="nav">
            <ul>
              <li @click="coures">
                  <img src="../../assets/pic/characteristic.png" alt="" />
                  <p>特色课</p>
              </li>
              <li @click="ydy">
                  <img src="../../assets/pic/coach.png" alt="" />
                  <p>一对一辅导</p>
              </li>
              <li @click="date">
                  <img src="../../assets/pic/Study-Calendar.png" alt="" />
                  <p>学习日历</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 名师阵容 -->
        <div class="teacher_list">
          <div class="teacher_item">

            <div class="Boutique">
              <div class="title">名师阵容</div>
              <dl>
                <dt><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt=""></dt>
                <dd>
                  <p>杨德胜</p>
                  <p>杨老师，特级教师，多次被中国数学会评为</p>
                </dd>
              </dl>
              <dl>
                <dt><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg" alt=""></dt>
                <dd>
                  <p>文卫星</p>
                  <p>文卫星，江苏沭阳县人，上海市特技教师</p>
                </dd>
              </dl>
              <dl>
                <dt><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png" alt=""></dt>
                <dd>
                  <p>马学斌</p>
                  <p>马学斌老师，从2004年起，专注中考数学</p>
                </dd>
              </dl>
            </div>

            <div class="Boutique">
              <div class="title">精品课程</div>
            </div>
          </div>
        </div>
        <div class="course">
          <ul>
            <li class="tit">
              每时每课特级教师-自主招生冲刺讲座8-二次函数2--根的分布
            </li>
            <li class="hour">共1课时</li>
            <li class="teacher">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                alt=""
              />
              <span>杨德胜</span>
            </li>
            <li class="del">
              <span class="apply">100人已报名</span>
              <span class="cost" >免费</span>
            </li>
          </ul>
        </div>
        <!-- 推荐课程 -->
        <div class="title">推荐课程</div>
        <div class="course">
          <ul>
            <li class="tit">每时每课初中数学——初一拓展-分式（一）</li>
            <li class="hour">共1课时</li>
            <li class="teacher">
              <img
                src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                alt=""
              />
              <span>廖天金</span>
            </li>
           
              <li class="del">
              <span class="apply">36人已报名</span>
             
              <span class="cost">免费</span>
           
            </li>
          
          </ul>
        </div>
        <div class="course">
          <ul>
            <li class="tit">每时每课-初二物理-摩擦力</li>
            <li class="hour">共1课时</li>
            <li class="teacher">
              <img
                src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                alt=""
              />
              <span>白静</span>
            </li>
            <li class="del">
              <span class="apply">43人已报名</span>
              <span class="cost">免费</span>
            </li>
          </ul>
        </div>
        <div class="course">
          <ul>
            <li class="tit">每时每课-初二物理-牛顿第一定律&二力平衡知识点</li>
            <li class="hour">共1课时</li>
            <li class="teacher">
              <img
                src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                alt=""
              />
              <span>白静</span>
            </li>
            <li class="del">
              <span class="apply">39人已报名</span>
              <span class="cost">免费</span>
            </li>
          </ul>
        </div>
        <div class="course">
          <ul>
            <li class="tit">
              每时每课-初一英语-where引导的特殊疑问句和on，in，under介词用法知识点
            </li>
            <li class="hour">共1课时</li>
            <li class="teacher">
              <img
                src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                alt=""
              />
              <span>璐璐</span>
            </li>
            <li class="del">
              <span class="apply">37人已报名</span>
              <span class="cost">免费</span>
            </li>
          </ul>
        </div>
        <div class="course">
          <ul>
            <li class="tit">每时每课-初二英语-频率副词知识点</li>
            <li class="hour">共1课时</li>
            <li class="teacher">
              <img
                src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                alt=""
              />
              <span>Willa</span>
            </li>
            <li class="del">
              <span class="apply">28人已报名</span>
              <span class="cost">免费</span>
            </li>
          </ul>
        </div>
        <!-- 明星讲师 -->
        <div class="title">明星讲师</div>
        <div class="item">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
          <div class="zhx_baib">
            <div class="zhx_bai">杨老师<span class="rank">M8</span></div>
            <p class="describe">
              教学风格幽默风趣的同时也很严谨，对学生也很严谨，对学生
            </p>
          </div>
        </div>
        <div class="item">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
          <div class="zhx_baib">
            <div class="zhx_bai">白静<span class="rank">M8</span></div>
            <p class="describe">
              教学风格幽默风趣的同时也很严谨，对学生也很严谨，对学生
            </p>
          </div>
        </div>
        <div class="item">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
          <div class="zhx_baib">
            <div class="zhx_bai">盛老师<span class="rank">M8</span></div>
            <p class="describe">
              教学风格幽默风趣的同时也很严谨，对学生也很严谨，对学生
            </p>
          </div>
        </div>
        <div class="item">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
          <div class="zhx_baib">
            <div class="zhx_bai">Grace<span class="rank">M20</span></div>
            <p class="describe">
              教学风格幽默风趣的同时也很严谨，对学生也很严谨，对学生
            </p>
          </div>
        </div>
        <div class="item">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
          <div class="zhx_baib">
            <div class="zhx_bai">露露<span class="rank">M1</span></div>
            <p class="describe">
              教学风格幽默风趣的同时也很严谨，对学生也很严谨，对学生
            </p>
          </div>
        </div>
      </div>
      <div class="mat"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  //  components: {
  //      Db,
  //  },
  // 组件状态值
  data() {
    return {
      banner:[],
      act:JSON.parse(sessionStorage.getItem('act'))||1
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    date() {
      this.$router.push('/date')
    },
    ydy(){
      
    },
    coures(){
      this.act = 1
      sessionStorage.setItem('act',JSON.stringify(this.act))
      this.$router.push('/footer/coures')
    }
  },
};
</script>
<style lang="scss" scoped>
.zhx_img_lunbo {
  height: 1.6rem;
  width: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.block {
  width: 100%;
  height: 0.5rem;
}
.content {
  height: 2450px;
  background: rgb(240, 242, 245);
  img {
    display: block;
  }
}

.nav {
  width: 100%;
  position: relative;
  left: 0;
  top: 0.8rem;
  z-index: 1000;
  ul {
    width: 100%;
    display: flex;
    li {
      width: 1rem;
      height: 1.08rem;
      background: #fff;
      margin-left: 0.19rem;
      border-radius: 10%;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-left: 0.38rem;
        margin-top: 0.3rem;
      }
      p {
        text-align: center;
        margin-top: 0.13rem;
        font-size: 0.1rem;
        font-weight: 400;
        color: #8c8c8c;
      }
    }
  }
}
.home {
  background: #f0f2f5;
}
.van-swipe-item {
  width: 100%;
}
.van-swipe-item img {
  width: 100%;
}
.plate {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 3rem;
  margin-top: -0.8rem;
}
.plate div {
  height: 2rem;
  z-index: 999;
  width: 2rem;
  background: white;
  border-radius: 0.3rem;
  text-align: center;
  font-size: 0.25rem;
}
.plate div img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.3rem;
}
.teacher_list {
  margin-top: 1rem;
}
.teacher_item {
  width: 90%;
  margin-left: 5%;
}
.title {
  border-left: red 0.03rem solid;
  padding-left: 0.1rem;
  font-size: 0.15rem;
  margin: 0.2rem 0.2rem;
}
.item {
  margin-top: 0.1rem;
  width: 90%;
  height: 0.8rem;
  font-size: 0.2rem;
  background: white;
  // border-radius: 0.1rem;
  display: flex;
  justify-content: space-around;
   margin-left: 0.2rem;
}
.itemm {
  margin-top: 0.1rem;
  width: 100%;
  height: 0.8rem;
  font-size: 0.2rem;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.itemm img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.zhx_yang {
  font-size: 0.15rem;
  margin-top: 0.1rem;
}
.title_de {
  font-size: 0.18rem;
}
.item img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  margin-top: 0.17rem;
  margin-left: 0.1rem;
}
.zhx_bai {
  font-size: 0.14rem;
  margin-left: 0.2rem;
  margin-top: 0.23rem;
}
.zhx_baib{
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.describe {
  width: 2.7rem;
  color: rgb(177, 174, 174);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.1rem;
  margin-left: 0.2rem;
}
.describers {
  color: rgb(177, 174, 174);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.1rem;
}
.course {
  width: 90%;
  background: white;
  border-radius: 0.1rem;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.course ul {
  width: 94%;
  margin-left: 3%;
}
.course ul img {
  width: 0.31rem;
  height: 0.31rem;
  border-radius: 50%;
}
.course .tit {
  padding-top: 0.1rem;
}
.tit_p {
  font-size: 0.18rem;
  height: 0.3rem;
}
.hour {
  font-size: 0.13rem;
  color: #666;
  margin-top: 0.05rem;
}
.teacher {
  height: 0.8rem;
  border-bottom: 0.01rem solid rgba(218, 212, 212, 0.45);
  display: flex;
  align-items: center;
  font-size: 0.3rem;
}
.teacher span {
  margin-left: 0.1rem;
  font-size: 0.13rem;
  color: rgba(0, 0, 0, 0.45);
}

.del {
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.apply {
  font-size: 0.13rem;
  color: gray;
}
.cost {
  font-size: 0.16rem;
  color: rgb(80, 158, 34);
}
ul .cost img {
  width: 0.18rem;
  height: 0.18rem;
  float: left;
}
.cost span {
  color: red;
  margin-left: 0.1rem;
  float: left;
}
.mat {
  width: 100%;
  height: 0.5rem;
}
.rank {
  font-size: 0.13rem;
  color: rgb(226, 134, 80);
  margin-left: 0.1rem;
}

span {
  font-size: 0.18rem;
}
dl{
  width: 3.4rem;
  height: 0.81rem;
  padding: 0.2rem 0.17rem;
  box-sizing: border-box;
  background: white;
  dt{
    float: left;
    margin-right: 0.13rem;
    img{
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 0.5rem;
    }
  }
  dd{
    margin-top: -0.2rem;
    font-size: 0.13rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>