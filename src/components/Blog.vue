<template>
  <li class="blog-item">
    <h3 class="blog-title">
      <a href target="_blank">个人博客</a>
      <a href target="_blank">帝国cms 首页或者列表无图，不使用默认图片的方法.帝国cms 首页或者列表无图，不使用默认图片的方法</a>
    </h3>
    <div class="blog-info">
      <a href class="blog-pic"><img src="../assets/images/t01.jpg" /></a>
      <p>帝国cms列表页图文展示，或者首页图文展示，如果使用全图和文字，编辑起来比较麻烦，因为每一篇文章，你都得花时间去配图，所以，可有使用以下方法来实现。</p>
    </div>
    <div class="autor">
      <span class="time">2018-03-26</span>
      <span class="viewnum">浏览(<span>1429</span>)</span>
      <a href class="more">阅读原文>></a>
    </div>
    <div class="line"></div>
  </li>
</template>

<style lang="less">
.blog-item {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.blog-title {
  display: flex;
  margin-bottom: 10px;
  a:nth-child(1) {
    position: relative;
    flex: 0 1 auto;
    padding: 2px 5px;
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
    background: #299982;
    white-space: nowrap;
    &::after {
      content: '';
      position: absolute;
      top: 6px;
      right: -12px;
      width: 0px;
      height: 0px;
      padding: 0;
      margin: 0;
      border: 6px solid transparent;
      border-left: 6px solid #299982;
    }
  }
  a:nth-child(2) {
    flex: 1 1 auto;
    margin-left: 15px;
    color: #555;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.blog-info {
  margin-bottom: 15px;
  overflow: hidden;
  a {
    float: left;
    width: 30%;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  p {
    line-height: 24px;
    color: #888;
  }
}
.autor {
  display: flex;
  line-height: 12px;
  margin-bottom: 10px;
  .time {
    flex: 0 1 auto;
    padding: 0 15px;
    font-size: 12px;
    color: #838383;
    background: url('../assets/images/posttime.gif') no-repeat left center;
  }
  .viewnum {
    flex: 1 1 auto;
    padding-left: 18px;
    font-size: 12px;
    color: #838383;
    background: url('../assets/images/newsbg04.png') no-repeat left center;
    span {
      color: #299982;
    }
  }
  .more {
    flex: 0 1 auto;
    color: #096;
  }
}
.line {
  width: 0;
  height: 2px;
  background: #349075;
  transition: all 5s ease;
}
.blog-item:hover .line {
  width: 100%;
}
</style>
