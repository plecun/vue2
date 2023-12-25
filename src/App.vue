<template>
  <div id="app">
    <router-view v-wechat-title="title"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    }
  },
  watch: {
    $route(to, from){
      // 追加后缀只有这三个地方
      if(to.meta.customTitle || to.meta.title == "首页"){
         // 需要自定义标题
        this.title = '模版';
      }else {
        // 默认标题
        this.title = to.meta.title + '-模版';
      }
    },
    "$store.state.customTitle": {
      handler:function(to, from){
        // 需要自定义标题
        this.title = this.$store.state.customTitle + '-模版';
      }
    }
  },
  created() {
    this.$store.dispatch('getUserInformation');
    this.$store.dispatch('getUnreadNotice');
    // 把获取的token再存到localStorage
    localStorage.setItem('token', this.$cookies.get('token'));
  },
}
</script>

<style>
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 1200px;
  font-family: Microsoft YaHei;
}
</style>
