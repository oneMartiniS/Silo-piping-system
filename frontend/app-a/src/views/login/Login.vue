<template>
  <div class="login">
    <div class="login_title">
      <div class="title">
        <div class="f1"><img class="imgs" :src="imageLink" width="140px" height="80px"></div>
        <div class="f2">
          <h1>供应链管理系统</h1>
        </div>
      </div>

      <div class="login_context">



        <el-form :model="loginRuleForm" :rules="loginRules" ref="loginRules" class="login_box">

          <el-form-item label="账号" prop="username">
            <el-input v-model="loginRuleForm.username"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input v-model="loginRuleForm.password"></el-input>
          </el-form-item>

          <el-form-item class="btns">
            <el-button type="primary" @click="login">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  // Vue 代码逻辑
  export default {
    data() {
      return {
        // 表单请求数据
        imageLink:  require('@/assets/logo.png'),
        loginRuleForm: {
          username: '',
          password: '',
        },
        // 表单验证规则
        loginRules: {
          username: [{
              required: true,
              message: "请输入用户名",
              trigger: "blur"
            },
            {
              min: 3,
              max: 18,
              message: "长度在 3 到 18 个字符",
              trigger: "blur",
            },
          ],
          password: [{
              required: true,
              message: "请输入密码",
              trigger: "blur"
            },
            {
              min: 3,
              max: 18,
              message: "长度在 3 到 18 个字符",
              trigger: "blur",
            }
          ]
        }
      };
    },
    methods: {
      login() {
        // 登陆进行规则的校验，只有校验成功才能登陆
        // vaild=>所有的规则校验都成立才会进入到这里
        this.$refs.loginRules.validate((vaild) => {
          if (!vaild) return;
          // 直接请求数据，格式是payload，如果服务端要求是payload格式那么这样请求
          // this.$axios.post("http://192.168.17.176:8089/login", this.loginRuleForm).then((res) => {
          //   console.log(res)
          // })

          // 请求数据，格式是formdata，需要添加 this.qs.stringify()进行格式转换
          this.$axios.post("http://192.168.17.176:8089/login", this.qs.stringify(this.loginRuleForm)).then((
            res) => {
            console.log(res)

            if (res.data.code != 0 && res.data.code != 401) {
              return this.$message.error(res.data.msg);
            }


            // 跳转到主页
            this.$router.push("/main");
            this.$message.success("HI! " + this.loginRuleForm.username + " 欢迎来到客诉查询平台！");

          })
        })
      }
    }
  }
</script>

<style scoped>
.login {

  /* 高度 */
  height: 100%;
  /* 背景色 */
  background: rgb(242, 244, 247);

}

.login_title {
  /* 字体水平左右居中 */
  text-align: center;
}

.title {
  position: absolute;
  box-sizing: border-box;
  padding: 0 50px;
  height: 300px;
  width: 100%;
  top: 10%;
}

.title f2 {
  width: 100%;
  height: 200px;
}

.title f1 {
  width: 100%;
  height: 100px;
}
.title h1 {
    font-size: 3rem;
    color: rgb(81,120,179);

}
.imglog {
  width: 100px;
  height: 100px;
}

.login_context {
  /* 宽度 */
  width: 450px;
  /* 高度 */
  height: 300px;
  /* 背景色 */
  background: #fff;
  /* 属性定位 */
  position: absolute;
  /* 属性定位，顶部占比 */
  margin-top: 100px;
  top: 330px;
  /* 属性定位，左侧占比 */
  left: 50%;
  /* 水平垂直居中 */
  transform: translate(-50%, -50%);
  /* 四个角的圆角角度 */
  border-radius: 20px;
  /* 阴影 */
  box-shadow: 0 0 5px 2px #ddd;
}

.login_box {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 50px;
  /* 边框边距 */
  box-sizing: border-box;
}

.btns {
  /* 将对象作为弹性伸缩盒显示 */
  /* 横轴方向上的对齐方式 */
  align-items: center;
  text-align: center;

}
</style>
