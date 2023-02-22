<template>
	<section>
		<div class="header_container">
			<h1 class="slogan">
				<span class=" text_glow shadow_text ">All-in-One</span>
				Restaurant Management & Ordering System
			</h1>

			<p class="sub_header">
				Elevate your restaurant's guest experience and business operations with our solutions.
			</p>
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
.section_container {
	@apply bg-background-color
}


.header_container {
	@apply container flex flex-col items-center px-4 py-16 mx-auto text-center md:px-10 lg:px-32
}

.slogan {
	@apply text-4xl font-bold leading-none text-font-color sm:text-5xl
}


.sub_header {
	@apply px-8 mt-8 mb-12 text-lg text-font-color
}

.header_buttons {
	@apply flex flex-wrap justify-center
}

.text_glow {
	@apply text-black text-center text-5xl
}

.shadow_text {
	filter:drop-shadow(0px 0px 35px #FF6137);
}

.get_started {
	@apply flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C]
}


.get_demo {
	@apply flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg text-font-color border-font-color border-2
}

.screen_container {
	@apply bg-background-color min-h-full
}
</style>