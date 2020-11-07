<template>
<div>
    <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" left-text @click-right="onClickRight" right-text="保存"/>
    <ul >
        <li v-for="(i) in list" :key="i.id">
            <input type="checkbox" :checked="str.includes(i.id)"
          @click="changeUpdate(i.id,$event)">
          <span>{{i}}</span>
        </li>
    </ul>
</div>
</template>


<script>
import { AjaxEditUser} from "../../utils/api";
export default {
 // 组件名称
 name: '',
 // 组件参数 接收来自父组件的数据
 props: [],
 // 局部注册的组件
 components: {},
 // 组件状态值
 data () {
 return {
     list:[],
     str: "",
     user_attr: [],
 }
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {
     onClickLeft(){
         this.$router.go(-1)
     },
     onClickRight(){
         this.subjectsEdit()
     },
     async subjectsEdit() {
      await AjaxEditUser({ user_attr: JSON.stringify(this.user_attr) });
      this.$router.push("/info");
      this.$toast.success("修改成功");
    },
    changeUpdate(id, e) {
      if (e.target.checked) {
        let obj = { attr_id: 2, attr_val_id: id };
        let index = this.user_attr.findIndex(item => {
          return item == obj;
        });
        if (index == -1) {
          this.user_attr.push(obj);
        }
      } else {
        let index = this.user_attr.findIndex(item => {
          return item.attr_val_id == id;
        });
        this.user_attr.splice(index, 1);
      }
    },

 },
 /**
 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
 */
 created () {
 },
 mounted () {
     this.list=this.$route.query.value
     console.log(this.list)

 },
}
</script> 


<style scoped lang="scss">




</style>