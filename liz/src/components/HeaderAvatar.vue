<template>
    <div>
        <el-row class="head">
            <el-col :span="24">
                <el-col :span="1">
                    <div class="circle">
                        <div class="block">
                            <el-avatar class="avatar" size="medium">
                                <i class="el-icon-s-custom"></i>
                            </el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :span="23">
                    <div class="title">物联网管理系统</div>
                </el-col>
            </el-col>
        </el-row>
    </div>


</template>

<script>
export default {
    name: 'HeaderAvatar',
    data() {
        return {
            sizeList: ["large", "medium", "small"]
        }
    }
}

</script>

<style>
.avatar {
    margin-top: 10px;
    background: #409EFF;
    color: rgb(255, 246, 240)
}

.block {
    border-radius: 5px
}

.title {
    color: #efe3f6;

}
</style>