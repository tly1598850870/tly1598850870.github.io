<template>
  <div>
      <div class="coach_head">
          <div class="coach_head_top">
              <img src="../../assets/kuohao.png" alt="">
          </div>
          <div class="coach_head_text">一对一辅导</div>
          <div class="coach_head_reght">
              <img src="../../assets/soushuo.png" alt="">
          </div>
      </div>
      <div>
          <router-link to="/calendar">
              <van-dropdown-menu >
           <van-dropdown-item v-model="value1" :options="option1" />
           <van-dropdown-item v-model="value2" :options="option2" />
           </van-dropdown-menu>
            </router-link>
      </div>
    
         <div class="zhx_itemm">
           <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
             </div>
               <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="itemm">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                    alt=""
                  />
                  <div>
                      <div class="zhx_yu">预约</div>
                    <div class="zhx_yang">
                      杨德胜
                      <p class="describers">
                        杨老师，特级教师，多次被中国数学会评为...
                      </p>
                    </div>
                  </div>
                </div>
          </div>   
          
 
     
   
  </div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [{ text: "选择上课时间", value: 0 }],
      option2: [
        { text: "选择下课时间", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
};
</script>

<style scoped>
.coach_head {
  width: 100%;
  height: 0.5rem;
  background: rgb(240, 242, 245);
  display: flex;
  justify-content: center;
}
.coach_head_top img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: -1.3rem;
  margin-top: 0.1rem;
}
.coach_head_text {
  float: left;
  height: 0.5rem;
  line-height: 0.5rem;
}
.coach_head_reght {
  width: 0.3rem;
  height: 0.5rem;
  float: right;
}
.coach_head_reght img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 1.3rem;
  margin-top: 0.1rem;
}
.itemm {
  /* margin-top: 0.1rem; */
  width: 90%;
  height: 0.8rem;
  font-size: 0.2rem;
  background: white;
  display: flex;
  justify-content: space-around;
   margin-top: 0.2rem;
   margin-left: 0.2rem;
 
}
.itemm img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-top: 0.17rem;
  margin-left: 0.08rem;
}
.zhx_yang {
  font-size: 0.15rem;
  margin-top: 0.3rem;
  padding-left: 0.03rem;
}
.describers {
  color: rgb(177, 174, 174);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.1rem;
}
.zhx_itemm{
     background: rgb(240, 242, 250);
     width: 100%;    

}
.zhx_yu{
    position: absolute;
    width: 0.8rem;
    height: 0.4rem;
    background: aliceblue;
    color: red;
    font-size: 0.15rem;
    border-radius: 30%;
    text-align: center;
    line-height: 0.4rem;
    margin-left: 1.8rem;
}
</style>