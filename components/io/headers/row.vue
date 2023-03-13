<script setup>
const props = defineProps({
  service: String,
  sub_text: String,
  start_btn: String,
  demo_btn: String,
  row_img: String,
  without_btn: Boolean,
  small_paragraph: String,
  another_device: Boolean,
});
</script>

<template>
  <div class="container">
    <div class="about_section">
      <div class="left_side">
        <h6
          v-if="without_btn === true"
          class="font-montse font-bold text-lg mb-0 text-primary-color mt-10"
        >
          POS In The Palm Of Your Hand
        </h6>
        <h2
          v-if="without_btn === true"
          class="font-montse text-3xl text-font-color"
        >
          Mobile Handheld POS To Keep Your Business Moving
        </h2>

        <div v-if="without_btn !== true">
          <h1 class="main_text ">
            EA<span class="text-primary-color ">TT</span>E {{ service }}
          </h1>
        </div>
        <p class="sub_text ">
          {{ sub_text }}
        </p>
        <ul v-if="without_btn === true">
          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">
              Deliver faster, safer service, and be ready to pivot on the fly.
            </p>
          </li>

          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">
              Tucks easily into your back pocket or apron.
            </p>
          </li>

          <li class="font-montse">
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">
              Give guests the convenience of contactless tap payments with cards
              and digital wallets, alongside chip or swipe.
            </p>
          </li>
        </ul>
        <div class="right_section animate-slideDown" v-if="without_btn !== true">
          <div class="col">
            <NuxtLink to="https://eatte.io/new_wizard/" target="_blank">

              <button class="get_started">
                {{ start_btn }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </NuxtLink>
          </div>

          <div class="col demo_container">
            <button class="get_demo">
              {{ demo_btn }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="left_side devices_shapes animate-fade">
        <img
          :class="another_device == true ? 'another_device' : 'mobile'"
          :src="row_img"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.get_started {
  @apply z-10 h-[52px] font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3  text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C];
}

.get_demo {
  @apply z-10 h-[52px] font-montse dark:text-white dark:border-white flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3  text-lg text-font-color border-font-color border-2;
}
.container {
  @apply w-full max-w-[1200px] py-0 px-[15px] mx-auto z-10 my-28;
}

.about_section {
  @apply flex justify-between items-start flex-wrap mb-[100px] gap-[50px];
}

.about_section .left_side {
  position: relative;
  width: calc(100% / 2 - 25px);
}

.about_section .left_side.devices_shapes {
  left: 10%;
}

/* .about_section .left_side img{
     @apply absolute right-[-10%] object-cover object-left-bottom h-[500px]
  
} */
.mobile {
  right: unset;
  object-fit: contain !important; 
  object-position: unset;
  height: auto;
  @apply z-10 top-[-70px] absolute right-[-10%] object-cover object-left-bottom h-[500px];
}
.another_device {
  right: unset;
  object-fit: unset;
  object-position: unset;
  height: auto;
  @apply z-10 top-[-170px]  absolute right-[0%] object-cover object-left-bottom h-[500px];
}
.about_section .left_side h1 {
  @apply mb-[15px] font-bold text-5xl font-montse;
}

.about_section .left_side p {
  @apply text-lg mb-[30px] font-montse;
}

.about_section .left_side ul {
  @apply list-none p-0 flex justify-between items-start flex-wrap gap-5;
}

.about_section .left_side ul li {
  @apply flex items-center w-full gap-[10px];
}

.about_section .left_side ul li i {
  @apply text-primary-color text-[20px];
}

.about_section .left_side ul li p {
  @apply text-base font-semibold mb-0 font-montse;
}

.right_section {
  @apply flex justify-between gap-8 my-10;
}

@media (max-width: 992px) {
  .about_section .left_side {
    @apply w-full;
  }
}

.main_text {
  @apply text-[35px] font-bold text-font-color leading-7 font-montse dark:text-white
}

@media (min-width: 1440px) {
  .about_section .left_side.devices_shapes {
    left: 20%;
  }
}
@media (max-width: 1200px) {
  .container {
    @apply max-w-[992px];
  }
  .about_section .left_side img.mobile {
    transform: scale(0.8);
    left: -140px;
    top: -120px;
  }
  .about_section .left_side.devices_shapes {
    @apply left-[5%];
  }
}

@media (max-width: 992px) {
  .container {
    @apply max-w-3xl;
  }
  .about_section .left_side img {
    position: initial;
    @apply h-auto block object-contain;
  }
  .about_section .left_side img.mobile {
    margin: auto;
    transform: translateX(45px);
  }
  .about_section .left_side.devices_shapes {
    left: unset;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 576px;
  }
}

@media (max-width: 576px) {
  .about_section .left_side img.mobile {
    margin: auto;
    transform: unset;
    /* margin-inline: 50px; */
  }

  .right_section {
    @apply block justify-between gap-8 my-10;
  }
  .container {
    max-width: 100%;
  }

  .main_text {
    @apply text-center text-2xl;
  }
  .sub_text {
    @apply text-center;
  }
  .right_section {
    @apply flex items-center flex-col text-center;
  }
}
</style>
