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
      <h2 :class="{ 'open': open }" @click="handleSwitchOpen"><span class="nav-icon"></span></h2>
      <ul v-show="showMenu">
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
  data () {
    return {
      open: '',
      showMenu: false
    }
  },
  methods: {
    handleSwitchOpen () {
      this.open = this.open ? '' : 'open'
      if (this.open === 'open') {
        this.showMenu = true
      } else {
        this.showMenu = false
      }
    }
  }
}
</script>

<style lang="less">
header {
  position: fixed;
  top: 0;
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
    background: url('../assets/images/logo.png') no-repeat left 10px top 10px;
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
  overflow: hidden;
  h2 {
    float: right;
    height: 52px;
    padding-left: 10px;
    line-height: 52px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
  ul {
    padding-top: 52px;
    padding: 52px 0 30px 0;
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
    vertical-align: middle;
    background-color: #FFFFFF;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
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
    background: rgba(1, 1, 1, 0); /* 使用背景色隐藏中间的红线 */
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
  .pc-nav {
    ul {
      width: 100%;
    }
  }
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
