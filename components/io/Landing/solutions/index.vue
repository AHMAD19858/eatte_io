<template>
	<div class="solutions_section">
		<img class="line-top" src="../../../../assets/images/line.svg" alt="svg">

		<div class="container">
			<div class="header_container">
				<h2 class="main_text">Solution sets for every business type and size.</h2>
				<p class="sub_text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat.
				</p>
			</div>


			<section class=" text-black">
				<div class="container flex flex-col items-center p-4 mx-auto md:p-8">
					<div class="sol_container">
						<div class="divide_section">
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/hat.svg" alt="svg">
								<img v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/hat.svg" alt="">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Full Service Restaurant
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440]">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/food.svg" alt="svg">
								<img v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/location.svg" alt="">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Food Truck
								</h3>
								<p class=" dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440] ">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
							<div class="item_section"></div>
						</div>
						<div class="divide_section">
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/family.svg" alt="svg">
								<img v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/users.svg" alt="">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Family Style
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440] ">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/dining.svg" alt="svg">
								<img  v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/restaurant.svg" alt="">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Fine Dining
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440] ">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/restaurant.svg" alt="svg">
								<img v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/shop.svg" alt="">
								<h3 class="font-bold text-xl dark:text-white">
									Quick Service Restaurant
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440] ">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
						</div>
						<div class="divide_section">
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/coffee.svg" alt="svg">
								<img v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/coffee.svg" alt="">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Coffee Shop
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440]">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/hat.svg" alt="svg">
								<img  v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/hamburger.svg" alt="svg">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Fast Casual
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440] ">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/catring.svg" alt="svg">
								<img v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/room-service.svg" alt="">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Catering
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440] ">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
						</div>
						<div class="hidden w-full divide-y sm:flex-col sm:flex divide-[#93A3B029]">
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/bakery.svg" alt="svg">
								<img  v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/food.svg" alt="">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Bakery
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440] ">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
							<div class="item_section">
								<img  v-show="$colorMode.value === 'dark'" src="../../../../assets/images/blackModeIcons/mug.svg" alt="svg">
								<img v-show="$colorMode.value === 'light'" src="../../../../assets/images/icons/mug.svg" alt="">
								<h3 class="font-montse font-bold text-xl dark:text-white">
									Cafe
								</h3>
								<p class="dark:text-[#93A3B0CC] font-montse font-normal text-base text-[#3F4440] ">
									Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh
									et sagittis a. Lacinia purus ac amet.
								</p>
							</div>
							<div class="item_section"></div>
						</div>
					</div>
				</div>
			</section>


		</div>
	
		<img class="line-bottom"  src="../../../../assets/images/lineEnd.svg" alt="svg">
	</div>
</template>

<script setup>

</script>

<style  scoped>
.header_container {
	@apply space-y-2 text-center mb-16
}

.main_text {
	@apply text-3xl font-bold text-primary-color font-montse
}

.sub_text {
	@apply font-montse text-xl text-font-color font-normal dark:text-white
}

.container {
	@apply w-full max-w-[1200px] py-0 px-[15px] my-0 mx-auto
}

.solutions_section {
	@apply relative bg-white h-[1080px] my-[260px] mx-0 dark:bg-[#272727]
}
.sol_container{
	@apply flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x  divide-[#93A3B029]
}

.divide_section{
	@apply flex flex-col w-full divide-y divide-[#93A3B029]
}
.item_section{
@apply flex flex-col gap-2 items-center justify-center p-4 sm:py-8 lg:py-12
}
.solutions_section::before,
.solutions_section::after {

	@apply absolute left-0 block h-[110px] w-full  bg-cover bg-no-repeat content-['']
}

.solutions_section::before {

	@apply top-[-110px] bg-[url('../../../../assets/images/Vector.svg')] bg-[top_center] dark:bg-[url('../../../../assets/images/blackTop.svg')]
}

.solutions_section::after {
	@apply bottom-[-110px] bg-[bottom_center] bg-[url('../../../../assets/images/Vector1.svg')] dark:bg-[url('../../../../assets/images/blackDown.svg')]
}

.solutions_section .line-top {
	@apply absolute top-[-125px] object-cover w-full z-[1]
}

.solutions_section .line-bottom {
	@apply absolute bottom-[-160px] object-cover w-full z-[1]
}

@media (max-width: 1200px) {
	.container {
		max-width: 992px;
	}
	.solutions_section {
	@apply   h-[1133px] 
}
}

@media (max-width: 992px) {
	.container {
		max-width: 768px;
	}
}

@media (max-width: 768px) {
	.container {

		@apply max-w-[576px]
	}
	.solutions_section {
	@apply   h-[1675px] 
}
}

@media (max-width: 576px) {
	.container {
		@apply max-w-full
	}
	.solutions_section{
		height: 2060px;
		margin-bottom: 150px;
	}

	.solutions_section .line-bottom {
	bottom: -85px;
}
}</style>