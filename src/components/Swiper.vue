<template>
  <swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper">
    <swiper-slide>
      <img src="../assets/images/banner01.jpg"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/banner02.jpg"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/banner02.jpg"/>
    </swiper-slide>
    <!-- 常见的小圆点 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
if (typeof window !== 'undefined') {
  const { swiper, swiperSlide } = require('vue-awesome-swiper')
} else {
  
}
require('swiper/dist/css/swiper.css')
export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        initialSlide: 0,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 800,
        direction: 'horizontal',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less">
.swiper-wrap {
  height: 100%;
}
</style>
