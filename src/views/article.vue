<template>
  <article>
    <div class="article">
      <h1 class="article-title">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</h1>
      <div class="article-info">
        <span class="author">zengpinru</span>
        <span class="time">2018-03-18</span>
        <span class="view-num">共<b>309</b>人围观</span>
      </div>
      <div class="article-des"><strong>简介</strong>曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的指责是“垃圾”作品。</div>
      <div class="markdown-body">{{ article.html }}</div>
    </div>
  </article>
</template>

<script>
export default {
  asyncData ({ store, route }) {
    const id = route.params.id
    store.dispatch('getArticleById', id)
  },
  data () {
    return {
      article: this.$store.state.article
    }
  }
}
</script>

<style lang="less">
@import '../assets/less/markdown.less';
.article {
  padding: 0 15px 30px 15px;
  background: #fff;
  &-title {
    padding: 20px 0;
    font-size: 2em;
    font-weight: 600;
    color: #333;
  }
  &-info {
    color: #999;
    .author {
      padding-left: 20px;
      margin-right: 20px;
      background: url('../assets/images/author.png') no-repeat left center;
    }
    .time {
      padding-left: 20px;
      margin-right: 20px;
      background: url('../assets/images/date.png') no-repeat left center;
    }
    .view-num {
      b {
        padding: 0 5px;
        color: #333;
      }
    }
  }
  &-des {
    padding: 10px;
    margin: 20px auto 15px auto;
    border: 1px solid #F3F3F3;
    line-height: 23px;
    color: #888888;
    background: none repeat 0 0 #F6F6F6;
    strong {
      padding-right: 8px;
      font-size: 13px;
      font-weight: 400;
      color: #38485A;
    }
  }
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  margin: 0 auto;
}
</style>
