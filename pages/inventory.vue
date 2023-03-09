<script setup>
import inventory from '../assets/images/inventory.svg'
import dash from '../assets/images/dashboard.svg'

import pay1 from '../assets/images/backgrounds/pay1.png'
import pay2 from '../assets/images/backgrounds/pay2.png'
import pay3 from '../assets/images/backgrounds/pay3.png'
import pay4 from '../assets/images/backgrounds/pay4.png'

const data =[
	{
		img:pay1,
		label:'pay with',
		title:'Google pay'
	},
	{
		img:pay2,
		label:'pay with',
		title:'QR pay'
	},
	{
		img:pay3,
		label:'pay with',
		title:'Apple pay'
	},
	{
		img:pay4,
		label:'pay with',
		title:'Credit pay'
	}
]

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
</script>

<template>
    <div class="screen_container">


        <IoHeadersRow 
            :service="'Inventory'"
            :sub_text="'Improve communication between your kitchen and wait staff with our Kitchen Display Screen, enabling your cooks to effortlessly read orders and notes, streamlining the process.'"
            :start_btn="'Get Started'"
			:demo_btn="'Get a demo'"
            :row_img="inventory"
            />

        <div class=" bg-white pt-12 pb-12">
            <IoHeadersTripleLines 
			:first_line="'How EATTE Inventory helps you?'"
			:main="'With EATTE Inventory, you can automatically keep track of all your restaurant inventory in real time'"

			/>
        </div>

       <div class="pos_helps">
		<div class="  py-12 bg-white">
				<div class="cards_container">
				<article>
					<a rel="noopener noreferrer" href="#" class="self-center" aria-label="Te nulla oportere reprimique his dolorum">
						<div class="card_container ">
							<img src="../assets/images/icons/charts.svg" class="phone_icon" alt="svg">
						</div>
					</a>
					<div class="p-4">


						<h3 class="main_card_text">Improve Your Management</h3>
						<h6 class="sub_text">
                            Streamline your kitchen management system and simplify your staff's workload.
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


						<h3 class="main_card_text">Gain Insights into Your Kitchen Performance</h3>
						<h6 class="sub_text">
                            Monitor your kitchen's service speed and track your staff's performance.
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
	
			<div class=" py-10 bg-background-color">
				<IoHeadersTripleLines 
			:first_line="'Save Money & Time'"
			:main="'Our Kitchen Display System can help you save time and money by improving communication and increasing efficiency.'"
			:first_sub_main="'With this system, you can enhance order accuracy, streamline the meal preparation'"
			:second_sub_main="'process, and ensure courses are timed perfectly.'"
			/>
		</div>

	<div class="container">
		<div class="features_section">
		<div class="features_side">
			<h3 class="font-montse">Our Kitchen Display System can help you save time and money by improving communication and increasing efficiency.</h3>
			<p class="font-montse">
                Manage your restaurant from anywhere. Dynamic reports in the cloud, accessed from any device, put you in control of your restaurant. Track everything in real time, including weekly category sales, wages and more.
			</p>
			<ul>
				<li>
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						Order Ready Notifications
					</p>
					
				</li>
				<p class="  pl-8 py-1">
					Take payments (EMV or Card) tableside.
				</p>

				
				<li>
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						Tableside Payments
					</p>
				</li>
				<p class="  pl-8 py-1">
					Take tap, dip, or swipe payments tableside.
				</p>
				<li class="font-montse">
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						Guest Feedback
					</p>
				</li>
				<p class="  pl-8 py-1">
					Collect and respond to guest feedback immediately.
				</p>
			</ul>

		</div>
		<div class="features_side img_side">
			<img src="../assets/images/demo.png" alt="img">
		</div>
	</div>

	<div class="features_section reverse">
		<div class="features_side">
			<h3 class="font-montse">Online Ordering & Delivery</h3>
			<p class="font-montse">
				Grow your business online with your own commission-free ordering channels for takeout and delivery. EATTE point of sale lets you maximize off-premise sales while minimizing any costly 3rd party commissions.
			</p>
			<ul>
				<li>
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						Order Ready Notifications
					</p>
					
				</li>
				<p class="  pl-8 py-1">
					Take payments (EMV or Card) tableside.
				</p>

				
				<li>
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						Tableside Payments
					</p>
				</li>
				<p class="  pl-8 py-1">
					Take tap, dip, or swipe payments tableside.
				</p>
				<li class="font-montse">
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						Guest Feedback
					</p>
				</li>
				<p class="  pl-8 py-1">
					Collect and respond to guest feedback immediately.
				</p>
			</ul>
		
		</div>
		<div class="features_side img_side">
			<img src="../assets/images/demo.png" alt="img">
		</div>
	</div>
	</div>

			<div class=" py-10 bg-background-color">
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

    </div>
</template>



<style scoped>

.container {
    width: 100%;
    max-width: 1200px;
    padding: 0 70px;
    margin: 0 auto;
	margin-top: 160px;
}
.pos_helps{
    width: 100%;
    padding: 0 80px;
    margin: 0 auto;
    background-color: white;
	
}

.header_container{
	width: 100%;
    padding: 0 70px;
    margin: 0 auto;
	max-width: 1200px;
}
.screen_container {
    @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color
}

.cards_container {
	@apply max-w-[1200px] mx-auto px-5 bg-white md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 
}

article {
	@apply flex flex-col bg-background-color rounded-2xl my-3 dark:bg-[#272727] h-[300px]
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
.main_text {
	@apply text-[35px] font-bold text-font-color leading-7 font-montse
}
.features_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 100px;
    z-index: 1;
	
}

.features_section.reverse {
    flex-direction: row-reverse;
}

.features_section .features_side {
    position: relative;
    width: calc(100%/2 - 25px);
}

.features_section .features_side h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
}

.features_section .features_side p {
    font-size: 18px;
}
.accepts_container{
	display: grid;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0px;

}

.accepts_featurs{
	width: calc(100% / 2 - 25px);
    display: flex;
    align-items: center;
    gap: 10px;
	
}
.accepts_featurs  i {
	font-size: 20px;
    color: var(--primary);
}
.features_section .features_side ul {
    list-style: none;
    padding: 0;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    margin: 40px 0px;
}

.features_section .features_side ul li {
    width: calc(100% / 2 - 25px);
    display: flex;
    align-items: center;
    gap: 10px;
}

.features_section .features_side ul li i {
    font-size: 20px;
    color: var(--primary);
}

.features_section .features_side ul li p {
    font-size: 14px;
    font-weight: 600;
}

.features_section .features_side a {
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
}

.features_section .features_side.img_side::before {
    content: '';
    position: absolute;
    width: 70%;
    height: 110%;
    top: -5%;
    left: -3%;
    border-radius: 20px;
    background-image: linear-gradient(-90deg, #FF6137, #CC4D2C);
    z-index: 1;
}

.features_section .features_side.img_side img {
    position: relative;
    width: 80%;
    height: auto;
    object-fit: contain;
    z-index: 10;
}

@media (max-width:992px) {
    .features_section .features_side {
        width: 100%;
    }
}
</style>