<script setup>
import { ref } from "vue";
import md5 from "md5";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
definePageMeta({
  layout: "outside",
});

const colorMode = useColorMode();
const url = "/api/login";
const isOpen = ref(false);
const isLoading = ref(false);
let userCompanies = reactive([]);
let loginData = reactive({});
let userToken = reactive("");
const form = reactive({
  email: "",
  password: "",
});

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

async function onSubmit() {
  if (isLoading.value) return;
  isLoading.value = true;
  const { data } = await useFetch(
    `${url}?email=${md5(form.email)}&password=${md5(form.password)}`,
    {
      method: "GET",
    }
  );
  loginData.value = data;
  isLoading.value = false;
  console.log("this is data", data._rawValue);
  console.log("loginDatad", loginData.value);
  if (data._rawValue.status === true) {
    userCompanies = data._rawValue.res.companies;
    userToken = data._rawValue.res.token;
    console.log("userCompanies", userCompanies);
    openModal();
  }
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
        <h1 class="welcome">Welcome Back!</h1>
        <p class="sub_text">Login to eatte, just the best.</p>
        <div class="bg-red-500 rounded-md my-3 animate-slideDown">
          <p
            class="text-center text-white"
            v-if="loginData.value && loginData.value.status === false"
          >
            {{ loginData.value.err }}
          </p>
        </div>
        <TransitionRoot appear :show="isOpen" as="template">
          <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div
                class="flex min-h-full items-center justify-center p-4 text-center"
              >
                <TransitionChild
                  as="template"
                  enter="duration-300 ease-out"
                  enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100"
                  leave="duration-200 ease-in"
                  leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95"
                >
                  <DialogPanel
                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                  >
                    <DialogTitle
                      as="h1"
                      class="text-lg font-medium leading-6 font-montse flex justify-between items-center"
                    >
                      Select your restaurant
                      <img
                        src="~/assets/images/icons/close.svg"
                        @click="closeModal"
                        class="cursor-pointer w-10"
                      />
                    </DialogTitle>
                    <div
                      class="mt-2"
                      v-for="(item, index) in userCompanies"
                      :key="index"
                    >
                      <form
                        class="list_container"
                        :action="item.base_url"
                        method="POST"
                      >
                        <input type="hidden" name="xtkn" :value="userToken" />
                        <button class="trigger_btn">
                          <img :src="item.logo_url" class="restaurant_img" />
                          <p class="font-montse">{{ item.company_name }}</p>
                        </button>
                      </form>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
        <p class="label">Email Address</p>
        <div class="input_div">
          <input
            autocomplete="off"
            :class="colorMode.value == 'light' ? 'light' : 'dark'"
            class="login_input"
            type="text"
            placeholder="enter your email address"
            v-model="form.email"
          />
        </div>
        <p class="label">Password</p>
        <div class="input_div">
          <input
            class="login_input"
            autocomplete="off"
            type="password"
            name=""
            id=""
            v-model="form.password"
            :class="colorMode.value == 'light' ? 'light' : 'dark'"
            placeholder="enter your password"
          />
        </div>
        <div class="flex justify-between my-3">
          <label class="text-sm cursor-pointer" for="checkboxDefault">
            <input
              type="checkbox"
              class="text-sm ml-2 cursor-pointer"
              for="checkboxDefault"
            />
            <span class="ml-2 text-gray-700 font-montse dark:text-white"
              >Remember me</span
            >
          </label>

          <NuxtLink to="/forget-password">
            <span class="forgot_text">Forgot Password ?</span>
          </NuxtLink>
        </div>

        <button type="button" @click="onSubmit()" class="login_btn">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.restaurant_img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.trigger_btn {
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 5px;
  cursor: pointer;
}
.list_container {
  display: flex;
  border: 4px solid transparent;
  background-color: #f5f6fa;
  align-items: center;
  gap: 16px;
  border-radius: 5px;
  margin-block: 20px;
  padding-block: 5px;
  cursor: pointer;
}
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
  @apply text-gray-800  text-2xl mb-1 text-center font-montse font-semibold text-[45px] w-max dark:text-white;
}

.sub_text {
  @apply mb-[50px] text-sm font-normal   text-left mt-5 font-montse text-[#3F4440] dark:text-white;
}

.label {
  @apply font-montse text-[#93A3B0CC] text-base my-1;
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

.light {
  -webkit-text-fill-color: black;
  box-shadow: 0 0 0px 1000px transparent;
  box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}
.dark {
  -webkit-text-fill-color: white;
  box-shadow: 0 0 0px 1000px #313131 inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
