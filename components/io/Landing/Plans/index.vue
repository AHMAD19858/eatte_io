<script setup>
const select_month = ref(false)
const select_pay = ref(false)

</script>


<template>
    <div class="container">

        <h3 class="plan_title">Pricing that works for you.</h3>
        <div class="plan_section">
            <div class="plan_side">
                <h1>Try EATTE</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elemen.
                </p>
                <ul>
                    <li>
                        <i class='bx bx-check-circle'></i>
                        <p>
                            Loyalty
                        </p>
                    </li>
                    <li>
                        <i class='bx bx-check-circle'></i>
                        <p>
                            Gift Cards
                        </p>
                    </li>
                    <li>
                        <i class='bx bx-check-circle'></i>
                        <p>
                            SMS Marketing
                        </p>
                    </li>
                </ul>
            </div>
            <div class="plan_side">
                <div class="plan" :class="select_month ? 'active_plan' : ''"
                @click="select_month = !select_month ; select_pay = false">
                    <div class="plan_icon">
                        <i class='bx bx-check text-[#93A3B0CC]'></i>
                    </div>
                    <div class="plan_info">
                        <h4>Monthly</h4>
                        <p>Pay Monthly for software and devices.</p>
                    </div>
                </div>
                <div class="plan " :class="select_pay ? 'active_plan' : ''"
                @click="select_pay = !select_pay ; select_month = false">
                    <div class="plan_icon">
                        <i class='bx bx-check'></i>
                    </div>
                    <div class="plan_info">
                        <h4>Pay as you go</h4>
                        <p>No upfront cost. No monthly subscription</p>
                    </div>
                    <p class="plan_best">Best Value</p>
                </div>
                <button class="plan_btn">
                    <p>Try</p>
                    <i class='bx bx-right-arrow-alt'></i>
                </button>
            </div>
        </div>

        <div class="header_container">
			<h2 class="main_text">Built To Handle The Details, The Rush</h2>
				<h2 class="main_text">
				And Everything In-Between</h2>
		</div>
    </div>
</template>



<style scoped>
.container {
    @apply w-full max-w-[1200px] py-0 px-[15px] my-0 mx-auto
}



.plan_title {
    @apply text-[40px] font-bold my-10 text-primary-color
}


.plan_section {

    @apply flex justify-between items-start flex-wrap mb-[100px] gap-[50px]
}

.plan_section .plan_side {
    width: calc(100%/2 - 25px);
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
    @apply cursor-pointer py-[25px] border-[3px] px-[15px] border-white border-solid h-[110px] bg-white gap-[20px] rounded-[15px] flex w-full mb-10 items-center justify-start relative hover:border-primary-color hover:border-solid
}

.plan_section .plan_side .plan .plan_icon {

    @apply flex w-[55px] rounded-lg h-[55px] bg-[#93A3B029] justify-center items-center
}

.plan_section .plan_side .plan .plan_icon i {
    @apply text-[40px]
}

.plan_section .plan_side .plan .plan_info h4 {
    @apply font-bold mb-[5px] text-font-color text-lg
}

.plan_section .plan_side .plan .plan_info p {
    @apply text-base m-0 text-[#3F4440]
}

.plan_section .plan_side .plan .plan_best {
    @apply absolute m-0 text-white rounded-[20px] font-bold text-xs top-[50%] right-[15px] translate-y-[-50%] py-[5px] px-[10px] bg-gradient-to-r from-primary-color to-[#CC4D2C]
}

.plan_section .plan_side .plan.active_plan {
    @apply border-primary-color cursor-pointer
}

.plan_section .plan_side .plan.active_plan .plan_icon {
    @apply bg-primary-color 
}

.plan_section .plan_side .plan.active_plan .plan_icon i {
    @apply text-white
}

.plan_section .plan_btn {
    @apply gap-[15px] w-full flex h-[55px] bg-gradient-to-r from-primary-color to-[#CC4D2C] justify-center rounded-[10px] items-center
}

.plan_section .plan_btn p {
    @apply m-0 text-white font-bold text-lg
}

.plan_section .plan_btn i {
    @apply text-[26px] text-white
}

@media (max-width:992px) {
    .plan_section .plan_side {
        @apply w-full
    }
}

.header_container {
	@apply space-y-2 text-center mb-16
}

.main_text {
	@apply text-[35px] font-bold text-primary-color leading-7
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
    }
    .plan_section .plan_side .plan .plan_best{
        top: 25%;
    }
}

</style>