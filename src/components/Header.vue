<template>
  <header>
    <nav class="pc-nav">
      <ul>
        <li><a href="index.html">首页</a></li>
        <li><a href="essay.html">随笔</a></li>
        <li><a href="source.html">资源导航</a></li>
        <li><a href="feel.html">碎言碎语</a></li>
        <li><a href="life.html">慢生活</a></li>
        <li><a href="about.html">关于</a></li>
        <li><a href="message.html">留言</a></li>
      </ul>
    </nav>
    <nav class="m-nav">
      <h2><span class="nav-icon"></span></h2>
      <ul>
        <li><a href="index.html">首页</a></li>
        <li><a href="essay.html">随笔</a></li>
        <li><a href="source.html">资源导航</a></li>
        <li><a href="feel.html">碎言碎语</a></li>
        <li><a href="life.html">慢生活</a></li>
        <li><a href="about.html">关于</a></li>
        <li><a href="message.html">留言</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="less">
header {
  position: fixed;
  width: 100%;
  background: #299982;
  box-shadow: 0px 1px 5px #165246;
  z-index: 999;
  overflow: hidden;
}

.pc-nav {
  width: 100%;
  overflow: hidden;
  ul {
    width: 1200px;
    height: 46px;
    margin: auto;
    line-height: 46px;
    text-align: right;
    color: #999;
    background: url('../assets/images/logo.png') no-repeat left 10px top 13px;
    li {
      display: inline;
      font-size: 16px;
      padding: 0px 20px;
      a {
        color: #fff;
      }
    }
  }
}

.m-nav {
  display: none;
  width: 100%;
  h2 {
    width: 100%;
    height: 52px;
    padding-left: 10px;
    line-height: 52px;
    text-align: right;
    font-size: 18px;
    color: #fff;
    &.open {
      background: rgba(1, 1, 1, 0.8);
    }
  }
  ul {
    display: none;
    padding-bottom: 40px;
    background: rgba(1, 1, 1, 0.8);
    li {
      display: block;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      overflow: hidden;
      a {
        color: #fff
      }
    }
  }
  .nav-icon {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 5px;
    margin-right: 15px;
    background-color: #FFFFFF;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 5px;
      background: #FFFFFF;
      transition: all 300ms ease;
    }
    &::before {
      margin-top: -10px;
    }
    &::after {
      margin-top: 10px;
    }
  }
  h2.open .nav-icon {
    background: rgba(1, 1, 1, 0.8); /* 使用背景色隐藏中间的红线 */
    &::before {
      margin-top: 0;
      transform: rotate(45deg);
    }
    &::after {
      margin-top: 0;
      transform: rotate(-45deg);
    }
  }
}
@media screen and (min-width: 768px) and (max-width:1199px) {
}
@media screen and (max-width:767px ) {
  .pc-nav {
    display: none;
  }
  .m-nav {
    display: block;
    z-index: 999;
    background: url('../assets/images/logo.png') no-repeat left 10px top 13px #299982;
  }
}
</style>
