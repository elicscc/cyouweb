<template>
  <div class="wrapper all-tags"> 
   <div class="tags-head"> 
    <h2 class="tag-title">标签</h2> 
    <p class="tag-second">标签是最有效的内容组织形式，正确的使用标签能更快的发现和解决你的问题。</p> 
   </div> 
   <div class="alltags-card" > 
    <ul class="yui3-g tags-list" style="display:block;"> 
     <li class="tag-item yui3-u-1-4" v-for="(item,index) in list" :key="index"> 
      <div class="inner"> 
       <h5 class="title"><a href="qa-tagDetail.html" target="_blank">{{item.labelname}}</a></h5> 
        <div class="guanzhu"> 
          <span v-if="item.isfans===false"><a class="sui-btn btn-guanzhu" @click="addul(item.id,index)">加关注</a> </span>
          <span v-if="item.isfans===true">已关注</span>
        <span class="guannum"><i class="num">{{item.fans}}</i>人关注</span> 
       </div> 
      </div>
     </li>      
    </ul> 
   </div> 
  </div> 
</template>
<script>
import '~/assets/css/page-sj-qa-allTag.css'
import labelApi from '@/api/label'
export default {
    asyncData ({ params, error }) {
        return labelApi.list().then((res) => {        
            return { list: res.data.data }
        })      
    },
    methods:{
        addul(id,index){
            this.list[index].isfans=true
            labelApi.addul(id).then( (res) => {
                if(res.data.flag){
                    this.list[index].fans++                    
                }
            })
        }
    }
}
</script>
