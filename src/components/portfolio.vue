<script setup >
import axios from "axios"
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { toast } from 'vue3-toastify'
import success from './success.vue'
import wave_dots from '@/components/wave_dots.vue';



const successPopupVisible = ref(false);
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
const revealElements = ref(null);

onMounted(() => {
  filterPortfolio("all")
  gsap.utils.toArray(".revealUp").forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      markers: false,
      onEnter: () => {
        gsap.fromTo(
          elem,
          { x: -100, autoAlpha: 0 },
          {
            duration: 1.25,
            x: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeave: () => {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      },
      onEnterBack: () => {
        gsap.fromTo(
          elem,
          { x: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            x: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeaveBack: () => {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      }
    });
  });
});
const activeCategory = ref(["all"]);
const filteredPortfolio = ref([]);
const portfolio = ref([
  {id:1,title:'online_store',category:'online_store', image:'/Ashgabatgiper.png', to:'https://ashgabat.market/'},
  {id:2,title:'Information Site',category:'information_sites', image:'/Kamilbilim.png', to:'https://kamilbilim.edu.tm/'},
  {id:3,title:'Information Site',category:'information_sites',image:'/kamilcargo.png', to:'https://kamilcargo.com/'},
  {id:4,title:'Site Protection',category:'',image:'/ssl.png', to:'https://ssl.sanly.pro/' },

]);


const filterPortfolio = (category)=>{
  activeCategory.value = category;
  if(category ==='all'){
    filteredPortfolio.value = [...portfolio.value];
  }else {
    filteredPortfolio.value = portfolio.value.filter(item => item.category === category);
  }
}

const formRef = ref(null);

const submitForm = async () => {
  try{

    const userName = formRef.value.querySelector('input[name="user_name"]').value;
    const userTelephone = formRef.value.querySelector('input[name="user_telephone"]').value;
    const userEmail = formRef.value.querySelector('input[name="user_email"]').value;
    const message = formRef.value.querySelector('textarea[name="message"]').value;

    const formData = {
      user_name: userName,
      user_telephone: userTelephone,
      user_email: userEmail,
      message: message,
    }
    

    await axios.post('http://127.0.0.1:8000/api/reviews', formData, {
      headers:{
        'Content-Type': 'application/json',
      }
    })
    successPopupVisible.value = true;
    console.log("popup");
    // toast.success('Email sent successfully!', { 
      
    //   position: 'top-center',
    //   timeout: 3000,
    // });

    console.log('Succes');
  } catch(error){
    console.log("wtf", error);
  }
  //Clear form data
    formRef.value.querySelector('input[name="user_name"]').value = '';
    formRef.value.querySelector('input[name="user_telephone"]').value = '';
    formRef.value.querySelector('input[name="user_email"]').value = '';
    formRef.value.querySelector('textarea[name="message"]').value = '';

};
const closeModal = () => {
successPopupVisible.value = false;
}


</script>

<template>


<div style="padding-top: 120px;" id="portifolio"></div>
<div class="spacer"></div>
    <span class="title-line" style="text-align: center;" id="portifolio"><em>{{ $t('PORTFOLIO') }}</em></span>
    <div class="tabset-box"> 
        <ul class="tabset " id="portfolio-tabs" > 
            <li @click="filterPortfolio('all')"><a :class="{ active: activeCategory === 'all' }">{{ $t('ALL WORKS') }}</a></li> 
            <!-- <li @click="filterPortfolio('art')"><a  :class="{ active: activeCategory === 'art' }">Art</a></li>  -->
            <li @click="filterPortfolio('information_sites')"><a :class="{ active: activeCategory === 'information_sites' }" >{{ $t('INFORMATION SITES') }}</a></li> 
            <li @click="filterPortfolio('online_store')"><a :class="{ active: activeCategory === 'online_store' }">{{ $t('ONLINE STORES') }}</a></li>  
            <!-- <li @click="filterPortfolio('design')"><a :class="{ active: activeCategory === 'design' }">{{ $t('DESIGN') }} </a></li>  -->
        </ul> 
        
    </div>

    <div class="portfolio-holder">
        <div class="portfolio-boxs">
            <a v-for="item in filteredPortfolio" :key="item.id" :href="item.to" class="portfolio-item">
            <!-- <router-link v-for="item in filteredPortfolio" :key="item.id" :to="`/portfolio/${item.id}`" class="portfolio-item"> -->
                  <div class="card">
              <div class="first-content">
                  <span style="width: 584px; height: 360px;"><img :src="item.image" alt="" style="width: 100%; height: 100%;"></span>
              </div>
              <div class="second-content">
                  <span style="display: flex;width: 584px; height: 360px; justify-content: center; align-items: center;">{{ item.title }}</span>
              </div>
              <!-- <div class="portfolio-item-content"> 
                <div class="top-row">
                   <div class="type">Сайты для бизнеса</div> 
                  </div> 
                  <div class="description-holder"> 
                    <div class="title"><u>Корпоративные сайты</u></div> 
                    <div class="info-block"><u>Подборка корпоративных сайтов.</u></div> 
                  </div> 
                  <div class="more-block"> 
                    <span class="view-site"> 
                      <span style="text-transform: uppercase; display: flex; align-items: center;">Посмотреть проект <div style="width: 35px; height: .5px; background-color: #000; margin-left: 10px;"></div></span> 
                      </span> 
                       
                    </div> 
                  </div> -->
                </div>
              </a>

            <!-- <router-link to="portfolio" class="portfolio-item">
                <div class="card">
            <div class="first-content">
                <span><img src="../assets/img/design-portfolio.png" alt=""></span>
            </div>
            <div class="second-content">
                <span> Caprure</span>
            </div>
        </div>
            </router-link>
            <router-link to="portfolio" class="portfolio-item">
                <div class="card">
            <div class="first-content">
                <span><img src="../assets/img/design-portfolio.png" alt=""></span>
            </div>
            <div class="second-content">
                <span> Caprure</span>
            </div>
        </div>
            </router-link>
            <router-link to="portfolio" class="portfolio-item">
                <div class="card">
            <div class="first-content">
                <span><img src="../assets/img/design-portfolio.png" alt=""></span>
            </div>
            <div class="second-content">
                <span> Caprure</span>
            </div>
        </div>
            </router-link> -->
        </div>
    </div>
    
    
    
        <!-- <wave_dots /> -->
        
          <wave_dots></wave_dots>
        
        
        <!-- <div class="team-counters">
            <div class="team-counter">
                <div class="team-counter__number">500+</div>
                <div class="team-counter__text">{{ $t('projects delivered') }}</div>
            </div>
            <div class="team-counter">
                <div class="team-counter__number">3+</div>
                <div class="team-counter__text">{{ $t('people in the team') }}</div>
            </div>
            <div class="team-counter">
                <div class="team-counter__number">200+</div>
                <div class="team-counter__text">{{ $t('Advanced projects') }}</div>
            </div>
            <div class="team-counter">
                <div class="team-counter__number">5+</div>
                <div class="team-counter__text">{{ $t('years of experience') }}</div>
            </div>
            <div class="team-counter">
                <div class="team-counter__number">5+</div>
                <div class="team-counter__text">{{ $t('TEAM') }}</div>
            </div>
        </div> -->

        <div id="review" style="padding-top: 120px;"></div>
    <div class="home-order-block"> 
        <div class="main-form--wrapper"> 
            <form @submit.prevent="submitForm" method="post" class="main-form" id="new-home-order-form" ref="formRef" enctype="text/plain"> 
                <div class="close-button-cb">
                </div> 
                <div class="big-title " >{{ $t('DISCUSS YOUR PROJECT') }}</div> 
                <div class="big-title__subtitle big-title__subtitle--white">{{ $t('Go ahead, great things start with filling out this contact form') }}</div> 
                <div class="main-form__row">
                    <div class="email">

                        <div class="form">
                            <input type="text" name="user_name" autocomplete="off" required />
                            <label for="text" class="label-name">
                                <span class="content-name"> {{ $t('Name*') }}</span>
                            </label>
                        </div>
                        <div class="form">
                            <input type="text" name="user_telephone" autocomplete="off" required />
                            <label for="text" class="label-name">
                                <span class="content-name"> {{ $t('Telephone*') }}</span>
                            </label>
                        </div>
                        <div class="form">
                            <input type="email" name="user_email" autocomplete="off" required />
                            <label for="text" class="label-name">
                                <span class="content-name"> {{ $t('Email*') }}</span>
                            </label>
                        </div>
                    </div>
                        <div class="main-form__col main-form__col--textarea"> 
                        <div class="main-form__textarea-wrapper"> 
                            <textarea :placeholder="$t('Tell us about your idea')" name="message" id="area" class="main-form__textarea "></textarea> 
                        </div> 
                    </div> 
                </div> 
                <div class="center-btn"> 
                    <button type="submit" class="main-form__order-btn btn btn--white" value="Send" name="home-order-form">{{ $t('Submit') }} 
                        <span class="arrow-right"> <span class="dots dots--right"> 
                        <span class="dot dot--right-1"></span> 
                        <span class="dot dot--right-2"></span> 
                        <span class="dot dot--right-3"></span> 
                    </span> 
                    <span class="arrow-right__angle">
                        <span class="angle angle--right"></span>
                    </span> </span> 
                </button> 
            </div> 
        </form> 
    </div> 
    
</div>
<success :successPopupVisible="successPopupVisible" @closeModal="closeModal"/>
 
</template>

<style scoped>
.team-counters {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.team-counter {
    max-width: 115px;
}
.team-counter__number {
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
}
.team-counter__text {
    font-size: 12px;
    line-height: 1;
}

/* Portfilio */
.portfolio-holder {
    overflow: hidden;
    /* padding: 40px 0 0; */
    text-align: center;
}
.portfolio-boxs {
    padding-top: 10px;
    overflow: hidden;
    text-align: left;
    /* margin: 0 auto 80px; */
    max-width: 1176px;
}
.portfolio-item {
    width: 100%;
    max-width: 584px;
    float: left;
    height: 360px;
    position: relative;
    color: #fff;
    font-family: 'Proxima Nova';
    margin: 2px;
}
.portfolio-boxs a {
    display: block;
    position: relative;
    overflow: hidden;
}



.title-line {
    display: block;
    position: relative;
    margin: 0 0 40px;
}
.title-line em {
    font-style: normal;
    color: #000;
    text-transform: uppercase;
    font: 600 40px/56px 'Proxima Nova',Arial,Helvetica,sans-serif;
    position: relative;
    /* z-index: 1; */
    background: #fff;
    padding: 0 20px;
}
.tabset {
   list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}
.tabset li {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    position: relative;
    padding-right: 20px;
    
}
.tabset li a {
    color: #000;
    font: 500 16px/20px 'Proxima Nova',Arial,Helvetica,sans-serif;
    text-decoration: none;
    display: block;
    padding: 0 0 10px;
    font-weight: 600;
}


.what-we-do {
    width: 100%;
    /* margin-bottom: 150px; */
    /* padding: 130px 0; */
    color: #000;
    text-align: center;
    position: relative;
    
}

.what-we-do__title {
    font-size: 17px;
    font-weight: 900;
    /* text-transform: uppercase; */
    display: inline-block;
    margin-bottom: 30px;
}

.what-we-do__text {
    width: 781px;
    font-size: 54px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    line-height: 1.3;
    padding-bottom: 30px;
}
.what-we-do__line-holder {
    width: 100px;
    display: inline-block;
    vertical-align: middle;
    height: 1px;
    margin-right: 15px;
}
.what-we-do__line {
    width: 100%;
    height: 1px;
    background-color: #000;
}

/* home order block */
.home-order-block {
    /* margin: 0 0 100px; */
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
.main-form {
    font-size: 16px;
    position: relative;
}
.main-form__col {
    max-width: 290px;
    width: 100%;
}
.main-form__row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
}
.big-title__subtitle--white {
    color: #fff;
}
.input-group input, .input-group textarea {
    display: block;
    background: 0 0;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,.3);
    font-weight: 300;
    width: 100%;
    color: #fff;
    height: 35px;
}
.main-form__textarea {
    color: #fff;
    resize: none;
    font-size: 18px;
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    background: linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,0) 29px,rgba(255,255,255,.2) 29px,rgba(255,255,255,.2) 1px);
    background-size: auto 30px;
    font-weight: 300;
    min-height: 150px;
    line-height: 1.7em;
}
.center-btn {
    text-align: center;
}
.btn{
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    background: #02a352;
    letter-spacing: 1px;
    border: 1px solid #02a352;
    border-radius: 30px;
    text-transform: uppercase;
    padding: 19px 35px 17px;
    line-height: 1;
    display: inline-block;
    cursor: pointer;
    outline: 0; 
}
.main-form__order-btn {
    margin-top: 53px;
}
.btn--arrow {
    padding-right: 25px;
}


