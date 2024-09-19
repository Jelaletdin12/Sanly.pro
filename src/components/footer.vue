<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { ref, onMounted, onUnmounted } from 'vue';

// const dropdownVisible = ref(false);

// const toggleDropdown = () => {
//   dropdownVisible.value = !dropdownVisible.value;
// };

// const closeDropdownIfClickedOutside = (event) => {
//   if (!event.target.matches('.dropbtn')) {
//     dropdownVisible.value = false;
//   }
// };
const activeCategory = ref('');
const isMobile = ref(false);

const toggleDropdown = (category) => {
  activeCategory.value = activeCategory.value === category ? '' : category;
};

const checkScreenWidth = () => {
  isMobile.value = window.innerWidth <= 480;
};

onMounted(() => {
    console.log("fuck");
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

onUnmounted(() => {
    console.log("fuyyyck");
    checkScreenWidth();
  window.removeEventListener('resize', checkScreenWidth);
});
</script>

<template>
   <RouterView />


<footer class="footer" id="contact_us">
    <div class="footer__bottom">
        <div>
            <p>© Sanly.pro 2019–2024. {{ $t('rights') }}</p>
        </div>
        <div class="footer__col">
            <ul class="socials">
                <li class="socials__item"><svg style="height: 16px; width: 16px;" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M308.3,508.5c-2.5,0.1-4.1,0.3-5.7,0.3c-34.2,0-68.3-0.1-102.5,0.1c-4.8,0-6.1-1.3-6.1-6.1c0.1-79.6,0.1-159.3,0.1-238.9   c0-2.1,0-4.2,0-6.9c-18.6,0-36.7,0-55.1,0c0-28.4,0-56.3,0-85c1.9,0,3.7,0,5.4,0c15,0,30-0.1,45,0.1c3.8,0,4.8-1.1,4.8-4.8   c-0.2-22.3-0.2-44.7,0-67c0.1-15.6,2.6-30.8,9.8-44.9c10.3-19.9,26.6-32.8,47.2-40.8c16.8-6.6,34.5-9,52.3-9.3   c29-0.4,58-0.2,87-0.3c2.7,0,4.9-0.1,4.9,3.7c-0.1,27.5-0.1,55-0.1,82.5c0,0.3-0.1,0.6-0.5,1.9c-1.7,0-3.6,0-5.5,0   c-18,0-36-0.1-54,0c-10.4,0-18.8,4.2-24.1,13.3c-1.6,2.7-2.6,6.2-2.6,9.4c-0.3,17,0,34-0.2,51c0,4,1.2,5.1,5.1,5.1   c25-0.2,50-0.1,75-0.1c2,0,3.9,0,7.3,0c-3.5,28.6-6.9,56.6-10.4,84.9c-26,0-51.3,0-77.1,0C308.3,340.8,308.3,424.4,308.3,508.5z"/></g></svg></li>
                <li class="socials__item"><svg style="height: 16px; width: 16px;" enable-background="new 0 0 1024 1024" height="1024px" id="Layer_1" version="1.1" viewBox="0 0 1024 1024" width="1024px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path clip-rule="evenodd" d="M512.305,0.122c70.856,0,141.717-0.328,212.571,0.094     c66.662,0.398,129.269,15.6,183.515,56.125c70.84,52.923,107.091,125.214,113.838,212.445c2.376,30.7,1.637,61.667,1.677,92.512     c0.161,119.619,0.072,239.239,0.059,358.86c-0.005,48.856-6.799,96.557-27.473,141.232     c-41.938,90.623-115.091,140.165-211.608,157.334c-20.125,3.579-40.886,4.916-61.359,4.977     c-141.333,0.417-282.669,0.321-424.003,0.174c-73.495-0.075-140.713-19.483-197.994-67.166     c-58.197-48.439-88.907-111.793-98.46-186.071c-1.648-12.811-2.657-25.805-2.669-38.714     C0.261,583.352-0.636,434.771,0.82,286.214c0.796-81.166,27.822-153.13,88.244-209.835     c50.119-47.032,111.04-71.607,178.739-74.012c81.404-2.892,162.991-0.685,244.499-0.685     C512.303,1.161,512.303,0.641,512.305,0.122z M511.505,929.369c68.18,0,136.358,0.274,204.534-0.188     c17.83-0.121,35.919-1.007,53.414-4.171c66.827-12.081,117.634-45.6,144.26-110.67c13.528-33.055,17.946-68.524,18.522-102.876     c2.237-133.271,0.976-266.602,0.819-399.911c-0.018-14.442-0.174-29.045-2.217-43.295     c-9.163-63.988-36.903-116.435-95.792-148.329c-32.869-17.801-68.551-24.522-105.64-24.534     c-142.831-0.042-285.662-0.084-428.492,0.087c-12.908,0.016-25.93,0.73-38.702,2.525     c-72.746,10.214-126.329,46.066-153.145,116.6c-10.822,28.463-14.28,58.288-14.286,88.569     c-0.021,139.403-0.155,278.803,0.183,418.208c0.041,17.055,1.313,34.355,4.366,51.114     c13.543,74.355,55.004,125.461,128.843,146.011c24.606,6.845,50.909,9.868,76.522,10.384     C373.608,930.277,442.565,929.364,511.505,929.369z" fill-rule="evenodd"/><path clip-rule="evenodd" d="M775.903,510.369c-0.064,145.777-119.005,264.347-264.821,263.991     c-145.871-0.353-263.345-118.096-263.43-264.029C247.567,364.56,366.331,245.98,512.255,246.139     C656.921,246.295,775.968,365.605,775.903,510.369z M511.878,679.188c93.007,0.071,169.609-76.475,169.448-169.325     c-0.161-92.206-76.568-168.757-168.818-169.132c-92.873-0.377-169.438,75.935-169.635,169.074     C342.677,603.077,418.542,679.114,511.878,679.188z" fill-rule="evenodd"/><path clip-rule="evenodd" d="M785.693,299.338c-33.019-0.295-59.047-26.717-58.941-59.832     c0.104-33.491,26.785-59.75,60.471-59.52c32.644,0.226,59.246,27.168,59.147,59.904     C846.27,273.09,819.174,299.637,785.693,299.338z" fill-rule="evenodd"/></g></g></svg></li>
                <li class="socials__item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                        <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"/>
                    </svg>
                </li>
            </ul>
        </div>
    </div>


    <div class="none">
    <div class="footer-custom-menu" style="border-bottom: .5px solid gray;">
        <div class="footer-custom-menu__holder">
            <div class="footer-custom-menu__box dropdown">
                <div class="footer-custom-menu__title" ><span>{{ $t('DEVELOPMENT') }}</span></div>
            
            <nav class="footer-custom-menu__list" >
                <ul ref="myDropdown"  id="myDropdown">
                    <li><a>{{ $t('Website creation for business') }}</a></li>
                    <li><a>{{ $t('Order a turnkey website') }}</a></li>
                    <li><a>{{ $t('Online store development') }}</a></li>
                    <li><a>{{ $t('Landing Page Development') }}</a></li>
                    <li><a>{{ $t('Mobile applications') }}</a></li>
                </ul>
            </nav>
            </div>

            <div class="footer-custom-menu__box">
                <div class="footer-custom-menu__title"><span>{{ $t('DESIGN') }}</span></div>
            
            <nav class="footer-custom-menu__list">
                <ul >
                    <li><a>{{ $t('Website design') }}</a></li>
                    <li><a>{{ $t('Logo development') }}</a></li>
                    <li><a>{{ $t('Form style') }}</a></li>
                    <li><a>{{ $t('Usability audit') }}</a></li>
                </ul>
            </nav>
            </div>

            <div class="footer-custom-menu__box">
                <div class="footer-custom-menu__title"><span>SSL</span></div>
            
            <nav class="footer-custom-menu__list">
                <ul >
                    <li><a>{{ $t('Secure connection') }}</a></li>
                    <li><a>{{ $t('Search engine ranking') }}</a></li>
                    <li><a>{{ $t('Increasing customer trust') }}</a></li>
                    <li><a>{{ $t('Easy to use') }}</a></li>
                </ul>
            </nav>
            </div>
        </div>
    </div>
    <div style="text-align: center; background:rgba(196,196,196,.1); margin: 0; "><p style="font-size: x-small; margin: 0;">Made with <s>love</s>  brain by sanly.pro</p></div>
   
</div>


    <div class="none_2">
    <div class="footer-custom-menu">
        <div class="footer-custom-menu__holder">
            <div class="footer-custom-menu__box dropdown">
                <div class="footer-custom-menu__title" @click="toggleDropdown('development')"><span style="display: flex; align-items: center;">
                    <div v-if="activeCategory === 'development'"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg></div>
                    <div v-else><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg></div>
                    {{ $t('DEVELOPMENT') }}</span></div>
            
            <nav class="footer-custom-menu__list" >
                <ul ref="myDropdown" v-if="activeCategory === 'development'" id="myDropdown">
                    <li><a>{{ $t('Website creation for business') }}</a></li>
                    <li><a>{{ $t('Order a turnkey website') }}</a></li>
                    <li><a>{{ $t('Online store development') }}</a></li>
                    <li><a>{{ $t('Landing Page Development') }}</a></li>
                    <li><a>{{ $t('Mobile applications') }}</a></li>
                </ul>
            </nav>
            </div>

            <div class="footer-custom-menu__box">
                <div class="footer-custom-menu__title" @click="toggleDropdown('design')"><span style="display: flex; align-items: center;">
                    <div v-if="activeCategory === 'design'"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg></div>
                    <div v-else><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg></div>
                   
                    {{ $t('DESIGN') }}</span></div>
            
            <nav class="footer-custom-menu__list">
                <ul v-if="activeCategory === 'design'">
                    <li><a>{{ $t('Website design') }}</a></li>
                    <li><a>{{ $t('Logo development') }}</a></li>
                    <li><a>{{ $t('Form style') }}</a></li>
                    <li><a>{{ $t('Usability audit') }}</a></li>
                </ul>
            </nav>
            </div>

            <div class="footer-custom-menu__box">
                <div class="footer-custom-menu__title"  @click="toggleDropdown('ssl')"><span style="display: flex; align-items: center;">
                    <div v-if="activeCategory === 'ssl'"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg></div>
                    <div v-else><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg></div>
                   
                    SSL</span></div>
            
            <nav class="footer-custom-menu__list">
                <ul v-if="activeCategory === 'ssl'">
                    <li><a>{{ $t('Secure connection') }}</a></li>
                    <li><a>{{ $t('Search engine ranking') }}</a></li>
                    <li><a>{{ $t('Increasing customer trust') }}</a></li>
                    <li><a>{{ $t('Easy to use') }}</a></li>
                </ul>
            </nav>
            </div>
        </div>
        <div class="footer_top">
            <div class="footer__col" style="font-weight: 600; border-bottom: .5px solid gray;">Turkmenistan <br> Ashgabat Myati Kose 68 St</div>
            <div class="footer__col" style="font-weight: 600;"> +99365893913</div>
            <div class="footer__col" style="border-bottom: .5px solid gray; padding-top: 0;"> info@sanly.com</div>
            <div class="footer__col"><p>© Sanly.pro 2019–2024. {{ $t('rights') }}</p></div>
            <div class="footer__col" style="display: flex; justify-content: center;">
            <ul class="socials">
                <li class="socials__item"><svg style="height: 16px; width: 16px; fill: #fff;" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M308.3,508.5c-2.5,0.1-4.1,0.3-5.7,0.3c-34.2,0-68.3-0.1-102.5,0.1c-4.8,0-6.1-1.3-6.1-6.1c0.1-79.6,0.1-159.3,0.1-238.9   c0-2.1,0-4.2,0-6.9c-18.6,0-36.7,0-55.1,0c0-28.4,0-56.3,0-85c1.9,0,3.7,0,5.4,0c15,0,30-0.1,45,0.1c3.8,0,4.8-1.1,4.8-4.8   c-0.2-22.3-0.2-44.7,0-67c0.1-15.6,2.6-30.8,9.8-44.9c10.3-19.9,26.6-32.8,47.2-40.8c16.8-6.6,34.5-9,52.3-9.3   c29-0.4,58-0.2,87-0.3c2.7,0,4.9-0.1,4.9,3.7c-0.1,27.5-0.1,55-0.1,82.5c0,0.3-0.1,0.6-0.5,1.9c-1.7,0-3.6,0-5.5,0   c-18,0-36-0.1-54,0c-10.4,0-18.8,4.2-24.1,13.3c-1.6,2.7-2.6,6.2-2.6,9.4c-0.3,17,0,34-0.2,51c0,4,1.2,5.1,5.1,5.1   c25-0.2,50-0.1,75-0.1c2,0,3.9,0,7.3,0c-3.5,28.6-6.9,56.6-10.4,84.9c-26,0-51.3,0-77.1,0C308.3,340.8,308.3,424.4,308.3,508.5z"/></g></svg></li>
                <li class="socials__item"><svg style="height: 16px; width: 16px; fill: #fff;" enable-background="new 0 0 1024 1024" height="1024px"  id="Layer_1" version="1.1" viewBox="0 0 1024 1024" width="1024px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path clip-rule="evenodd" d="M512.305,0.122c70.856,0,141.717-0.328,212.571,0.094     c66.662,0.398,129.269,15.6,183.515,56.125c70.84,52.923,107.091,125.214,113.838,212.445c2.376,30.7,1.637,61.667,1.677,92.512     c0.161,119.619,0.072,239.239,0.059,358.86c-0.005,48.856-6.799,96.557-27.473,141.232     c-41.938,90.623-115.091,140.165-211.608,157.334c-20.125,3.579-40.886,4.916-61.359,4.977     c-141.333,0.417-282.669,0.321-424.003,0.174c-73.495-0.075-140.713-19.483-197.994-67.166     c-58.197-48.439-88.907-111.793-98.46-186.071c-1.648-12.811-2.657-25.805-2.669-38.714     C0.261,583.352-0.636,434.771,0.82,286.214c0.796-81.166,27.822-153.13,88.244-209.835     c50.119-47.032,111.04-71.607,178.739-74.012c81.404-2.892,162.991-0.685,244.499-0.685     C512.303,1.161,512.303,0.641,512.305,0.122z M511.505,929.369c68.18,0,136.358,0.274,204.534-0.188     c17.83-0.121,35.919-1.007,53.414-4.171c66.827-12.081,117.634-45.6,144.26-110.67c13.528-33.055,17.946-68.524,18.522-102.876     c2.237-133.271,0.976-266.602,0.819-399.911c-0.018-14.442-0.174-29.045-2.217-43.295     c-9.163-63.988-36.903-116.435-95.792-148.329c-32.869-17.801-68.551-24.522-105.64-24.534     c-142.831-0.042-285.662-0.084-428.492,0.087c-12.908,0.016-25.93,0.73-38.702,2.525     c-72.746,10.214-126.329,46.066-153.145,116.6c-10.822,28.463-14.28,58.288-14.286,88.569     c-0.021,139.403-0.155,278.803,0.183,418.208c0.041,17.055,1.313,34.355,4.366,51.114     c13.543,74.355,55.004,125.461,128.843,146.011c24.606,6.845,50.909,9.868,76.522,10.384     C373.608,930.277,442.565,929.364,511.505,929.369z" fill-rule="evenodd"/><path clip-rule="evenodd" d="M775.903,510.369c-0.064,145.777-119.005,264.347-264.821,263.991     c-145.871-0.353-263.345-118.096-263.43-264.029C247.567,364.56,366.331,245.98,512.255,246.139     C656.921,246.295,775.968,365.605,775.903,510.369z M511.878,679.188c93.007,0.071,169.609-76.475,169.448-169.325     c-0.161-92.206-76.568-168.757-168.818-169.132c-92.873-0.377-169.438,75.935-169.635,169.074     C342.677,603.077,418.542,679.114,511.878,679.188z" fill-rule="evenodd"/><path clip-rule="evenodd" d="M785.693,299.338c-33.019-0.295-59.047-26.717-58.941-59.832     c0.104-33.491,26.785-59.75,60.471-59.52c32.644,0.226,59.246,27.168,59.147,59.904     C846.27,273.09,819.174,299.637,785.693,299.338z" fill-rule="evenodd"/></g></g></svg></li>
                <li class="socials__item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" style="fill: #fff;">
                        <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"/>
                    </svg>
                </li>
            </ul>
        </div>
        </div>
        <div style="text-align: center; background:rgba(196,196,196,.1); margin: 0; border-top: .5px solid #fff; background-color: #000;"><p style="font-size: x-small; color: #fff; margin: 0;">Made with <s>love</s>  brain by sanly.pro</p></div>
    </div>
</div>
</footer>
 
</template>

<style scoped>

.footer {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
   
}
.footer__bottom {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 12px;
    padding: 20px 0;
    color: #000;
}
.footer__col {

}
.socials {
    margin: 0;
    overflow: hidden;
    padding: 0;
    list-style: none;
}
.socials__item {
    float: left;
    width: 20px;
    height: 20px;
    margin-left: 15px;
}

.footer-custom-menu {
    background: rgba(196,196,196,.1);
    margin: 0 -9999px;
    padding: 40px 9999px;
    /* border-bottom: gray 0.1px solid; */
}
.footer-custom-menu__holder {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: space-between;
}
.footer-custom-menu__box {
    max-width: 240px;
    -ms-flex-preferred-size: 240px;
    flex-basis: 240px;
    width: 100%;
}
.footer-custom-menu__title {
    font-size: 15px;
    line-height: 18px;
    color: #000;
    font-weight: 700;
    position: relative;
}
.footer-custom-menu__list {
    font-size: 13px;
    line-height: 15px;
    margin-top: 18px;
}
.footer-custom-menu__list ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.footer-custom-menu__list ul li+li {
    margin-top: 13px;
    
}
.footer-custom-menu__list ul a {
    text-decoration: none;
    position: relative;
    display: block;
    padding-left: 17px;
    color: #000;
}
@media screen and (max-width: 5200px) and (min-width: 610px) {
    .none_2{
    display: none;
}
    
}
@media screen and (max-width: 610px) {
.footer__bottom{
    display: none;
}
.none{
    display: none;
}
.footer-custom-menu{
    padding: 0;
    
}
.footer-custom-menu__holder{
    flex-wrap: wrap;
    justify-content: center;
}
.footer-custom-menu__title{
    display: flex;
    justify-content: center;
}
.footer-custom-menu__list ul{
    text-align: center;
    padding-bottom: 10px;
}
.footer-custom-menu__box{
    max-width: 100%;
    flex-basis: 100%;
    border-top: 1px solid rgba(151, 151, 151, .2);
    padding: 10px 0;
}
.footer_top{
    display: block;
    text-align: center;
    background-color: #000;
}
.footer__col{
    max-width: 100%;
    padding: 9px 20px;
    color: #fff;
}
}

@media screen and (max-width: 480px) {
.footer__bottom{
    padding: 0 15px;
}

    
}
</style>
