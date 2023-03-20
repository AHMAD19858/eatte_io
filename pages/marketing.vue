<script setup>
import marketing from "../assets/images/marketing.svg";
import dash from "../assets/images/dashboard.svg";
import one from "../assets/images/features/marketing/one.svg";

const cardData = [
  {
    img: dash,
    label: "Point of Sale (POS)",
    learn_text: "LEARN MORE",
  },
  {
    img: dash,
    label: "Inventory Management",
    learn_text: "LEARN MORE",
  },
  {
    img: dash,
    label: "Analytics",
    learn_text: "LEARN MORE",
  },
];

const featuresData = [
  {
    position: "right",
    img: one,
    title: "build stronger relationships and increase customer loyalty.",
    sub_title: `Our platform also includes automated holiday and birthday emails and SMS, allowing you to reach out to your customers and show them that you care. By sending personalized messages to your customers on special occasions`,
    details: [
      {
        main: "increasing the likelihood that they will return for another meal",
        details: `In addition to these features, EATTE Marketing also automatically sends notifications to customers when a new item is added to your menu. `,
      },
      {
        main: "ability to collect feedback from customers ",
        details: `One of the most powerful features of our platform is its ability to collect feedback from customers after their visit to your restaurant or after receiving their delivery or pickup order through EATTE Online Ordering. This feedback is automatically collected and analyzed, allowing you to make data-driven decisions and improve the customer experience.`,
      },
    ],
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Marketing'"
      :sub_text="'Welcome to EATTE Marketing, the ultimate automated marketing tool for restaurant owners. Our platform is designed to help you streamline your customer retention process, allowing you to focus on delivering the best possible dining experience for your customers.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="marketing"
      :another_device="true"
    />

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'boost your revenue and improve customer loyalty.'"
        :main="`With EATTE Marketing, you can automate your customer retention efforts by offering automated discounts to customers who don't frequent your restaurant often. By doing so, you can incentivize these customers to return, boosting your revenue and improving customer loyalty.`"
      />
    </div>
    <IoFeatures :items="featuresData" />

    <div class="bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Discover More'"
        :main="'All You Require, Conveniently Located in One Place.'"
        :first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
        :second_sub_main="'integrated software suite, providing unbeatable convenience.'"
      />
    </div>

    <IoCard :items="cardData" :numbers="3" />

    <IoButton :secondary="true" :title="'View All Services'" />

    <div class="triple_section">
      <IoHeadersTripleLines
        :first_line="'Overall, EATTE Inventory is the perfect tool for restaurant owners who want to automate their inventory management process and avoid the hassle of manual stock tracking. With our platform, you can save time and money while also improving the customer experience by ensuring that all menu items are always available'"
        :main="'So why wait? Sign up for EATTE today and take your restaurant to the next level!'"
      />
    </div>

    <IoButtonsDouble :start_btn="'Get Started'" :demo_btn="'Get a demo'" />
  </div>
</template>

<style scoped>
.pos_helps {
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;
  background-color: white;
}
.triple_section {
  @apply mx-[200px] py-5;
}
.screen_container {
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color;
}
@media (max-width: 576px) {
  .small_container {
    width: unset;
  }
  .pos_helps {
    padding: 0 15px;
  }

  .triple_section {
    @apply mx-0;
  }
}
</style>