/* input animate */
.form-control {
  position: relative;
  margin: 20px 0 0px;
  width: 190px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: #fff;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus+label span,
.form-control input:valid+label span {
  color: lightblue;
  transform: translateY(-30px);
}
/*  */

/* Portfolio */
.card {
  width: 584px;
  height: 360px;
  /* background: rgb(103, 225, 255); */
  transition: all 0.4s;
  /* border-radius: 10px; */
  box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
  font-size: 30px;
  font-weight: 900;
}

.card:hover {
  border-radius: 15px;
  cursor: pointer;
  transform: scale(1.2);
  box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
  background: #0D0D0C;
}

.first-content {
  height: 100%;
  width: 100%;
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  border-radius: 15px;
}

.card:hover .first-content {
  height: 0px;
  opacity: 0;
}

.second-content {
  background-color: #0D0D0C;
  height: 100%;
  width: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: all 0.4s;
  font-size: 0px;
  transform: rotate(90deg) scale(-1);
}

.card:hover .second-content {
  opacity: 1;
  height: 100%;
  font-size: 1.8rem;
  transform: rotate(0deg);
}

.tabset {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .tabset li {
    margin-right: 10px;
  }

  .tabset a {
    text-decoration: none;
    color: #000; /* Set the default color for the tab text */
    position: relative;
    display: inline-block;
    padding-bottom: 4px;
  }

  .tabset a:hover {
    color: grey; /* Set the color for the tab text on hover */
  }

  .tabset a.active {
    color: grey; /* Set the color for the active tab text */
  }

  .tabset a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent; /* Set the default color for the underline */
    transform: scaleX(0); /* Initial scale to hide the underline */
    transform-origin: bottom right;
    transition: transform 0.3s ease-out, background-color 0.3s ease-out;
  }

  .tabset a:hover::before,
  .tabset a.active::before {
    transform: scaleX(1); /* Scale the underline to reveal it on hover or for the active tab */
    background-color: #00FF7F; /* Set the color for the underline on hover or for the active tab */
    transform-origin: bottom left;
  }


  .form {
  width: 75%;
  position: relative;
  height: 60px;
  overflow: hidden;
}

.form input {
  width: 100%;
  height: 100%;
  color: #fff;
  padding-top: 20px;
  border: none;
  background-color: #000;
}
.form label {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid white;
}
.form label::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #fff;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

.content-name {
    color: #fff;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-bottom: 5px;
  transition: all 0.3s ease;
}
.form input:focus {
  outline: none;
}
.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name {
  transform: translateY(-150%);
  font-size: 14px;
  left: 0px;
  color: #fff;
}
.form input:focus + .label-name::after,
.form input:valid + .label-name::after {
  transform: translateX(0%);
}

.email{
    margin-top: -31px;
    max-width: 300px;
    width: 100%;
}

@media screen and (max-width: 1191px) {
  .portfolio-item{
    width: 49%;
    margin: 4px;
  }
  @media screen and (max-width: 1191px) {
    .card{
      width: auto;
      height: auto;
    }
  }
}
@media screen and (max-width: 814px) {
  .portfolio-boxs{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .portfolio-item{
    width: 100%;
  }
}

@media screen and (max-width: 780px) {
  .title-line em{
    font: 600 30px / 56px 'Proxima Nova', Arial, Helvetica, sans-serif;
  }
  .what-we-do__text{
    width: auto;
    font-size: 40px;
  }
  
}
@media screen and (max-width: 740px) {
  .team-counter {
    max-width: 115px;
    padding: 5px 20px;
}
  
}
@media screen and (max-width: 720px) {
  .tabset{
    flex-wrap: wrap;
  }
  
}

@media screen and (max-width: 610px) {
  .main-form__row{
    flex-direction: column;
    align-items: center;
  }
  .form{
    width: 100%;
  }
  .email{
    padding-bottom: 15px;
  }
  .tabset-box{
    position: relative;
  }
  .tabset{
    display: block;
    text-align: center;
    position: relative;
    overflow-x: auto;
    white-space: nowrap;
  }
  .tabset a:hover::before,
  .tabset a.active::before {
    transform: scaleX(1); /* Scale the underline to reveal it on hover or for the active tab */
    background-color: #333; /* Set the color for the underline on hover or for the active tab */
    transform-origin: bottom left;
  }
  .tabset a.active {
    background: #333;
    color: #fff;
    border-color: #333;
  }
  .tabset li a{
    padding: 12px 30px;
    display: block;
    border: 1px solid #ccc;
    font-size: 18px;
  }
}
@media screen and (max-width: 1500px) and (min-width: 480px) {
.portfolio-item-content{
  display: none;
}
}
@media screen and (max-width: 480px) {
  .first-content span{
    height: 250px !important;
  }
  .second-content{
    display: none;
  }
  .what-we-do{
    padding: 0px 20px;
    text-align: left;
  }
  .what-we-do__title{
    font-size: 14px;

  }
  .what-we-do__text{
    font-size: 32px;
    line-height: 44px;
    text-align: left;
  }
  .what-we-do__line-holder {
    width: 25px  !important;
    margin-right: 10px  !important;
}
.what-we-do__line {
  width: 25px !important;
  height: 0.5px  !important;
}
.card {
  width: auto;
  height: auto;
}
.first-content img{
  width: 100%;
  height: auto;
}
.portfolio-item{
  height: auto;
}
.tabset{
    flex-wrap: wrap;
  }
  .main-form__row{
    flex-direction: column;
    align-items: center;
  }
  .email{
    padding-bottom: 20px;
  }
  .form{
    width: 100%;
  }
  .big-title{
    font-size: 32px !important;
  }
  .team-counter{
    padding-bottom: 15px;
  }
  .portfolio-item-content{
    padding: 0;
    position: relative;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .top-row{
    margin-bottom: 15px;
    height: 30px;
  }
  .type{
    float: left;
    font-size: 16px;
    color: #666;
    font-weight: 300;
  }
  .title{
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px; 
    color: #333;
    text-transform: uppercase;
  }
  .info-block{
    font-weight: 400;
    height: auto;
    max-height: 75px;
    overflow: hidden;
    margin: 0 0 10px;
    font-size: 14px; 
    color: #000;
    letter-spacing: .6px;
  }
  .view-site{
  
    color: #000;
    font-weight: 500;
    font-size: 14px;
  }
}
</style>
