<script setup>
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

  <div class="container mx-auto p-[15px] md:p-[70px] info-container" >
    <div class="info-graphic relative pb-[100px] mb-10">
      <div class="bg-circle absolute h-[280px] w-[280px] rounded-full">
        <span
          class="absolute top-0 lef-0 w-full h-full rounded-full block"
          v-for="n in 3"
          :key="n"
        ></span>
      </div>
      <img src="@/assets/images/white-hand.png" class="absolute" alt="" />

      <div class="grid grid-cols-12 gap-4">
        <div
          class="md:col-span-4 sm:col-span-6 col-span-12 circle-grid"
          v-for="(el, index) in data"
          :key="index"
        >
          <div
            class="circle-card shadow-lg rounded-full w-[280px] h-[280px] text-center bg-white flex items-center justify-center flex-col p-6 mx-auto"
          >
            <h5 class="text-primary-color font-bold mb-2">{{ el.title }}</h5>
            <p class="text-slate-600 text-sm">{{ el.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$spacing: 80px;
.info-container{
  max-width: 1075px !important;
}
.circle-grid {
  .circle-card {
    position: relative;
    z-index: 3;
  }
  &:nth-child(1) {
    .circle-card {
      margin-inline-start: $spacing;
      margin-top: 280px;
    }
  }
  &:nth-child(3) {
    .circle-card {
      margin-inline-start: -$spacing;
      margin-top: 280px;
    }
  }
  /* :not(:nth-child(2)) {
    .circle-card {
     
    }
  } */
}
.info-graphic {
  .bg-circle {
    top: calc(50% - 100px);
    left: calc(50% - 140px);
    transform: 1;
    z-index: 1;
    transform: scale(1.2);
    > span {
      border: 1px solid var(--primary);
      opacity: 0.4;
      &:nth-child(1) {
        transform: scale(0.95);
      }
      &:nth-child(2) {
        transform: scale(0.9);
      }
    }
  }
  img {
    $size: 100px;
    width: $size;
    bottom: calc($size / 2);
    left: calc(50% - ($size / 2));
    z-index: 2;
  }
}
@media (max-width: 768px) {
  .info-graphic {
    padding-bottom: 0;
    > img {
      left: initial;
      right: 20px;
      bottom: 0;
    }
    .circle-grid {
      .circle-card {
        margin-inline-start: 0;
        margin-top: 0;
        margin: 0 auto;
      }
    }
    .bg-circle {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      left: 0;
      top: 0;
      transform: scale(0.9);
      > span {
        border-radius: 50px;
      }
    }
  }
}
@media (max-width: 600px) {
  .info-graphic > img {
    display: none;
  }
}
</style>
