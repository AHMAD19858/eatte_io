<template>
	<section class="section_container">
		<div class="services_container">
			<div class="header_container">
                <p class="question">Why Choose Us?</p>
				<h2 class="main_text">Built To Make Your Restaurant Better</h2>
				<p class="sub_text">
					EATTE connects employees, operations, and guests on a reliable, easy-to-use platform so restaurateurs can 
                </p>
                <p class="sub_text">
					stay one step ahead of a rapidly evolving hospitality market.
                </p>
			</div>
			<div class="cards_container">
				<article>
					
						<div class="card_container ">
							<img src="../../../assets/images/dummyImg.svg" class="phone_icon" alt="svg">
						</div>
					
					<div class="p-4">


						<h3 class="main_card_text">EATTE Package is FREE</h3>
						<h6 class="sub_title">
                            All you need to manage your restaurant and take control of an online system, branded exclusively for your restaurant is free.The EATTE Direct suite of customer service and back office tools is free for restaurant owners. Customers will pay only $1.49 per order service fee.
						</h6>
					</div>
				</article>

				<article>
					<div class="card_container ">
							<img src="../../../assets/images/dummyImg.svg" class="phone_icon" alt="svg">
						</div>
					<div class="p-4">
						<h3 class="main_card_text">Customer-first Approach</h3>
						<h6 class="sub_title">
                            Following the customer-first approach since inception, our customer service team ensures that your experience is smooth with us, and helps you make the most of our products. We provide the best-in-class 24*7 live support, online product training as well as implementation at NO-COST.
						</h6>
					</div>
				</article>

				<article>
                    <div class="card_container ">
							<img src="../../../assets/images/dummyImg.svg" class="phone_icon" alt="svg">
						</div>
					<div class="p-4">


						<h3 class="main_card_text">Seamless User Experience</h3>
						<h6 class="sub_title">
                            We aim at developing top-rated products to provide the best user-experience and streamline your operations. All our product enhancements are done keeping your experience in mind. Besides, they're extremely easy to use; needing no technical knowledge to operate.
                        </h6>
					</div>
				</article>

			</div>
		</div>
	</section>
</template>

<script setup>

</script>

<style  scoped>
.section_container {
	@apply py-6 sm:py-12
}

.services_container {
	@apply container p-6 mx-auto space-y-8
}

.header_container {
	@apply space-y-2 text-center
}

.main_text {
	@apply text-3xl font-bold text-primary-color font-montse dark:text-white
}

.sub_text {
	@apply  text-sm  font-montse dark:text-background-color
}

.cards_container {
	@apply  md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 
}

article {
	@apply flex  h-[500px] flex-col bg-white rounded-2xl my-3 dark:bg-[#272727]
}

.card_container {
	@apply   flex items-center m-4
}

.main_card_text {
	@apply flex-1 leading-snug text-2xl font-bold font-montse text-center mb-2
}

.sub_title{
    @apply font-montse font-normal text-[#3F4440] text-base text-center dark:text-white
}
.question {
	@apply  text-base  font-semibold text-primary-color
}
</style>