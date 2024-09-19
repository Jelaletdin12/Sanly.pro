<script setup>
import $ from 'jquery';


import { defineProps, ref } from 'vue';

const { successPopupVisible } = defineProps(['successPopupVisible']);

const  emit  = defineEmits(['closeModal']);

const closeModal = () => {
 emit('closeModal')
  console.log("islanok");
};


</script>

<template>
    <div :class="{'container': true, 'container':successPopupVisible}" v-if="successPopupVisible">
    <div class="row">
        
        <div class="modal fade" id="ignismyModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close"  @click="closeModal" ><span>×</span></button>
                     </div>
					
                    <div class="modal-body">
                       
						<div class="thank-you-pop">
							<img src="" alt="">
							<h1>Thank You!</h1>
							<p>Your submission is received and we will contact you soon</p>
                            <h2 class="btn" @click="closeModal">OK</h2>
							
 						</div>
                         
                    </div>
					
                </div>
            </div>
        </div>
    </div>
</div>
</template>







<style scoped>

.container{
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(94, 110, 141, 0.9);;
    z-index: 1;
    opacity: 1;
    right: 0;
    left: 0;
    margin-top: -3000px;
    justify-content: center;
}
.row{
    top: 20%;
    height: 250px;
  margin-top: 25%;
  position: fixed;
  width: 90%;
  max-width: 600px;
  margin: 11em auto;
  background: #FFF;
  border-radius: .25em .25em .4em .4em;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  -webkit-transform: translateY(-40px);
  -moz-transform: translateY(-40px);
  -ms-transform: translateY(-40px);
  -o-transform: translateY(-40px);
  transform: translateY(-40px);
  /* Force Hardware Acceleration in WebKit */
  -webkit-backface-visibility: hidden;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.modal{
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
}
.thank-you-pop{
	width:100%;
 	padding:20px;
	text-align:center;
}
.thank-you-pop img{
	width:76px;
	height:auto;
	margin:0 auto;
	display:block;
	margin-bottom:25px;
}

.thank-you-pop h1{
	font-size: 42px;
    margin-bottom: 20px;
	color:#5C5C5C;
}
.thank-you-pop p{
	font-size: 20px;
    margin-bottom: 4px;
 	color:#5C5C5C;
}
.thank-you-pop h3.cupon-pop{
	font-size: 25px;
    margin-bottom: 40px;
	color:#222;
	display:inline-block;
	text-align:center;
	padding:10px 20px;
	border:2px dashed #222;
	clear:both;
	font-weight:normal;
}
.thank-you-pop h3.cupon-pop span{
	color:#03A9F4;
}
.thank-you-pop a{
	display: inline-block;
    margin: 0 auto;
    padding: 9px 20px;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    background-color: #8BC34A;
    border-radius: 17px;
}
.thank-you-pop a i{
	margin-right:5px;
	color:#fff;
}
#ignismyModal .modal-header{
    border:0px;
    display: flex;
    justify-content: flex-end;
}
.btn{
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: #000;
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
@media screen and (max-width: 600px) {
 .row {
    height: 260px;
 }   
}

</style>