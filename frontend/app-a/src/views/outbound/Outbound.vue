<template>
  <div class="main">
    <div class="son">
      <div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="success" plain>搜索</el-button>
        <el-button type="warning" plain style="position: absolute;right: 10px;margin-right: 30px;">导出记录</el-button>
      </div>
      <div>
        <h1>出库/物料信息</h1>
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="footl">
        <el-pagination background layout="prev, pager, next" :total="80">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
  
<script>


</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.son {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 6px;
  align-items: center;
  width: 97%;
  padding: 20px;
  margin-top: 10px;
  height: 95%;

}

.el-input {
  width: 300px;
  margin-right: 10px;
}

.footl {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
}
</style>