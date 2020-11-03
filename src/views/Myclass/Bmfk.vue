<template>
  <div class="box">
    <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" />
    <div class="cont" v-for="(item, key) in list" :key="key">
      <p>{{ item.title }}</p>
      <span>{{ (item.price / 100).toFixed(2) }}</span>
      <p class="sk">授课老师:{{ item.teacher_name }}</p>
    </div>
    <div class="q">
      <div class="yhq">优惠券</div>
      <div class="wky">无可用</div>
    </div>

    <div class="money" v-for="item in list" :key="item.id">
      <div class="spprice">
        商品金额
        <span>
          <img src="../../assets/money.png" alt="" />
          {{ (item.price / 100).toFixed(2) }}
        </span>
      </div>
      <div class="yhprice">
        优惠券金额
        <span>
          <img src="../../assets/money.png" alt="" />
          {{ 0 }}
        </span>
      </div>
      <div class="hj">
        合计
        <span>
          <img src="../../assets/money.png" alt="" />
          {{ (item.price / 100).toFixed(2) }}
        </span>
      </div>

      <footer>
        <ul>
          <li>
            <p>
              实付价格
              <span>
                <img src="../../assets/money.png" alt="" />
                {{ (price / 100).toFixed(2) }}
              </span>
            </p>
          </li>
          <li></li>
          <li>
            <button @click="tj()">提交订单</button>
          </li>
        </ul>
      </footer>
      <van-overlay :show="show" @click="show = false">
        <div class="wrapper">
          <div class="block" @click.stop>
            <div class="ts">
              <p>提示</p>
              <p @click="show = false">X</p>
            </div>
            <div class="tsz">
              <p class="txt">{{ txt }}</p>
            </div>
            <div class="btn">
              <button @click="show = false">取消</button>
              <button @click="cz()">去充值</button>
            </div>
          </div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xid: 0,
      list: [],
      price: 0,
      show: false,
      txt: "",
    };
  },
  created() {},
  mounted() {
    this.xid = this.$route.query.id;
    console.log(this.xid);
    this.List();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async List() {
      let { data } = await this.$Axios.post("/api/app/order/shopInfo", {
        shop_id: this.xid,
        type: 5,
      });
      console.log(data);
      this.list.push(data.data.info);
      console.log(this.list);
      this.price = this.list[0].price;
    },
    async tj() {
      let { data } = await this.$Axios.post("/api/app/order/downOrder", {
        shop_id: this.xid,
        type: "5",
        user_coupon_id: 0,
      });
      console.log(data);
      this.txt = data.data.msg;
      this.show = true;
    },
    cz() {
      this.show = false;
      this.$router.push("/mycurrency");
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 3.75rem;
  height: 1000px;
  // height: 100%;
  background: #f0f2f5;
}
.cont {
  width: 3.5rem;
  background: white;
  box-sizing: border-box;
  padding: 0.1rem 0.2rem;
  margin: 0.15rem auto;
  p {
    width: 2.8rem;
    font-size: 0.14rem;
    display: inline-block;
  }
  span {
    float: right;
    margin-top: 0.16rem;
    font-size: 0.15rem;
    color: #8c8c8c;
  }
  .sk {
    font-size: 0.1rem;
    color: #8c8c8c;
    margin-top: -0.1rem;
  }
}
.q {
  display: flex;
  padding: 0 0.2rem;
  background: white;
  box-sizing: border-box;
  line-height: 0.47rem;
  font-size: 0.15rem;
  .yhq {
    width: 50%;
    height: 0.47rem;
  }
  .wky {
    width: 50%;
    text-align: right;
    color: #969799;
    height: 0.47rem;
  }
}
.money {
  width: 3.75rem;
  background: white;
  margin-top: 0.17rem;
  padding: 0.2rem 0.1rem;
  box-sizing: border-box;
  .spprice,
  .yhprice,
  .hj {
    display: flex;
    justify-content: space-between;
    padding: 0.03rem 0;
    box-sizing: border-box;
    font-size: 0.13rem;
    color: #8c8c8c;
  }
  //   .spprice {
  //     span {
  //     }
  //   }
  //   .yhprice {
  //     span {
  //     }
  //   }
  .hj {
    span {
      font-size: 0.15rem;
      color: #e02020;
    }
  }
}
footer {
  width: 3.75rem;
  height: 0.54rem;
  background: white;
  position: fixed;
  bottom: 0;
  margin: 0 -0.1rem;
  ul {
    width: 3.75rem;
    height: 0.54rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    li {
      p {
        font-size: 0.13rem;
        color: #8c8c8c;
        padding: 0 0.2rem;
        span {
          font-size: 0.25rem;
          color: #e02020;
          // font-weight: 600;
        }
      }
      button {
        width: 1.35rem;
        height: 0.54rem;
        background: #eb6100;
        border: #eb6100;
        color: white;
        font-size: 0.18rem;
        position: relative;
      }
      button::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: #000;
        border: inherit;
        border-color: #000;
        border-radius: inherit;
        transform: translate(-50%, -50%);
        opacity: 0;
        content: " ";
      }
      button:active::before {
        opacity: 0.1;
      }
    }
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 2.12rem;
  height: 0.9rem;
  background-color: #fff;
  .ts {
    font-size: 0.1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
  .tsz {
    width: 1.75rem;
    font-size: 0.1rem;
    margin-left: 0.2rem;
    margin-top: -0.15rem;
    .txt::before{
        content: '!';
        width: 0.14rem;
        height: 0.14rem;
        display: inline-block;
        line-height: 0.14rem;
        text-align: center;
        color: white;
        font-size: 0.1rem;
        border-radius: 0.5rem;
        background: #e6a23c;
        margin-left: -0.1rem;
    }
  }
  .btn {
    font-size: 0.1rem;
    float: right;
    margin-top: -0.1rem;
    button {
      padding: 0.03rem 0.08rem;
      margin-right: 0.03rem;
    }
    button:nth-child(1) {
      background: white;
      border: 1px solid #ddd;
    }
    button:nth-child(2) {
      border: #66b1ff;
      background: #66b1ff;
      color: white;
    }
  }
}
</style>
