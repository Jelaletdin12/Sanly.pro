<script setup lang="ts">
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
</script>

<template>
  <main style="overflow: hidden;">
    <Header />
    <div> 
      <div class="tn-atom " style="padding-top: 127px;">
        <img class="tn-atom__img" src="../assets/tild3362-3865-4564-b933-326335386436__group_31.png" alt="">
      </div>
      <div style="text-align: center;" class="title-holder">
        <div class="title">Подборка корпоративных сайтов</div>
        <div class="title_text">В этом портфолио мы решили не расписывать каждую работу, ведь никто лучше <br> не расскажет о крутых результатах, как ссылки на сайты наших клиентов.</div>
      </div>
      <div class="tn-atoms" style="display: flex; justify-content: center; padding-top: 50px;">
        <div class="img_holder"><img class="tn-atom__img" src="../assets/img/3.jpg" alt=""></div>
        <div class="title">DASHBOARD</div>
        <div class="title_text">Инструмент для анализа ключевых показателей бизнеса</div>
        <div style="padding-top: 40px;"><a class="links" href="">https://dashboard-24.com/</a></div>
      </div>
    </div>

    <div> 
      <div class="tn-atoms" style="display: flex; justify-content: center; padding-top: 50px;">
        <div class="img_holder"><img class="tn-atom__img" src="../assets/img/6.jpg" alt=""></div>
        <div class="title">DASHBOARD</div>
        <div class="title_text">Инструмент для анализа ключевых показателей бизнеса</div>
        <div style="padding-top: 40px;"><a class="links" style="" href="">https://dashboard-24.com/</a></div>
      </div>
    </div>

    <div  > 
      <div class="tn-atoms" style="display: flex; justify-content: center; padding-top: 50px; padding-bottom: 150px;">
        <div class="img_holder"><img class="tn-atom__img" src="../assets/img/4.jpg" alt=""></div>
        <div class="title">DASHBOARD</div>
        <div class="title_text">Инструмент для анализа ключевых показателей бизнеса</div>
        <div style="padding-top: 40px;"><a class="links" href="">https://dashboard-24.com/</a></div>
      </div>
    </div>
    
    <div class="main-form--wrapper">
      <div class="big-title ">Понравились проекты?</div>
      <div class="big-title__subtitle big-title__subtitle--white">Крутые результаты начинаются с заполнения этой формы</div>
    </div>

  <Footer />
  </main>
 
</template>


<style scoped>
 .tn-atom {
    background-position: center center;
    border-color: transparent;
    border-style: solid;
}
.tn-atom__img {
    width: 100%;
    display: block;
}
.title{
    color: rgb(0, 0, 0);
    font-size: 28px;
    line-height: 1.55;
    transition-delay: 0s;
    padding-bottom: 20px;
    font-weight: 700;
}
.title_text{
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 400;
    font-family: Roboto;
    transition-delay: 0.3s;
}
.tn-atoms {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.main-form--wrapper {
    background: #000;
    padding: 100px 9999px;
    margin: 0 -9999px;
}
.big-title {
    display: block;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 54px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 1px;
    margin: 0 0 40px;
}
.big-title__subtitle {
    font-size: 16px;
    color: #666;
    max-width: 500px;
    margin: 0 auto 60px;
    display: block;
    text-align: center;
}
.big-title__subtitle--white {
    color: #fff;
}

.links{
  text-decoration: none;
  color: #56a0fa;
}
.img_holder{
  width: 940px ;
}

@media screen and (max-width: 480px) {
  .title-holder{
    padding: 0 15px;
  }
  .tn-atoms{
    width: auto;
  }
  .img_holder{
    width: 340px;
  }
  .tn-atom{
    padding-top: 69px !important;
  }
 
}
</style>
