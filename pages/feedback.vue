<script setup>
import PosImage from "../assets/images/pos.svg";
import dash from "../assets/images/dashboard.svg";
import hardware from "../assets/images/hardware.png";

const cardData = [
  {
    img: dash,
    label: "Customer Engagement",
    learn_text: "LEARN MORE",
  },
  {
    img: dash,
    label: "Employee Management",
    learn_text: "LEARN MORE",
  },
  {
    img: dash,
    label: "Back-Office Management",
    learn_text: "LEARN MORE",
  },
  {
    img: dash,
    label: "Kitchen Display System (KDS)",
    learn_text: "LEARN MORE",
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Guest feedback'"
      :sub_text="'Gather valuable insights from your customers with EATTE! Our smart guest feedback system allows you to quickly gather valuable feedback from your guests, helping you improve the dining experience for everyone. With EATTE, you can make sure that everyone leaves your restaurant feeling satisfied! Get started today and take advantage of our powerful features to start gathering feedback and get the most out of every guest experience.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="PosImage"
    />

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Discover More'"
        :main="'All You Require, Conveniently Located in One Place.'"
        :first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
        :second_sub_main="'integrated software suite, providing unbeatable convenience.'"
      />
    </div>
    <IoCard :items="cardData" :numbers="4" />
    <IoButton :secondary="true" :title="'View All Services'" />

    <div class="container">
      <IoLandingLineCard
        :sub-title="'POYNT POS Hardware'"
        :title="'Integrations To Supercharge Your Business'"
        :desc="`From software to hardware, our integration with POYNT lets you source a full suite of hardware to meet the needs of your growing restaurant, providing you with the most reliable and flexible technology. EATTE will work with you every step of the way to implement and configure a flawless system that saves you time, money and headaches.`"
        :img="hardware"
      />
    </div>

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Overall, EATTE Payments is the perfect tool for restaurant owners who want to take their operations to the next level. With our platform, you can streamline your operations, increase efficiency, and boost profitability.'"
        :main="'So why wait? Sign up for EATTE today and transform the way you run your restaurant!'"
      />
    </div>

    <IoButtonsDouble :start_btn="'Get Started'" :demo_btn="'Get a demo'" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 70px;
  margin: 0 auto;
}

.screen_container {
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color pt-[100px];
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
