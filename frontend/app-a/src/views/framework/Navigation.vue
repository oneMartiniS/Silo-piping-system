<template>
  
  <el-menu style="height: 100%;" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router :default-active="$route.path">
    <h3>供应链管理系统</h3>
    <el-menu-item  index="/home">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="searchs">
      <i class="el-icon-search"></i>
      <span slot="title">库存查询</span>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span>库存管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="inventory">库存记录管理</el-menu-item>
        <el-menu-item index="warehouse">入库查询</el-menu-item>
        <el-menu-item index="outbound">出库查询</el-menu-item>
        <el-menu-item index="modification">修改记录查询</el-menu-item>
        <el-menu-item index="vist">可视化</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo::not(.el-menu--collaps){
  width: 200px;
}
.el-menu{
  height: 100%;
  h3{
    color:#fff;
    text-align: center;
    line-height: 48px;
    font-weight: 400;
  }
}
</style>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      activeIndex:"/Home",
      menuDate:
        [
          {
            path: '/home',
            name: 'home',
            lable: '首页',
            icon: '',
            url: 'home/Home'
          },
          {
            path: '/home',
            name: 'searchs',
            lable: '库存查询',
            icon: '',
            url: 'home/Searchs'
          },
          {
            lable: '库存管理',
            icon: '',
            children: [
              {
                path: '/home',
                name: 'Warehouse',
                lable: '入库管理',
                icon: '',
                url: 'home/Warehouse'
              },
              {
                path: '/home',
                name: 'Outbound',
                lable: '出库管理',
                icon: '',
                url: 'home/Outbound'
              },
              {
                path: '/home',
                name: 'searchs',
                lable: '修改记录',
                icon: '',
                url: 'home/Searchs'
              },
              {
                path: '/home',
                name: 'Vist',
                lable: '可视化',
                icon: '',
                url: 'home/Vist'
              },
            ]
          }

        ]
    }
  },
  computed:{
    //用户权限显示菜单

  },
  methdos:{//导航栏切换页面
  

    
  }
};
</script>
  
  