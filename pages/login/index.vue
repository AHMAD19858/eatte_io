<template>

<div
    class="w-full h-screen bg-gradient-to-bl from-primary-color to-[#CC4D2C] flex flex-col justify-center items-center text-white">
    <h1 class="text-5xl">We are <b>Almost</b> there!</h1>
    <p>Stay tuned for something amazing!!!</p>

 <!--    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-20">

        <div class="bg-transparent border text-center">
            <p class="text-5xl px-10 py-5">336</p>
            <hr>
            <p class="px-10 py-5">days</p>
        </div>

        <div class="bg-transparent border text-center">
            <p class="text-5xl px-10 py-5">03</p>
            <hr>
            <p class="px-10 py-5">hours</p>
        </div>

        <div class="bg-transparent border text-center">
            <p class="text-5xl px-10 py-5">35</p>
            <hr>
            <p class="px-10 py-5">mins</p>
        </div>
        <div class="bg-transparent border text-center">
            <p class="text-5xl px-10 py-5">01</p>
            <hr>
            <p class="px-10 py-5">secs</p>
        </div>
    </div> -->
</div>


</template>



<style scoped>
body, html {
  height: 100%;
  margin: 0;
}

.bgimg {
/*   background-image: url('/w3images/forestbridge.jpg'); */
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
}

.topleft {
  position: absolute;
  top: 0;
  left: 16px;
}

.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

hr {
  margin: auto;
  width: 40%;
}
</style>