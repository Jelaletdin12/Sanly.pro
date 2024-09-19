<template>
  <div style="width: 1800px;">
    <swiper
      :slides-per-view="5"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :loop = "true"
      :navigation= "true"
      :modules="modules"
  
      
      
      
    >
      <!-- Your carousel slides go here -->
      <swiper-slide v-for="(image, index) in images" :key="index" class="swiper-slide">
        <img style="max-width: 317px; max-height: 420px; filter: grayscale(100%);" :src="image" alt="">
        <div class="info"> 
          <span class="name">Рустам</span> 
          <span class="position">Арт-директор</span> 
        </div>
      </swiper-slide>

      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
      
      
      <div class="wtf">
      </div>
      <div style="display: flex; justify-content: center;"> 
        <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 -960 960 960" width="38"><path d="M480-80q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v240q0 116-82 198T480-80Zm40-520h160q0-72-45.5-127T520-796v196Zm-240 0h160v-196q-69 14-114.5 69T280-600Zm200 440q83 0 141.5-58.5T680-360v-160H280v160q0 83 58.5 141.5T480-160Zm0-360Zm40-80Zm-80 0Zm40 80Z"/></svg>
      </div>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { useSwiper } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper navigation styles

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log('slide change');
    };

    const swiper = useSwiper();

    const images = [
      '/12.png',
      '/13.png',
      '/20.png',
      '/28.png',
      '/35.png',
      '/41.png',
      '/2.png',
      '/7.png',
    ];

    return {
      onSwiper,
      onSlideChange,
      swiper,
      images,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style >
.swiper{
  z-index: 0;
}

.swiper-button-prev, .swiper-button-next {
    filter: grayscale(1);
    position: absolute;
    top: var(--swiper-navigation-top-offset, 96%) !important;
    width: calc(var(--swiper-navigation-size) / 44* 27);
    /* height: var(--swiper-navigation-size); */
    /* margin-top: calc(0px -(var(--swiper-navigation-size) / 2)); */
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
    justify-content: center;
    margin-left: 47%;
    margin-right: 47%;
}
.swiper-button-prev:after, .swiper-button-next:after {
    font-family: swiper-icons;
    font-size: 32px;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
}
/* .swiper-slide{
  width: 336px;
  height: 350px;
} */
.wtf{
  padding-top: 35px;
}

.info{
  position: absolute;
    top: -20px;
    left: 5px;
    line-height: 25px;
    text-align: left;
    display: none;
}
.name{
  display: block;
    font-size: 16px;
    line-height: 18px;
    color: #000;
    text-transform: uppercase;
    margin: 0 0 4px;
    font-weight: 500;
}
 .info::after{
  content: '';
    position: absolute;
    top: 100px;
    left: 0;
    background: url(../image/slide-decor.png) no-repeat;
    width: 135px;
    height: 192px;
 }
</style>
