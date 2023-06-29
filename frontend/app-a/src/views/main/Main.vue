<template>
    <el-container class="home_container">
    
      <!-- header -->
    
      <el-aside style="width: 250px;">
        <Navigation />
      </el-aside>
      <!-- 左侧导航栏 -->
      <el-container>
        <!-- 局部方法复用 -->
        
    <el-header >
        <!-- 局部方法复用 -->
        <Header />
      </el-header>
        <el-container>
          <!-- 主体内容 -->
          <el-main>
            <!-- 路由统一跳转 -->
            <router-view></router-view>
          </el-main>
        </el-container>
        
      </el-container>
    </el-container>
  </template>
  <script>
  // 引入Header、Navigation组件
  import Header from "../framework/Header.vue";
  import Navigation from "../framework/Navigation.vue";
    export default {
      // 给组件命名为Home
      name: "Home",
      components: {
        // 复用Header组件
        Header,
        // 复用Navigation组件
        Navigation,
        
      },
      data() {
        return {};
      },
    };
  </script>
  
  <style scoped="scoped">

    .home_container {
      width: 100%;
      height: 100%;
    }
    .el-header{
     padding: 0;
    }
  
   
  </style>
 