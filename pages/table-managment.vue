<script setup>
import PosImage from "../assets/images/pos.svg";
import dash from "../assets/images/dashboard.svg";
import service1 from "../assets/images/icons/hand.svg";
import service3 from "../assets/images/icons/code.svg";
import service2 from "../assets/images/icons/charts.svg";
import one from "../assets/images/features/pos/one.svg";

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

const serviceData = [
  {
    img: service2,
    label: "Increase sales",
    desc: "Increase sales with built-in tools that help you boost average check size, speed up table turnover, and promote your most profitable menu items.",
  },
  {
    img: service1,
    label: "Deliver Great Guest Experience",
    desc: "Deliver better service with a mobile POS that helps you seat guests faster, minimize order errors, keep lines moving, and process payments without a hitch.",
  },
  {
    img: service3,
    label: "Save Time and Money",
    desc: `Manage staff, floor plans, and costs with on-the-go tools that help you spot ways to save time and money - whether you're in-venue or out of office.`,
  },
];

const featuresData = [
  {
    position: "right",
    img: one,
    title: "Effective table management is crucial in restaurants ",
    sub_title: `as it helps to ensure that customers are seated, served, and cleared from tables efficiently. This is particularly important during peak hours when the restaurant is busy, and customers are waiting in line to be seated. By managing the seating arrangements and the flow of customers, restaurants can minimize wait times and provide customers with a better overall experience."`,
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Table Management with Server Rotation'"
      :sub_text="`Effective table management is crucial in restaurants as it helps to ensure that customers are seated, served, and cleared from tables efficiently.`"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="PosImage"
    />

    <div class="bg-white pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Table management is an essential aspect of running a successful restaurant'"
        :main="'Ensuring that customers are seated promptly, served efficiently, and provided with an enjoyable dining experience requires careful planning and organization'"
        :first_sub_main="`Table management is an essential aspect of running a successful restaurant. Ensuring that customers are seated promptly, served efficiently,`"
        :second_sub_main="'and provided with an enjoyable dining experience requires careful planning and organization. One strategy that many restaurants use to manage their tables effectively is server rotation. In this essay, we will discuss the importance of table management with server rotation and how it can impact the customer experience.'"
      />
    </div>

    <div class="pos_helps">
      <div class="py-12 bg-white dark:bg-dark-background-color">
        <IoServices :items="serviceData" :numbers="3" />
        <div class="bg-white col">
          <IoButton :secondary="true" :title="'See Pricing'" />
        </div>
      </div>
    </div>

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'POS Features'"
        :main="'Everything You Need To Run Your Restaurant'"
        :first_sub_main="'EATTE POS is a fully integrated system that connects all online delivery orders, online pickup orders, table reservations, dine-in, QR orders, and drive-thru orders to '"
        :second_sub_main="'stay one step ahead of a rapidly evolving hospitality market.'"
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
    <IoCard :items="cardData" :numbers="4" />
    <IoButton :secondary="true" :title="'View All Services'" />

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
  /* padding-top: 150px; */
}
.pos_helps {
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;
  background-color: white;
  @apply dark:bg-dark-background-color;
}

.header_container {
  width: 100%;
  padding: 0 70px;
  margin: 0 auto;
  max-width: 1200px;
}
.screen_container {
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color pt-[100px];
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
