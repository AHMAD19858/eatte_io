<template>
	<section>
		<div class="header_container">
            <img src="~/assets/images/shadow/Ellipse.svg" alt="" class="shadow_color">
            <h1 class="slogan "> The all-in-one platform built</h1>
			<h1 class="slogan">
                exclusively for restaurants, we're on a mission to enrich the food experience for all.
			</h1>


			<div class="header_buttons">
				<button class="get_started">Get
					started
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg>
				</button>
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
	</section>
</template>

<script setup>

</script>

<style  scoped>

.shadow_color{
    @apply absolute top-[41px] w-[600px]
}
.header_container {
	@apply  pt-24 mb-20 container flex flex-col items-center px-4  mx-auto text-center md:px-10 lg:px-32 dark:bg-dark-background-color
}


.slogan {
	@apply font-montse text-4xl font-bold leading-none text-font-color sm:text-5xl dark:text-white z-10
}

.header_buttons {
	@apply flex flex-wrap justify-center pt-16
}


.get_started {
	@apply z-10 font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C]
}


.get_demo {
	@apply  z-10 font-montse dark:text-white dark:border-white flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg text-font-color border-font-color border-2
}

</style>