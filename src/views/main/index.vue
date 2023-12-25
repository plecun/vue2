<template>
  <div class="mMain">
    template1
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  components: { },
  //监听不在data中的变量变化
  computed: {

  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {

  },
}
</script>

<style lang="scss">
body {
  font-size: 12px;
  background-color: #f4f4f4;
  .w1200 {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    *zoom: 1;
  }
  .w100 {
    width: 100%;
    *zoom: 1;
  }
  .fl {
    float: left;
    *zoom: 1;
  }
  .fr {
    float: right;
    *zoom: 1;
  }
}
</style>