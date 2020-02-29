<template>
    <div></div>
</template>
<script>
import {getUrlParam} from '@/utils/param'
import weixin from '@/api/weixin'
import {setUser} from '@/utils/auth'
export default {
    //获取请求路径中携带的参数code
    mounted(){
      let code=getUrlParam('code')
      if(code!==null){//如果是微信登陆
        //根据code获取access_token
        weixin.getAccessToken(code).then( res=>{
          let access_token= res.data.access_token
          let openid= res.data.openid
          console.log('access_token:'+access_token+ 'openid:'+openid)
          weixin.getUserinfo(access_token,openid).then(res=>{
            let nickname= res.data.nickname
            let headimgurl= res.data.headimgurl
            setUser(access_token,nickname,headimgurl)
            this.$router.push("/")
          })
        })
      }
    }
}
</script>