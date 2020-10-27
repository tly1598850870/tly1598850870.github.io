<template>
  <div>
    <div class="tly_bigbox">
      <div class="tly_conterbox">
        <div
          v-for="(item, index) in alllist"
          :key="index"
          @click="totablist(item.path, item.name)"
        >
          <img src="" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="tly_bottombox">
      <p class="tly_bottom_fontcloor">近期模拟</p>
      <p class="tly_bottom_fontcloorbox">
        <span
          @click="show = false"
          :class="show == false ? 'tly_red' : 'tly_gray'"
          >默认排序</span
        >
        <span
          class="tly_smillbox"
          @click="changes"
          :class="show == true ? 'tly_red' : 'tly_gray'"
          >时间<span v-show="show">
            <span>
              <img src="http://localhost:8080/down.png" v-show="shows"
            /></span>
            <span>
              <img src="http://localhost:8080/up.png" v-show="showse" /></span
          ></span>
        </span>
      </p>
      <div class="tly_imgbox">
        <img src="http://localhost:8080/back.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      shows: false,
      showse: false,
      alllist: [
        {
          img: "",
          name: "考点练习",
          path: "/footer/Myexercise/question",
        },
        {
          img: "",
          name: "套卷练习",
          path: "/footer/Myexercise/practice",
        },
        {
          img: "",
          name: "仿真模考",
          path: "/footer/Myexercise/examination",

        },
        {
          img: "",
          name: "错题练习",
          path: "/footer/Myexercise/mistakes",
        },
        {
          img: "",
          name: "评测记录",
          path: "/footer/Myexercise/evaluating",
        },
        {
          img: "",
          name: "习题收藏",
          path: "/footer/Myexercise/exercises",
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("changeshow", "练习");
  },
  methods: {
    changes() {
      if (this.show == false) {
        this.show = true;
        this.shows = true;
        this.showse = false;
      } else {
        this.shows = true;
        if (this.shows == true) {
          if (this.showse == false) {
            this.showse = true;
            this.shows = false;
          } else if (this.showse == true) {
            this.showse = false;
            this.shows = true;
          }
        }
      }
    },
    totablist(path, name) {
      this.$router.push({ path, query: { name: name } });
    },
  },
};
</script>
<style lang="scss" scoped>
.tly_bigbox {
  width: 100%;
  height: 30vh;
  box-sizing: border-box;
  background: rgb(238, 237, 237);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.1rem;
  .tly_conterbox {
    width: 95%;
    height: 90%;
    border-radius: 5px;
    background: white;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 25%;
      height: 50%;
      text-align: center;
      img {
        width: 45%;
        height: 40%;
        margin-top: 0.15rem;
        border-radius: 0.5rem;
        box-shadow: gainsboro 0rem 0rem 0.1rem;
      }
    }
  }
}
.tly_bottombox {
  width: 100%;
  height: 35vh;
  box-sizing: border-box;
  padding: 0.1rem;
  .tly_bottom_fontcloor {
    color: rgb(129, 127, 127);
    font-size: 0.15rem;
    margin: 0px;
    padding: 0px;
  }
  .tly_bottom_fontcloorbox {
    display: flex;
    justify-content: space-between;
    font-size: 0.13rem;
    .tly_red {
      color: rgb(245, 58, 58);
    }
    .tly_gray {
      color: rgb(129, 127, 127);
    }
    .tly_smillbox {
      width: 0.5rem;
      img {
        height: 0.1rem;
      }
    }
  }
  .tly_imgbox {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 90%;
    }
  }
}
</style>