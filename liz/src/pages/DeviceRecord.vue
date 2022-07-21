<template>
        <el-tab-pane label="设备记录">
            我是设备记录
        </el-tab-pane>
</template>

<script>
export default {
        name: 'DeviceRecord',
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