<template>
  <div class="main">
    <div class="son">
      <div style="padding: 50px; ">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="success" plain>搜索</el-button>
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
  height: 96%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 6px;
  align-items: center;
  width: 97%;
  padding: 10px;
}
.el-input{
  width: 30%;
  margin-right: 10px;
}

</style>