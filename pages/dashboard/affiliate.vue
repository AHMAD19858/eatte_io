<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
   <div>
      <div>
    <DashboardTitle :title="'Overview'" :isRow="false" />
  </div>
  <div>
    <DashboardTitle :title="'Clicks'" :isRow="false" />
  </div>
   </div>
</template>



<style  scoped>

</style>