<script setup>
const props = defineProps({
  slogan: String,
  shadow_slogan: String,
  sub_header: String,
  start_btn: String,
  demo_btn: String,
  about: Boolean,
});
</script>

<template>
  <section>
    <div class="header_container">
      <img
        v-if="about === true"
        src="~/assets/images/shadow/Ellipse.svg"
        alt=""
        class="shadow_color"
      />
      <h1 v-if="about === true" class="slogan animate-slideDown">
        {{ shadow_slogan }}
      </h1>
      <h1 v-if="about === true" class="slogan animate-slideDown">
        exclusively for restaurants, we're on a mission to enrich the food
        experience for all.
      </h1>
      <h1 class="slogan animate-slideDown" v-if="about !== true">
        <span class="text_glow shadow_text">{{ shadow_slogan }}</span>
        {{ slogan }}
      </h1>

      <p class="sub_header">
        {{ sub_header }}
      </p>
      <div class="header_buttons">
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
        <NuxtLink to="https://eatte.io/request-demo" target="_blank">
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
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow_color {
  @apply absolute top-[41px] w-[600px];
}

.header_container {
  @apply mb-20 container flex flex-col items-center px-4  pt-[4rem] mx-auto text-center md:px-10 lg:px-32 dark:bg-dark-background-color;
}

@media (max-width: 576px) {
  /* 	.header_container {
	padding-top: 300px;
	} */
}

.slogan {
  @apply font-montse text-4xl font-bold leading-none text-font-color sm:text-5xl dark:text-white;
}

.sub_header {
  @apply font-montse px-8 mt-8 mb-12 text-lg text-font-color dark:text-white;
}

.header_buttons {
  @apply flex flex-wrap justify-center;
}

.text_glow {
  @apply text-black text-center text-5xl dark:text-white font-sans;
}

.shadow_text {
  filter: drop-shadow(0px 0px 35px #ff6137);
}

.get_started {
  @apply h-[52px] font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C];
}

.get_demo {
  @apply h-[52px] font-montse dark:text-white dark:border-white flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg text-font-color border-font-color border-2;
}

.screen_container {
  @apply bg-background-color min-h-full;
}
</style>
