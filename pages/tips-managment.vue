<script setup>
import PosImage from "../assets/images/pos.svg";
import one from "../assets/images/features/pos/one.svg";
import two from "../assets/images/features/pos/two.svg";

const featuresData = [
  {
    position: "right",
    img: one,
    title: "Stop wasting time trying to remember all your tips!",
    sub_title: `With EATTE, you can easily manage all your tips in one place. Whether you're a restaurant manager or a server, EATTE makes it easy to store and manage all your tips in the most organized way. Plus, its intuitive interface ensures you can access your tips quickly and efficiently. Get the hassle-free way to manage all your tips with EATTE!`,
  },

];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Tips Management'"
      :sub_text="`Take control of your finances today with EATTE! Our comprehensive tips management system makes tracking & managing your tips easier than ever. From tracking daily tips to analyzing overall performance, EATTE has everything you need to stay on top of your financial goals and make the most of your income. Plus, our intuitive design makes it easy to visualize & monitor progress at a glance. Whether you're a full-time or part-time server, start managing your tips with EATTE now!`"
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
