<template>
  <!-- <div class="wrapper loginsign"> -->
    <div class="item">
      <div class="form">
        <h3 class="loginsign-title">用户登录</h3>
        <form class="sui-form ">
          <div class="control-group">
            <label for="inputname" class="control-label">手机号：</label>
            <!-- <div class="controls">
              <input
                type="text"
                v-model="pojo.mobile"
                placeholder="11位手机号"
                class="input-xlarge"
                data-rules="required"
              />
            </div>
          </div>
          <div class="control-group  btn-signup">
            <label for="inputpassword" class="control-label">密码：</label>
            <div class="controls">
              <input type="password"   v-model="pojo.password" placeholder="输入登录密码" class="input-xlarge" />
            </div>
          </div> -->

 <div class="controls">
              <input
                type="text"
                v-model="pojo.mobile"
                placeholder="11位手机号"
                class="input-xlarge"
                data-rules="required"
               
              />
            </div>
          </div>
          <div class="control-group  btn-signup">
            <label for="inputpassword" class="control-label">密码：</label>
            <div class="controls" >
              <input type="password"   v-model="pojo.password" placeholder="输入登录密码" class="input-xlarge"   data-rules="required" />
            </div>
          </div>

           <div class="control-group btn-signup">
            <div class="controls">
              <label>
                <!-- <input type="checkbox" data-rules="required"/> -->
               <span class="type-text" style="font-size:12px;">记住登录状态</span>
              </label>
               <button  type="button"  @click="doLogin" class="sui-btn btn-danger btn-yes ">登 录</button>
            </div>
            </div>


            
          <!-- <div class="other-methods">
            <div id="weixin" > </div>
        </div> -->

        </form>


      </div>

    </div>
  <!-- </div> -->
</template>
<script>
import "~/assets/css/page-sj-person-loginsign.css";
import UserApi from '@/api/user'
import {setUser} from '@/utils/auth'
export default {
   
  
  // mounted(){
  //     var obj = new WxLogin({
  //       id: "weixin",
  //       appid: "wx3bdb1192c22883f3",
  //       scope: "snsapi_login",
  //       redirect_uri: "http://note.java.itcast.cn/weixinlogin"
  //     });
  //   },
  //   head:{
  //     script:[
  //       {src:'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'}
  //     ]
  //   },
    data(){
    return{
      pojo:{}
    }
  },
  methods:{
     

    doLogin(){
      var mobile1=this.pojo.mobile
      var password1=this.pojo.password
      var pattren = /^(((13[0-9])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8})|(0\d{2}-\d{8})|(0\d{3}-\d{7})$/;

if(!pattren.test(mobile1)){
    this.$message({
              message: "请输入正确的手机号！",
              type:  "error"
            });
            return

}

if(password1== null || password1==undefined||password1== ""){
    this.$message({
              message: "请输入密码！",
              type:  "error"
            });
            return

}
      
            // do stuff if not valid.
             UserApi.login(this.pojo).then(res=>{
        if(res.data.flag){
        //登录成功后 保存用户信息到Cookie 跳转
         
         setUser(res.data.data.token,res.data.data.name,res.data.data.avatar)
    //  this.$router.push("/manager")
     window.location.href="/manager"
         }else{
            this.$message({
              message: res.data.message,
              type:  "error"
            });
            this.pojo={}
         }
      })
      
    
     
    }
  },
  

}
</script>
