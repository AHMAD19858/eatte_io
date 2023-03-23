<script setup>
import PosImage from "../assets/images/pos.svg";
import one from "../assets/images/features/pos/one.svg";
import two from "../assets/images/features/pos/two.svg";


const featuresData = [
  {
    position: "right",
    img: one,
    title:
      "EATTE payroll is the easiest and most secure way to manage your business's payroll.",
    sub_title: `With our powerful, cloud-based platform, you can accurately calculate & pay employees on time and in compliance with tax regulations. Save time & money by automating your process & streamline your payroll operations. With EATTE, you can rest assured that your staff will get paid quickly & hassle-free every month!`,
  },
  {
    position: "left",
    img: two,
    title: "Take the hassle out of payroll with EATTE!",
    sub_title: `Our comprehensive payroll system is designed to simplify and streamline the entire process, saving you time, money and stress. With automatic payment processing and integrated tax compliance, you can trust that your team's payroll needs are taken care of. Plus, you can access your data anytime, anywhere with our easy-to-use online platform. Create a better experience for yourself and your employees with EATTE!`,
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Payroll'"
      :sub_text="`Make employee payroll & taxes a breeze with EATTE. Our payroll software offers a simple, efficient, and accurate solution for payroll processing. Whether you're a small business with a few employees or an enterprise with thousands, we have the perfect solution for you. No more time-consuming calculations or legal headaches - Get your employees paid on time, every time with EATTE!`"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="PosImage"
    />

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
    <IoButton :secondary="true" :title="'View All Services'" />

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Overall, EATTE POS is the perfect tool for restaurant owners who want to take their operations to the next level. With our platform, you can streamline your operations, increase efficiency, and boost profitability.,'"
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
  margin: 0 auto;
}

.screen_container {
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color pt-[140px];
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

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}
</style>
