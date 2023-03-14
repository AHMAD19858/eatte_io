<script setup>
import reservation from "../assets/images/reservation.svg";
import dash from "../assets/images/dashboard.svg";
import one from "../assets/images/features/reservation/one.svg";
import two from "../assets/images/features/reservation/two.svg";
import three from "../assets/images/features/reservation/three.svg";
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
    title: "Make reservations and order food in advance",
    sub_title: `With our system, customers can make reservations and order food in advance, all from the convenience of their own devices`,
    details: [
      {
        main: "accessible from any device with an internet connection",
        details: `Whether they're using a smartphone, tablet, or computer`,
      },
    ],
  },
  {
    position: "left",
    img: two,
    title: "Integration with point of sale (POS) systems",
    sub_title: `One of the key features of our system is its integration with point of sale (POS) systems`,
    details: [
      {
        main: `automatically sent to the restaurant's POS`,
        details: `This means that when a customer places an order or makes a reservation, that information is automatically sent to the restaurant's POS, helping to streamline operations and reduce errors.`,
      },
    ],
  },
  {
    position: "right",
    img: three,
    title: "highly customizable",
    sub_title: `Our system is also highly customizable, allowing restaurants to set their own rules around reservations and ordering`,
    details: [
      {
        main: "our platform can accommodate your needs",
        details: `Whether you want to limit the number of orders per day or require a minimum spend per table, our platform can accommodate your needs`,
      },
    ],
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Reservations'"
      :sub_text="'Our platform is designed to make it easy for restaurant owners to manage their reservations, while also allowing customers to order ahead and streamline their dining experience.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="reservation"
      :another_device="true"
    />

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'make reservations and order food in advance'"
        :main="`Whether they're using a smartphone, tablet, or computer, our platform is accessible from any device with an internet connection`"
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
        :first_line="`Finally, our system is designed to be user-friendly and easy to navigate, both for restaurant owners and their customers. We understand that managing reservations and orders can be a complex process, but our platform simplifies the process, making it easier than ever before to manage your restaurant's operations.`"
        :main="'We look forward to helping you streamline your operations and provide a better dining experience for your customers.'"
      />
    </div>

    <IoButtonsDouble :start_btn="'Get Started'" :demo_btn="'Get a demo'" />
  </div>
</template>

<style scoped>
.screen_container {
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color;
}
.triple_section {
  @apply mx-[200px] py-5;
}

@media (max-width: 576px) {
  .triple_section {
    @apply mx-0;
  }
}
</style>
