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
		<IoLandingPlans />
		<IoLandingMobile />
		<IoLandingFaq />
		<IoLandingContactForm />
		<IoLandingFooter />

	</div>
</template>



<style scoped>
.screen_container {
	@apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color
}
</style>