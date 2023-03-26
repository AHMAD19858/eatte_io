<script setup>
import PosImage from "../assets/images/heroImages/pos.svg";
import pos_devices from "../assets/images/pos_devices.svg";
import hardware from "../assets/images/hardware.png";
import pay1 from "../assets/images/backgrounds/pay1.png";
import pay2 from "../assets/images/backgrounds/pay2.png";
import pay3 from "../assets/images/backgrounds/pay3.png";
import pay4 from "../assets/images/backgrounds/pay4.png";
import service1 from "../assets/images/icons/hand.svg";
import service3 from "../assets/images/icons/code.svg";
import service2 from "../assets/images/icons/charts.svg";
import one from "../assets/images/features/pos/one.svg";
import two from "../assets/images/features/pos/two.svg";
import three from "../assets/images/features/pos/three.svg";
import four from "../assets/images/features/pos/four.svg";

const data = [
  {
    img: pay1,
    label: "pay with",
    title: "Google pay",
  },
  {
    img: pay2,
    label: "pay with",
    title: "QR pay",
  },
  {
    img: pay3,
    label: "pay with",
    title: "Apple pay",
  },
  {
    img: pay4,
    label: "pay with",
    title: "Credit pay",
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
    title: "Tableside Service",
    sub_title: `With handheld technology designed for the restaurant environment, you can enable your team to spend more time with guests, accelerate service, and speed up checkout through tableside ordering and payments.`,
    details: [
      {
        main: "Order Ready Notifications",
        details: "Take payments (EMV or Card) tableside.",
      },
      {
        main: "Tableside Payments",
        details: "Take tap, dip, or swipe payments tableside.",
      },
      {
        main: "Guest Feedback",
        details: "Collect and respond to guest feedback immediately.",
      },
    ],
  },
  {
    position: "left",
    img: two,
    title: "Online Ordering & Delivery",
    sub_title: `Grow your business online with your own commission-free ordering channels for takeout and delivery. EATTE point of sale lets you maximize off-premise sales while minimizing any costly 3rd party commissions.`,
    details: [
      {
        main: "Commission Free",
        details:
          "Increase sales and allow guests to easily & more safely order directly from you.",
      },
      {
        main: "Flat Rate Delivery",
        details:
          "Maintain your margins & guest data when you dispatch local drivers through an on-demand network to offer safer, contactless delivery.",
      },
    ],
  },
  {
    position: "right",
    img: three,
    title: "Analytics & Reporting",
    sub_title: `Manage your restaurant from anywhere. Dynamic reports in the cloud, accessed from any device, put you in control of your restaurant. Track everything in real time, including weekly category sales, wages and more.`,
    details: [
      {
        main: "Location Overview",
        details: `A unified view of net sales and labor costs across one location or hundreds.`,
      },

      {
        main: "Sales Summary",
        details: `Monitor performance over any time period.`,
      },
    ],
  },
  {
    position: "left",
    img: four,
    title: "Menu Managment",
    sub_title: `Make menu updates from any terminal at your restaurant or anywhere else on your smartphone. Avoid an awkward 86 with real time item countdowns so your servers and your kitchen are in sync.`,
    details: [
      {
        main: "Location Overview",
        details: `A unified view of net sales and labor costs across one location or hundreds.`,
      },

      {
        main: "Sales Summary",
        details: `Monitor performance over any time period.`,
      },
    ],
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'POS'"
      :sub_text="' Welcome to EATTE POS, the innovative omni-channel point of sale system designed to connect everything in your restaurant together. Our platform is the perfect solution for restaurant owners who want to streamline their operations, improve efficiency, and increase profitability.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="PosImage"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'How EATTE POS helps you?'"
        :main="'The Heartbeat Of Your Business'"
        :first_sub_main="`Our POS system helps you streamline your operations to meet customer's expectations.`"
        :second_sub_main="'It will help you to be more systematic and quick in your service to customers.'"
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
        :first_line="'POS Features'"
        :main="'Everything You Need To Run Your Restaurant'"
        :first_sub_main="'EATTE POS is a fully integrated system that connects all online delivery orders, online pickup orders, table reservations, dine-in, QR orders, and drive-thru orders to '"
        :second_sub_main="'stay one step ahead of a rapidly evolving hospitality market.'"
      />
    </div>
    <div class="container">
      <IoFeatures :items="featuresData" />
    </div>

    <div class="header_container small_header flex gap-12 mx-12">
      <div>
        <h1 class="main_text">
          EA<span class="text-primary-color dark:bg-dark-background-color"
            >TT</span
          >E
        </h1>
        <h1 class="main_text pt-3">Payments</h1>
      </div>
      <div>
        <p class="font-montse detail">
          One of the most powerful features of EATTE POS is its ability to split
          payments for each order by number of people, item, or seat. This means
          that you can easily manage complex orders and split payments between
          multiple customers, improving the customer experience and increasing
          customer satisfaction.
        </p>
      </div>
    </div>

    <div class="header_container">
      <div class="mt-9">
        <p class="font-montse">Our platform also accepts all kinds of:</p>
        <ul class="accepts_container">
          <li class="accepts_featurs">
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">credit cards</p>
          </li>

          <li class="accepts_featurs">
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Apple Pay</p>
          </li>

          <li class="accepts_featurs">
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Google Pay</p>
          </li>

          <li class="accepts_featurs">
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">gift cards</p>
          </li>

          <li class="accepts_featurs">
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">QR pay</p>
          </li>

          <p class="font-montse pt-2">
            and many more, making it easy for your customers to pay using their
            preferred payment method.
          </p>
        </ul>
      </div>

      <IoCarouselSingle :items="data" />

      <IoHeadersRow
        :service="'POS'"
        :sub_text="' Take contactless payments, streamline your ordering, and keep service hustling. The next generation of our handheld POS is ready for inside, outside, drive-through, curbside and more.'"
        :start_btn="'Get Started'"
        :demo_btn="'Get a demo'"
        :row_img="pos_devices"
        :without_btn="true"
      />
    </div>

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Discover More'"
        :main="'All You Require, Conveniently Located in One Place.'"
        :first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
        :second_sub_main="'integrated software suite, providing unbeatable convenience.'"
      />
    </div>
    <IoCard  />
    <IoButton :secondary="true" :title="'View All Services'" />

    <div class="container">
      <IoLandingLineCard
        :sub-title="'POYNT POS Hardware'"
        :title="'Integrations To Supercharge Your Business'"
        :desc="`From software to hardware, our integration with POYNT lets you source a full suite of hardware to meet the needs of your growing restaurant, providing you with the most reliable and flexible technology. EATTE will work with you every step of the way to implement and configure a flawless system that saves you time, money and headaches.`"
        :img="hardware"
      />
    </div>

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

.small_header {
  margin-top: 140px !important;
}
.header_container {
  width: 100%;
  /*  padding: 0 70px; */
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
