<script setup>
const props = defineProps({
  title: String,
  primary: Boolean,
  secondary: Boolean,
});
</script>
<template>
  <div class="view_button" v-if="primary === true">
    <NuxtLink to="/get-started">
      <button class="get_started">
        {{ title }}
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

  <div class="view_button">
    <button class="get_demo" v-if="secondary === true">
      {{ title }}
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
</template>

<style scoped>
.view_button {
  @apply flex flex-wrap bg-background-color justify-center mb-12 mt-8 dark:bg-dark-background-color;
}

.get_demo {
  @apply font-montse font-bold dark:text-white dark:border-white flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg text-font-color border-font-color border-2;
}

.get_started {
  @apply font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C];
}
</style>
