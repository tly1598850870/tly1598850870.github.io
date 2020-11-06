<template>
    <div class="box">
        <p @click="xs(0)">
            <span>所在城市</span>
            <span></span>
            <span></span>
            <span class="nr">
                {{ jbrA }}
            </span>
            <span>></span>
        </p>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
            <van-area title="" :area-list="areaList"
             @change="onchange" @confirm='yes' @cancel='no'
             :value='id' />
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            areaList:{
                province_list: { // 省

                },
                city_list: { // 市

                },
                county_list: { // 区

                }
            },
            jbrA:'',
            newArr:[],
            id:'',
        };
    },
    created() {

    },
    mounted() {
    },
    methods: {
        async xs(ind){
            this.show = true
            let { data } = await this.$Axios.get('/api/app/sonArea/'+ind)
            console.log(data.data)
            data.data.forEach((i,k) => {
                this.$set(this.areaList.province_list,i.id,i.area_name)
            })
            let xid = data.data[0].id

            let { data:res } = await this.$Axios.get(`/api/app/sonArea/${xid}`)
            console.log(res)

            res.data.forEach((i,k) => {
                this.$set(this.areaList.city_list,i.id,i.area_name)
            })
            console.log(this.areaList.city_list)

            let cid = res.data[0].id

            let { data:res1 } = await this.$Axios.get(`/api/app/sonArea/${cid}`)
            console.log(res1)

            res1.data.forEach((i,k) => {
                this.$set(this.areaList.county_list,i.id,i.area_name)
            })
            console.log(this.areaList.county_list)
        },
        async onchange(Picker,name,key){
            let xid = name[key].code
            let cid = name[key].code
            
            switch(key){
                case 0 :
                let { data } = await this.$Axios.get(`/api/app/sonArea/${xid}`)
                console.log(data)
                let obj1 = {}
                data.data.forEach((i,k) => {
                    obj1[i.id] = i.area_name
                })
                console.log(obj1)
                this.areaList.city_list = obj1
                console.log(this.areaList.city_list)

                let obj2 = {}
                let { data:res } = await this.$Axios.get(`/api/app/sonArea/${data.data[0].id}`)
                console.log(res)

                res.data.forEach((i,k) => {
                    obj2[i.id] = i.area_name
                })
                this.areaList.county_list = obj2
                console.log(this.areaList.county_list)
                break
                case 1 :
                let obj3 = {}
                let { data:res1 } = await this.$Axios.get(`/api/app/sonArea/${cid}`)
                console.log(res1)

                res1.data.forEach((i,k) => {
                    obj3[i.id] = i.area_name
                })
                this.areaList.county_list = obj3
                console.log(this.areaList.county_list)
                break
            }
        },
        yes(arr){
            this.show = false
            this.jbrA = ''
            console.log(arr)
            this.$Axios.put('/api/app/user',{
                city_id: arr[1].code,
                district_id: arr[2].code,
                province_id: arr[0].code,
            }).then((res) => {
                console.log(res.data)
                this.$Axios.get('/api/app/userInfo').then((res) => {
                    console.log(res.data)
                    this.newArr = res.data.data
                    this.id = this.newArr.district_id+""
                    console.log(this.id)
                })
            })
            
            arr.forEach((i,k) => {
                if(k+1 == arr.length){
                    this.jbrA +=  i.name + ' '
                }else{
                    this.jbrA += i.name + ','
                }
            })
            console.log(this.jbrA)
        },
        no(){
            this.show = false
        }
    },
};
</script>

<style scoped lang='scss'>
.box{
    width: 3.75rem;
    height: 600px;
    background: #F0F2F5;
    padding-top: 0.1rem;
    box-sizing: border-box;
}
p{
    width: 3.75rem;
    height: 0.5rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.1rem;
    span:nth-child(1){
        font-size: 0.14rem;
    }
    .nr{
        margin-left: 0.5rem;
        font-size: 0.14rem;
    }
}
</style>
