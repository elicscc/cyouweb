<template>
  <div>
    活动编辑
    活动名称：<input v-model="pojo.name" placeholder="活动名称">
    <button v-on:click="save()">保存</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      pojo: {}
    };
  },
  methods: {
    save: function() {
      axios
        .post("http://127.0.0.1:9001/gathering/", this.pojo)
        .then(res => {
          alert("ok!");
        });
    }
  }
};
</script>
