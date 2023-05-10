<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
    <div class="col-span-2">
      <DashboardTitle :title="'General data'" :isRow="false" />
      <div class="flex justify-start gap-2 pt-2">
        <div
          class="rounded-md bg-white w-[170px] h-[90px] border-solid border-[1px] border-[#E4E4E7]"
        >
          <p class="text-center pt-5 text-[#EF314E] font-bold text-lg">
            52,925,254
          </p>
          <p class="text-center pt-1 text-[#FF6137] font-medium text-xs">
            Total Earnings ($)
          </p>
        </div>
        <div
          class="rounded-md bg-white w-[170px] h-[90px] border-solid border-[1px] border-[#E4E4E7]"
        >
          <p class="text-center pt-5 text-[#EF314E] font-bold text-lg">
            325,87
          </p>
          <p class="text-center pt-1 text-[#FF6137] font-medium text-xs">
            Number of orders
          </p>
        </div>
      </div>
      <div class="flex justify-start gap-2 pt-2">
        <div
          class="rounded-md bg-white w-[170px] h-[90px] border-solid border-[1px] border-[#E4E4E7]"
        >
          <p class="text-center pt-5 text-[#EF314E] font-bold text-lg">
            312,53
          </p>
          <p class="text-center pt-1 text-[#FF6137] font-medium text-xs">
            Number of delivered orders
          </p>
        </div>
        <div
          class="rounded-md bg-white w-[170px] h-[90px] border-solid border-[1px] border-[#E4E4E7]"
        >
          <p class="text-center pt-5 text-[#EF314E] font-bold text-lg">8541</p>
          <p class="text-center pt-1 text-[#FF6137] font-medium text-xs">
            Number of customers
          </p>
        </div>
      </div>

      <div class="flex justify-start gap-2 pt-2">
        <div
          class="rounded-md bg-white w-[170px] h-[90px] border-solid border-[1px] border-[#E4E4E7]"
        >
          <p class="text-center pt-5 text-[#EF314E] font-bold text-lg">518</p>
          <p class="text-center pt-1 text-[#FF6137] font-medium text-xs">
            Number of merchants
          </p>
        </div>
        <div
          class="rounded-md bg-white w-[170px] h-[90px] border-solid border-[1px] border-[#E4E4E7]"
        >
          <p class="text-center pt-5 text-[#EF314E] font-bold text-lg">6854</p>
          <p class="text-center pt-1 text-[#FF6137] font-medium text-xs">
            Number of active customers
          </p>
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <DashboardTitle :title="'All orders data'" :isRow="false" />
    </div>
    <div><DashboardTitle :title="'All orders data'" :isRow="true" /></div>
    <div><DashboardTitle :title="'Sales by location'" :isRow="false" /></div>
  </div>
</template>

<style scoped></style>
