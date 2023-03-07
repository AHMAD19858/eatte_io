<script setup>

</script>

<template>
	<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
	<div class="screen_container">


		<IoHeadersCentred 
	:shadow_slogan="'All-in-One'"
	:slogan="'Restaurant Management & Ordering System'" 
	:sub_header="`Elevate your restaurant's guest experience and business operations with our solutions.`"
	:start_btn="'Get Started'"
	:demo_btn="'Get a demo'"
	/>
		<IoLandingFeatures />
		<IoLandingServices />
		<IoLandingBannerCard />
		<IoLandingSystemFeatures />
		<IoLandingSolutions />
		<IoLandingPlans />
		<IoLandingMobile />
		<IoLandingFaq />
		<IoLandingContactForm />
	

	</div>
</template>



<style scoped>
.screen_container {
	@apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color
}
</style>