<template>
    <div>
      <!-- <div class="overlay" @click="closeContact" :class="{ active: showContact }"></div> -->
      <div class="sidebar" :class="{ active: showContact }">
        <div >
          <div>
          <div class="contacts-popup__title "><a href="">{{ $t('Contact') }}</a> 
            <div @click="closeContact" class=""> <!-- Change here -->
              <svg xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;" height="50" viewBox="0 -960 960 960" width="50"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>
          </div>
          
        </div>
        <div class="contact-popup-item">
          <div class="contact-popup-item__title" >
            <div style="padding-right: 10px;">
              <svg width="16px" height="16px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-104.000000, -411.000000)" fill="#000000"><path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location" sketch:type="MSShapeGroup"></path></g></g></svg>
            </div>
            {{ $t('tkm') }}</div>
          <div class="contact-popup-item__phones" > 
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <a class="contact-popup-item__phone">+99365893913</a></div>
          <div class="contact-popup-item__phones" > 
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            <a class="contact-popup-item__phone">info@sanly.pro</a></div>
        </div>
        <!-- <div style="display: flex; align-items: baseline; justify-content: center;">
          <svg width="16px" height="16px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-104.000000, -411.000000)" fill="#000000"><path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location" sketch:type="MSShapeGroup"></path></g></g></svg>
          <p style="padding-left: 10px;">Ashgabat</p></div> -->
        <div style="display: flex; align-items: baseline; justify-content: center;" >
          <svg width="16px" height="16px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-104.000000, -411.000000)" fill="#000000"><path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location" sketch:type="MSShapeGroup"></path></g></g></svg>
          <p style="padding-left: 10px;">Ashgabat Myati Kosayev 68 St.</p></div>
        
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const { showContact } = defineProps(['showContact']);
  const emit = defineEmits(['closeContact']);
  
  const closeContact = () => {
    emit('closeContact');
  };
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
  
  /* .sidebar a:hover {
    color: #f1f1f1;
  } */

  .contacts-popup__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* -webkit-transform: translate(-100%,0); */
    /* transform: translate(-100%,0); */
    cursor: pointer;
}
.contacts-popup {
    max-width: 600px;
    width: 100%;
    position: absolute;
}
.contacts-popup__title-block {
    position: relative;
}
.contacts-popup__title {
  display: flex;
    text-align: center;
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 80px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 4px;
}
.contact-popup-item__phones {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    /* -ms-flex-direction: column; */
    /* flex-direction: column; */
    position: relative;
    align-items: center;
    /* padding-left: 30px; */
}

.contact-popup-item__phone {
    letter-spacing: 1px;
    display: inline-block;

    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
}
.contact-popup-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.contact-popup-item__title {
    letter-spacing: 1px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 480px) {
  .contacts-popup__title{
    font-size: 40px;
    /* padding-right: 40px; */
  }
  .contacts-popup__title svg{
    width: 35px;
    height: 35px;
  }
  
}
  </style>
  