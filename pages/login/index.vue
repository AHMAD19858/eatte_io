<template>
  <div class="h-screen md:flex ">
    <div
      class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-primary-color to-[#CC4D2C] i justify-around items-center hidden">
      <div class="text-center">
        <h1 class="text-white font-bold text-4xl font-montse">Welcome to EATTE</h1>
        <p class="text-[#F5F6FA] mt-1 font-montse font-medium">What you need to manage your business in one software!</p>
        <div class=" mt-[185px] ml-[120px]">
          <div class="flex ">
            <img src="../../assets/images/star.svg" alt="">
            <img src="../../assets/images/star.svg" alt="">
            <img src="../../assets/images/star.svg" alt="">
            <img src="../../assets/images/star.svg" alt="">
            <img src="../../assets/images/star.svg" alt="">
          </div>
          <div>
            <p class="text-white mt-1 text-left">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores</p>
          </div>
          <div class="flex items-center mt-4 space-x-4">
            <img src="https://source.unsplash.com/50x50/?portrait?1" alt=""
              class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
            <div>
              <p class="text-lg font-semibold text-left text-white">Ahmed</p>
              <p class="text-sm  text-[#F5F6FA] font-montse font-normal">Co-Founder, Eatte.io</p>
            </div>
          </div>
        </div>

      </div>
      <div class=" opacity-10 absolute -bottom-[14rem] -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="opacity-10 absolute -top-[14rem] -right-[60px] w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

    </div>
    <div class="flex md:w-1/2 justify-center py-10 items-center bg-background-color dark:bg-dark-background-color">
      <form class=" w-[60%] bg-background-color dark:bg-dark-background-color">
        <h1 class=" pb-4 text-gray-800  text-2xl mb-1 text-center font-montse font-semibold text-[45px] w-max dark:text-white">
          Welcome Back!
        </h1>
        <p class=" mb-[50px] text-sm font-normal   text-left mt-5 font-montse text-[#3F4440] dark:text-white">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque
          corrupti quos dolores
        </p>


        <p class=" font-montse text-[#93A3B0CC] text-base my-1">Email Address</p>
        <div class="dark:border-solid dark:border-[#93A3B029] dark:border-2  flex items-center border-2 py-2 px-3 rounded-lg mb-4">
          <input class=" w-full bg-transparent pl-2 outline-none border-none" type="text" name="" id="" placeholder="enter your email address" />
        </div>
        <p class="font-montse text-[#93A3B0CC] text-base my-1">Password</p>
        <div class="dark:border-solid dark:border-[#93A3B029] dark:border-2 flex items-center border-2 py-2 px-3 rounded-lg">

          <input class=" w-full bg-transparent pl-2 outline-none border-none" 
          type="text" 
          name=""
           id="" 
          placeholder="enter your password" />
        </div>
        <div class="flex justify-between my-3">

          <label class="text-sm hover:text-blue-500 cursor-pointer" for="checkboxDefault">

            <input type="checkbox" class="text-sm ml-2 hover:text-blue-500 cursor-pointer" for="checkboxDefault" checked>
            <span class="ml-2 text-gray-700 font-montse dark:text-white">Remember me</span>
          </label>
          <span class="text-sm ml-2 cursor-pointer text-primary-color font-normal font-montse">Forgot Password ?</span>
        </div>
        <button type="submit"
          class="font-montse block w-full bg-gradient-to-tr from-primary-color to-[#CC4D2C] mt-4 py-2 rounded-[10px] text-white font-semibold mb-2">Login</button>

        <div class="flex my-3 justify-center gap-1">
          <p class="text-sm font-montse dark:text-white">Don't have an account? </p>
          <p class="text-sm  cursor-pointer font-montse text-primary-color">Create free account</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'outside'
})
</script>

<style scoped>
body,
html {
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