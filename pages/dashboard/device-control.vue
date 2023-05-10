<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <!-- Breadcrumb component -->
  <!-- page -->
  <h1>Device Control</h1>

  <div class="flex items-center flex-wrap -mx-5">
    <div class="px-5 h-full md:w-2/3">
      <div class="bg-zinc-200">Grid 1</div>
    </div>
    <div class="px-5 h-full md:w-1/3">
      <h5 class="mb-2">Add a new device</h5>
      <div class="bg-zinc-200/70 p-5 form-wrapper rounded-md">Grid 2</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .form-wrapper{
        min-height: calc(100vh - 200px);
    }
</style>