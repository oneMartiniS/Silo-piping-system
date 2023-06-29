<template>
  <div class="main">
    <div class="son">
      <div clss="c1"
        style="box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1); margin: 10px; padding: 10px; align-items: center; width: 98%; justify-items: center;align-items: center;">
        <div >
          <h1>用户信息</h1>
          <el-descriptions class="margin-top"  :column="3" :size="size" border>
            
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户名
              </template>
              kooriookami
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                权限
              </template>
              管理员
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                姓名
              </template>
              xxx
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                部门
              </template>
              <el-tag size="small">技术部</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                上次登录地
              </template>
              西安
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                上次登录时间
              </template>
              2023-06-29-17:30
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
      
    </div>
    <div class="son">
      <div style="box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1); margin: 10px; align-items: center; width: 100%;">
        <el-skeleton :rows="6" animated />
      </div>
    </div>
    <div>

    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {

    };
  },
};
</script>


  
<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
}

.son {
  display: flex;
  flex-direction: row;
}

</style>
 