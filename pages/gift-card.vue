<script setup>
import GiftCard from "../assets/images/heroImages/gift.svg";
import service1 from "../assets/images/icons/hand.svg";
import service3 from "../assets/images/icons/code.svg";
import service2 from "../assets/images/icons/charts.svg";
import one from "../assets/images/features/gift/one.svg";
import two from "../assets/images/features/gift/two.svg";
import phoneCase from "../assets/images/phone-case.png";


const serviceData = [
  {
    img: service2,
    label: "Multi-Channel",
    desc: "Allow guests to text or email e-gift cards. Physical gift cards are also available.",
  },
  {
    img: service1,
    label: "Integrated",
    desc: "E-gift cards can be used when ordering online as well as in-store.",
  },
  {
    img: service3,
    label: "Easy to Use",
    desc: `Guests can check their e-gift card balance easily online from your website.`,
  },
];

const graphData = [
  {
    title: "Improve Your Cash Flow",
    desc: "Sell gift cards at your restaurant and utilize them as prepaid sales.",
  },
  {
    title: "Payment Methods",
    desc: "Accept gift cards in-store as a viable and secure payment option.",
  },
  {
    title: "Attract Customers With Promotions",
    desc: "Widen your customer base by introducing promotional gift cards.",
  },
];

const featuresData = [
  {
    position: "right",
    img: one,
    title: "Increase Revenue With Gift Card Sales",
    sub_title: `Create multiple gift cards for your customers to boost your profit and further engage with your customers`,
    details: [
      {
        main: "Give the Gift of Convenience with Digital Gift Cards",
        details:
          "Digital gift cards make it easy for diners to access and redeem gift cards from their smartphones.",
      },
      {
        main: "Drive short-term cash flow for your long-term plan",
        details:
          "guests who make a purchase using a gift card spend more than the value of the gift card.",
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
    title: "Guests Can Easily Manage Their Own Gift Cards",
    sub_title: `Guests can check their e-gift card balance easily online from your website.`,
    details: [
      {
        main: "Email and text gift cards are easy to buy and sell",
        details:
          "Allow guests to buy email gift cards and send via email or SMS, with a message of their choice.",
      },
      {
        main: "Gift card redemption is simple and easy",
        details:
          "Allow guests to pay with a gift card over the phone, when ordering online or in person at the POS system.",
      },
      {
        main: "Online balance management is intuitive.",
        details:
          "Allow guests to look up their gift card balance online, and even add more value to it, whenever they want.",
      },
    ],
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Gift Cards'"
      :sub_text="'Create and sell gift cards to your customers, track balances, and use gift cards as a payment method at your restaurant.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="GiftCard"
      :another_device="true"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Grow Your Business'"
        :main="'Deliver a Standout Guest Experience'"
        :first_sub_main="`Give your guests a way to support your business with modern gift cards.`"
      />
    </div>

    <div class="pos_helps">
      <div class="py-12 bg-background-color dark:bg-dark-background-color">
        <IoServices :items="serviceData" :numbers="3" />
        <div class="bg-white col">
          <IoButton :secondary="true" :title="'See Pricing'" />
        </div>
      </div>
    </div>

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
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

    <div class="container">
      <IoLandingMobileShowCase :data="graphData" :img="phoneCase" />
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
        :first_line="'Overall, EATTE Marketing is the perfect tool for restaurant owners who want to automate their marketing efforts and improve customer retention. With our platform, you can save time and money while also building stronger relationships with your customers. ,'"
        :main="'So why wait? Sign up for EATTE today and take your restaurant to the next level'"
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
  @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color pt-[170px];
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
