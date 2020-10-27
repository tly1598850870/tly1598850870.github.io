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
      <div class="nav">
        <ul>
          <li>
            <router-link to="../Zh">
              <img src="../../assets/pic/characteristic.png" alt="" />
              <p>特色课</p></router-link
            >
          </li>
          <li>
            <img src="../../assets/pic/coach.png" alt="" />
            <p>一对一辅导</p>
          </li>
          <li @click="int">
            <img src="../../assets/pic/Study-Calendar.png" alt="" />

            <p>学习日历</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 名师阵容 -->
    <div class="teacher_list">
      <div class="teacher_item">
        <div>
          <div class="title">名师阵容</div>
          <div>
            <div class="item">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                alt=""
              />
              <div>
                <p>杨德胜</p>
                <p class="describe">
                  杨老师，特级教师，多次被中国数学会评为...
                </p>
              </div>
            </div>
            <div class="item">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg"
                alt=""
              />
              <div>
                <p>文卫星</p>
                <p class="describe">文卫星，江苏沭阳县人，上海市特技教师...</p>
              </div>
            </div>
            <div class="item">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
                alt=""
              />
              <div>
                <p>马学斌</p>
                <p class="describe">马学斌老师，从2004年起，专注中考数学...</p>
              </div>
            </div>
          </div>
        </div>

        <div class="Boutique">
          <div class="title">精品课程</div>
          <!-- <div class="course">
            <ul>
              <li class="title">
                每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化多元方程组问题
              </li>
              <li class="hour">1一课时</li>
              <li>
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                  alt=""
                />
                <span>杨德胜</span>
              </li>
              <li>
                <span>138人已报名</span>
                <span>免费</span>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>

    <div class="course">
      <ul>
        <li class="tit">
          每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化多元方程组问题
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
          <span class="apply">138人已报名</span>
          <span class="cost">免费</span>
        </li>
      </ul>
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
          <span class="cost">免费</span>
        </li>
      </ul>
    </div>
    <div class="course">
      <ul>
        <li class="tit">每时每课特级教师-自主招生冲刺讲座-1代数式求值1</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
            alt=""
          />
          <span>杨德胜</span>
        </li>
        <li class="del">
          <span class="apply">127人已报名</span>
          <span class="cost">免费</span>
        </li>
      </ul>
    </div>

    <div class="course">
      <ul>
        <li class="tit">
          初中重点几何知识点————第三讲:平行四边形与矩形、菱形、正方形的关系
        </li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
            alt=""
          />
          <span>马学斌</span>
        </li>
        <li class="del">
          <span class="apply">123人已报名</span>
          <span class="cost">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              alt=""
            />
            <span>1.00</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="course">
      <ul>
        <li class="tit">
          初中重点几何知识点————第九讲:用描点法画出二次函数y=-x^2的图像
        </li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
            alt=""
          />
          <span>马学斌</span>
        </li>
        <li class="del">
          <span class="apply">127人已报名</span>
          <span class="cost">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              alt=""
            />
            <span>1.00</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="course">
      <ul>
        <li class="tit">
          初中重点几何知识点————第二讲:三角形对平行四边形的影响
        </li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
            alt=""
          />
          <span>杨德胜</span>
        </li>
        <li class="del">
          <span class="apply">120人已报名</span>
          <span class="cost">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              alt=""
            />
            <span>1.00</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="course">
      <ul>
        <li class="tit">每时每课特级教师-自主招生冲刺讲座-1代数式求值1</li>
        <li class="hour">共1课时</li>
        <li class="teacher">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
            alt=""
          />
          <span>杨德胜</span>
        </li>
        <li class="del">
          <span class="apply">127人已报名</span>
          <span class="cost">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
              alt=""
            />
            <span>1.00</span>
          </span>
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
      <div>
        <p>杨德老师<span class="rank">M10</span></p>
        <p class="describe">
          中学一级教师，16年教学经验。学校骨干，中学一级教师，16年教学经验。学校骨干
        </p>
      </div>
    </div>
    <div class="item">
      <img
        src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
        alt=""
      />
      <div>
        <p>白静<span class="rank">M8</span></p>
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
      <div>
        <p>Grace<span class="rank">M20</span></p>
        <p class="describe">国内知名师范院校英语专业毕业，授课方式，授课方式</p>
      </div>
    </div>
    <div class="item">
      <img
        src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
        alt=""
      />
      <div>
        <p>Willa<span class="rank">M1</span></p>
        <p class="describe">
          具有较强的英语专业素养和较高的英语师资，较高的英语师资
        </p>
      </div>
    </div>
    <div class="item">
      <img
        src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
        alt=""
      />
      <div>
        <p>璐璐<span class="rank">M1</span></p>
        <p class="describe">
          教学风格擅长教于乐人的教学方式，条理，教学风格擅长教于乐人的教学方式，条理
        </p>
      </div>
    </div>

    <div class="mat"></div>
    <Db></Db>
