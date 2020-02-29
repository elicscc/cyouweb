<template>
  <div>
    <header>
      <div class="activity-head">
        <div class="wrapper">
          <div class="sui-navbar">
            <div class="navbar-inner">
              <a href="/" class="sui-brand">
                <img src="https://cdn.jsdelivr.net/gh/elicscc/tens-web/assets/img/asset-logo-white.png" width="100px" height="50px" alt="社交" />
              </a>
              <ul class="sui-nav">
                <router-link to="/" tag="li" active-class="active" exact>
                  <a>头条</a>
                </router-link>
                <router-link to="/qa" tag="li" active-class="active">
                  <a>问答</a>
                </router-link>
                <router-link to="/gathering" tag="li" active-class="active">
                  <a>活动</a>
                </router-link>
                <router-link to="/friends" tag="li" active-class="active">
                  <a>交友</a>
                </router-link>
                <router-link to="/spit" tag="li" active-class="active">
                  <a>吐槽</a>
                </router-link>
                <router-link to="/recruit" tag="li" active-class="active">
                  <a>招聘</a>
                </router-link>
              </ul>
              <form class="sui-form sui-form pull-left" style="post;">
                    <input type="text" placeholder="输入关键词...">
                    <div class="fa fa-search" style="font-size:30px;"></div>
                  </form>
         
              <div class="sui-nav pull-right info" v-show="user.name!==undefined">
                <li>
                  <router-link to="/manager" class="notice">{{user.name}}</router-link>
                </li>
                <li>
               
                <router-link to="/manager" target="_blank" class="homego">
                    <img :src="user.avatar" height="50px" width="50px" alt="image" />
              </router-link>
                </li>
                <li>
                  <a @click="logout" class="notice">退出登录</a>
                </li>
              </div>

              <div class="sui-nav pull-right info" v-show="user.name===undefined">
                <router-link to="/login" tag="li">
                  <a class="sui-btn btn-login">登陆</a>
                </router-link>
                <router-link to="/register" tag="li">
                  <a>注册</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
         </div>
    </header>
    <nuxt />
    <footer>
      <!--底部版权-->
      <div class="footer">
        <div class="wrapper">
          <div class="footer-bottom">
            <div class="link">
              <dl>
                <dt>网站相关</dt>
                <dd>关于我们</dd>
                <dd>服务条款</dd>
                <dd>帮助中心</dd>
                <dd>编辑器语法</dd>
              </dl>
              <dl>
                <dt>常用链接</dt>
                <dd>CC</dd>
                <dd>CC论坛</dd>
              </dl>
              <dl>
                <dt>联系我们</dt>
                <dd>联系我们</dd>
                <dd>加入我们</dd>
                <dd>建议反馈</dd>
              </dl>
              <dl>
                <dt>关注我们</dt>
                <dd>微博</dd>
                <dd>twitter</dd>
              </dl>

              <div class="xuke">
                <h3>内容许可</h3>
                <p>除特别说明外，用户内容均采用知识共享署名-非商业性使用-禁止演绎4.0 国际许可协议 (CC BY-NC-ND 4.0) 进行许可</p>
                <p>本站由 CC 提供更新服务</p>
              </div>
            </div>
            <p class="Copyright">皖ICP备19024863号</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import "~/assets/plugins/normalize-css/normalize.css";
import "~/assets/plugins/yui/cssgrids-min.css";
import "~/assets/plugins/sui/sui.min.css";
import "~/assets/plugins/sui/sui-append.min.css";
import "~/assets/plugins/font-awesome/css/font-awesome.min.css";
import "~/assets/css/widget-base.css";
import "~/assets/css/widget-head-foot.css";
import "~/assets/css/page-sj-qa-login.css";
import { getUser, removeUser } from "@/utils/auth";
import userApi from "@/api/user";

export default {
   mounted() {
      this.user = getUser();
      
    },
  data() {
    
      return {
        user: {},
        pojo:{}
      };
    },
    
  methods: {
    logout() {
      removeUser(); //清除登陆用户信息
      // this.$router.push("/")
      window.location.href="/"
    },
    
    
   
  }
};
</script>