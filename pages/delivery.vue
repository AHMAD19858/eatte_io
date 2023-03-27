<script setup>
import delivery from "../assets/images/heroImages/delivery.svg";
import service1 from "../assets/images/icons/services/delivery_one.svg";
import service3 from "../assets/images/icons/services/delivery_two.svg";
import service2 from "../assets/images/icons/services/delivery_three.svg";
import one from "../assets/images/features/delivery/one.svg";
import two from "../assets/images/features/delivery/two.svg";

const serviceData = [
  {
    img: service2,
    label: "Deliver",
    desc: "Gain access to toast food delivery services’ network of drivers.",
  },
  {
    img: service1,
    label: "Contactless",
    desc: "Contactless delivery options available to provide a safer experience.",
  },
  {
    img: service3,
    label: "One Flat Fee",
    desc: `Maintain your margins. No upfront costs - pay one flat fee per order.`,
  },
];

const featuresData = [
  {
    position: "right",
    img: one,
    title: "Dine wherever you want with Toast food delivery",
    sub_title: `Dine wherever you want with Toast food delivery`,
    details: [
      {
        main: "No delivery drivers? No problem",
        details:
          "A network of local drivers are located and dispatched automatically once an order is placed.",
      },
      {
        main: "Real-time order tracking",
        details:
          "Guests can schedule their order in advance and track their order status in real-time.",
      },
      {
        main: "Delivery available for online ordering and Toast Takeout customers",
        details:
          "Whether guests Order food online or via EATTE Takeout, the best delivery app for restaurants, delivery is an option",
      },
    ],
  },

  {
    position: "left",
    img: two,
    title:
      "A restaurant food delivery service with no commissions or hidden fees",
    sub_title: `A restaurant food delivery service with no commissions or hidden fees`,
    details: [
      {
        main: "Food delivery fees decrease as volume increases",
        details:
          "Receive trend reports that calculate customer footfall and customer orders; this way, you'll be able to anticipate what some of your usual customers will order the moment they walk in.",
      },
      {
        main: "Offset food delivery costs in creative ways",
        details:
          "See each guest's visit and spend history with average and lifetime spend.",
      },
      {
        main: "Restaurant food delivery insights to inform how you do business",
        details:
          "See each guest's visit and spend history with average and lifetime spend.",
      },
    ],
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Takeout & Delivery Services'"
      :sub_text="'Analytics examines your stock, customer experience and staff performance to suggest real business optimizations.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="delivery"
      :another_device="true"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'How Takeout & Delivery Services Helps You'"
        :main="'Restaurants using Toast Delivery grew sales over 29% relative to their peers.'"
        :first_sub_main="`Restaurants using Toast Delivery grew sales`"
      />
    </div>

    <div class="pos_helps">
      <div class="pb-12 bg-background-color dark:bg-dark-background-color">
        <IoServices :items="serviceData" :numbers="3" />
        <div class="bg-white col">
          <!-- <IoButton :secondary="true" :title="'See Pricing'" /> -->
        </div>
      </div>
    </div>

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Better business decisions'"
        :main="'Keep Your Finger on the Pulse of Your Business with Intuitive Reporting'"
        :first_sub_main="'Your business decisions should be based on data, not a gut feeling. Equipped with more than 50 reports that update in real time,'"
        :second_sub_main="`EATTE POS gives you unprecedented access to the insights you need to reach the right decisions faster.`"
      />
    </div>
    <div class="container">
      <IoFeatures :items="featuresData" />
    </div>

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Discover More'"
        :main="'All You Require, Conveniently Located in One Place.'"
        :first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
        :second_sub_main="'integrated software suite, providing unbeatable convenience.'"
      />
    </div>
    <IoCard />
    <!-- <IoButton :secondary="true" :title="'View All Services'" /> -->

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Overall, EATTE Marketing is the perfect tool for restaurant owners who want to automate their marketing efforts and improve customer retention. With our platform, you can save time and money while also building stronger relationships with your customers. ,'"
        :main="'So why wait? Sign up for EATTE today and take your restaurant to the next level'"
      />
    </div>

    <IoButtonsDouble :start_btn="'Get Started'" :demo_btn="'Get a demo'" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  /* padding: 0 70px; */
  margin: 0 auto;
  /* padding-top: 150px; */
}
.pos_helps {
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;
  /* background-color: white; */
  @apply dark:bg-dark-background-color;
}

.header_container {
  width: 100%;
  padding: 0 70px;
  margin: 0 auto;
  max-width: 1200px;
}
.screen_container {
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color pt-[170px];
}

.cards_container {
  @apply max-w-[1200px] mx-auto px-5 bg-white md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3;
}

article {
  @apply flex flex-col bg-background-color rounded-2xl my-3 dark:bg-[#272727] h-[300px];
}

.card_container {
  @apply w-12 h-12 bg-[#ff613729] rounded-lg flex items-center m-4;
}

.main_card_text {
  @apply flex-1 leading-snug text-2xl font-bold font-montse text-center text-primary-color;
}

.phone_icon {
  @apply stroke-primary-color w-12 h-6 text-center text-3xl text-primary-color;
}
.sub_text {
  @apply font-montse text-center text-[#3F4440] font-normal text-base dark:text-white;
}
.main_text {
  @apply text-[35px] font-bold text-font-color leading-7 font-montse dark:text-white;
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
  width: calc(100% / 2 - 25px);
}

.features_section .features_side h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.features_section .features_side p {
  font-size: 18px;
}
.accepts_container {
  display: grid;
  list-style: none;
  padding: 0;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0px;
}

.accepts_featurs {
  width: calc(100% / 2 - 25px);
  display: flex;
  align-items: center;
  gap: 10px;
}
.accepts_featurs i {
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
  content: "";
  position: absolute;
  width: 70%;
  height: 110%;
  top: -5%;
  left: -3%;
  border-radius: 20px;
  background-image: linear-gradient(-90deg, #ff6137, #cc4d2c);
  z-index: 1;
}

.features_section .features_side.img_side img {
  position: relative;
  width: 80%;
  height: auto;
  object-fit: contain;
  z-index: 10;
}

@media (max-width: 992px) {
  .features_section .features_side {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}
@media (max-width: 576px) {
  .header_container {
    padding: 0 15px;
    display: block;
    margin-block: 10px;
  }

  .main_text {
    text-align: center;
  }
  .pos_helps {
    padding: 0 15px;
  }

  .detail {
    @apply mt-5 text-center;
  }
}
</style>
