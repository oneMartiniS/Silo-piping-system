<template>
   <div class="header-container">
        <div class="i-content"> <el-image :src="imageLink" style="padding: 30px; margin-top: 5px;margin-bottom: 5px;"></el-image></div>
        <div class="r-content"></div>
        <div clss="btn"><el-button type="info" plain icon="el-icon-back" @click="loginOut">退出登录</el-button></div>
        
    </div>
</template>
  
<script>
export default {
  name: "Header",
  data() {
    return {
      imageLink:  require('@/assets/logos.png'),
    };
  },
  methods: {
    loginOut() {
      this.$router.push('/login')
    },
    
  },
};
</script>
  
<style lang="less" scoped>
  .header-container{
    align-items: center;
    display:flex ;
    flex-direction: row;
    background-color: #333;
    height: 60px;
    width: 100%;
    

  }
  .i-content{
      margin-left: 10px;
      width: 20%
    }
  .r-content{
    width: 65%;
  }
  .btn{
    margin-right: 10px;
  }
</style>
