<script setup>
const colorMode = reactive(useColorMode());
// this component designed to take max 3 items as data Props
// [data] = [
//   {
//     title: "Deliver an Exceptional Guest Experience",
//     desc: "Get to know your customers by a direct line of communication with your customers gives you valuable insight.",
//   },
//   {
//     title: "Increase Sales",
//     desc: "Keep customerss you already have and give new ones a solid reason to ditch your competition.",
//   },
//   {
//     title: "Increase Guest Engagement",
//     desc: "Easily customizable Customer Web App lets diners keep track of all of their rewards and see promotions all in one place.",
//   },
// ];
let props = defineProps({
  data: Array,
});
</script>
<template>
  <div class="container mx-auto p-[15px] md:p-[70px] info-container">
    <div class="info-graphic relative pb-[100px] mb-10">
      <img
        v-if="colorMode.value == 'light'"
        src="@/assets/images/chart.png"
        class="absolute"
        alt=""
      />
      <img
        v-else
        src="@/assets/images/chart-light.png"
        class="absolute"
        alt=""
      />

      <div class="grid grid-cols-12 gap-4">
        <div
          class="md:col-span-4 sm:col-span-6 col-span-12 circle-grid"
          v-for="(el, index) in data"
          :key="index"
        >
          <div
            class="circle-card shadow-lg rounded-full w-[280px] h-[280px] text-center bg-white flex items-center justify-center flex-col p-6 mx-auto dark:bg-[#2f2e2e]"
          >
            <h5 class="text-primary-color font-bold mb-2">{{ el.title }}</h5>
            <p class="text-slate-600 text-sm dark:text-white">{{ el.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$spacing: 90px;
.info-container {
  max-width: 1075px !important;
}
.circle-grid {
  z-index: 1;
  position: relative;
  .circle-card {
    position: relative;
  }
  &:nth-child(1) {
    z-index: 1;
    .circle-card {
      margin-inline-start: $spacing;
      margin-top: 100px;
    }
  }
  &:nth-child(3) {
    z-index: 3;
    .circle-card {
      margin-inline-start: -$spacing;
      margin-top: 100px;
    }
  }
  &:nth-child(2) {
    z-index: 5;
    .circle-card {
    }
  }
}
.info-graphic {
  img {
    z-index: 2;
    $size: 200px;
    width: $size;
    bottom: 40px;
    left: calc(50% - ($size / 2));
    z-index: 2;
  }
}
@media (max-width: 768px) {
  .info-graphic {
    padding-bottom: 0;
    > img {
      left: initial;
      right: 40px;
      bottom: 20;
    }
    .circle-grid {
      .circle-card {
        margin-inline-start: 0;
        margin-top: 0;
        margin: 0 auto;
      }
    }
  }
}
@media (max-width: 640px) {
  .info-graphic > img {
    display: none;
  }
}
</style>
