<template>
    <div class="container">


        <div class="plan_section">
            <div class="plan_side">
                <div class="plan">
                    <div class="plan_info">
                        <h4 class=" font-semibold text-[35px] dark:text-white">Admin Mobile App</h4>
                        <p class="dark:text-white">With Eatte Admin mobile app you can streamline all of your operations in no time, now a
                            single platform can empower your staff to deliver amazing dining experiences From KDS to
                            multi-location and inventory management.</p>
                        <div class="flex justify-between ">
                            <div class="x">
                                <div class="flex justify-between gap-2 pl-2">
                                    <i class='bx bxl-apple self-center text-5xl '></i>

                                    <div class=" self-center">
                                        <h6 class=" text-[#1E1E1E] text-[13px] dark:text-white"> Download on the</h6>
                                        <h6 class="text-[#1E1E1E] text-[15px] font-bold dark:text-white"> App Store</h6>

                                    </div>

                                </div>
                            </div>
                            <div class="pl-1">



                                <div class="x">
                                    <div class="flex justify-between gap-2 pl-2">
                                        <i class='bx bxl-play-store self-center text-5xl '></i>

                                        <div class=" self-center">
                                            <h6 class=" text-[#1E1E1E] text-[13px] dark:text-white"> Download on the</h6>
                                            <h6 class=" text-[#1E1E1E] text-[15px] font-bold dark:text-white"> Google Play</h6>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="plan_side pic">
                <img src="../../../assets/images/Mockup.svg" alt="">
            </div>

            <div class="plan_side">
                <div class="plan">
                    <div class="plan_info">
                        <h4 class=" font-semibold text-[35px] dark:text-white">POS Mobile App</h4>
                        <p>POS mobile app is a part of a unified platform that work together to grow your business and
                            delight your guests. Our app developed to keep your business moving, streamline your
                            ordering, and keep service hustling.</p>
                        <div class="flex justify-between">
                            <div class="x">
                                <div class="flex justify-between gap-2 pl-2">
                                    <i class='bx bxl-apple self-center text-5xl '></i>

                                    <div class=" self-center">
                                        <h6 class=" text-[#1E1E1E] text-[13px] dark:text-white"> Download on the</h6>
                                        <h6 class="text-[#1E1E1E] text-[15px] font-bold dark:text-white"> App Store</h6>

                                    </div>

                                </div>
                            </div>

                            <div class="pl-1">



<div class="x">
    <div class="flex justify-between gap-2 pl-2">
        <i class='bx bxl-play-store self-center text-5xl '></i>

        <div class=" self-center">
            <h6 class=" text-[#1E1E1E] text-[13px] dark:text-white"> Download on the</h6>
            <h6 class=" text-[#1E1E1E] text-[15px] font-bold dark:text-white"> Google Play</h6>

        </div>

    </div>
</div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>

</script>

<style scoped>
.screen_container {
	@apply bg-background-color min-h-full
}

.container {
	@apply w-full max-w-[1200px] py-0 px-[15px] my-0 mx-auto
}



.plan_title {
	@apply text-[40px] font-bold my-10 text-primary-color
}


.plan_section {

	@apply flex justify-between items-end flex-wrap mb-[100px]
}



.plan_section .plan_side h1 {
	@apply mb-[15px] font-bold text-6xl
}

.plan_section .plan_side p {
	@apply text-lg mb-[35px]
}

.plan_section .plan_side ul {

	@apply list-none p-0 flex justify-between items-start flex-wrap gap-5 mt-10
}

.plan_section .plan_side ul li {
	@apply flex items-center w-full gap-[10px]
}

.plan_section .plan_side ul li i {
	@apply text-primary-color text-[20px]
}

.plan_section .plan_side ul li p {
	@apply text-base font-semibold mb-0
}

.plan_section .plan_side .plan {
	@apply py-[25px] border-[3px] px-[15px] border-white border-solid bg-white gap-[20px] rounded-[15px] flex w-[430px]  items-center justify-start relative dark:bg-[#272727] cursor-pointer hover:border-primary-color hover:border-solid
}

.plan_section .plan_side .plan .plan_icon {

	@apply flex w-[55px] rounded-lg h-[55px] bg-[#93A3B029] justify-center items-center
}

.view_button {
	@apply flex flex-wrap justify-center my-8
}

.x{
    border: 1px solid;
    border-radius: 10px;
    /* padding: 8px; */
    background-color: #F5F6FA;
    border-color: #FF6137;
    width: 185px;
    display: flex;
    padding-top: 5px;
    padding-bottom: 0px;

    @apply dark:bg-[#272727]
}

.get_started {
	@apply flex  items-center self-baseline justify-evenly rounded-lg  py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C]
}



@media (max-width: 1200px) {
	.container {
		max-width: 992px;
	}
}

@media (max-width: 992px) {
	.container {
		max-width: 768px;
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
        padding-left: unset;
        padding-right: unset;
        width: min-content;
	}

    .plan_section .plan_side .plan{
        width: 335px;
    }

    .plan_info{
        width: inherit;
    }
    .plan_info h4{
        font-size: 25px;
    }

    .plan_info p{
        width: 285px;
    }

    .x {
        width: unset;
        padding: 4px 6px 7px;
    }

    .pic{
        display: none;
    }

    .plan_side{
        margin-block: 20px;
    }
}

</style>