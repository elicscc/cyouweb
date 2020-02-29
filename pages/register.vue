<template>
  <!-- <div class="wrapper loginsign"> -->
    <div class="item ">
      <div class="form">
        <h3 class="loginsign-title">注册新账号</h3>
        <form class="sui-form">
          <div class="control-group">
            <!-- <label for="inputname" class="control-label">名字</label> -->
            <div class="controls">
              <input
                type="text"
                v-model="user.nickname"
                placeholder="真实姓名或常用昵称"
                class="input-xlarge"
                data-rules="required"
              />
            </div>
          </div>
          <div class="different">
            <div class="radio-content">
              <div id="a1" class="phone">
                <div class="control-group number">
                  <input
                    type="text"
                    v-model="user.mobile"
                    placeholder="仅支持大陆手机号"
                    class="input-xlarge"
                    data-rules="required|mobile"
                  />
                </div>
                <div class="control-group code">
                  <div class="input-append">
                    <input
                      type="text"
                      v-model="code"
                      placeholder="短信验证"
                      class="span2 input-large msg-input"
                    />
                    <button type="button" class="sui-btn msg-btn" @click="clickSMS(user)">获取验证码</button>
                  </div>
                </div>
                <!-- <div class="control-group"> -->
                  <label for="inputpassword" class="control-label">密码</label>
                  <div class="controls">
                    <input
                      type="password"
                      v-model="user.password"
                      placeholder="请输入6-16位密码"
                      class="input-xlarge"
                      data-rules="required"
                    />
                  </div>
                  <div class="controls">
                    <input
                      type="password"
                      v-model="user.password1"
                      placeholder="再次输入密码"
                      class="input-xlarge"
                      data-rules="required"
                    />
                  <!-- </div> -->
                </div>
              </div>
              
              <!-- <div class="email">
                <div class="control-group inputemail">
                  <input type="text" placeholder="输入手机号" class="input-xlarge" />
                </div>
                <div class="control-group">
                  <label for="inputpassword" class="control-label">密码：</label>
                  <div class="controls">
                    <input type="text" placeholder="请输入6-16位字符" class="input-xlarge" />
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div class="control-group btn-signup">
            <label class="control-label"></label>
            <div class="controls">
              <label>
                <input type="checkbox" />
                <span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span>
              </label>
              <button type="button" class="sui-btn btn-danger btn-yes" @click="register(code,user)">注 册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
import "~/assets/css/page-sj-person-loginsign.css";
import UserApi from "@/api/user";
export default {
  data() {
    return {
      user: {},
      code: ''
    };
  },
  methods: {
    register(code,user) {

      //参数校验
        
     
      var pattren = /^(((13[0-9])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8})|(0\d{2}-\d{8})|(0\d{3}-\d{7})$/;

if(!pattren.test(user.mobile)){
    this.$message({
              message: "请输入正确的手机号！",
              type:  "error"
            });
            return

}

if(user.nickname == null || user.nickname==undefined||user.nickname== ""){
    this.$message({
              message: "请输入昵称！",
              type:  "error"
            });
            return

}

if(code == null || code==undefined||code== ""){
    this.$message({
              message: "未输入验证码！",
              type:  "error"
            });
            return

}

if(user.password1 == null || user.password1==undefined||user.password1== ""){
    this.$message({
              message: "请输入密码！",
              type:  "error"
            });
            return

}
if(user.password!=user.password1){
   this.$message({
              message: "两次输入的密码不一致！",
              type:  "error"
            });
            return
}


      UserApi.add(this.code,this.user).then(res => {
          if (res.data.flag) {
            //给个提示
            this.$message({
              message: res.data.message,
              type: "success" 
            });
            this.user = {};
            this.$router.push("/login")
          } else {
            this.$message({
              message: res.data.message,
              type: "error"
            });
          }
        });
    },
    clickSMS(user) {
      var pattren = /^(((13[0-9])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8})|(0\d{2}-\d{8})|(0\d{3}-\d{7})$/;

if(!pattren.test(user.mobile)){
    this.$message({
              message: "请输入正确的手机号！",
              type:  "error"
            });
            return

}
      //获取验证码
      UserApi.sendCode(this.user.mobile).then(res => {
        //给个提示
        this.$message({
          message: res.data.message,
          type: res.data.flag ? "success" : "error"
        });
      });
    }
  }
};
</script>
