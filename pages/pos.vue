<script setup>
import PosImage from '../assets/images/pos.svg'
</script>

<template>
    <div class="screen_container">


        <IoHeadersRow 
            :service="'POS'"
            :sub_text="' Welcome to EATTE POS, the innovative omni-channel point of sale system designed to connect everything in your restaurant together. Our platform is the perfect solution for restaurant owners who want to streamline their operations, improve efficiency, and increase profitability.'"
            :start_btn="'Get Started'"
			:demo_btn="'Get a demo'"
            :row_img="PosImage"
            />

        <div class=" bg-white pt-12 pb-12">
            <IoHeadersTripleLines 
			:first_line="'How EATTE POS helps you?'"
			:main="'The Heartbeat Of Your Business'"
			:first_sub_main="`Our POS system helps you streamline your operations to meet customer's expectations.`"
			:second_sub_main="'It will help you to be more systematic and quick in your service to customers.'"
			/>
        </div>

            <div class=" bg-white">
				<div class="cards_container">
				<article>
					<a rel="noopener noreferrer" href="#" class="self-center" aria-label="Te nulla oportere reprimique his dolorum">
						<div class="card_container ">
							<img src="../assets/images/icons/charts.svg" class="phone_icon" alt="svg">
						</div>
					</a>
					<div class="p-4">


						<h3 class="main_card_text">Increase sales</h3>
						<h6 class="sub_text">
                            Increase sales with built-in tools that help you boost average check size, speed up table turnover, and promote your most profitable menu items.
						</h6>
					</div>
				</article>

				<article>
					<a rel="noopener noreferrer" class="self-center" href="#" aria-label="Te nulla oportere reprimique his dolorum">
						<div class="card_container ">
							<img src="../assets/images/icons/hand.svg" class="phone_icon" alt="svg">
						</div>
					</a>
					<div class="p-4">
						<h3 class="main_card_text">Deliver Great Guest Experience</h3>
						<h6 class="sub_text">
							Deliver better service with a mobile POS that helps you seat guests faster, minimize order errors, keep lines moving, and process payments without a hitch.
						</h6>
					</div>
				</article>

				<article>
					<a rel="noopener noreferrer" class="self-center" href="#" aria-label="Te nulla oportere reprimique his dolorum">
						<div class="card_container ">

							<img src="../assets/images/icons/code.svg" class="phone_icon" alt="svg">
						</div>
					</a>
					<div class="p-4">


						<h3 class="main_card_text">Save Time and Money</h3>
						<h6 class="sub_text">
                            Manage staff, floor plans, and costs with on-the-go tools that help you spot ways to save time and money - whether you're in-venue or out of office.
                        </h6>
					</div>
				</article>

			</div>
			<div class="bg-white col">
			 <IoButton 
			 :secondary="true"
			 :title="'See Pricing'"/>
			</div>
			</div>

    </div>
</template>



<style scoped>
.screen_container {
    @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color
}

.cards_container {
	@apply px-5 bg-white md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 
}

article {
	@apply flex flex-col bg-background-color rounded-2xl my-3 dark:bg-[#272727] h-[280px]
}

.card_container {
	@apply w-12 h-12 bg-[#ff613729] rounded-lg flex items-center m-4
}

.main_card_text {
	@apply flex-1 leading-snug text-2xl font-bold font-montse text-center text-primary-color
}

.phone_icon {
	@apply stroke-primary-color w-12 h-6 text-center text-3xl text-primary-color
}
.sub_text{
    @apply font-montse text-center text-[#3F4440] font-normal text-base dark:text-white 
}
</style>