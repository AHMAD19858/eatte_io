<script setup>

</script>

<template>
	<div class="screen_container">

		<!--  <IoAboutEatteHeader/> -->
		<IoHeadersCentred 
			:about="true"  
			:shadow_slogan="'The all-in-one platform built'"
			:slogan="`The all-in-one platform built exclusively for restaurants, we're on a mission to enrich the food experience for all.`"
			:start_btn="'Get Started'" :demo_btn="'Get a demo'" />
		<IoAboutEatteWhoWeAre />
		<IoAboutEatteOurValues />
		<IoAboutEatteWhyChooseUs />
		<IoLandingContactForm />


	</div>
</template>



<style scoped>
.screen_container {
	@apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color
}
</style>