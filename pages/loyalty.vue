<script setup>
import loyalty from "../assets/images/heroImages/loyalty.svg";
import service1 from "../assets/images/icons/hand.svg";
import service3 from "../assets/images/icons/code.svg";
import service2 from "../assets/images/icons/charts.svg";
import one from "../assets/images/features/loyalty/one.svg";
import two from "../assets/images/features/loyalty/two.svg";
import three from "../assets/images/features/loyalty/three.svg";

const serviceData = [
  {
    img: service2,
    label: "Intuitive",
    desc: "Seamless experiences for your guests.",
  },
  {
    img: service1,
    label: "Flexible",
    desc: "A loyalty program that fits your business.",
  },
  {
    img: service3,
    label: "Compatible",
    desc: `A program for any type of payment method.`,
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
    title: "Earn your points in moments",
    sub_title: `Swipe credit card, opt in, earn points. No extra steps needed`,
    details: [
      {
        main: "Opt-in on checkout screen",
        details: "Enter an email when checking out to sign up.",
      },
      {
        main: "Rewards points lookup",
        details: "Diners can log in to check loyalty progress anytime.",
      },
      {
        main: "Access detailed reports on gift card sales",
        details:
          "Analyze gift card sales by day, week, month, or more and see detailed order history on each gift card transaction",
      },
    ],
  },
  {
    position: "left",
    img: two,
    title: "Give customers a reason to spend more",
    sub_title: `Get up and running quickly with our easy-to-implement rewards program.`,
    details: [
      {
        main: "Points-based rewards",
        details:
          "Customize sign up bonuses, set accrual and redemption rates, and offer birthday rewards.",
      },
      {
        main: "One flat fee per month",
        details: "Don't be surprised by your loyalty program fees.",
      },
    ],
  },

  {
    position: "right",
    img: three,
    title: "Gcustomer order history",
    sub_title: `When customers return, our program shows their order history so you know exactly what they want`,
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
      :service="'Loyalty Program'"
      :sub_text="'Create and sell gift cards to your customers, track balances, and use gift cards as a payment method at your restaurant.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="loyalty"
      :another_device="true"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Grow Your Business'"
        :main="'Delight your guests with a loyalty program that just works'"
        :first_sub_main="`Turn every guest into a regular with our Loyalty program.`"
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
          :first_line="'Delight Guests and Secure Future Revenue'"
          :main="'Everything You Need To Run Your Restaurant'"
          :first_sub_main="'Drive immediate cash flow and repeat business with physical '"
          :second_sub_main="'and digital gift cards for your restaurant.'"
        />
      </div>
      <div class="container">
        <IoFeatures :items="featuresData" />
      </div>
    </div>
    <div class="py-12 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Increase Profitability'"
        :main="'create personalized and rewarding experiences for every guest'"
        :first_sub_main="'Drive repeat business and build long-term relationships with your customers online and'"
        :second_sub_main="'in store.'"
      />
    </div>
    <div class="container">
      <IoLandingInfoGraphic :data="graphData" />
    </div>

    <IoCard />
    <!-- <IoButton :secondary="true" :title="'View All Services'" /> -->

    <div class="py-12 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Overall, EATTE Marketing is the perfect tool for restaurant owners who want to automate their marketing efforts and improve customer retention. With our platform, you can save time and money while also building stronger relationships with your customers. ,'"
        :main="'So why wait? Sign up for EATTE today and take your restaurant to the next level'"
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
  /*   padding: 0 70px; */
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
