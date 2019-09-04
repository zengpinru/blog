<template>
  <div id="app">
    <b-header/>
    <main><router-view/></main>
    <b-footer/>
  </div>
</template>

<script>
import BHeader from './components/Header'
import BFooter from './components/Footer'

export default {
  components: {
    BHeader,
    BFooter
  }
}
</script>

<style lang="less">
@import './assets/less/reset.less';
body {
  font: 14px "微软雅黑", Arial, Helvetica, sans-serif;
  background: url('./assets/images/bg.png') no-repeat top 60px center #96CEB4;
  background-attachment: fixed;
  color: #555;
}
main {
  padding-top: 46px;
}
article {
  box-sizing: border-box;
  width: 1200px;
  min-height: ~"calc(100vh - 85px)";
  padding: 15px 50px 50px 50px;
  margin: auto;
  background: rgba(255,255,255,.5);
  overflow: hidden;
}
@media screen and (max-width:1199px) {
  article {
    width: 100%;
    padding: 8px 0;
  }
}
@media screen and (max-width:767px ) {
  main {
    padding-top: 52px;
  }
}
</style>
