<script setup>
// data props
// [data] = [
//   {
//     title: "Improve Your Cash Flow",
//     desc: "Sell gift cards at your restaurant and utilize them as prepaid sales.",
//   },
//   {
//     title: "Payment Methods",
//     desc: "Accept gift cards in-store as a viable and secure payment option.",
//   },
//   {
//     title: "Attract Customers With Promotions",
//     desc: "Widen your customer base by introducing promotional gift cards.",
//   },
// ];
// Image SRC
// [img] from "@/assets/images/phone-case.png";
let props = defineProps({
  data: Array,
  img: String,
});

function drawThatShit(cards) {
  cards.forEach((el, i) => {
    let canvas = document.getElementById(`canvas${i + 1}`),
      ctx = canvas.getContext("2d"),
      $1 = document.getElementById("start"),
      $2 = document.getElementById(`lineEndDiv${i + 1}`),
      wrapper = document.getElementById("lineWrapper");

    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
    let ramp = ctx.createLinearGradient(0, 0, canvas.width / 1.5, 0);
    ramp.addColorStop("0", "red");
    ramp.addColorStop(".8", "orange");
    ramp.addColorStop("1", "yellow");
    ctx.setLineDash([30, 10]);
    ctx.strokeStyle = ramp;
    ctx.lineWidth = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let $1Left = $1.offsetLeft,
      $1Top = $1.offsetTop,
      $2Left = $2.offsetLeft,
      $2Top = $2.offsetTop;
    ctx.beginPath();
    ctx.moveTo($1Left + $1.offsetWidth / 2 + 30, 20);
    ctx.quadraticCurveTo(
      $1.offsetWidth / 2,
      //   $1.offsetHeight *2,
      20,
      $2Left,
      $2Top + $2.offsetHeight / 2
    );
    ctx.stroke();
  });
}
onMounted(() => {
  setTimeout(() => {
    drawThatShit(props.data);
  }, 100);
});
</script>
<template>
  <div class="container mx-auto relative" id="lineWrapper">
    <canvas :id="`canvas${n}`" v-for="n in data.length" :key="n"></canvas>
    <div class="grid grid-cols-12 gap-4 items-center">
      <div class="col-span-6">
        <div class="relative z-[2]" id="start">
          <img :src="img" id="" class="w-[280px]" alt="" />
        </div>
      </div>
      <div class="col-span-6">
        <div
          class="bg-white p-8 rounded-2xl shadow-md mb-4"
          v-for="(el, index) in data"
          :key="index"
          :id="`lineEndDiv${index + 1}`"
        >
          <h4 class="text-primary-color mb-3">{{ el.title }}</h4>
          <p class="text-zinc-700 text-sm">{{ el.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;
  top: 0;
  left: 0;
}
</style>
