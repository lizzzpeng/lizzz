<template>
        <el-tab-pane label="设备状态">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>#微断1</span>
                    <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </div>
                <div>
                    <el-image style=" height: 100px" :src="pictureClose"></el-image>
                </div>
            </el-card>

            <el-card class="box-card">
                <div style="text-align: left; font-weight:bold">
                    <ul class="parameter" style="padding-left: 10px; padding-top: 0; ">
                        <li>有功功率 : 12w</li>
                        <li>无功功率 : 6w</li>
                        <li>运行电流 : 2A</li>
                        <li>触头温度 : 20</li>
                        <li>视在功率 : 18W</li>
                        <li>泄露电流 : 0.3A</li>
                        <li>运行电压 : 220V</li>
                    </ul>
                </div>
            </el-card>

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>#微断2</span>
                    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </div>
                <div>
                    <el-image style=" height: 100px" :src="pictureClose"></el-image>
                </div>
            </el-card>

            <el-card class="box-card">
                <div style="text-align: left; font-weight:bold">
                    <ul class="parameter" style="padding-left: 10px; padding-top: 0; ">
                        <li>有功功率 : 12w</li>
                        <li>无功功率 : 6w</li>
                        <li>运行电流 : 2A</li>
                        <li>触头温度 : 20</li>
                        <li>视在功率 : 18W</li>
                        <li>泄露电流 : 0.3A</li>
                        <li>运行电压 : 220V</li>
                    </ul>
                </div>
            </el-card>

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>#微断3</span>
                    <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </div>
                <div>
                    <el-image style=" height: 100px" :src="pictureOpen"></el-image>
                </div>
            </el-card>

            <el-card class="box-card">
                <div style="text-align: left; font-weight:bold">
                    <ul class="parameter" style="padding-left: 10px; padding-top: 0; ">
                        <li>有功功率 : 12w</li>
                        <li>无功功率 : 6w</li>
                        <li>运行电流 : 2A</li>
                        <li>触头温度 : 20</li>
                        <li>视在功率 : 18W</li>
                        <li>泄露电流 : 0.3A</li>
                        <li>运行电压 : 220V</li>
                    </ul>
                </div>
            </el-card>
        </el-tab-pane>

</template>

<script>
export default {
        name: 'DeviceStatus',
        data() {
        return {
            pictureClose: require('./分闸.png'),
            pictureOpen: require('./微断.png'),
            value1: false,
            value2: false,
            value3: true,
        }
    },
}
</script>

<style>
.box-card {
    border-radius: 2px;
    margin-right: 18px;
    margin-bottom: 18px;
    transition: all .5s;
    width: 280px;
    height: 240px;
    float: left;
    font-size: smaller;
}
.clearfix:after {
    clear: both
}

.el-image {
    object-fit: none;
}

.parameter {
    margin-left: 0ch;
    list-style: none;
    font-size: 9px;
    line-height: 30px;
    padding-left: 0;
}
</style>