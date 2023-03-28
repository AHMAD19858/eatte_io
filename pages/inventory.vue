<script setup>
import inventory from "../assets/images/heroImages/inventory.svg";
import service1 from "../assets/images/icons/hand.svg";
import service2 from "../assets/images/icons/charts.svg";
import one from "../assets/images/features/inventory/one.svg";
import two from "../assets/images/features/inventory/two.svg";
import three from "../assets/images/features/inventory/three.svg";

const serviceData = [
  {
    img: service2,
    label: "Improve Your Management",
    desc: `Streamline your kitchen management system and simplify your staff's workload.`,
  },
  {
    img: service1,
    label: "Efficient Order Management",
    desc: "Guarantee the precision of every order and automatically route them to their respective stations.",
  },
];

const featuresData = [
  {
    position: "right",
    img: one,
    title: "automatic alerts",
    sub_title: `Our platform also includes automatic alerts when items are running low, so you can take action before it's too late`,
    details: [
      {
        main: "avoid disappointing your customers",
        details:
          "avoid disappointing your customers by ensuring that all menu items are always available, even during busy periods.",
      },
    ],
  },
  {
    position: "left",
    img: two,
    title: "automatically place orders with vendors",
    sub_title: `In addition to these features, EATTE Inventory also has the ability to automatically place orders with vendors when items stock goes below a certain threshold`,
    details: [
      {
        main: "completely automates",
        details:
          "This completely automates the ordering process, saving you time and ensuring that you always have the ingredients you need to keep your customers happy.",
      },
    ],
  },
  {
    position: "right",
    img: three,
    title: "confirm availability, cost, and delivery estimated dates",
    sub_title: `Vendors are able to confirm availability, cost, and delivery estimated dates, providing you with all the information you need to make informed decisions about your inventory`,
    details: [
      {
        main: "streamline the purchasing process",
        details: `This also means that you can streamline the purchasing process and ensure that you're always getting the best deals on the items you need.`,
      },
    ],
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Inventory'"
      :sub_text="'Improve communication between your kitchen and wait staff with our Kitchen Display Screen, enabling your cooks to effortlessly read orders and notes, streamlining the process.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="inventory"
      :another_device="true"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'How EATTE Inventory helps you?'"
        :main="'With EATTE Inventory, you can automatically keep track of all your restaurant inventory in real time'"
      />
    </div>

    <div class="pos_helps">
      <div class="pb-12 bg-background-color dark:bg-dark-background-color">
        <IoServices :items="serviceData" :numbers="2" />
        <div class="bg-white col">
          <!-- <IoButton :secondary="true" :title="'See Pricing'" /> -->
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-dark-background-color">
      <div class="py-12 bg-white dark:bg-dark-background-color">
        <IoHeadersTripleLines
          :first_line="'Save Money & Time'"
          :main="'Our Kitchen Display System can help you save time and money by improving communication and increasing efficiency.'"
          :first_sub_main="'With this system, you can enhance order accuracy, streamline the meal preparation'"
          :second_sub_main="'process, and ensure courses are timed perfectly.'"
        />
      </div>
      <IoFeatures :items="featuresData" />
    </div>

    <div class="py-16 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Discover More'"
        :main="'All You Require, Conveniently Located in One Place.'"
        :first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
        :second_sub_main="'integrated software suite, providing unbeatable convenience.'"
      />
    </div>

    <IoCard />

    <!-- <IoButton :secondary="true" :title="'View All Services'" /> -->

    <div class="triple_section">
      <IoHeadersTripleLines
        :first_line="'Overall, EATTE Inventory is the perfect tool for restaurant owners who want to automate their inventory management process and avoid the hassle of manual stock tracking. With our platform, you can save time and money while also improving the customer experience by ensuring that all menu items are always available'"
        :main="'So why wait? Sign up for EATTE today and take your restaurant to the next level!'"
      />
    </div>

    <div class="pb-12">
      <IoButtonsDouble :start_btn="'Get Started'" :demo_btn="'Get a demo'" />
    </div>
  </div>
</template>

<style scoped>
.pos_helps {
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;

  @apply dark:bg-dark-background-color;
}
.triple_section {
  @apply mx-[200px] pt-5;
}
.screen_container {
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color pt-[170px];
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
