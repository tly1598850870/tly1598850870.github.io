<template>
  <div class="box">
    <header>
      <van-nav-bar title="特色课">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
      <van-dropdown-menu>
        <van-dropdown-item title="分类" ref="item"> </van-dropdown-item>
        <van-dropdown-item title="排序" ref="item"> </van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item">
          <div class="jbr_topsx">
            <div v-for="(item, key) in jbrFl" :key="key">
              <p :style="{background:jbrActive == key?'#EBEEFE':'#f5f5f5',
                color:jbrActive == key?'#EB6100':''}" @click="jbract(key)">{{ item.name }}</p>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </header>
    <div class="cont">
      <dl>
        <dt>
          <p>李老师16号到22号地理大课堂开课啦</p>
          <van-icon name="clock-o" class="jbr_icon" />
          <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
          <p class="jbr_lq">
            <img src="@/assets/155.jpg" alt="" />
            李青
          </p>
        </dt>
        <dd>
          <p>
            <span>134人已报名</span>
            <span class="jbr_mf">免费</span>
          </p>
        </dd>
      </dl>
      <dl>
        <dt>
          <p>李老师16号到22号地理大课堂开课啦</p>
          <van-icon name="clock-o" class="jbr_icon" />
          <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
          <p class="jbr_lq">
            <img src="@/assets/155.jpg" alt="" />
            李青
          </p>
        </dt>
        <dd>
          <p>
            <span>134人已报名</span>
            <span class="jbr_mf">免费</span>
          </p>
        </dd>
      </dl>
      <dl>
        <dt>
          <p>李老师16号到22号地理大课堂开课啦</p>
          <van-icon name="clock-o" class="jbr_icon" />
          <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
          <p class="jbr_lq">
            <img src="@/assets/155.jpg" alt="" />
            李青
          </p>
        </dt>
        <dd>
          <p>
            <span>134人已报名</span>
            <span class="jbr_mf">免费</span>
          </p>
        </dd>
      </dl>
      <dl>
        <dt>
          <p>李老师16号到22号地理大课堂开课啦</p>
          <van-icon name="clock-o" class="jbr_icon" />
          <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
          <p class="jbr_lq">
            <img src="@/assets/155.jpg" alt="" />
            李青
          </p>
        </dt>
        <dd>
          <p>
            <span>134人已报名</span>
            <span class="jbr_mf">免费</span>
          </p>
        </dd>
      </dl>
      <dl>
        <dt>
          <p>李老师16号到22号地理大课堂开课啦</p>
          <van-icon name="clock-o" class="jbr_icon" />
          <span>03月16日 18:30 ~ 03月22日 15:00 | 共8课时</span>
          <p class="jbr_lq">
            <img src="@/assets/155.jpg" alt="" />
            李青
          </p>
        </dt>
        <dd>
          <p>
            <span>134人已报名</span>
            <span class="jbr_mf">免费</span>
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
// import { jbrKc } from '@/utils/api'
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      jbrFl: [],
      jbrActive:0,
    };
  },
  created() {},
  mounted() {
    this.list();
    this.fl();
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    async list() {
      let { data } = await this.$Axios.get("/api/app/myStudy/2");
      // console.log(data)
    },
    async fl() {
      let { data } = await this.$Axios.get("/api/app/courseClassify");
      console.log(data);
      this.jbrFl = data.data.appCourseType;
      console.log(this.jbrFl);
    },
    jbract(k){
        this.jbrActive = k
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 3.75rem;
  height: 100%;
  background: #f0f2f5;
}
header {
  width: 3.75rem;
  position: fixed;
  top: 0;
  z-index: 100;
}
.cont {
  width: 3.75rem;
  height: 100%;
  padding: 3px 0;
  box-sizing: border-box;
  margin-top: 100px;
}
dl {
  width: 3.3rem;
  height: 190px;
  border-radius: 5px;
  background: white;
  margin: 15px auto;
  padding: 1px 10px;
  box-sizing: border-box;
  dt {
    .jbr_icon {
      font-size: 0.13rem;
      color: #d5d5d5;
    }
    span {
      font-size: 0.13rem;
      color: #666666;
      margin-left: 0.07rem;
    }
    .jbr_lq {
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.45);
      display: flex;
      align-items: center;
    }
    img {
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 0.5rem;
      margin-right: 0.07rem;
    }
  }
  dd {
    margin: 0;
    border-top: 0.01rem solid #eee;
    p {
      span {
        font-size: 0.13rem;
        color: rgba(0, 0, 0, 0.45);
      }
      .jbr_mf {
        float: right;
        margin-right: 0.1rem;
        color: #44a426;
        font-size: 0.16rem;
      }
    }
  }
}
.jbr_topsx {
        width: 3.75rem;
  div {
        width: 3.75rem;
        height: 0.5rem;
        display: flex;
    p {
      width: 0.69rem;
      height: 0.33rem;
      background: #f5f5f5;
      text-align: center;
      line-height: 0.33rem;
      font-size: 0.14rem;
    }
  }
}
</style>
