<!-- 无数据展示 -->
<template>
  <div class="noData">
    <div>
      <img src="../assets/images/noData.png" alt="">
      <div class="noDataTip">
        {{tip}}
      </div>
    </div>
    <el-button type="primary" @click="addClick">{{text}}</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    text: {
      type: String,
      default: '新增',
    },
    tip: {
      type: String,
      default: '暂无数据',
    },
  },
  //引入组件
  components: {},
  data() {
    return {}
  },
  //监听不在data中的变量变化
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    addClick() {
      this.$emit('addClick', true)
    },
  },
}
</script>

<style lang="scss" scoped>
/* @import url(); 引入css类 */
.noData {
  padding: 90px 0;
  text-align: center;
  img {
    width: 212px;
    height: 124px;
  }
  .noDataTip {
    margin-top: 15px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #333333;
  }
  .el-button {
    margin-top: 55px;
    margin-bottom: 40px;
    padding: 10px 152px;
    border-radius: 2px;
    height: 40px;
    font-size: 14px;
    font-family: PingFang SC;
    color: #ffffff;
  }
}
</style>