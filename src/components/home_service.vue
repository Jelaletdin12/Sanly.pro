<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
 
<div id="service" style="padding-top: 120px;">

</div>
<div class="home-services" >
<div class="home-services__category" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"> 
  <div class="home-services__category-title"> {{ $t('DEVELOPMENT') }}
    <div class="home-services__line" style="width: 285.275px; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(0, 0, 0);"></div> 
</div> 
<ul class="home-services__list">
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link" >{{ $t('Website creation for business') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link" >{{ $t('Order a turnkey website') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link" >{{ $t('Online store development') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link" >{{ $t('Landing Page Development') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link" >{{ $t('Mobile applications') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link" >{{ $t('Photo and video content') }}</a></li>  
</ul>
</div>

<div class="home-services__category margin" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"> 
  <div class="home-services__category-title"> {{ $t('DESIGN') }}
    <div class="home-services__line" style="width: 285.275px; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(0, 0, 0);"></div> 
</div> 
<ul class="home-services__list">
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link">{{ $t('Website design') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link">{{ $t('Logo development') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link">{{ $t('Form style') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link">{{ $t('Usability audit') }}</a></li> 
</ul>
</div>

<div class="home-services__category" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"> 
  <div class="home-services__category-title"> SSL
    <div class="home-services__line" style="width: 285.275px; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(0, 0, 0);"></div> 
</div> 
<ul class="home-services__list">
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link">{{ $t('Secure connection') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link">{{ $t('Search engine ranking') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link">{{ $t('Increasing customer trust') }}</a></li> 
  <li class="home-services__item" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"><a class="home-services__link">{{ $t('Easy to use') }}</a></li> 
</ul>
</div>

</div>


 
</template>

<style scoped>
.home-services {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    /* margin-bottom: 200px; */
}
.home-services__line {
    margin-top: 15px;
    width: 100%;
    height: 1px;
    background: #000;
}
.home-services__category-title {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 40px;
    letter-spacing: 1px;
}
.home-services__list {
    font-size: 18px;
    line-height: 1;
    letter-spacing: 1px;
}
.home-services__link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    position: relative;
}
.home-services__item {
  list-style-type: none;
    margin-bottom: 15px;
}

.home-services__item::before {
  content: "";

  position: absolute;
  top: 50%;
  left: -20px; /* Adjust the distance of the square from the text */
  transform: translateY(-50%);
  width: 0; /* Initially set width to 0 */
  height: 0; /* Initially set height to 0 */
  background-color: transparent;
  transition: width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out;
  border-radius: 10px;
}

.home-services__item:hover::before {
  width: 10px; /* Adjust the width when hovering */
  height: 10px; /* Adjust the height when hovering */
  background-color: #000; /* Adjust the background color when hovering */
  border-radius: 10px;
}

@media screen and (max-width: 965px) {
  .home-services{
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 800px) {
   .home-services{
    flex-wrap: wrap;
    justify-content: space-evenly;
   }

}
@media screen and (max-width:622px) {
  .home-services__category{
    width: 338px;
  }  
  /* .margin{
    margin-left: -37px;
  } */
}

@media screen and (max-width: 480px) {
  .home-services{
    padding: 0 15px;
    display: block;
  }
}
</style>
