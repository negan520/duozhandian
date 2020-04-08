<template>
  <div id="app">
     <div>基本页面模板</div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    }
  }
</script>

<style lang="less" scoped>
  @import './style/globle.less';
  @import './style/base.less';
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
