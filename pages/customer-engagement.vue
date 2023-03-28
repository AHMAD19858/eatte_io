<script setup>
import PosImage from "../assets/images/heroImages/customer-engagment.svg";
import one from "../assets/images/features/customer_engagement/one.svg";
import two from "../assets/images/features/customer_engagement/two.svg";

const featuresData = [
  {
    position: "right",
    img: one,
    title: "Strong relationships with our customers",
    sub_title: `At EATTE, we constantly strive to build strong relationships with our customers. We take feedback seriously, so if there is ever anything that we can do to improve our services, let us know. We truly value your opinion and want to create a better experience for you.`,
  },
  {
    position: "left",
    img: two,
    title: "Feel taken care of and that your experience with us is positive ",
    sub_title: `At EATTE, we strive to create an environment where customers can trust that their needs will be met. We want to ensure that you feel taken care of and that your experience with us is positive and meaningful. So if there’s ever anything that we can do for you, just let us know."`,
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Customer Engagement'"
      :sub_text="`At EATTE, we believe in customer engagement. We strive to create a positive, meaningful and valuable experience for each of our customers. We believe that providing the best customer service means taking the time to understand your needs and offering helpful solutions that make you feel taken care of.`"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="PosImage"
      :another_device="true"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'We are committed to providing helpful, friendly, and professional customer service every time. '"
        :main="'TWe understand that you may have questions and need help'"
        :first_sub_main="`so we’re here for you when you need us. Whether you're looking for a quick answer to a question you have,`"
        :second_sub_main="' or you need detailed instructions on how to do something, our knowledgeable support staff is here to help.'"
      />
    </div>
    <div class="bg-white dark:bg-dark-background-color">
      <div class="container">
        <IoFeatures :items="featuresData" />
      </div>
    </div>
    <div class="py-12 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Discover More'"
        :main="'All You Require, Conveniently Located in One Place.'"
        :first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
        :second_sub_main="'integrated software suite, providing unbeatable convenience.'"
      />
    </div>
    <IoCard />
    <!-- <IoButton :secondary="true" :title="'View All Services'" /> -->

    <div class="py-12 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Overall, EATTE Payments is the perfect tool for restaurant owners who want to take their operations to the next level. With our platform, you can streamline your operations, increase efficiency, and boost profitability.'"
        :main="'So why wait? Sign up for EATTE today and transform the way you run your restaurant!'"
      />
    </div>

    <div class="pb-12 pt-[50px]">
      <IoButtonsDouble :start_btn="'Get Started'" :demo_btn="'Get a demo'" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  /*  padding: 0 70px; */
  margin: 0 auto;
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
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color pt-[270px];
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
