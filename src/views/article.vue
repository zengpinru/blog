<template>
  <article>
    <div class="article">
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-info">
        <span class="author">{{ article.author }}</span>
        <span class="time">{{ time }}</span>
        <span class="view-num">共<b>{{ article.view_num }}</b>人围观</span>
      </div>
      <div class="article-des"><strong>简介</strong>{{ article.des }}</div>
      <div class="markdown-body" v-html="html"></div>
    </div>
  </article>
</template>

<script>
import config from '../config'
import { formatDate } from '../libs/util'
export default {
  async asyncData ({ store, route }) {
    try {
      const id = route.params.id
      await store.dispatch('getArticleById', id)
    } catch (err) {
      console.log(err.msg)
    }
  },
  metaInfo () {
    const title = '文章详情'
    return {
      title,
      meta: [{ content: title }]
    }
  },
  data () {
    return {
      article: this.$store.state.article
    }
  },
  computed: {
    html () {
      let patt = new RegExp('{config.IMG_BASE_URL}', 'g')
      return this.article.html.replace(patt, config.IMG_BASE_URL)
    },
    time () {
      return formatDate(this.article.update_time)
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
