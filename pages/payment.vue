<script setup>
import payment from "../assets/images/heroImages/payment.svg";
import service1 from "../assets/images/icons/hand.svg";
import service3 from "../assets/images/icons/code.svg";
import service2 from "../assets/images/icons/charts.svg";
import one from "../assets/images/features/payment/one.svg";
import two from "../assets/images/features/payment/two.svg";
import three from "../assets/images/features/payment/three.svg";

const serviceData = [
  {
    img: service2,
    label: "Accept All Payment Methods",
    desc: "Payments with Visa, MasterCard, and Digital Wallets are all supported.",
  },
  {
    img: service1,
    label: "Eliminate Manual Entry",
    desc: "Eliminate manual entry mistakes at the checkout for faster transactions.",
  },
  {
    img: service3,
    label: "Remote Access",
    desc: `Monitor all your transactions remotely from any device, anywhere and at any time.`,
  },
];

const featuresData = [
  {
    position: "right",
    img: one,
    title: "Easily accept payments online and in-store.",
    sub_title: `Easily accept payments online and in-store.`,
    details: [
      {
        main: "Simple pricing with no hidden fees.",
        details: "That's right, none! We dislike fees as much as you do.",
      },
      {
        main: "Fast and secure checkout experience.",
        details: "Built-in PCI compliance and fraud prevention.",
      },
      {
        main: "No third-party accounts required",
        details:
          "Setup is instant and getting support is simple. Whatever you need, we got you.",
      },
      {
        main: "Manage your entire business and financials in one place",
        details: "Complete sales and get paid without ever leaving your POS.",
      },
    ],
  },

  {
    position: "left",
    img: two,
    title: "One Platform to Power Your Restaurant",
    sub_title: `One Platform to Power Your Restaurant`,
    details: [
      {
        main: "Single provider for all your restaurant needs",
        details:
          "Invest in a partner that is continuously innovating and improving its suite of products, not just providing you with statements.",
      },
      {
        main: "Insights to better understand your customers",
        details:
          "Capture guest data that can be used to send targeted marketing campaigns that delight customers and drive revenue.",
      },
      {
        main: "Offline mode for payment processing",
        details:
          "Reliably accept credit card payments online or offline without skipping a beat.",
      },
      {
        main: "Customize with your branding",
        details:
          "Upload your logo and pictures of menu items so your digital presence looks and feels like your restaurant.",
      },
    ],
  },

  {
    position: "right",
    img: three,
    title: "Partner that Prioritizes Security",
    sub_title: `Partner that Prioritizes Security`,
    details: [
      {
        main: "Real-time machine-learning fraud monitoring",
        details:
          "Our systems help detect and block suspicious online ordering transactions in real-time to prevent resulting chargebacks.",
      },
      {
        main: "Hardware equipped with EMV and NFC technology",
        details:
          "Processing chip cards or mobile payments on our hardware leverages EMV or NFC technology to help prevent fraudulent transactions.",
      },
      {
        main: "Encryption to protect payment card data",
        details:
          "From the moment a customer pays for their order, payment data is encrypted to prevent payment card data getting into the wrong hands.",
      },
    ],
  },
];

const graphData = [
  {
    title: "Built-in protection",
    desc: "Secure your data with end-to-end encryption for all transactions, in-store and onlines.",
  },
  {
    title: "Take contactless payments",
    desc: "Benefit from increased mobility and take payments anywhere, in-store or curbside.",
  },
  {
    title: "fully loaded payments terminal",
    desc: "Accept every payment type credit, debit and gift cards.",
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'Payments'"
      :sub_text="'Get peace of mind with the payments solution that offers transparent pricing. EATTE is a three-in-one hardware, software, and support solution that saves you time and money, and lets guests pay any way they like.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="payment"
      :another_device="true"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Grow Your Business'"
        :main="'Enable Payments Easily & Securely'"
        :first_sub_main="`Accept payments seamlessly and securely to power your restaurant with insights.`"
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

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Payment Features'"
        :main="'A better experience, for you and your customers'"
        :first_sub_main="'EATTE Payments provides everything you need to process sales and get paid in one place.'"
      />
    </div>
    <div class="container">
      <IoFeatures :items="featuresData" />
    </div>

    <IoLandingInfoGraphic2 :data="graphData" />

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Discover More'"
        :main="'All You Require, Conveniently Located in One Place.'"
        :first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
        :second_sub_main="'integrated software suite, providing unbeatable convenience.'"
      />
    </div>
    <IoCard />
    <!-- <IoButton :secondary="true" :title="'View All Services'" /> -->

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
