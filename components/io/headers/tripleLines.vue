<template>
  <div class="header_container">
    <p class="question">{{ first_line }}</p>
    <p class="main_text">{{ main }}</p>
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
  @apply space-y-2 text-center  my-12 dark:bg-dark-background-color mx-[60px]
}

.main_text {
  @apply text-3xl font-bold text-font-color font-montse dark:text-white;
}

.sub_text {
  @apply text-lg font-montse dark:text-background-color;
}

.question {
  @apply text-xl font-montse  font-bold text-primary-color pb-[8px];
}

@media (max-width: 576px) {
  article {
    @apply mt-7;
  }
}
</style>
