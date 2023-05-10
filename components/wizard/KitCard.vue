<template>
  <div
    class="card bg-white border border-1 border-[rgba(147, 163, 176, 0.16)] rounded-[16px] p-3 relative"
    :class="{ '!border-main': kit.selected }"
  >
    <span
      v-if="kit.selected"
      class="absolute top-3 right-3 rounded-md bg-green-300 text-green-700 px-3 py-1 text-xs uppercase"
      >Added</span
    >
    <div class="flex items-start gap-4">
      <img
        :src="kit.img"
        class="w-[140px] aspect-square bg-zinc-300 object-cover rounded-[12px]"
        alt=""
      />
      <div class="flex-1">
        <h3 class="text-xl font-bold text-dark">{{ kit.name }}</h3>
        <p class="text-zinc-400 text-xs">
          <span class="text-dark font-semibold">${{ kit.price }}</span
          >/mo per {{ kit.name }}
        </p>
        <p class="my-3 text-zinc-500 text-sm">
          {{ kit.desc }}
        </p>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-4" v-if="kit.count != null">
            <button
              class="w-[35px] border border-1-zinc-800 rounded-full inline-flex aspect-square items-center justify-center disabled:opacity-30"
              @click="
                kit.count--;
                kit.count == 0 ? (kit.selected = false) : '';
                $emit('countChanged', kit.count);
              "
              :disabled="kit.count <= 0"
            >
              <i class="bx bx-minus"></i>
            </button>
            <span>{{ kit.count }}</span>
            <button
              class="w-[35px] border border-1-zinc-800 rounded-full inline-flex aspect-square items-center justify-center disabled:opacity-30"
              @click="
                kit.count++;
                $emit('countChanged', kit.count);
              "
            >
              <i class="bx bx-plus"></i>
            </button>
          </div>
          <button
            @click="
              kit.selected = !kit.selected;
              $emit('added');
            "
            class="text-main capitalize"
            v-if="kit.count == null || kit.count > 0"
          >
            {{ kit.selected ? "remove" : " Add to kit" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  kit: Object,
  selected: Boolean,
});
</script>