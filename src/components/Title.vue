<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
h2.title {
  height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid #e5e5e5;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  background-color: #349075;
}
</style>
