<template>
  <div class="h-screen md:flex">
    <div class="left_side">
      <div class="text-center">
        <h1 class="slogan">Welcome to EATTE</h1>
        <p class="sub_slogan">
          What you need to manage your business in one software!
        </p>
        <div class="mt-[185px] ml-[0px]">
          <div class="flex">
            <img src="../assets/images/star.svg" alt="" />
            <img src="../assets/images/star.svg" alt="" />
            <img src="../assets/images/star.svg" alt="" />
            <img src="../assets/images/star.svg" alt="" />
            <img src="../assets/images/star.svg" alt="" />
          </div>
          <div>
            <p class="testmonial">
              “Very happy with the service. Would definitely
            </p>
            <p class="testmonial">buy from again.”</p>
          </div>
          <div class="person_div">
            <img
              src="https://source.unsplash.com/50x50/?portrait?1"
              alt=""
              class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
            />
            <div>
              <p class="name">Jose Adam</p>
            </div>
          </div>
        </div>
      </div>
      <div class="circle_top"></div>
      <div class="circle_bottom"></div>
    </div>
    <div class="right_side">
      <form class="form_section">
        <h1 class="welcome">Set new</h1>
        <h1 class="welcome">password?</h1>

        <p class="label">New password</p>
        <div class="input_div">
          <input
            autocomplete="off"
            class="login_input"
            type="password"
            name=""
            id=""
            placeholder="New password"
          />
        </div>
        <NuxtLink to="/login">
          <button type="submit" class="login_btn">Save</button>
        </NuxtLink>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "outside",
});
</script>

<style scoped>
.left_side {
  @apply relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-primary-color to-[#CC4D2C]  justify-around items-center hidden;
}
.slogan {
  @apply text-white font-bold text-4xl font-montse;
}

.sub_slogan {
  @apply text-[#F5F6FA] mt-1 font-montse font-medium;
}

.testmonial {
  @apply text-white mt-1 text-left font-montse text-xl font-medium;
}
.person_div {
  @apply flex items-center mt-4 space-x-4;
}

.name {
  @apply text-lg font-semibold text-left text-white;
}

.title {
  @apply text-sm  text-[#F5F6FA] font-montse font-normal;
}

.circle_top {
  @apply opacity-10 absolute -bottom-[14rem] -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8;
}

.circle_bottom {
  @apply opacity-10 absolute -top-[14rem] -right-[60px] w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8;
}

.right_side {
  @apply flex md:w-1/2 justify-center py-10 items-center bg-background-color dark:bg-dark-background-color;
}

.form_section {
  @apply w-[60%] bg-background-color dark:bg-dark-background-color;
}

.welcome {
  @apply pb-4 text-gray-800  text-2xl mb-1  font-montse font-semibold text-[45px] text-left dark:text-white;
}

.label {
  @apply font-montse text-[#93A3B0CC] text-base my-1 mt-[100px];
}

.input_div {
  @apply dark:border-solid dark:border-[#93A3B029] dark:border-2  flex items-center border-2 py-2 px-3 rounded-lg mb-4;
}

.login_input {
  @apply w-full bg-transparent pl-2 outline-none border-none dark:text-white;
}

.forgot_text {
  @apply text-sm ml-2 cursor-pointer text-primary-color font-normal font-montse;
}

.login_btn {
  @apply font-montse block w-full bg-gradient-to-tr from-primary-color to-[#CC4D2C] mt-4 py-2 rounded-[10px] text-white font-semibold mb-2;
}

.create {
  @apply text-sm  cursor-pointer font-montse text-primary-color;
}
</style>
