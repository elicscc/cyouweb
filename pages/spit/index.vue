<template>
  <div>
    <div class="wrapper tag-item">
      <div class="fl left-list">
        <div class="tc-data-list">
          <div class="tc-list" v-infinite-scroll="loadMore">
            <ul class="detail-list">
              <li class="qa-item" v-for="(item,index) in items" :key="index">
                <div class="fl record">
                  <div class="number">
                    <div class="border useful">
                      <p class="usenum" @click="thumbup(index)">
                        <a href="#" class="zan">
                          <i :class="'fa fa-thumbs-up '+item.zan" aria-hidden="true"></i>
                        </a>
                      </p>
                      <p class="zannum">{{item.thumbup}}</p>
                    </div>
                    <div class="border answer">
                      <a href="#" class="star">
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="info">
                  <p class="text">
                    <router-link :to="'/spit/item/'+item.id">{{item.content}}</router-link>
                  </p>
                  <div class="other">
                    <div class="fl date">
                      <span>{{item.publishtime}}</span>
                    </div>
                    <div class="fr remark">
                      <a href="#" data-toggle="modal" data-target="#shareModal" class="share">
                        <i class="fa fa-share-alt" aria-hidden="true"></i> 分享
                      </a>
                      <router-link :to="'/spit/item/'+item.id" data-toggle="modal" data-target="#remarkModal" class="comment">
                        <i class="fa fa-commenting" aria-hidden="true"></i> 回复
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <el-dialog title="评论" :visible.sync="dialogVisible" width="40%">
                  <div
                    class="quill-editor"
                    :content="content"
                    @change="onEditorChange($event)"
                    v-quill:myQuillEditor="editorOption"
                  ></div>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
                </el-dialog>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div class="fl right-tag">
        <div class="block-btn">
          <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
          <button class="sui-btn btn-block btn-share"   @click="toSubmit">发吐槽</button>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-spit-index.css";
import spitApi from "@/api/spit";
import { getUser } from "@/utils/auth";
export default {
  data() {
    return {
      pageNo: 1,
      dialogVisible: false,
      content: "",
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            [{ size: ["small", false, "large"] }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"]
          ]
        }
      }
    };
  },
  asyncData() {
    return spitApi.search(1, 12, {}).then(res => {
      return { items: res.data.data.rows };
    });
  },
  methods: {
    loadMore() {
      this.pageNo++;
      spitApi.search(this.pageNo, 12, {}).then(res => {
        this.items = this.items.concat(res.data.data.rows);
      });
    },
    onEditorChange({ editor, html, text }) {
      console.log("editor change!", editor, html, text);
      this.content = html;
    },
    thumbup(index) {
      let msg;
      if (getUser().name === undefined) {
        msg = "登录后才可以点赞 ";
      }

      if (this.items[index].zan === "color") {
        msg = "已经点过赞了 ";
      }
      if (msg) {
        this.$message({
          message: msg,
          type: "warning"
        });
        return;
      }
      spitApi.thumbup(this.items[index].id).then(res => {
        if (res.data.flag) {
          this.items[index].zan = "color";
          this.items[index].thumbup += 1;
        }
      });
    },
    toSubmit(){
      if (getUser().name === undefined) {
         this.$message({
          message:  "登录后才可操作 ",
          type: "warning"
         })
         return
      }
      this.$router.push("/spit/submit")
      // location.href="/spit/submit"

    }
  }
};
</script>

