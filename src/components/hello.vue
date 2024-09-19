<template> 
    <div class="none">

    
  <div class="container">
    <h1 class="effect1">hello there, welcome!</h1>
    <p class="text">nice to meet you ☺</p>
  </div>

  <section>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </section>
  <div style="display: flex; justify-content: center; padding-top: 15px;"> <a href="#service"><img src="./icons/icons8-down.gif" alt=""></a></div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import anime from "animejs";

// Background animation
const tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 850,
});

onMounted(() => {
  tl.add({
    targets: "section .item",
    width: "100%",
    backgroundColor: "#F6A9BD",
    delay: anime.stagger(100),
  });

  tl.add({
    targets: "section .item",
    delay: anime.stagger(70),
    width: "97%",
    backgroundColor: "#F4E0E1",
  });

  tl.add({
    targets: "section .item",
    backgroundColor: "#FFFFFF",
    delay: anime.stagger(50, { from: "center" }),
  });

  tl.add(
    {
      targets: ".text",
      top: "3%",
      duration: 3500,
      opacity: 1,
    },
    "-=1000"
  );

  // Text animation
  const textWrapper = document.querySelector(".effect1");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^.\s]|\w)/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add(
    {
      targets: ".effect1 .letter",
      scale: [5, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1350,
      delay: (el, i) => 70 * i,
    },
    1500
  );
});
</script>

<style scoped>
/* $font: 'Kanit', sans-serif;

$main: #F6A9BD;
$light: #F4E0E1;
$white: #FFFFFF;
$dark: #F0386B; */

body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
}
.container {
  width: 100%;
  /* display: flex; */
  justify-content: center;
}

.effect1 {
  position: absolute;
  margin: 0;
  top: 2%;
  font-size: 2.3em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 3;
  color: #f6a9bd;
}

.effect1 .letter {
  display: inline-block;
  line-height: 1em;
}

.text {
  position: absolute;
  font-size: 1.8em;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #f0386b;
  font-weight: 100;
  top: 3%;
  z-index: 3;
  opacity: 0;
  top: 50%;
}

section {
  display: grid;
  grid-template-columns: repeat(10, auto);
}

.item {
  background-color: #f4e0e1;
  height: 50vh;
  z-index: 0;
}

@media screen and (max-width: 5200px) and (min-width: 610px) {
.none{
  display: none;
}
}
</style>