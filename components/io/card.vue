<script setup>
import cardOne from "~/assets/images/icons/services/one.svg";
import cardTwo from "~/assets/images/icons/services/two.svg";
import cardThree from "~/assets/images/icons/services/three.svg";
import cardFour from "~/assets/images/icons/services/four.svg";
import pos from "~/assets/images/icons/services/pos.svg";
import kds from "~/assets/images/icons/services/kds.svg";
import inventory from "~/assets/images/icons/services/inventory.svg";
import reservation from "~/assets/images/icons/services/reservation.svg";
import loyalty from "~/assets/images/icons/services/loyalty.svg";
import table from "~/assets/images/icons/services/table.svg";
import marketing from "~/assets/images/icons/services/marketing.svg";
import floor from "~/assets/images/icons/services/floor.svg";
import giftCard from "~/assets/images/icons/services/gift-card.svg";
import backOffice from "~/assets/images/icons/services/backoffice.svg";
import support from "~/assets/images/icons/services/support.svg";
import payment from "~/assets/images/icons/services/payment.svg";
import feedback from "~/assets/images/icons/services/feedback.svg";
import payroll from "~/assets/images/icons/services/payroll.svg";
import coupons from "~/assets/images/icons/services/coupons.svg";
import sms from "~/assets/images/icons/services/sms.svg";
import tips from "~/assets/images/icons/services/tips.svg";
import ordering from "~/assets/images/icons/services/ordering.svg";

const cardData = [
  {
    img: pos,
    label: "Point of sale system",
    learn_text: "LEARN MORE",
  },
  {
    img: kds,
    label: "Kitchen Display Screen",
    learn_text: "LEARN MORE",
  },
  {
    img: inventory,
    label: "Inventory",
    learn_text: "LEARN MORE",
  },
  {
    img: reservation,
    label: "Reservations",
    learn_text: "LEARN MORE",
  },
  {
    img: marketing,
    label: "Marketing",
    learn_text: "LEARN MORE",
  },
  {
    img: giftCard,
    label: "Gift Cards",
    learn_text: "LEARN MORE",
  },
  {
    img: loyalty,
    label: "Loyalty Program",
    learn_text: "LEARN MORE",
  },
  {
    img: payment,
    label: "Payments",
    learn_text: "LEARN MORE",
  },

  {
    img: ordering,
    label: "Online-ordering",
    learn_text: "LEARN MORE",
  },
  {
    img: cardOne,
    label: "Reports and analytics",
    learn_text: "LEARN MORE",
  },
  {
    img: cardTwo,
    label: "Takeout & Delivery Services",
    learn_text: "LEARN MORE",
  },
  {
    img: cardThree,
    label: "Customer Engagement",
    learn_text: "LEARN MORE",
  },
  {
    img: cardFour,
    label: "Employee Management",
    learn_text: "LEARN MORE",
  },
  {
    img: backOffice,
    label: "Back-Office Management",
    learn_text: "LEARN MORE",
  },
  {
    img: floor,
    label: "Floor Management",
    learn_text: "LEARN MORE",
  },
  {
    img: table,
    label: "Table Management",
    learn_text: "LEARN MORE",
  },

  {
    img: support,
    label: "Customer Support",
    learn_text: "LEARN MORE",
  },
  {
    img: feedback,
    label: "Guest feedback",
    learn_text: "LEARN MORE",
  },

  {
    img: coupons,
    label: "Coupons",
    learn_text: "LEARN MORE",
  },
  {
    img: sms,
    label: "SMS Marketing",
    learn_text: "LEARN MORE",
  },

  {
    img: payroll,
    label: "Payroll",
    learn_text: "LEARN MORE",
  },
  {
    img: tips,
    label: "Tips Management",
    learn_text: "LEARN MORE",
  },
];
</script>

<template>
  <Swiper
    class="mb-9"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="4"
    :autoplay="{
       delay: 250,
      disableOnInteraction: false,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide
      v-for="(item, index) in cardData"
      :key="index"
      class="rounded-[12px] overflow-hidden w-[100px]"
    >
      <div class="services_container">
        <div class="cards_container">
          <article>
            <div class="card_container">
              <img :src="item.img" class="phone_icon" alt="svg" />
            </div>

            <div >
              <h3 class="main_card_text">{{ item.label }}</h3>
              <p class="sub_title cursor-pointer">
                {{ item.learn_text }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
/* .services_container {
  @apply container  max-w-fit p-1 mx-auto space-y-8;
} */
.small_container {
  @apply md:grid grid-cols-3 gap-1 md:grid-cols-2 lg:grid-cols-3;
}
.cards_container {
  @apply md:flex grid-cols-3 gap-1 md:grid-cols-2 lg:grid-cols-4;
}

article {
  margin: 0 auto;
  @apply flex  flex-col bg-white rounded-2xl my-3 dark:bg-[#272727] w-[310px];
}

.card_container {
  @apply w-12 h-12 bg-[#ff613729] rounded-lg flex items-center m-4;
}

.main_card_text {
  @apply  pl-4 pb-5 text-primary-color flex-1 leading-snug text-[15px] font-bold font-montse  mb-2 dark:text-primary-color;
}

.phone_icon {
  @apply stroke-primary-color w-12 h-6 text-center text-3xl text-primary-color;
}
.sub_title {
  @apply  pl-4 pb-5 underline font-montse font-normal text-[#3F4440] text-sm  dark:text-white;
}

@media (max-width: 576px) {
  article {
    @apply mt-7;
  }
}
</style>
