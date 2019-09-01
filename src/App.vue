<template>
  <div id="app">
    <b-header/>
    <router-view/>
  </div>
</template>

<script>
import BHeader from './components/Header'

export default {
  components: {
    BHeader
  }
}
</script>

<style lang="less">
@import './assets/less/reset.less';
</style>
