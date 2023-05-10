<template>
  <div
    class="card bg-white border border-1 border-[rgba(147, 163, 176, 0.16)] rounded-[16px] p-10"
    :class="{ '!border-main': selected }"
  >
    <div class="max-w-[270px] mx-auto">
      <span
        class="bg-yellow-500 text-zinc-700 text-xs rounded-full px-4 py-2 uppercase mb-4 inline-block"
        v-if="plan.popular"
        >popular</span
      >
      <h1 class="font-bold uppercase text-3xl tracking-wider mb-4">
        {{ plan.name }}
      </h1>
      <p class="text-dark">
        {{ plan.desc }}
      </p>
      <ul class="text-left my-5">
        <li v-for="(item, index) in plan.list" :key="index">
          <i class="bx bx-check text-green-600 me-2"></i>
          <span class="text-zinc-500">
            {{ item }}
          </span>
        </li>
      </ul>
      <hr />
      <div class="my-3">
        <h3 class="font-bold">
          {{ plan.upfront }}
        </h3>
        <h2 class="my-4">
          <span>$</span>
          <span class="font-bold text-3xl">{{ plan.perMonth }}</span>
          <span class="text-zinc-400">/mo</span>
        </h2>
        <h2 class="my-4">{{ plan.fee }} Processing fee</h2>
        <button
          @click="
            plan.selected = !plan.selected;
            $emit('selected');
          "
          class="bg-transparent transition-all uppercase ease-in-out duration-150 rounded-[8px] border-main border-1 border text-main  py-3 font-semibold tracking-wide disabled:opacity-75 disabled:cursor-not-allowed w-full"
          :class="{ '!bg-main  !text-white': selected }"
        >
          {{ selected ? "Selected" : "Select" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  plan: Object,
  selected: Boolean,
});
</script>