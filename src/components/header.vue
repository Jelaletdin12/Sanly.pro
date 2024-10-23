<script setup >
import { RouterLink, RouterView } from "vue-router";
import { createI18n } from "vue-i18n";
import { useI18n } from "vue-i18n";
import i18n from "../i18n/i18n.js";
import { ref } from "vue";
import Sidebar from "../components/sidebar.vue"; // Import the Sidebar component
import Contact from "../components/contact.vue";
import Review from "../components/review_button.vue";

const showSidebar = ref(false);
const toggleMenu = () => {
  showSidebar.value = !showSidebar.value;
};
const closeSidebar = () => {
  showSidebar.value = false;
};

const showContact = ref(false);
const toggleContact = () => {
  showContact.value = !showContact.value;
};
const closeContact = () => {
  showContact.value = false;
};

const showPopup = ref(false);
const openPopup = () => {
  showPopup.value = true;
};
const closePopup = () => {
  showPopup.value = false;
};

const usei18n = useI18n();
if (localStorage.lang) {
  usei18n.locale.value = localStorage.lang;
}
const changeLang = (loc) => {
  usei18n.locale.value = loc;
  localStorage.lang = loc;
  isOpen.value = false;
};
</script>

<template>
  <div class="home-header-holder">
    <header class="header header--animate">
      <!-- <div style="width: 32px; height: 32px;"><img src="/logo1.png" alt="" style="width: 100%;"></div> -->
      <div style="width: 32px; height: 32px">
        <img src="/logo2.png" alt="" style="width: 100%" />
      </div>
      <div class="header__logo-block">
        <a href=""
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
            <path
              d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
              fill="#41b883"
            />
            <path
              d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
              fill="#34495e"
            /></svg
        ></a>
      </div>
      <div class="header__content">
        <div
          @click="closeSidebar"
          class="header-phone header-phone__ico--callback"
        >
          <div class="header-phone__ico">
            <img
              @click="toggleContact"
              style="width: 25px; height: 25px"
              src="../components/icons/system-solid-58-call-phone.gif"
              alt=""
            />
          </div>
        </div>
        <div class="header-lang header_animate">
          <a href="" class="header-lang__link" @click="changeLang('en')">EN</a>
          <a href="" class="header-lang__link" @click="changeLang('ru')">RU</a>
          <a href="" class="header-lang__link" @click="changeLang('tk')">TK</a>
        </div>
        <div
          @click="closeSidebar"
          class="header__callback btn header-animate"
          style="opacity: 1; transform: translate3d(0px, 0px, 0px)"
        >
          <a
            @click="closeContact"
            href="#review"
            style="text-decoration: none; color: #fff"
            >{{ $t("Get a quote") }}</a
          >
        </div>
        <div class="menu-btn" @click="toggleMenu">
          <div
            @click="closeContact"
            class="menu-btn__text header-animate"
            style="opacity: 1; transform: translate3d(0px, 0px, 0px)"
          >
            {{ $t("menu") }}
          </div>
          <div
            @click="closeContact"
            class="menu-ico header-animate"
            style="opacity: 1; transform: translate3d(0px, 0px, 0px)"
          >
            <div v-if="!showSidebar">
              <svg
                style="margin-top: -6px"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                />
              </svg>
            </div>
            <div v-else>
              <svg
                style="margin-top: -6px"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Sidebar :showSidebar="showSidebar" @closeSidebar="closeSidebar" />
    <Contact :showContact="showContact" @closeContact="closeContact" />
    <Review :showPopup="showPopup" @closePopup="closePopup" />
    <RouterView />
  </div>
</template>

<style scoped>
.home-header-holder {
  background: #fff;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 102;
  padding: 10px 0;
}
.header {
  max-width: 1200px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /* padding-top: 30px; */
  padding-bottom: 30px;
  position: relative;
  z-index: 3000;
}
.header__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header-phone {
  padding: 10px 30px 10px 0;
  margin-right: 10px;
  border-right: 1px solid #eee;
}
.header-phone__ico {
  padding: 5px;
  cursor: pointer;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
  -webkit-animation-name: tada;
  animation-name: tada;
}
.header-lang {
  display: inline-block;
  vertical-align: top;
  margin-right: 40px;
  overflow: hidden;
  font-size: 12px;
  line-height: 14px;
}
.header-lang__link {
  float: left;
  margin-left: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  color: #000;
}
.header__callback.btn {
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  color: #000;
  background: #02a352;
  letter-spacing: 1px;
  border: 1px solid #02a352;
  border-radius: 30px;
  text-transform: uppercase;
  padding: 14px 25px 12px;
  line-height: 1;
  display: inline-block;
  cursor: pointer;
  outline: 0;
}
.header__callback {
  margin-right: 40px;
}
.menu-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  cursor: pointer;
  padding-top: 11px;
  position: relative;
}
.menu-btn__text {
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 800;
  color: #000;
  margin-right: 8px;
}
.menu-ico {
  width: 20px;
}
.menu-ico__line {
  height: 1px;
  width: 100%;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  background: #000;
}

/* side bar menu */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  display: none;
}

/* Show the overlay when the sidebar is open */
.overlay.active {
  display: block;
}

@media screen and (max-width: 1200px) {
  .header {
    padding: 0 15px;
  }
}

@media screen and (max-width: 800px) {
  .header {
    padding: 0 15px;
  }
}

@media screen and (max-width: 700px) {
  .header__callback.btn {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .header__callback.btn {
    display: none;
  }
  .header {
    padding: 0 25px;
  }
  .header__logo-block {
    padding-top: 11px;
  }
  .menu-btn__text {
    display: none;
  }
}
</style>
