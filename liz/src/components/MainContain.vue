<template>
    <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- <router-view></router-view> -->
                我是主页面
        <!-- <el-tab-pane label="设备状态" name:first>
        </el-tab-pane>
        <el-tab-pane label="设备记录" name:second></el-tab-pane> -->
    </el-tabs>

     

    </div>
</template>

<script>
export default {
    name: 'MainContain',
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      // pushShow(){
			// 	this.$router.push({
			// 		name:'DeviceRecord'
			// })
			// 	this.$router.push({
			// 		name:'DeviceStatus'
			// })
			// }
    }
}
</script>

<style scoped>
/* .LineInformationContent {
    width: 265x;
    height: 100%;
    background: #F7F8FA;
    border: 1px solid #E5E9EE;
    border-radius: 2px;
    margin-right: 18px;
    margin-bottom: 18px;
    transition: all .5s;
}
 */



</style>