<template>
  <div class="tab-nav ">
    <div class="wrapper">
        <ul class="fl sui-nav nav-tabs navbar-dark" >
            <li class="active"><a href="#index" >首页</a></li>
            <li v-for="(item,index) in labelList" :key="index" ><a href="#" >{{item.labelname}}</a></li>           
        </ul>
        <span class="fr more"><a href="/label" target="_blank">更多</a></span>
        <div class="clearfix"></div>
    </div>
</div>
</template>
<script>
import label from '@/api/label'
export default {
    data(){
      return {labelList:[]}
    },
    mounted(){
      label.toplist().then((res) => {        
          this.labelList= res.data.data 
      })
    }
}
</script>

