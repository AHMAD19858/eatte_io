<script setup>
const props = defineProps({
    items: Array,
})
</script>


<template>
<div class="container">
		<div 
        v-for="(item, index) in items" :key="index"
        :class=" item.position === 'right'? 'features_section':'features_section reverse'">
		<div class="features_side" >
			<h3 class="font-montse">{{ item.title }}</h3>
			<p class="font-montse">
             {{ item.sub_title }}
			</p>
			<ul  v-for="(data, index) in item.details"
                :key="index">

				<li>
					<i class='bx bx-check-circle'></i>
					<p class="font-montse">
				{{ data.main }}
					</p>
					
				</li>
				<p class="  pl-8 py-1">
					{{ data.details }}
				</p>
			</ul>

		</div>
		<div class="features_side img_side">
			<img :src="item.img" alt="img">
		</div>
	</div>

<!-- 	<div class="features_section reverse">
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
	</div> -->
	</div>
</template>



<style scoped>

.container {
    width: 100%;
    max-width: 1200px;
    padding: 0 70px;
    margin: 0 auto;

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