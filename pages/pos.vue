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
	
			<div class=" py-10 bg-background-color">
				<IoHeadersTripleLines 
			:first_line="'POS Features'"
			:main="'Everything You Need To Run Your Restaurant'"
			:first_sub_main="'EATTE POS is a fully integrated system that connects all online delivery orders, online pickup orders, table reservations, dine-in, QR orders, and drive-thru orders to '"
			:second_sub_main="'stay one step ahead of a rapidly evolving hospitality market.'"
			/>
		</div>

	<div class="container">
		<div class="features_section">
		<div class="features_side">
			<h3 class="font-montse">Tableside Service</h3>
			<p class="font-montse">
				With handheld technology designed for the restaurant environment, you can enable your team to spend more time with guests, accelerate service, and speed up checkout through tableside ordering and payments.
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

	<div class="header_container flex gap-12 mx-12">
	    <div >
                <h1 class="main_text">EA<span class=" text-primary-color">TT</span>E </h1>
                <h1 class="main_text pt-3">Payments</h1>
              </div>
		<div>
			<p class="font-montse">One of the most powerful features of EATTE POS is its ability to split payments for each order by number of people, item, or seat. This means that you can easily manage complex orders and split payments between multiple customers, improving the customer experience and increasing customer satisfaction.</p>
		</div>
	</div>

	<div class="header_container">
	<div class=" mt-9">
		<p class="font-montse">Our platform also accepts all kinds of:</p>
		<ul class="accepts_container">
				<li class="accepts_featurs">
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						credit cards
					</p>
					
				</li>
		

				<li class="accepts_featurs">
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						Apple Pay
					</p>
				</li>

				<li class="accepts_featurs">
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						Google Pay
					</p>
				</li>

				<li class="accepts_featurs">
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						gift cards
					</p>
				</li>

				<li class="accepts_featurs">
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
						QR pay
					</p>
				</li>
				
				<!-- 	<i class='bx bx-check-circle'></i> -->
					<p class="font-montse pt-2">
						and many more, making it easy for your customers to pay using their preferred payment method.
					</p>
				
			</ul>
	</div>
	</div>
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
	@apply px-5 bg-white md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 
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
	
    list-style: none;
    padding: 0;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
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
    font-size: 16px;
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