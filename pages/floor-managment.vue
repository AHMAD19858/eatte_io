<script setup>
import PosImage from "../assets/images/pos.svg";
import dash from "../assets/images/dashboard.svg";
import one from "../assets/images/features/floor/one.svg";
import two from "../assets/images/features/floor/two.svg";
import three from "../assets/images/features/floor/three.svg";

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

const featuresData = [
  {
    position: "right",
    img: one,
    title: "an organized floor promotes a positive shopping experience ",
    sub_title: `The layout and organization of the floor space play a significant role in floor management. A well-planned floor layout ensures that customers can navigate the space with ease and find what they are looking for quickly. Additionally, an organized floor promotes a positive shopping experience, leading to increased customer satisfaction and repeat business. The layout should be designed in a way that maximizes the use of space while also allowing for easy movement and accessibility."`,
  },
  {
    position: "left",
    img: two,
    title: "encourage customers to stay longer and return in the future.",
    sub_title: `The role of employees in maintaining a clean and tidy floor cannot be overstated. Employees should be trained to keep the floor space clean and organized at all times. They should be responsible for regularly restocking shelves, removing clutter, and ensuring that all products are in their designated areas. By doing so, employees can create a welcoming environment that encourages customers to stay longer and return in the future.`,
  },
  {
    position: "right",
    img: three,
    title:
      "Strategies for managing high traffic areas and preventing overcrowding  ",
    sub_title: `Strategies for managing high traffic areas and preventing overcrowding are essential for effective floor management. One strategy is to create designated areas for popular products or services to prevent overcrowding in certain areas of the floor. Another strategy is to implement a queue management system to ensure that customers are served in an orderly and efficient manner. Additionally, businesses can make use of technology to monitor foot traffic and identify areas that require attention."`,
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Floor Management'"
      :sub_text="`Floor management is critical to the success of any business. The layout and organization of the floor space, the role of employees in maintaining a clean and tidy floor, and strategies for managing high traffic areas and preventing overcrowding are all essential components of effective floor management.`"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="PosImage"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Floor management is a crucial aspect of maintaining a successful business'"
        :main="'ensure a positive experience for customers and efficient operations for employees'"
        :first_sub_main="`Floor management is a crucial aspect of maintaining a successful business. It involves the organization and `"
        :second_sub_main="'maintenance of the floor space to ensure a positive experience for customers and efficient operations for employees. In this essay, we will explore the importance of floor management and discuss strategies for effective management.'"
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
        :first_line="'In conclusion, floor management is critical to the success of any business. The layout and organization of the floor space, the role of employees in maintaining a clean and tidy floor, and strategies for managing high traffic areas and preventing overcrowding are all essential components of effective floor management. By implementing these strategies, businesses can create a positive shopping experience for customers while also improving operational efficiency.'"
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
