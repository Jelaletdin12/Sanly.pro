<template>
  <div id="canvas" style="position: relative; display: flex; flex-direction: column; align-items: center;" >
    <div style="padding-top: 120px;" id="team"></div>
    <div class="what-we-do revealUp"> 
        <div class="what-we-do__title"> 
        <!-- <div class="what-we-do__line-holder"> 
            <div class="what-we-do__line" style="width: 100px;"></div> 
        </div>  -->
            <span style="opacity: 1; transform: translate3d(0px, 0px, 0px); display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/></svg>
               SANLY.PRO 
               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
               <div></div>
              {{ $t('WE MAKE WEB ACCESSIBLE') }}</span> 

        </div> 
        <div class="what-we-do__text" data-text="Превращаем технологии и дизайн в решение бизнес задач"> 
          <span style="opacity: 1; transform: translate3d(0px, 0px, 0px);">{{ $t('WE TURN TECHNOLOGIES AND DESIGN INTO A SOLUTION FOR BUSINESS NEEDS') }}</span>
        </div>
      </div>
  </div>
</template>

<script setup>
import * as THREE from 'three';
import { ref, onMounted } from 'vue';

const SEPARATION = 100;
const AMOUNTX = 50;
const AMOUNTY = 50;

const container = ref(null);
const camera = ref(
  new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000)
);
const particles = ref([]);
const count = ref(0);
let mouseX = 0;
let mouseY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

const newWidth = window.innerWidth / 1;
const newHeight = window.innerHeight / 2;


let scene; // Declare scene outside the init function
let renderer;

onMounted(() => {
  init();
  animate();
});

function init() {
  container.value = document.createElement('div');
  document.getElementById('canvas').appendChild(container.value);

  camera.value.position.z = 2500;
  camera.value.position.x = 1500;
  camera.value.position.y = 1000;

  camera.value.rotation.x = (-45 * Math.PI) / 180;
  camera.value.rotation.z = (0 * Math.PI) / 180;
  camera.value.rotation.y = (15 * Math.PI) / 180;

  const colorCorporateBlue = 0x132e59;

  scene = new THREE.Scene(); // Move the declaration outside the init function
  scene.fog = new THREE.Fog(colorCorporateBlue, 1500, 3500);

  particles.value = [];
  const PI2 = Math.PI * 2;

  const textureLoader = new THREE.TextureLoader();
  const spriteMap = textureLoader.load('/21375.jpg');

  const material = new THREE.SpriteMaterial({
    color: 0x808080,
    fog: true,
    map: spriteMap,
  });

  let i = 0;
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const particle = new THREE.Sprite(material);
      particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
      particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
      scene.add(particle);
      particles.value.push(particle);
    }
  }

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(newWidth, newHeight);
  renderer.setClearColor(0x808080, 0);

  container.value.appendChild(renderer.domElement);

  document.addEventListener('mousemove', onDocumentMouseMove, false);
  window.addEventListener('resize', onWindowResize, false);
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.value.aspect = window.innerWidth / window.innerHeight;
  camera.value.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  let i = 0;
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const particle = particles.value[i++];
      particle.position.y =
        Math.sin((ix + count.value) * 0.3) * 50 +
        Math.sin((iy + count.value) * 0.5) * 50;
      particle.scale.x =
        particle.scale.y =
        (Math.sin((ix + count.value) * 0.3) + 1) * 4 +
        (Math.sin((iy + count.value) * 0.5) + 1) * 4;
    }
  }
  renderer.render(scene, camera.value);
  count.value += 0.1;
}
</script>

<style >
/* Add any necessary styles here */
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
    position: absolute;
    padding-top: 10px;
    right: 36%;
}

.what-we-do__text {
  position: absolute;
    width: 781px;
    font-size: 54px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    line-height: 1.3;
    padding-bottom: 30px;
    right: 15%;
    padding-top: 50px;
}
.canvas{
  width: 100% !important;
}

@media screen and (max-width:890px){
  .what-we-do__text{
    right: 3%;
  }
}

@media screen and (max-width: 815px) {
  .what-we-do__title{
    right: 28%;
  }
  .what-we-do__text{
    right: 0;
  }
}
@media screen and (max-width: 780px) {

  .what-we-do__text{
    width: auto;
    font-size: 40px;
  }
}

@media screen and (max-width: 480px) {
 
  .what-we-do{
    padding: 0px 20px;
    text-align: left;
  }
  .what-we-do__title{
    font-size: 14px;
    right: 0%;
    left: 0;

  }
  .what-we-do__text{
    font-size: 32px;
    line-height: 44px;
    text-align: left;
    right: 0;
    /* left: 42%; */
  }
  .what-we-do__line-holder {
    width: 25px  !important;
    margin-right: 10px  !important;
}
.what-we-do__line {
  width: 25px !important;
  height: 0.5px  !important;
}
}
</style>
