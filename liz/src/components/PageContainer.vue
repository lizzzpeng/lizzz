<template>
  <div class="homeBox">
    <el-container>
      <el-header>
        <HeaderAvatar></HeaderAvatar>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-menu :default-active="this.$route.path" @open="handleOpen" @close="handleClose" router mode="vertical"
            acive-text-color="#ffd04b">
            <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ item.lable }} </span>
              </template>

              <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <template slot="title">分组{{ subItem.num }}</template>
                <el-menu-item :index="subItem.path+''" @click.native="clickMenu(subItem)">
                  {{ subItem.lable }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item 
            v-for="item in noChildren" 
            :index="item.path+''" 
            :key="item.path"
            @click="clickMenu(item)"
            >
              <span slot="title">{{ item.lable }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main style="line-height: 30px">
            你好
            <router-view></router-view>

         </el-main>
          <el-footer> </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderAvatar from "./HeaderAvatar.vue";

export default {
  name: "PageContainer",
  data() {
    return {
      navList: [
        {
          navItem: "Home",
          lable: "默认分组",
          children: [
            {
              name: "MainContain",
              path: "/MainContain",
              navItem: "MainContain",
              lable: "A地区",
              num: "一",
            },
            {
              name: "Null",
              path: "/Null",
              navItem: "Null",
              lable: "B地区",
              num: "二",
            },
          ],
        },
        {
          path: "/MainContain2",
          name: "MainContain2",
          navItem: "MainContain2",
          lable: "其他分组",
        },
      ],
    };
  },
  components: {
    HeaderAvatar,
    // AsideTree,
    // MainContain,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });

    },
  },
  computed: {
    // 检测是否有 子菜单
    noChildren() {
      return this.navList.filter(item => !item.children)
    },
    hasChildren() {
      return this.navList.filter(item => item.children)
    }
  }
};
</script>

<style scope>
.el-header {
  background-color: #1c2630;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
  height: 100%;
}

.homeBox {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}

.el-container {
  height: 100%;
  background-color: #eaeaea;
  border-radius: 5px;
}

.el-aside {
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #f6f6f6;
  color: #333;
  text-align: center;
  line-height: 240px;
  height: 100%;
}

.el-footer {
  margin-right: 10px;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

* {
  margin: 0;
  padding: 0;
}
</style>