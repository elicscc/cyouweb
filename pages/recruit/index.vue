<template>

<div>
   <!--两列布局-->
    <div class="wrapper tag-item">
        <div class="fl left-list">
            <div class="search-job">
    <div class="search">
        <form class="sui-form">
            <input type="text" placeholder="找工作" class="input-job" >
       
        <div class="input-area">
            <div class="city" data-toggle="modal" data-target="#myModal" data-keyboard="false">北京</div>
        </div>
        <div class="btn">
            <span class="sui-btn btn-search"><i class=" fa fa-search"></i> 搜索</span>
        </div>
         </form>
    </div> 

    <div class="hot">
        <dl>
            <dt>热门搜索：</dt>
            <dd>Java</dd>
            <dd>Python</dd>
            <dd>Ruby</dd>
            <dd>JavaScript</dd>
            <dd>C++</dd>
            <dd>前端</dd>
            <dd>大数据</dd>
            <dd>移动端</dd>
            <dd>运维</dd>
        </dl>
        <dl>
            <dt>热门城市：</dt>
            <dd>北京</dd>
             <!-- <dd><a href="~/assets/recruit-area.html" target="_blank">北京</a></dd> -->
            <dd>上海</dd>
            <dd>深圳</dd>
            <dd>广州</dd>
            <dd>杭州</dd>
            <dd>长沙</dd>
        </dl>
    </div>


    <!-- Modal-->
    <div id="myModal" tabindex="-1" role="dialog" data-hasfoot="false" class="sui-modal hide fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" data-dismiss="modal" aria-hidden="true" class="sui-close">×</button>
                    <h4 id="myModalLabel" class="modal-title">选择地区<span class="more">(最多选择5个城市)</span></h4>
                </div>
                <div class="modal-body">
                    <div id="wrap">
                        这是内容
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" data-ok="modal" class="sui-btn btn-primary btn-large">确定</button>
                    <button type="button" data-dismiss="modal" class="sui-btn btn-default btn-large">取消</button>
                </div>
            </div>
        </div>
    </div>
</div>
            <div class="job-position">
    <div class="job-type reco-job">
        <div class="head">
            <h4 class="title pull-left">推荐职位</h4>
            <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
            <div class="clearfix"></div>
        </div>
        <ul class="yui3-g job-list" style="display:block;">
            <li v-for="(item,index) in recommendList.data" :key="index" class="yui3-u-1-2 job-item">
                <p><span  class="name">
                    <!-- <a href="~/assets/recruit-detail.html" target="_blank">{{item.jobname}}</a> -->
                    <nuxt-link :to="'/recruit/item/'+item.id">{{item.jobname}}</nuxt-link>
                    </span><span class="city"><i class="fa fa-map-marker"></i> 北京</span></p>
                <p class="need"><span class="money">{{item.salary}}</span>/经验{{item.condition}}/{{item.education}}/{{item.type}}</p>
                <p><span class="company">百度 · 6天前</span></p>
            </li>            
        </ul>
    </div>

    <div class="job-type latest-job">
        <div class="head">
            <h4 class="title pull-left">最新职位</h4>
            <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
            <div class="clearfix"></div>
        </div>
        <ul class="yui3-g job-list" style="display:block;">
           
            <li v-for="(item,index) in newList.data" :key="index" class="yui3-u-1-2 job-item">
                <p><span  class="name"> 
                    <!-- <a href="~/assets/recruit-jobDetail.html" target="_blank">{{item.jobname}}</a> -->
                    <nuxt-link :to="'/recruit/item/'+item.id">{{item.jobname}}</nuxt-link>
                    </span><span class="city"><i class="fa fa-map-marker"></i> 北京</span></p>
                <p class="need"><span class="money">{{item.salary}}</span>/经验{{item.condition}}/{{item.education}}/{{item.type}}</p>
                <p><span class="company">百度 · 6天前</span></p>
            </li>
            
           
        </ul>
    </div>
</div>
        </div>
        <div class="fl right-tag">
            <div class="hot-company">
    <p class="mail">提交收录请发邮件至~~@qq.com</p>
    <div class="company">
        <div class="head">
            <h4>热门企业</h4>
        </div>
        <ul class="yui3-g company" style="display:block;">
            <li v-for="(item,index) in hotList.data" :key="index" class="yui3-u-1-3 company-item">
                <p><img :src="item.logo" alt=""></p>
                <p class="title">{{item.name}}</p>
                <p class="position"><a href="~/assets/recruit-company.html" target="_blank">{{item.jobcount}}个职位</a></p>
            </li>            
        </ul>
    </div>
</div> 
        </div>
        <div class="clearfix"></div>
    </div>
</div>
</template>
<script>
import '~/assets/css/page-sj-recruit-index.css'
import axios from 'axios'
import recruit from '@/api/recruit'
import enterprise from '@/api/enterprise'
import { mapState } from 'vuex'
export default {
  fetch ({ store, params }) {
        store.commit("active","recruit")
  },
  computed: mapState([
        'activeMenu'
  ]),
  asyncData ({ params, error }) {
       return  axios.all([recruit.recommend(),recruit.newlist(),enterprise.hotlist()]).then(
          axios.spread(function(recommendList,newList,hotList){
              return {recommendList: recommendList.data,
                      newList: newList.data,
                      hotList: hotList.data};
          })
       )
    }
}
</script>
