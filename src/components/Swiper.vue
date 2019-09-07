<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/images/banner01.jpg"></div>
      <div class="swiper-slide"><img src="../assets/images/banner02.jpg"></div>
      <div class="swiper-slide"><img src="../assets/images/banner03.jpg"></div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  .swiper-wrapper,
  .swiper-slide,
  img {
    width: 100%;
    vertical-align: top;
  }
}
@media screen and (max-width:767px ) {
  .swiper-container {
    .swiper-button-prev,
    .swiper-button-next {
      background-size: 15px 44px;
    }
  }
}
</style>
