<template>
  <div class="home">home</div>
</template>

<script>
export default {
  asyncData ({ store, route }) {
    //
  },
  metaInfo () {
    const title = '首页'
    return {
      title,
      meta: [{ content: title }]
    }
  }
}
</script>
