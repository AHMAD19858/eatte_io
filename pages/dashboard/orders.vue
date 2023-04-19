<script lang="ts" setup>
import type { Header, Item } from "vue3-easy-data-table";
definePageMeta({
  layout: "dashboard",
});

const headers: Header[] = [
  { text: "merchants Name", value: "player" },
  { text: "Order ID", value: "team" },
  { text: "Order date", value: "number" },
  { text: "status", value: "position" },
  { text: "Customer", value: "indicator.height" },
  { text: "amount of items, ", value: "indicator.weight", sortable: true },
  { text: "payment method,", value: "lastAttended",  },
];

const items: Item[] = [
  {
    player: "Stephen Curry",
    team: "GSW",
    number: 30,
    position: "G",
    indicator: { height: "6-2", weight: 185 },
    lastAttended: "Davidson",
    country: "USA",
  },
  {
    player: "Lebron James",
    team: "LAL",
    number: 6,
    position: "F",
    indicator: { height: "6-9", weight: 250 },
    lastAttended: "St. Vincent-St. Mary HS (OH)",
    country: "USA",
  },
  {
    player: "Kevin Durant",
    team: "BKN",
    number: 7,
    position: "F",
    indicator: { height: "6-10", weight: 240 },
    lastAttended: "Texas-Austin",
    country: "USA",
  },
  {
    player: "Giannis Antetokounmpo",
    team: "MIL",
    number: 34,
    position: "F",
    indicator: { height: "6-11", weight: 242 },
    lastAttended: "Filathlitikos",
    country: "Greece",
  },
  {
    player: "Lebron James",
    team: "LAL",
    number: 6,
    position: "F",
    indicator: { height: "6-9", weight: 250 },
    lastAttended: "St. Vincent-St. Mary HS (OH)",
    country: "USA",
  },
  {
    player: "Kevin Durant",
    team: "BKN",
    number: 7,
    position: "F",
    indicator: { height: "6-10", weight: 240 },
    lastAttended: "Texas-Austin",
    country: "USA",
  },
  {
    player: "Lebron James",
    team: "LAL",
    number: 6,
    position: "F",
    indicator: { height: "6-9", weight: 250 },
    lastAttended: "St. Vincent-St. Mary HS (OH)",
    country: "USA",
  },
  {
    player: "Kevin Durant",
    team: "BKN",
    number: 7,
    position: "F",
    indicator: { height: "6-10", weight: 240 },
    lastAttended: "Texas-Austin",
    country: "USA",
  },
];
</script>

<template>
  <div>
    <div>
      <DashboardTitle :title="'All Orders'" :isRow="false" />
      <Table :headers="headers" :items="items"/>
    </div>
  </div>
</template>

<style>
.numbers {
  @apply text-center pt-4 text-dashboard-font-color font-bold text-lg font-montse;
}

.title {
  @apply text-center pt-1 pb-3 text-[#FF6137] font-medium text-xs font-montse px-[10px];
}

.card_container {
  @apply rounded-md bg-white w-[168px] h-[93px] border-solid border-[1px] border-[#E4E4E7];
}

.vue3-easy-data-table__header tr {
  height: 88px !important;
}
.vue3-easy-data-table__body tr {
  height: 40px;
}
</style>
