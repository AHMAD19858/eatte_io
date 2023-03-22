<script setup>
const props = defineProps({
  start_btn: String,
  demo_btn: String,
});
</script>
<template>
  <div class="header_buttons">
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
</template>

<style scoped>
.header_buttons {
  @apply flex flex-wrap justify-center;
}

.shadow_text {
  filter: drop-shadow(0px 0px 35px #ff6137);
}

.get_started {
  @apply font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-bold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C];
}

.get_demo {
  @apply font-montse dark:text-white dark:border-white flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 font-bold m-2 text-lg text-font-color border-font-color border-2;
}
</style>
