<template>
	<div class=" footer_container">
		<div class="card">

<div class="main">
	<div class="right">
		<div class="slogan">

			<img src="../../../assets/images/icons/svg.svg" alt="">
			<p class="font-montse">Start selling with EATTE</p>
		</div>
		<p class="sub">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
			laudantium</p>
	</div>
	<div class="left">
		<button class="get_started">Get started </button>
	
	</div>
</div>



</div>
		<footer class="p-6 text-white z-10 relative bg-gradient-to-r from-[#FF6137] to-[#CC4D2C] ">

			<div class=" mt-20 container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
				<div class="flex flex-col space-y-4">
					<h2 class=" font-semibold text-[26px] text-[#F5F6FA]">FEATURES</h2>
					<div class="flex flex-col space-y-2 text-sm text-white">
						<a rel="noopener noreferrer" href="#" class="footer_element">Order Management</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Takeout & Delivery Services</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Inventory Management</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Ingredients Management</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Customer Engagement</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Employee Management</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Back-Office Management</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Payment Processing</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Customer Support</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Point Of Sale (POS)</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Kitchen Display System (KDS)</a>
					</div>
				</div>
				<div class="flex flex-col space-y-4">
					<h2 class="f font-semibold text-[26px] text-[#F5F6FA]">RESTAURANT TYPES</h2>
					<div class="flex flex-col space-y-2 text-sm text-white">
						<a rel="noopener noreferrer" href="#" class="footer_element">Full Service Restaurant</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Food Truck</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Family Style</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Fine Dining</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Quick Service Restaurant</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Coffee Shop</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Fast Casual</a>

						<a rel="noopener noreferrer" href="#" class="footer_element">Catering</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Bakery</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Cafe</a>
					</div>
				</div>
				<div class="flex flex-col space-y-4">
					<h2 class=" font-semibold text-[26px] text-[#F5F6FA]">COMPANY</h2>
					<div class="flex flex-col space-y-2 text-sm text-white">
						<a rel="noopener noreferrer" href="#" class="footer_element">About EATTE</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Why EATTE?</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Breakpoints</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Pricing</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Testimonials</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Contact us</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">Support</a>
					</div>
				</div>
				<div class="flex flex-col space-y-4">
					<h2 class=" font-semibold text-[26px]">Compare</h2>
					<div class="flex flex-col space-y-2 text-sm text-white">
						<a rel="noopener noreferrer" href="#" class="footer_element">toasttab</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">squareup</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">lightspeedhq</a>
						<a rel="noopener noreferrer" href="#" class="footer_element">touchbistro</a>
					</div>
				</div>
			</div>
			<div class="flex-grow border-t border-[#F5F6FA] m-5"></div>
			<div class="flex items-center justify-between px-6  text-sm">
				<div class=" grid gap-4">
					<img src="../../../assets/images/icons/logo.svg" alt="svg">
					<span class="text-white font-semibold text-[12px] font-montse ">© 2023 EATTE</span>
				</div>

				<div class="flex gap-[20px]">
					<i class='bx bxl-facebook-square  text-4xl'></i>
					<i class='bx bxl-linkedin-square text-4xl'></i>
					<i class='bx bxl-instagram text-4xl'></i>

				</div>
			</div>
		</footer>
	</div>
</template>

<script>

</script>

<style  scoped>
.footer_container {
	padding-top: 48px
}

.card {
    background-color: white;
    border-radius: 16px;
    height: 165px;
    position: relative;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -60px;
    z-index: 999999;

	@apply dark:bg-[#272727]
}

.footer_element {
	@apply font-semibold text-base font-montse
}

.main {
	display: flex;
	justify-content: space-between;
	margin-inline: 30px;
	margin-block: 20px;
	align-items: center;
}

.slogan {
	display: flex;
}

.slogan p {
	color: black;
	margin: 10px;
	font-weight: 600;
	font-size: 40px;
	@apply dark:text-white
}

.sub {
	font-size: 16px;
	color: #3F4440;
	font-weight: 500;
	width: 645px;
	@apply dark:text-white font-montse
}

.get_started {
	@apply font-montse flex w-56 self-end items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C]
}



@media (max-width: 576px) {
	
	.main{
		display: block;
	}
	.card {
		height: unset;
		width: unset;
		text-align: center;
		position: unset;
		 margin-bottom: -15px;
	}

	.slogan p {
	font-weight: 400;
	font-size: 20px;
}

.sub{
	width: unset;
	font-weight: 300;
}
.get_started{
	margin-inline: 70px;
	width: unset;
}

.footer_container {
	padding-top: unset
}
}

</style>