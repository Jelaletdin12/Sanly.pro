<template>
    <div>
      <!-- <div class="overlay" @click="closeContact" :class="{ active: showContact }"></div> -->
      <div class="sidebar" :class="{ active: showPopup }">
        <div class="home-order-block"> 
        <div class="main-form--wrapper"> 
            <form @submit.prevent="submitForm" method="post" class="main-form form-with-price ajax_form" id="new-home-order-form" ref="formRef" enctype="text/plain" > 
                <div class="close-button-cb">
                </div> 
                <div class="big-title ">{{ $t('DISCUSS YOUR PROJECT') }}
                    <div @click="closePopup" class="" style="padding-left: 50px;"> <!-- Change here -->
              <svg xmlns="http://www.w3.org/2000/svg" style="cursor: pointer; fill: #fff;" height="50" viewBox="0 -960 960 960" width="50"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div>
                </div> 
                
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
                            <input type="text" name="user_email" autocomplete="off" required />
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
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  import axios from "axios"
  
  const { showPopup } = defineProps(['showPopup']);
  const emit = defineEmits(['closePopup']);
  
  const closePopup = () => {
    emit('closePopup');
  };


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
    console.log('Succes');
  } catch(error){
    console.log("wtf", error);
  }}
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #ffffff;
    padding-top: 60px;
    transition: transform 0.3s ease;
    transform: translateX(-250px);
    z-index: 2000;
    display: none;
  }
  
  .sidebar.active {
    transform: translateX(0);
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 150px;
  }
  .sidebar.active .contacts-popup__overlay{
    background: red;
  }
  
  .sidebar a {
    text-align: end;
    text-decoration: none;
    color: #000000;
    display: block;
    padding: 15px;
    transition: color 0.3s ease;
  }
  
 


  /* home order block */
.home-order-block {
    margin: 0 0 100px;
}
.main-form--wrapper {
    background: #000;
    padding: 100px 9999px;
    margin: 0 -9999px;
}
.big-title {
    display: flex;
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
    font-weight: 500;
    text-decoration: none;
    color: #000;
    background: #f8de15;
    letter-spacing: 1px;
    border: 1px solid #f8de15;
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
    max-width: 290px;
    width: 100%;
}


  
  </style>
  