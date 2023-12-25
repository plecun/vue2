<template>
  <div class="mContent w1200">
    template2
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  components: {

  },
  watch: {
    
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    if (!localStorage.getItem('token')) {
      this.login = false;
    }else {
      this.getRoutingParameters();
      this.getList();
    }
  },
  //方法集合
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.mContent {
  
}
</style>