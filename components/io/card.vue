<script setup>
const props = defineProps({
    items: Array,
})
</script>

<template>
	<section class="section_container">
		<div class="services_container">

			<div class="cards_container">
				<article   v-for="(item, index) in items"
                :key="index">
					
						<div class="card_container ">
							<img :src="item.img" class="phone_icon" alt="svg">
						</div>
					
					<div class="p-4">


						<h3 class="main_card_text"> {{ item.label }}</h3>
						<!--   {{ item.sub_text }} -->
                        <p class="sub_title cursor-pointer">
                            {{ item.learn_text }}
						</p>
					</div>
				</article>

		

			</div>
		</div>
	</section>
</template>



<style  scoped>
.section_container {
	@apply py-6 sm:py-12
}

.services_container {
	@apply container p-6 mx-auto space-y-8
}

.cards_container {
	@apply  md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-4 
}

article {
    margin: 0 auto;
	@apply flex  flex-col bg-white rounded-2xl my-3 dark:bg-[#272727] w-[280px]
}

.card_container {
	@apply   flex items-center m-4 justify-center
}

.main_card_text {
	@apply flex-1 leading-snug text-[15px] font-bold font-montse text-font-color  mb-2 dark:text-primary-color
}

.sub_title{
    @apply py-5  underline font-montse font-normal text-[#3F4440] text-sm text-primary-color dark:text-white
}

@media (max-width: 576px) {

    article {
        @apply mt-7 
    }
}
</style>