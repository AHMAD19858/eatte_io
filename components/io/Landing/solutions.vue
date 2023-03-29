<script setup>
// import images
import hat from "~/assets/images/icons/hat.svg";
import roomService from "~/assets/images/icons/room-service.svg";
import users from "~/assets/images/icons/users.svg";
import restaurant from "~/assets/images/icons/restaurant.svg";
import shop from "~/assets/images/icons/shop.svg";
import coffee from "~/assets/images/icons/coffee.svg";
import food from "~/assets/images/icons/food.svg";
import mug from "~/assets/images/icons/mug.svg";
import hamburger from "~/assets/images/icons/hamburger.svg";
import location from "~/assets/images/icons/location.svg";
const items = [
  {
    image: hat,
    title: "Full Service Restaurant",
    desc: " Elevate the dining experience or keep it casual -- Everything you need for quality tableside and off-premise service in one easy-to-use platform.",
  },
  {
    image: users,
    title: "Family Style",
    desc: "Our POS: easy-to-use, fast, will never let you down. Together,we make an unstoppable team.",
  },
  {
    image: coffee,
    title: "Coffee Shop",
    desc: "Our coffee shop POS makes it easier for you to conquer the morning rush, increase profit margins, and crush the competition.",
  },
  {
    image: food,
    title: "Bakery",
    desc: "Our POS system allows you to quickly create orders, process payments, and keep track of inventory.",
  },
  // service 2
  {
    image: roomService,
    title: "Catering",
    desc: "Using a POS system will help streamline your catering business operations, improve customer service, and reduce overall costs.",
  },
  {
    image: restaurant,
    title: "Fine Dining",
    desc: "All-in-one fine dining restaurant POS has the tools you need to deliver an elevated hospitality experience for your guests.",
  },
  {
    image: hamburger,
    title: "Fast Casual",
    desc: "Our full-service POS system offers a variety of features that make ordering, tracking, and reporting easier and more efficient.",
  },
  {
    image: mug,
    title: "Cafe",
    desc: "EATTE has the software, hardware, and support to help you achieve your goals.",
  },
  // service 3
  {
    image: shop,
    title: "Quick Service Restaurant",
    desc: "At our restaurants, you don't have to wait in line for long  periods of time. Our staff will greet you with a smile and  have your order taken quickly. We also offer takeout options, so you can take your order to go and enjoy it in the comfort of your own home.",
  },
  {
    image: location,
    title: "Food Truck",
    desc: " We’re here to provide you with some of the tastiest dishes on the go. Our menu is ever-growing and expanding, offering something for everyone. Whether you’re looking for a quick bite to eat or a more substantial meal, we’ve got you covered.",
  },
];
</script>
<template>
  <div class="solutions_section">
    <img class="line-top" src="~/assets/images/line.svg" alt="svg" />

    <div class="container mx-auto">
      <div class="header_container">
        <h2 class="main_text">
          Solution sets for every business type and size.
        </h2>
        <p class="sub_text">
          We understand that every business is different and our goal is to
          provide tailored solutions for businesses of all types and sizes.
        </p>
      </div>

      <section class="text-black">
        <div class="flex justify-center p-4 mx-auto md:p-8 flex-wrap">
          <div
            class="item_section flex-col w-full xl:w-1/4 lg:w-1/3 md:w-1/2 text-center"
            v-for="(item, index) in items"
            :key="index"
          >
            <img
              :src="item.image"
              v-show="$colorMode.value === 'dark'"
              class="darak_img"
              alt="svg"
            />
            <img
              :src="item.image"
              v-show="$colorMode.value === 'light'"
              alt="svg"
            />
            <h3 class="font-montse font-bold dark:text-white">
              {{ item.title }}
            </h3>
            <p
              class="dark:text-[#93A3B0CC] text-center max-max-w-[300px] font-montse font-normal text-base text-[#3F4440]"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <img class="line-bottom" src="~/assets/images/lineEnd.svg" alt="svg" />
  </div>
</template>

<style scoped lang="scss">
.item_section {
  border-block-end: 1px solid #93a3b029;
  border-inline-end: 1px solid #93a3b029;
  /* Default */
  &:last-child,
  &:nth-child(4),
  &:nth-child(8) {
    border-inline-end: none;
  }
  &:last-child,
  &:nth-last-child(2) {
    border-block-end: none;
  }
  /* Samll Desktop */
  @media (max-width: 1280px) {
    &:nth-child(4),
    &:nth-child(8) {
      border-inline-end: 1px solid #93a3b029;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      border-inline-end: none;
    }
    &:nth-child(9) {
      border-block-end: 1px solid #93a3b029;
    }
    &:last-child {
      border-inline-end: 1px solid #93a3b029;
      border-inline-start: 1px solid #93a3b029;
    }
  }
  @media (max-width: 1024px) {
    &:nth-child(even) {
      border-inline-end: none;
    }
    &:nth-last-child(2) {
      border-block-end: none;
    }
    &:nth-child(3) {
      border-inline-end: 1px solid #93a3b029;
    }
  }
  @media (max-width: 768px) {
    border-inline-end: none !important;
    border-inline-start: none !important;
    &:not(:last-child) {
      border-block-end: 1px solid #93a3b029;
    }
  }
}
</style>
<style scoped>
.darak_img {
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(70deg)
    brightness(99%) contrast(107%);
}
.header_container {
  @apply space-y-2 text-center mb-1 pt-11;
}

.main_text {
  @apply text-3xl font-bold text-primary-color font-montse;
}

.sub_text {
  @apply font-montse text-xl text-font-color font-normal dark:text-white;
}

.container {
  @apply w-full  py-0 px-[15px];
}

.solutions_section {
  @apply relative bg-white mt-[260px] mb-[175px] mx-0 dark:bg-[#272727];
}
.sol_container {
  @apply flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x  divide-[#93A3B029];
}

.divide_section {
  @apply flex flex-col w-full divide-y divide-[#93A3B029];
}
.item_section {
  @apply flex flex-col gap-2 items-center justify-start p-4 sm:py-8 lg:py-12;
}
.solutions_section::before,
.solutions_section::after {
  @apply absolute left-0 block h-[110px] w-full  bg-cover bg-no-repeat content-[''];
}

.solutions_section::before {
  @apply top-[-110px] bg-[url('../../../assets/images/Vector.svg')] bg-[top_center] dark:bg-[url('../../../assets/images/blackTop.svg')];
}

.solutions_section::after {
  @apply bottom-[-110px] bg-[bottom_center] bg-[url('../../../assets/images/Vector1.svg')] dark:bg-[url('../../../assets/images/blackDown.svg')];
}

.solutions_section .line-top {
  @apply absolute top-[-125px] object-cover w-full z-[1];
}

.solutions_section .line-bottom {
  @apply absolute bottom-[-160px] object-cover w-full z-[1];
}

@media (max-width: 1200px) {
  .container {
    max-width: 992px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 768px;
  }
  .divide_section {
    gap: 219px;
  }
}

@media (max-width: 768px) {
  .container {
    @apply max-w-[576px];
  }
}

@media (max-width: 576px) {
  .divide_section {
    margin-top: 70px;
  }
  .container {
    @apply max-w-full;
  }
  .solutions_section {
    /* height: 2357px; */
    margin-bottom: 150px;
  }

  .solutions_section .line-bottom {
    bottom: -85px;
  }
}
</style>
