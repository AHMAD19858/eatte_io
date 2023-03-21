<script setup>
definePageMeta({
  layout: "outside",
});

const url = "/api/forget-Password";
const isLoading = ref(false);
let loginData = reactive({});

const form = reactive({
  email: "",
});

async function onSubmit() {
  if (isLoading.value) return;
  isLoading.value = true;
  const { data } = await useFetch(`${url}?email=${form.email}`, {
    method: "POST",
  });
  loginData.value = data;
  isLoading.value = false;
}
</script>

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
        <h1 class="welcome">Forgot your</h1>
        <h1 class="welcome">password?</h1>

        <div
          v-if="loginData.value && loginData.value.status === false"
          class="bg-red-500 rounded-md my-3 flex gap-1 h-12 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #1e1e1e; margin-inline: 5px; transform: ; msfilter: "
          >
            <path
              d="m8.5 18 3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.5zM7.293 6.707l1.414-1.414L12 8.586l3.293-3.293 1.414 1.414L13.414 10l3.293 3.293-1.414 1.414L12 11.414l-3.293 3.293-1.414-1.414L10.586 10 7.293 6.707z"
            ></path>
          </svg>
          <p class="text-center text-white font-montse">
            {{ loginData.value.err }}
          </p>
        </div>

        <div
          v-if="loginData.value && loginData.value.status === true"
          class="bg-green-500 rounded-md my-3 flex gap-1 mt-3 h-12 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: white; margin-inline: 5px; transform: ; msfilter: "
          >
            <path
              d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-9 11.914-3.707-3.707 1.414-1.414L11 11.086l4.793-4.793 1.414 1.414L11 13.914z"
            ></path>
          </svg>

          <p class="text-center text-white font-montse">
            {{ loginData.value.res.ForgotPasswordSuccess }}
          </p>
        </div>
        <p class="label">Email Address</p>
        <div class="input_div">
          <input
            class="login_input"
            autocomplete="off"
            type="text"
            name=""
            id=""
            placeholder="enter your email address"
            v-model="form.email"
          />
        </div>

        <button type="button" @click="onSubmit()" class="login_btn">
          Send me the link
        </button>

        <div class="flex my-3 justify-center gap-1">
          <p class="text-sm font-montse dark:text-white">or</p>
          <NuxtLink to="/login">
            <p class="create">Login</p>
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

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
  @apply font-montse text-[#93A3B0CC] text-base my-1 mt-[70px];
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
