<script setup>
const props = defineProps({
  items: Array,
  numbers: Number,
});
</script>

<template>
  <section>
    <div class="services_container">
      <div :class="numbers === 4 ? 'cards_container' : 'small_container'">
        <article v-for="(item, index) in items" :key="index">
          <div class="card_container">
            <img :src="item.img" class="phone_icon" alt="svg" />
          </div>

          <div class="p-4">
            <h3 class="main_card_text">{{ item.label }}</h3>
            <!--   {{ item.sub_text }} -->
            <p class="sub_title cursor-pointer">
              {{ item.learn_text }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services_container {
  @apply container  max-w-fit p-6 mx-auto space-y-8;
}
.small_container {
  @apply md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3;
}
.cards_container {
  @apply md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-4;
}

article {
  margin: 0 auto;
  @apply flex  flex-col bg-white rounded-2xl my-3 dark:bg-[#272727] w-[280px];
}

.card_container {
  @apply w-12 h-12 bg-[#ff613729] rounded-lg flex items-center m-4;
}

.main_card_text {
  @apply  text-primary-color flex-1 leading-snug text-[15px] font-bold font-montse  mb-2 dark:text-primary-color;
}

.phone_icon {
  @apply stroke-primary-color w-12 h-6 text-center text-3xl text-primary-color;
}
.sub_title {
  @apply pt-5  underline font-montse font-normal text-[#3F4440] text-sm  dark:text-white;
}

@media (max-width: 576px) {
  article {
    @apply mt-7;
  }
}
</style>
