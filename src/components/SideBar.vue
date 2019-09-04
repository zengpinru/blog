<template>
  <aside>
    <b-title :title="title"/>
    <ul>
      <li>
        <h4><a href target="_blank">【活动作品】柠檬绿兔小白个人博客模板30柠檬绿兔小白个人博客模板30</a></h4>
        <p><b><img src="../assets/images/t01.jpg"/></b>展示的是首页html，博客页面布局格式简单，没有复杂的背景，色彩局部点缀，动态的幻灯片展示，切换卡，标...</p>
      </li>
      <li>
        <h4><a href target="_blank">【活动作品】柠檬绿兔小白个人博客模板30柠檬绿兔小白个人博客模板30</a></h4>
        <p><b><img src="../assets/images/t01.jpg"/></b>展示的是首页html，博客页面布局格式简单，没有复杂的背景，色彩局部点缀，动态的幻灯片展示，切换卡，标...</p>
      </li>
      <li>
        <h4><a href target="_blank">【活动作品】柠檬绿兔小白个人博客模板30柠檬绿兔小白个人博客模板30</a></h4>
        <p><b><img src="../assets/images/t01.jpg"/></b>展示的是首页html，博客页面布局格式简单，没有复杂的背景，色彩局部点缀，动态的幻灯片展示，切换卡，标...</p>
      </li>
    </ul>
  </aside>
</template>

<script>
import BTitle from './Title'
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    BTitle
  }
}
</script>

<style lang="less">
aside {
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  ul {
    padding: 10px;
    li:not(:first-child) {
      padding-top: 15px;
    }
    li {
      padding-bottom: 10px;
      border-bottom: 1px solid #eaeaea;
      h4 a {
        display: block;
        height: 30px;
        color: #555;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      p {
        line-height: 20px;
        color: #888;
        b {
          float: left;
          width: 45%;
          margin-right: 10px;
          overflow: hidden;
        }
        img {
          width: 100%;
          border-radius: 3px;
          transition: all .5s linear;
        }
        &:hover {
          color: #666;
          img {
            transform: scale(1.1, 1)
          }
        }
      }
    }
  }
}
</style>
