<script setup>
defineProps({
  subTitle: String,
  title: String,
  desc: String,
  img: String,
});
</script>
<template>
  <div
    class="line-card text-center rounded-[12px] shadow-xl p-12 my-12 relative"
  >
    <!-- img overlay -->
    <img
      src="@/assets/images/visuals/lines.png"
      class="absolute w-full h-full top-0 left-0 object-cover z-[1]"
      alt=""
    />
    <div class="relative z-[2]">
      <h3 class="font-montse text-primary-color font-bold">{{ subTitle }}</h3>
      <h1 class="font-montse text-3xl mb-4">{{ title }}</h1>
      <p class="font-montse text-xl">{{ desc }}</p>
      <div class="ambient-effect relative">
        <img
          class="w-full max-w-2xl mx-auto py-8 relative z-[2]"
          :src="img"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.ambient-effect:after {
  content: "";
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  filter: blur(100px);
  border-radius: 50%;
  opacity: 0.4;
  transform: scale(0.4);
}
</style>
