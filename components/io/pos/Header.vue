<script setup>


</script>


<template>
    <div class="container">

        <div class="about_section">
            <div class="left_side">
              <div >
                <h1 class="main_text">EA<span class=" text-primary-color">TT</span>E POS</h1>
                
              </div>
                <p class="sub_text">
                    Welcome to EATTE POS, the innovative omni-channel point of sale system designed to connect everything in your restaurant together. Our platform is the perfect solution for restaurant owners who want to streamline their operations, improve efficiency, and increase profitability.
                </p>

                <div class="right_section">
         
                    <div class="col">
                        <button class="get_started">Get
					started
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg>
				</button>
                    </div>

 

                    <div class="col">
                        <button class="get_demo">
					Get a demo
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
					</svg>

				</button>
                    </div>
               
                </div>
             
            </div>
            <div class="left_side devices_shapes">
                <img class="mobile" src="~/assets/images/pos.svg" alt="mobile">
               
            </div>
        </div>

     
    </div>
</template>



<style scoped>
.header_buttons {
	@apply flex flex-wrap justify-center pt-16
}


.get_started {
	@apply z-10 font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3  text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C]
}


.get_demo {
	@apply  z-10 font-montse dark:text-white dark:border-white flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3  text-lg text-font-color border-font-color border-2
}
.container {
    @apply  w-full max-w-[1200px] py-0 px-[15px] mx-auto z-10 my-28
}



.number{
    @apply font-bold text-3xl mb-3
}
    .title{
        @apply text-[#3F4440] font-normal dark:text-[#F5F6FA]
        }
.about_section {

    @apply flex justify-between items-start flex-wrap mb-[100px] gap-[50px]
}

.about_section .left_side {
    position: relative;
    width: calc(100%/2 - 25px);
}

.about_section .left_side.devices_shapes {
    left: 10%;
}

.about_section .left_side img{
     @apply absolute right-[-10%] object-cover object-left-bottom h-[500px]
  
}
.about_section .left_side img.mobile{
    right: unset;
    object-fit: unset;
    object-position: unset;
    height: auto;
    @apply h-auto z-10 -top-[100px] -left-[100px] 
}

.about_section .left_side h1 {
    @apply mb-[15px] font-bold text-6xl font-montse
}

.about_section .left_side p {
    @apply text-lg mb-[30px] font-montse 
}

.about_section .left_side ul {

    @apply list-none p-0 flex justify-between items-start flex-wrap gap-5 mt-10
}

.about_section .left_side ul li {
    @apply flex items-center w-full gap-[10px]
}

.about_section .left_side ul li i {
    @apply text-primary-color text-[20px]
}

.about_section .left_side ul li p {
    @apply text-base font-semibold mb-0 font-montse
}

.about_section .left_side .plan {
    @apply cursor-pointer py-[25px] border-[3px] px-[15px] border-white border-solid h-[110px] bg-white gap-[20px] rounded-[15px] flex w-full mb-10 items-center justify-start relative hover:border-primary-color hover:border-solid
}

.about_section .left_side .plan .plan_icon {

    @apply flex w-[55px] rounded-lg h-[55px] bg-[#93A3B029] justify-center items-center
}

.about_section .left_side .plan .plan_icon i {
    @apply text-[40px]
}

.about_section .left_side .plan .plan_info h4 {
    @apply font-bold mb-[5px] text-font-color text-lg font-montse
}

.about_section .left_side .plan .plan_info p {
    @apply text-base m-0 text-[#3F4440] font-montse
}

.about_section .left_side .plan .plan_best {
    @apply font-montse absolute m-0 text-white rounded-[20px] font-bold text-xs top-[50%] right-[15px] translate-y-[-50%] py-[5px] px-[10px] bg-gradient-to-r from-primary-color to-[#CC4D2C]
}

.about_section .left_side .plan.active_plan {
    @apply border-primary-color cursor-pointer
}

.about_section .left_side .plan.active_plan .plan_icon {
    @apply bg-primary-color 
}

.about_section .left_side .plan.active_plan .plan_icon i {
    @apply text-white
}

.about_section .plan_btn {
    @apply gap-[15px] w-full flex h-[55px] bg-gradient-to-r from-primary-color to-[#CC4D2C] justify-between rounded-[10px] items-center p-5
}

.about_section .plan_btn p {
    @apply m-0 text-white font-bold text-lg
}

.about_section .plan_btn i {
    @apply text-[26px] text-white
}

.right_section{
    @apply flex justify-between gap-8 my-10
}
.line {
  @apply  mt-2 h-20 border-solid border-font-color self-center border dark:border-white
}
@media (max-width:992px) {
    .about_section .left_side {
        @apply w-full
    }
}

.main_text {
	@apply text-[35px] font-bold text-font-color leading-7 font-montse
}

@media (min-width: 1440px) {
    .about_section .left_side.devices_shapes {
        left: 20%;
    }
}
@media (max-width: 1200px) {
    .container {
        @apply max-w-[992px]
    }
    .about_section .left_side img.mobile{
        transform: scale(0.8);
        left: -140px;
        top: -120px;
    }
    .about_section .left_side.devices_shapes {
       
        @apply left-[5%]
    }
}

@media (max-width: 992px) {
    .container {
        @apply max-w-3xl
    }
    .about_section .left_side img{
        position: initial;
        @apply h-auto block object-contain
    }
    .about_section .left_side img.mobile{
        margin: auto;
        transform: translateX(45px);
        
    }
    .about_section .left_side.devices_shapes {
        left: unset;
    }
}

@media (max-width: 768px) {
    .container {
        max-width: 576px;
    }
}

@media (max-width: 576px) {
    .container {
        max-width: 100%;
    }
    .about_section .left_side .plan .plan_best{
        top: 25%;
        font-family: "Montserrat";
    }
    .main_text{
        @apply text-center text-2xl
    }
    .sub_text{
        @apply text-center
    }
    .right_section{

        @apply text-center
    }
}

</style>