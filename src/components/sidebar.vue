<template>
  <div>
    <div
      class="overlay"
      @click="closeSidebar"
      :class="{ active: showSidebar }"
    ></div>
    <div class="sidebar" :class="{ active: showSidebar }">
      <div class="main-menu__wrapper">
        <ul class="main-menu">
          <li class="main-menu__item--big">
            <a class="main-menu__link" href="#portifolio" @click="closeSidebar"
              ><span data-letters="Portfolio">{{ $t("Portfolio") }}</span></a
            >
          </li>
          <li class="main-menu__item--big">
            <a class="main-menu__link" href="#service" @click="closeSidebar"
              ><span data-letters="Services">{{ $t("Services") }}</span></a
            >
          </li>
          <li class="main-menu__item--big">
            <a class="main-menu__link" href="#team" @click="closeSidebar">{{
              $t("About us")
            }}</a>
          </li>
          <li class="main-menu__item">
            <a class="main-menu__link" href="#clients" @click="closeSidebar">{{
              $t("Our projects")
            }}</a>
          </li>
          <li class="main-menu__item">
            <a class="main-menu__link" href="#review" @click="closeSidebar">{{
              $t("Reviews")
            }}</a>
          </li>
          <li class="main-menu__item">
            <a
              class="main-menu__link"
              href="#contact_us"
              @click="closeSidebar"
              >{{ $t("Contact") }}</a
            >
          </li>
          <li class="main-menu__item">
            <a
              class="main-menu__link"
              href="#review"
              @click="closeSidebar"
              >{{ $t("Get a quote") }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, defineProps, defineEmits } from "vue";

const { showSidebar } = defineProps(["showSidebar"]);
const emit = defineEmits(["closeSidebar"]);

const closeSidebar = () => {
  emit("closeSidebar");
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
  transition: all 0.4s ease;
  transform: translateX(-490px);
  z-index: 2000;
}

.sidebar.active {
  transform: translateX(0);
  width: 100%;
}
.sidebar.active a {
  visibility: visible !important;
}
.sidebar a {
  text-align: end;
  text-decoration: none;
  color: #000000;
  display: inline-block;
  visibility: hidden;
  /* padding: 15px; */
  /* transition: color 0.3s ease; */
}

.sidebar a:hover {
  /* background-color: #000; */
  color: #fff;
}

.main-menu__wrapper {
  text-align: right;
  margin: 50px auto 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  z-index: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.main-menu {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  padding: 0;
}
.main-menu__item--big {
  font-size: 82px;
  line-height: 82px;
  margin: -5px 0 0 0;
  list-style: none;
}
.main-menu__link {
  text-decoration: none;
  color: #000;
  overflow: hidden;
  position: relative;
  display: inline-block;
  padding: 0 5px;
  text-indent: 1px;
}
.main-menu__link span {
  position: relative;
}
.main-menu__link span ::before {
  content: attr(data-letters);
  position: absolute;
  color: #fff;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}
.main-menu__link::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: -1px;
  z-index: -1;
  background: #000;
  -webkit-transform: translate3d(101%, 0, 0);
  transform: translate3d(101%, 0, 0);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}
.main-menu__link:hover::after {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.main-menu__link:hover span::before {
  width: 100%;
}
.main-menu__item {
  text-indent: 0;
  margin-bottom: 15px;
  list-style: none;
}

@media screen and (max-width: 900px) {
  .main-menu__item--big {
    font-size: 60px;
  }
}

@media screen and (max-width: 480px) {
  .main-menu {
    display: flex;
    flex-direction: column;
    font-size: 25px;
    align-items: center;
  }
  .main-menu__item--big {
    font-size: 25px;
    line-height: normal;
    padding-bottom: 10px;
  }
}
</style>
  