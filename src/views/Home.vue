<template>
  <article>
    <div class="banner"><b-swiper/></div>
    <div class="container">
      <div class="new-blog">
        <b-title title="最新文章"/>
        <ul>
          <b-blog/>
          <b-blog/>
          <b-blog/>
          <b-blog/>
        </ul>
      </div>
      <div class="r-box">
        <b-side-bar title="热点文章" class="side-bar"/>
        <b-side-bar title="推荐文章" class="sider-bar"/>
      </div>
    </div>
  </article>
</template>

<script>
import BSwiper from '../components/Swiper'
import BTitle from '../components/Title'
import BBlog from '../components/Blog'
import BSideBar from '../components/SideBar'
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
  },
  components: {
    BTitle,
    BBlog,
    BSideBar,
    BSwiper
  }
}
</script>

<style lang="less">
// 轮播图
.banner {
  height: 250px;
  background: #ccc;
}
// 内容盒子
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
// 最新文章
.new-blog {
  width: 68%;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  ul {
    padding: 10px;
  }
}
// 右侧侧边栏盒子
.r-box {
  width: 30%;
  border-radius: 5px;
  overflow: hidden;
  .side-bar {
    margin-bottom: 20px;
  }
}
@media screen and (max-width:767px ) {
  .container {
    flex-wrap: wrap;
  }
  .new-blog {
    width: 100%;
  }
  .r-box {
    width: 100%;
  }
}
</style>
