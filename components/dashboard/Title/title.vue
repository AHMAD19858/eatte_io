<script setup>
const props = defineProps({
  title: String,
  isRow: false,
});
</script>

<template>
  <div v-if="isRow === false">
    <p class="title">
      {{ title }}
    </p>
  </div>

  <div v-if="isRow === true" class="isRow">
    <p class="title">{{ title }}</p>
    <p>row</p>
  </div>
</template>

<style scoped>
.isRow {
  @apply flex justify-evenly;
}
.title {
  @apply text-base font-montse font-semibold text-dashboard-font-color text-left;
}
</style>
