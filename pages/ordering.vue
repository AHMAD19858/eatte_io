<script setup>
import ordering from "../assets/images/heroImages/ordering.svg";
import service1 from "../assets/images/icons/services/delivery_one.svg";
import service3 from "../assets/images/icons/services/delivery_two.svg";
import service2 from "../assets/images/icons/services/delivery_three.svg";
import one from "../assets/images/features/ordering/one.svg";
import two from "../assets/images/features/ordering/two.svg";
import three from "../assets/images/features/ordering/three.svg";
import phoneCase from "../assets/images/mobile_orders.svg";
import figure from "../assets/images/mobile-figure.png";

const serviceData = [
  {
    img: service1,
    label: "Reduce Order Errors",
    desc: "Eliminate the need to enter orders twice and send food straight to the kitchen.",
  },
  {
    img: service2,
    label: "Increase Takeout Revenue",
    desc: "Online Ordering can increase your AOV with suggested items for upselling at checkout.",
  },
  {
    img: service3,
    label: "Curbside Management",
    desc: `Manage all your orders in one place, with a low-risk option to keep your guests safe.`,
  },
];

const graphData = [
  {
    title: "Deliver an Exceptional Guest Experience",
    desc: "Get to know your customers by a direct line of communication with your customers gives you valuable insight.",
  },
  {
    title: "Increase Sales",
    desc: "Keep customerss you already have and give new ones a solid reason to ditch your competition.",
  },
  {
    title: "Increase Guest Engagement",
    desc: "Easily customizable Customer Web App lets diners keep track of all of their rewards and see promotions all in one place.",
  },
];

const featuresData = [
  {
    position: "right",
    img: one,
    title: "A Commission-Free Online Ordering System",
    sub_title: `A Commission-Free Online Ordering System`,
    details: [
      {
        main: "Increase sales",
        details:
          "Offer your guests new ways to enjoy the food they love. Drive guests to your site.",
      },
      {
        main: "No commissions or hidden fees",
        details:
          "Maintain your margins by allowing guests to order curbside pickup, takeout and contactless delivery directly from you.",
      },
      {
        main: "Boost check size",
        details:
          "Easily feature popular menu items or suggest upsell recommendations based on real data science.",
      },
    ],
  },
  {
    position: "left",
    img: two,
    title: "Create a Custom Ordering Experience",
    sub_title: `Create a Custom Ordering Experience`,
    details: [
      {
        main: "Seamless ordering experience",
        details:
          "Guests enjoy a mobile friendly experience from any device and can easily reorder their favorites or schedule orders ahead of time.",
      },
      {
        main: "Offer commission-free delivery",
        details:
          "Offer your own delivery and meet your guests wherever they are.",
      },
      {
        main: "Convenient payment options",
        details:
          "Make guest checkout easy no matter how they pay with options such as Apple Pay and EATTE Gift Cards.",
      },
      {
        main: "Customize with your branding",
        details:
          "Upload your logo and pictures of menu items so your digital presence looks and feels like your restaurant.",
      },
    ],
  },

  {
    position: "right",
    img: three,
    title: "Completely Integrated With Your Point Of Sale",
    sub_title: `Completely Integrated With Your Ooint Of Sale`,
    details: [
      {
        main: "Credit card-linked program",
        details:
          "Guests seamlessly accrue points with each swipe of their credit card. No need to carry a loyalty card or sign-in on every visit.",
      },
      {
        main: "Loyalty reporting",
        details:
          "Get a clear picture of your regulars with loyalty program reporting.",
      },
    ],
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Online-ordering'"
      :sub_text="'Create and sell gift cards to your customers, track balances, and use gift cards as a payment method at your restaurant.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="ordering"
      :another_device="true"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Grow Your Business'"
        :main="'Streamline Your Online Ordering & Curbside Pickup'"
        :first_sub_main="`Give your customers more ways to order your food with a direct online ordering system that allows you to create a safe guest experience with contactless curbside pickup, delivery, and payment options.`"
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
    <div class="bg-white dark:bg-dark-background-color">
      <div class="py-10 bg-white dark:bg-dark-background-color">
        <IoHeadersTripleLines
          :first_line="'Online-ordering Features'"
          :main="'Increase Takeout & Delivery Revenue'"
          :first_sub_main="'Stop paying third-party commission fees and keep 100% of your profits with a POS-'"
          :second_sub_main="`integrated online ordering solution that lets you accept orders directly through your restaurant's website.`"
        />
      </div>
      <div class="container">
        <IoFeatures :items="featuresData" />
      </div>
    </div>
    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Increase Profitability'"
        :main="'Easy-to-Use Restaurant Online Ordering System'"
        :first_sub_main="'A restaurant online ordering system that allows guests to order takeout and delivery'"
        :second_sub_main="'directly from you.'"
      />
    </div>
    <div class="container">
      <IoLandingMobileShowCase
        :data="graphData"
        :img="phoneCase"
      />
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
