<script>

</script>

<template>
  <RouterView />
  <div class="video-home">
    <div class="video-lines">
      <video
        src="/8JKTKjNdyEGWoFQCnEFetCdZIvg.mp4"
        width="100%"
        loop
        muted
        autoplay
        type="video/mp4"
      ></video>
    </div>
    
</div>

<!-- <div class="none">

  <div id="canvas" style="position: relative; display: flex; flex-direction: column; align-items: center;" >
    <div class="what-we-do"> 
      <div class="what-we-do__title"> 
        <span style="opacity: 1; transform: translate3d(0px, 0px, 0px); display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/></svg>
          sanly.pro 
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
          <div></div>
          {{ $t('WE MAKE WEB ACCESSIBLE') }}</span> 
          
        </div> 
        <div class="what-we-do__text" data-text="Превращаем технологии и дизайн в решение бизнес задач"> 
          <span style="opacity: 1; transform: translate3d(0px, 0px, 0px);">{{ $t('WE TURN TECHNOLOGIES AND DESIGN INTO A SOLUTION FOR BUSINESS NEEDS') }}</span>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; padding-top: 15px;"> <a href="#service"><img src="./icons/icons8-down.gif" alt=""></a></div>
  </div> -->
<!-- <div class="none">
  <wave-dots> </wave-dots>
</div> -->


</template>

<style scoped>
.video-lines {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.video-home {
  /* height: 580px; */
  overflow: hidden;
  position: relative;
  color: #fff;
  /* margin-bottom: 175px; */
  margin-top: 30px;
}
#canvas{
    position: relative;
}



@media screen and (max-width: 5200px) and (min-width: 480px) {

    }


@media screen and (max-width: 610px) {
.video-home{
  display: none;
}
    }

</style>
