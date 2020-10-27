<template>
  <div>
    <p id="topls">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </p>
    <div id="tly_bigbox">
      <div id="tly_leftbox">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item, index) in alllist"
            :key="index"
            :title="item.name"
            @click="change(item.name)"
          />
        </van-sidebar>
      </div>
      <div id="tly_rightbox">
        <div v-for="(item, index) in showlist" :key="index">
          <p class="tly_title">{{ item.name }}</p>
          <div class="tly_titlebox">
            <span v-show="item.title != ''">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";
import { Search } from 'vant';

Vue.use(Search);
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  data() {
    return {
      activeKey: -1,
      showlist: [],
      value:'',
      alllist: [
        {
          name: "求导题库",
          content: [
            ({
              name: "小学英语",
              title: "英语",
            },
            {
              name: "初中英语",
              title: "",
            },
            {
              name: "高中英语",
              title: "",
            }),
          ],
        },
        {
          name: "极限题库",
          content: [
            {
              name: "两个重要",
              title: "数学",
            },
          ],
        },
        {
          name: "生物",
          content: [
            {
              name: "高中生物",
              title: "遗传",
            },
            {
              name: "初中生物",
              title: "",
            },
          ],
        },
        {
          name: "化学",
          content: [
            {
              name: "化学实验室",
              title: "",
            },
            {
              name: "初中化学",
              title: "化学模拟考试题",
            },
            {
              name: "高中化学",
              title: "",
            },
          ],
        },
        {
          name: "数学",
          content: [
            {
              name: "初中数学",
              title: "数学一模测试",
            },
            {
              name: "小学数学",
              title: "小升初数学",
            },
          ],
        },
        {
          name: "物理",
          content: [
            {
              name: "初中五路",
              title: "初三物理",
            },
            {
              name: "高中物理",
              title: "高中物理",
            },
          ],
        },
        {
          name: "英语",
          content: [
            {
              name: "小学英语",
              title: "英语",
            },
            {
              name: "初中物理",
              title: "",
            },
            {
              name: "高中物理",
              title: "",
            },
          ],
        },
      ],
    };
  },
  methods: {
    change(name) {
      this.showlist = [];
      this.alllist.forEach((e) => {
        if (e.name == name) {
          e.content.forEach((el) => {
            this.showlist.push(el);
          });
        }
      });
    },
    onSearch(){
        console.log(1111);
    }
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#topls {
  height: 10vh;
  
}
#tly_bigbox {
  width: 100%;
  height: 70vh;
  display: flex;
  #tly_leftbox {
    height: 70vh;
    flex: 1;
    background: gainsboro;
    .van-sidebar {
      height: 100%;
      .van-sidebar-item {
        height: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  #tly_rightbox {
    height: 75vh;
    flex: 4;
    .tly_title {
      color: rgb(139, 138, 138);
      margin: 0.07rem;
    }
    .tly_titlebox {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 0.05rem;
      span {
        width: 30%;
        height: 0.2rem;
        background: gainsboro;
        text-align: center;
        font-size: 0.1rem;
      }
    }
  }
}
</style>