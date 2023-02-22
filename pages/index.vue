<script setup>

</script>

<template>
	<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
	<div class="screen_container">


		<IoLandingHeader />
		<IoLandingFeatures />
		<IoLandingServices />
		<IoLandingBannerCard />
		<IoLandingSystemFeatures />
		<IoLandingSolutions />
		<IoLandingPlans/>

	



	</div>
</template>



<style scoped>
.screen_container {
	@apply bg-background-color min-h-full
}

.header_container {
	@apply space-y-2 text-center mb-16
}

.main_text {
	@apply text-3xl font-bold text-primary-color
}

.sub_text {
	@apply font-serif text-xl text-font-color font-normal
}

.container {
	width: 100%;
	max-width: 1200px;
	padding: 0 15px;
	margin: 0 auto;
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
}

.plan_title {
	font-size: 40px;
	font-weight: 700;
	margin-bottom: 40px;
	color: var(--primary);
}

.plan_section {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 50px;
	margin-bottom: 100px;
}

.plan_section .plan_side {
	width: calc(100%/2 - 25px);
}

.plan_section .plan_side h1 {
	font-size: 60px;
	font-weight: 700;
	margin-bottom: 15px;
}

.plan_section .plan_side p {
	font-size: 18px;
	margin-bottom: 35px;
}

.plan_section .plan_side ul {
	list-style: none;
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 20px;
	margin: 40px 0px;
}

.plan_section .plan_side ul li {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 10px;
}

.plan_section .plan_side ul li i {
	font-size: 20px;
	color: var(--primary);
}

.plan_section .plan_side ul li p {
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 0;
}

.plan_section .plan_side .plan {
	position: relative;
	width: 100%;
	height: 110px;
	padding: 25px 15px;
	background-color: #fff;
	border: 3px solid #fff;
	border-radius: 15px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	margin-bottom: 40px;
}

.plan_section .plan_side .plan .plan_icon {
	width: 55px;
	height: 55px;
	background-color: #93A3B029;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.plan_section .plan_side .plan .plan_icon i {
	font-size: 40px;
}

.plan_section .plan_side .plan .plan_info h4 {
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 5px;
	color: var(--font);
}

.plan_section .plan_side .plan .plan_info p {
	font-size: 16px;
	margin: 0;
	color: #3F4440;
}

.plan_section .plan_side .plan .plan_best {
	position: absolute;
	top: 50%;
	right: 15px;
	transform: translateY(-50%);
	font-size: 12px;
	font-weight: 700;
	background: linear-gradient(90deg, #FF6137, #CC4D2C);
	padding: 5px 10px;
	border-radius: 20px;
	color: #fff;
	margin: 0;
}

.plan_section .plan_side .plan.active_plan {
	border-color: var(--primary);
}

.plan_section .plan_side .plan.active_plan .plan_icon {
	background-color: var(--primary);
}

.plan_section .plan_side .plan.active_plan .plan_icon i {
	color: #fff;
}

.plan_section .plan_btn {
	width: 100%;
	height: 55px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	border-radius: 10px;
	background-image: linear-gradient(90deg, #FF6137, #CC4D2C);
}

.plan_section .plan_btn p {
	font-size: 18px;
	font-weight: 700;
	color: #ffffff;
	margin: 0;
}

.plan_section .plan_btn i {
	font-size: 26px;
	color: #ffffff;
}

@media (max-width:992px) {
	.plan_section .plan_side {
		width: 100%;
	}
}
</style>