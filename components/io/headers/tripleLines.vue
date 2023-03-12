<template>
  <div class="header_container">
    <p class="question">{{ first_line }}</p>
    <h2 class="main_text">{{ main }}</h2>
    <p class="sub_text">
      {{ first_sub_main }}
    </p>
    <p class="sub_text">
      {{ second_sub_main }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  first_line: String,
  main: String,
  first_sub_main: String,
  second_sub_main: String,
});
</script>

<style scoped>
.header_container {
  @apply space-y-2 text-center mx-[100px] mb-12 dark:bg-dark-background-color
}

.main_text {
  @apply text-3xl font-bold text-font-color font-montse dark:text-white;
}

.sub_text {
  @apply text-sm  font-montse dark:text-background-color;
}

.question {
  @apply text-base  font-semibold text-primary-color;
}

@media (max-width: 576px) {
  article {
    @apply mt-7;
  }
}
</style>
