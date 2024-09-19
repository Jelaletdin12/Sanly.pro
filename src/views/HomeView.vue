<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from "../components/header.vue";
import Service from "../components/home_service.vue";
import Portfolio from "../components/portfolio.vue";
import Footer from "../components/footer.vue";
import Video from "../components/video.vue";
import Team from "../components/team.vue";
import success from "../components/success.vue"
import hello from "../components/hello.vue"
import open from "../components/opening.vue"




const popupVisible = ref(false);

const openPopup = () => {
  popupVisible.value = true;
};

const closePopup = (e) => {
  popupVisible.value = false;
};


const isPhoneIcon = ref(true);
const animationInterval = ref(null);


const toggleIcon = () => {
  isPhoneIcon.value = !isPhoneIcon.value;
};

onMounted(() => {
  animationInterval.value = setInterval(toggleIcon, 7000); // Animate every 3 seconds
});



</script>

<template>
  <main class="main">
    <Header />
    <div id="wrapper">
      <div class="page-content">
        <open />
        <!-- <hello /> -->
        <Video />
        <Service />
        <Portfolio />
        
        <Team />
        <div @click="openPopup"  class="cd-popup-trigger">
          <!-- <svg v-if="isPhoneIcon" id="phone-icon" width = "45" height="45" fill="#fff" style="margin-top: 27px; margin-left: 26px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> -->
          <img  v-if="isPhoneIcon" id="phone-icon" style="width: 45px; height: 45px; margin-top: 18px; margin-left: 17px; " src="../components/icons/white_phone.gif" alt="">
<svg v-else id="mail-icon" version="1.1" width="45" height="45"  style="fill:azure; margin-top: 18px; margin-left: 17px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M30.9,33.7L0,13v36c0,2.2,1.8,4,4,4h56c2.2,0,4-1.8,4-4V13L33.1,33.7C32.4,34.1,31.6,34.1,30.9,33.7z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M60.4,10.6H3.6l27.3,18.3c0.7,0.5,1.6,0.5,2.2,0L60.4,10.6z"/>
		</g>
	</g>
</g>
</svg>

        </div>
        <!-- cd-popup -->
        <div :class="{ 'cd-popup': true, 'is-visible': popupVisible }" role="alert">
          <div class="cd-popup-container">
            <h1 style="padding-top: 50px;">Sanly.pro</h1>
            <h2>+99361097651</h2>
            <a href="tel:+99361097651"><img style="width: 32px; height: 32px;" src="../components/icons/system-solid-58-call-phone.gif" alt=""></a>
            <div  class="cd-popup-close" @click="closePopup">
              <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
          </div>
          <!-- cd-popup-container -->
        </div>
        <Footer />
        
      </div>
    </div>
  </main>
</template>

<style scoped>
#phone-icon, #mail-icon {
  animation: rotateAnimation 6s 1;
}

@keyframes rotateAnimation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}


#wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 60px;
}
.page-content {
  max-width: 1200px;
  margin: 0 auto;
}


.cd-popup-trigger {
  z-index: 1;
  position: fixed;
  bottom: 40px;
  border: 1px solid #02a352;
  border-radius: 75px;
  width: 80px;
  height: 80px;
  background-color: #02a352;
  left: 15px;
  
}
@media only screen and (min-width: 1170px) {
  .cd-popup-trigger {
    margin: 6em auto;
  }
}

.cd-popup {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(94, 110, 141, 0.9);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s;
  -moz-transition: opacity 0.3s 0s, visibility 0s 0.3s;
  transition: opacity 0.3s 0s, visibility 0s 0.3s;
}
.cd-popup.is-visible {
  z-index: 2;
  opacity: 1;
  visibility: visible;
  -webkit-transition: opacity 0.3s 0s, visibility 0s 0s;
  -moz-transition: opacity 0.3s 0s, visibility 0s 0s;
  transition: opacity 0.3s 0s, visibility 0s 0s;
}

.cd-popup-container {
  height: 250px;
  margin-top: 25%;
  position: relative;
  width: 90%;
  max-width: 600px;
  margin: 4em auto;
  background: #FFF;
  border-radius: .25em .25em .4em .4em;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  -webkit-transform: translateY(-40px);
  -moz-transform: translateY(-40px);
  -ms-transform: translateY(-40px);
  -o-transform: translateY(-40px);
  transform: translateY(-40px);
  /* Force Hardware Acceleration in WebKit */
  -webkit-backface-visibility: hidden;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.cd-popup-container p {
  padding: 3em 1em;
}
.cd-popup-container .cd-buttons:after {
  content: "";
  display: table;
  clear: both;
}

.cd-popup-container .cd-popup-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
}

.is-visible .cd-popup-container {
  margin-top: 20%;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}


@media screen and (max-width: 1169px) {
  .cd-popup-trigger{
    bottom: 100px;
  }
}

@media screen and (max-width: 480px){
  .cd-popup-trigger{
    display: none;
  }
  
}
</style>