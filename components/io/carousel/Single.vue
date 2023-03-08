<script setup>
defineProps({
  items: Array,
});
</script>
<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide
      v-for="(item, index) in items"
      :key="index"
      class="rounded-[12px] overflow-hidden"
    >
      <div class="rounded-[12px] bg-zinc-300 overflow-hidden relative mb-4">
        <!-- image overlay -->
        <div class="w-full md:h-[400px] h-[600px] relative">
          <div class="image-overlay h-full relative z-[1]">
            <img
              :src="item.img"
              class="w-full h-full object-cover"
              :alt="item.label + item.title"
            />
          </div>
          <img
            class="absolute top-0 left-0 h-full z-[3] md:block hidden"
            src="~/assets/images/visuals/visual-left.png"
          />
          <img
            class="absolute top-0 right-0 h-full z-[3] md:block hidden"
            src="~/assets/images/visuals/visual-right.png"
          />
        </div>
        <div
          v-if="item.label || item.title"
          class="absolute right-0 bottom-0 z-[4] py-16 px-10 left-0 md:left-auto"
        >
          <p
            v-if="item.label"
            class=" font-montse mb-0 ml-[-12px] dark:text-zinc-900 text-white dark:md:text-white md:text-zinc-900"
          >
            {{ item.label }}
          </p>
          <h1
            v-if="item.title"
            class="font-montse text-[36pt] font-bold mt-0 leading-[.9] dark:text-zinc-900 md:text-white text-white"
          >
            {{ item.title }}
          </h1>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<style scoped>
.image-overlay:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
}
.dark .image-overlay:after {
  background: linear-gradient(transparent, #fff);
}
</style>