</div>
  </div>
</template>

<script>
import Db from '@/components/Db';
import Db from "@/components/Db";
import axios from "axios";
export default {
 // 组件名称
 name: '',
 // 组件参数 接收来自父组件的数据
 props: [],
 // 局部注册的组件
 components: {
     Db,
 },
 // 组件状态值
 data () {
 return {}
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {},
 /**
 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
 */
 created () {
 },
 /**
 /**
 * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
 * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
 */
 mounted () {
 },
 /**
 * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
 * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
 */
 updated () {
 },
 /**
 * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
 */
 activated () {
 },
 /**
 * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
 */
 deactivated () {
 },
}
  components: {
    Db,
  },
  data(){
    return{
      
    }
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>


</style>
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
  background: aliceblue;
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
      width: 2.05rem;
      height: 1.08rem;
      background: #fff;
      margin-left: 0.34rem;
      border-radius: 10%;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-left: 0.33rem;
        margin-top: 0.15rem;
      }
      p {
        text-align: center;
        margin-top: 0.08rem;
        font-size: 0.14rem;
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
  /* border: 1px solid red; */
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
  border-left: red 0.1rem solid;
  padding-left: 0.2rem;
  font-size: 0.18rem;
  margin: 0.3rem 0rem;
}
.item {
  margin-top: 0.2rem;
  width: 100%;
  height: 1rem;
  font-size: 0.2rem;
  background: azure;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-around;
}
.item div {
  width: 80%;
  height: 100%;
  /* line-height: 100%; */
}
.item img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  /* line-height:100%; */
  margin-top: 0.2rem;
}
.describe {
  color: rgb(177, 174, 174);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.1rem;
}
.course {
  width: 100%;
  /* height: 3rem; */
  background: white;
  border-radius: 0.1rem;
  margin-top: 0.3rem;
}
.course ul {
  width: 94%;
  margin-left: 3%;
}
.course ul img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.course .tit {
  font-size: 0.2rem;
  padding-top: 0.4rem;
}
.hour {
  font-size: 0.2rem;
  color: #666;
  margin-top: 0.1rem;
}
.teacher {
  height: 1rem;

  border-bottom: 0.01rem solid rgba(218, 212, 212, 0.45);
  display: flex;
  align-items: center;
  /* float: left; */
  /* margin-right: 0.2rem; */
  font-size: 0.3rem;
}
.teacher span {
  margin-left: 0.3rem;
  color: rgba(0, 0, 0, 0.45);
}

.del {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.apply {
  font-size: 0.2rem;
  color: rgb(80, 78, 78);
}
.cost {
  font-size: 0.2rem;
  color: rgb(80, 158, 34);
}
ul .cost img {
  width: 0.35rem;
  height: 0.32rem;
}
.cost span {
  color: red;
  margin-left: 0.1rem;
}
.mat {
  width: 100%;
  height: 1.5rem;
}
.rank {
  color: rgb(226, 134, 80);
  margin-left: 0.2rem;
}

span {
  font-size: 0.2rem;
}
</style>