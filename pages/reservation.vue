<script setup>
import reservation from '../assets/images/reservation.svg'
import dash from '../assets/images/dashboard.svg'
import one from '../assets/images/features/reservation/one.svg'
import two from '../assets/images/features/reservation/two.svg'
import three from '../assets/images/features/reservation/three.svg'
const cardData =[
	{
		img:dash,
		label:'Point of Sale (POS)',
		learn_text:'LEARN MORE'
	},
	{
		img:dash,
		label:'Inventory Management',
		learn_text:'LEARN MORE'
	},
	{
		img:dash,
		label:'Analytics',
		learn_text:'LEARN MORE'
	},

]



const featuresData =[
	{
		position:'right',
		img:one,
		title:'make reservations and order food in advance',
		sub_title:`With our system, customers can make reservations and order food in advance, all from the convenience of their own devices`,
		details:[
			{main:'accessible from any device with an internet connection',
			details:`Whether they're using a smartphone, tablet, or computer`},
		]
	},
	{
		position:'left',
		img:two,
		title:'automatically place orders with vendors',
		sub_title:`In addition to these features, EATTE Inventory also has the ability to automatically place orders with vendors when items stock goes below a certain threshold`,
		details:[
			{main:'completely automates',
			details:'This completely automates the ordering process, saving you time and ensuring that you always have the ingredients you need to keep your customers happy.'},
		]
	},
	{
		position:'right',
		img:three,
		title:'confirm availability, cost, and delivery estimated dates',
		sub_title:`Vendors are able to confirm availability, cost, and delivery estimated dates, providing you with all the information you need to make informed decisions about your inventory`,
		details:[
			{main:'streamline the purchasing process',
			details:`This also means that you can streamline the purchasing process and ensure that you're always getting the best deals on the items you need.`},
		]
	},

]
</script>

<template>
    <div class="screen_container">


        <IoHeadersRow 
            :service="'Reservations'"
            :sub_text="'Our platform is designed to make it easy for restaurant owners to manage their reservations, while also allowing customers to order ahead and streamline their dining experience.'"
            :start_btn="'Get Started'"
			:demo_btn="'Get a demo'"
            :row_img="reservation"
			:another_device="true"
            />

	
			<div class=" py-10 bg-background-color">
				<IoHeadersTripleLines 
			:first_line="'make reservations and order food in advance'"
			:main="`Whether they're using a smartphone, tablet, or computer, our platform is accessible from any device with an internet connection`"

			/>
		</div>
		<IoFeatures :items="featuresData"/>

			<div class="  bg-background-color">
				<IoHeadersTripleLines 
			:first_line="'Discover More'"
			:main="'All You Require, Conveniently Located in One Place.'"
			:first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
			:second_sub_main="'integrated software suite, providing unbeatable convenience.'"
			/>
		</div>

		<IoCard :items="cardData" :numbers="3"/>
        
		<IoButton 
			 :secondary="true"
			 :title="'View All Services'"/>

		<div class=" mx-[200px] py-5">
			<IoHeadersTripleLines 
			:first_line="'Overall, EATTE Inventory is the perfect tool for restaurant owners who want to automate their inventory management process and avoid the hassle of manual stock tracking. With our platform, you can save time and money while also improving the customer experience by ensuring that all menu items are always available'"
			:main="'So why wait? Sign up for EATTE today and take your restaurant to the next level!'"
			/>
		</div>

			<IoButtonsDouble
			:start_btn="'Get Started'"
			:demo_btn="'Get a demo'"/>
    </div>
</template>



<style scoped>

.pos_helps{
    width: 100%;
    padding: 0 80px;
    margin: 0 auto;
    background-color: white;
	
}

.screen_container {
    @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color 
}
@media (max-width: 576px) {
.small_container{
   		 width: unset;
	}
.pos_helps{
padding: 0 30px;
}
}
</style>