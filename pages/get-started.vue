<script setup>
import { Field, Form, defineRule, ErrorMessage, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
const { data: paymentPlans } = await useFetch("/api/wizard/getPackages");

// validaiton vee-validate
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

configure({
  // create and set a localization handler
  generateMessage: localize("en", {
    messages: {
      // interpolates the field name
      required: "The {field} is required",
      // interpolates the min, max params
      between: "The {field} value must be between 0:{min}, 1:{max}",
      // Interpolates another field value in the form
      confirmed: "The {field} value must match {age}",
    },
  }),
});

// step control

// mark selected step to complete by id
function changeStepStatus(step, status) {
  var index = steps.value.findIndex((item) => item.id === step);
  steps.value[index].status = status;
}

function stepSubmit(step) {
  // After validation
  // if ok mark as complete
  changeStepStatus(step, "complete");
  saveToStorage();
  // got to next step
  currentStep.value = step + 1;
  changeStepStatus(step + 1, "current");
}

function saveToStorage() {
  const savedData = {
    fullname: personalFullname.value,
    phone: persoanlPhone.value,
    email: personalEmail.value,
    resName: resName.value,
    resAddress: resAddress.value,
    city: city.value,
    country: country.value,
    state: state.value,
    postal: postal.value,
  };
  localStorage.setItem("reAutoSave", JSON.stringify(savedData));
}

// check saved data
// let savedData = localStorage.getItem("reAutpSave");
// savedData ? (savedData = JSON.parse(savedData)) : "";
// phone
const personalEmail = ref("");
const personalFullname = ref("");
const persoanlPhone = ref("");

// step 2

const resName = ref("");
const resAddress = ref("");
const country = ref("");
const city = ref("");
const state = ref("");
const postal = ref("");

// Plans

const plans = ref([
  {
    id: 1,
    popular: false,
    name: "Monthly",
    desc: "Pay Monthly for Software and Devices.",
    list: [
      "Point of sale software",
      "Kitchen management software",
      "Inventory management",
      "Real-time Analytics & reports",
      "Setup support & customer care",
    ],
    upfront: "$500   upfront waived ($0 upfront)",
    perMonth: "50",
    fee: "2.45% + $0.10 ",
    selected: false,
  },
  {
    id: 2,
    popular: true,
    name: "Pay as you go",
    desc: "No upfront cost. No monthly subscription.",
    list: [
      "Point of sale software",
      "One smart countertop terminal",
      "Kitchen management software",
      "Inventory management",
      "Real-time Analytics & reports",
      "Setup support & customer care",
    ],
    upfront: "$0 upfront",
    perMonth: "0",
    fee: "2.85% + $0.10 ",
    selected: false,
  },
]);

const selectedPlan = ref("");
const summaryShow = ref(false);

function setPlanType(plan) {
  selectedPlan.value = plan;
  steps.value[2].children[0].status = "complete";
  summaryShow.value = true;
  steps.value[2].children[1].status = "current";
  // show sidebar
}

const kits = ref([
  {
    id: 1,
    name: "Barcode Scanner",
    desc: "32CPU make it more agile, the same core software with KR-200. Automatical sensor , when barcode is close to, it will work automatically.",
    price: 60,
    count: 0,
    img: "https://placehold.co/400",
    selected: false,
  },
  {
    id: 2,
    name: "Barcode Scanner",
    desc: "32CPU make it more agile, the same core software with KR-200. Automatical sensor , when barcode is close to, it will work automatically.",
    price: 40,
    count: null,
    img: "https://placehold.co/400",
    selected: false,
  },
]);

const selectedKits = computed(() => {
  return kits.value.filter((kit) => {
    return kit.selected == true;
  });
});

const totalKits = computed(() => {
  let total = 0;
  selectedKits.value.map((kit) => {
    kit.count ? (total += kit.count) : (total += 1);
  });
  return total;
});

const totalKitsPrice = computed(() => {
  let total = 0;
  selectedKits.value.map((kit) => {
    total += kit.price * (kit.count != null ? kit.count : 1);
  });
  return total;
});

function addKit(kit) {
  console.log(kit);
}

const cardHolder = ref(""),
  cardNumber = ref(""),
  exMonth = ref(""),
  exYear = ref(""),
  cvv = ref("");
function fire(ste) {
  console.log(ste);
}
onMounted(() => {
  personalEmail.value = getSavedStorage("email");
  persoanlPhone.value = getSavedStorage("phone");
  personalFullname.value = getSavedStorage("fullname");
  resName.value = getSavedStorage("resName");
  resAddress.value = getSavedStorage("resAddress");
  country.value = getSavedStorage("country");
  city.value = getSavedStorage("city");
  state.value = getSavedStorage("state");
  postal.value = getSavedStorage("postal");
});

// Define layout for this page [wizard]
definePageMeta({
  layout: "wizard",
});
// validation
// import {} from 'vee'
// nav bar status
const steps = ref([
  {
    id: 1,
    name: "getting started",
    desc: "basic informarion",
    status: "current",
    children: [],
  },
  {
    id: 2,
    name: "restaurant",
    desc: "restaurant information",
    status: "",
    children: [],
  },
  {
    id: 3,
    name: "plan",
    desc: "customize your plan",
    status: "",
    children: [
      { name: "plan type", status: "current", desc: "" },
      { name: "Customize kit", status: "", desc: "" },
    ],
  },
  {
    id: 4,
    name: "Account",
    desc: "credit card & billing address",
    status: "",
    children: [],
  },
  {
    id: 5,
    name: "Bank Payout",
    desc: "setup payout account",
    status: "",
    children: [],
  },
]);
const currentStep = ref(1);
</script>
<template>
  <NuxtLayout>
    <!-- navbar Steps -->
    <template #steps>
      <div class="flex justify-between flex-1">
        <div class="overflow-y-hidden flex-1 h-[84px]">
          <ul
            class="flex items-center h-full flex-wrap transition-all ease-in-out duration-400 min-[1030px]:!mt-0"
            :style="`margin-top:-${
              currentStep > 1 ? 84 * (currentStep - 1) : 0
            }px`"
          >
            <li
              v-for="(step, index) in steps"
              :key="step.id"
              class="py-3 px-5 border-l bg-white border-l-zinc-200 h-full transition ease-in-out duration-150 border-b-2 border-transparent w-full min-[1030px]:w-auto max-[1030px]:!border-b-transparent"
              :class="{ '!border-b-main': step.id == currentStep }"
            >
              <!-- step item -->
              <!-- step text -->
              <div
                class="flex justify-between items-center h-full transition ease-in-out duration-150"
              >
                <div class="capitalize flex flex-col justify-end h-full">
                  <div class="flex items-center gap-2">
                    <span
                      class="block text-xs transition ease-in-out duration-150"
                      :class="{
                        'text-green-500': step.status == 'complete',
                        'text-zinc-400': step.status == 'current',
                      }"
                      v-if="step.status"
                    >
                      {{ step.status }}
                    </span>
                    <div
                      v-if="step.children && step.id == currentStep"
                      class="flex gap-1"
                    >
                      <span
                        v-for="(child, index) in step.children"
                        :key="index"
                        class="w-[10px] rounded-full inline-block aspect-square border border-1 border-zinc-300 bg-transparent"
                        :class="{
                          '!border-main': child.status == 'current',
                          '!border-main !bg-main': child.status == 'complete',
                        }"
                      ></span>
                    </div>
                  </div>

                  <span class="block font-semibold">
                    {{ index + 1 }}
                    <span
                      class="max-[965px]:inline-block hidden text-xs text-zinc-400"
                      >/{{ steps.length }}</span
                    >
                    - {{ step.name }}</span
                  >
                  <span class="block text-xs text-zinc-500" v-if="step.desc">
                    {{ step.desc }}
                  </span>
                </div>
                <i
                  v-if="step.status == 'complete'"
                  class="bx bx-check text-3xl text-green-500 ml-5"
                ></i>
              </div>

              <!-- step icon [success status] -->
            </li>
          </ul>
        </div>

        <div class="flex items-center h-[84px]">
          <ClientOnly>
            <HeadlessPopover
              v-slot="{ open }"
              class="relative"
              v-if="selectedPlan"
            >
              <HeadlessPopoverButton
                :class="open ? '' : 'text-opacity-90'"
                class="relative cursor-pointer bg-zinc-100 rounded p-3 me-4 group inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <i class="bx bx-shopping-bag"></i>
                <span
                  class="absolute bg-red-500 -bottom-2 -right-2 text-white rounded-full aspect-square text-xs min-h-[10px] p-2 inline-flex items-center"
                  v-if="totalKits"
                  >{{ totalKits }}</span
                >
              </HeadlessPopoverButton>
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
              >
                <HeadlessPopoverPanel
                  class="absolute right-0 w-screen max-w-screen-xs z-10 mt-[22px] sm:px-0 lg:max-w-3xl"
                >
                  <div
                    class="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white"
                  >
                    <div class="px-6 pt-4">
                      <div
                        class="flex justify-between rounded-md px-2 py-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div>
                          <span class="flex items-center">
                            <span class="text-md font-medium text-gray-900">
                              {{ selectedPlan.name }}
                            </span>
                          </span>
                          <span class="block text-sm text-gray-500">
                            {{ selectedPlan.desc }}
                          </span>
                        </div>
                        <h2>
                          <span>$</span>
                          <span class="font-bold text-3xl">{{
                            selectedPlan.perMonth
                          }}</span>
                          <span class="text-zinc-400">/mo</span>
                        </h2>
                      </div>
                    </div>
                    <div
                      v-if="selectedKits.length"
                      class="relative grid gap-8 bg-white p-7 lg:grid-cols-2 divide-x"
                    >
                      <div
                        v-for="kit in selectedKits"
                        :key="kit.id"
                        class="-m-3 flex items-center p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div
                          class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 relative"
                        >
                          <img
                            :src="kit.img"
                            class="rounded-md object-cover"
                            alt=""
                          />
                          <span
                            v-if="kit.count"
                            class="bg-main -top-2 text-white rounded-full aspect-square text-xs min-h-[10px] p-2 inline-flex items-center absolute"
                            >{{ kit.count }}</span
                          >
                        </div>
                        <div class="ml-4 flex-1">
                          <p
                            class="text-sm font-medium text-gray-900 flex items-center justify-between gap-2 w-full"
                          >
                            <span>
                              {{ kit.name }}
                            </span>
                            <span class="text-dark font-semi-bold">
                              ${{
                                kit.price * (kit.count != null ? kit.count : 1)
                              }}
                            </span>
                          </p>
                          <p class="text-xs text-gray-500">
                            <span class="text-dark font-semibold"
                              >${{ kit.price }}</span
                            >/mo per {{ kit.name }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="px-6 py-4 border-b bg-gray-50"
                      v-if="totalKitsPrice"
                    >
                      <div
                        class="flex justify-between rounded-md transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span
                          class="text-md font-medium text-gray-900 uppercase"
                        >
                          Subtotal
                        </span>
                        <span>
                          <span>$</span>
                          <span class="font-bold text-xl text-dark">{{
                            totalKitsPrice
                          }}</span>
                          <span class="text-zinc-400">/mo</span>
                        </span>
                      </div>
                    </div>
                    <div class="bg-gray-50 px-6 py-4">
                      <div
                        class="flex md:flex-wrap w-full items-center justify-start"
                      >
                        <div class="flex gap-2">
                          <div>
                            <h6 class="font-bold">
                              <span
                                >${{
                                  parseFloat(selectedPlan.perMonth) +
                                  parseFloat(totalKitsPrice)
                                }}</span
                              >
                            </h6>
                            <p class="text-xs text-zinc-500">due today</p>
                          </div>
                          <div>
                            <h6 class="font-bold">
                              <span
                                >${{
                                  parseFloat(selectedPlan.perMonth) +
                                  parseFloat(totalKitsPrice)
                                }}</span
                              >
                            </h6>
                            <p class="text-xs text-zinc-500">per month</p>
                          </div>
                          <div>
                            <h6 class="font-bold">
                              <span>{{ selectedPlan.fee }}</span>
                            </h6>
                            <p class="text-xs text-zinc-500">Processing fee</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </HeadlessPopoverPanel>
              </transition>
            </HeadlessPopover>
          </ClientOnly>
        </div>
      </div>
    </template>
    <!-- steps controller -->
    <pre>
      <!-- {{ paymentPlans }} -->
    </pre>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
      mode="out-in"
    >
      <!-- step 1 -->
      <div
        class="my-16 container max-w-[600px] px-4 mx-auto"
        v-if="currentStep == 1"
      >
        <section class="text-center">
          <header class="mb-10">
            <!-- title -->
            <h3 class="text-main font-bold">Welcome! Let's get started</h3>
            <!-- desc -->
            <p class="text-dark text-2xl my-3">
              Let's start creating your account by your personal information
            </p>
          </header>
          <!-- form / will replace later with vee-validate -->
          <Form
            action=""
            @submit="stepSubmit(1)"
            class="wizard-form"
            v-slot="{ errors }"
          >
            <!-- Full name -->
            <div class="wizard-form__group">
              <label class="required d-block">Full name</label>
              <Field
                :class="{ '!border-red-500': errors.fullname }"
                type="text"
                placeholder="First and Last name"
                name="fullname"
                rules="required"
                v-model.trim="personalFullname"
              />
              <ErrorMessage
                class="text-sm text-red-600 capitalize"
                name="fullname"
              />
            </div>
            <!-- Email -->
            <div class="wizard-form__group">
              <label class="required d-block">Email</label>
              <Field
                type="email"
                :class="{ '!border-red-500': errors.email }"
                placeholder="Johnsmith@email.com"
                rules="required|email"
                name="email"
                v-model="personalEmail"
              />
              <ErrorMessage
                class="text-sm text-red-600 capitalize"
                name="email"
              />
            </div>
            <!-- Phone -->
            <div class="wizard-form__group">
              <label class="required d-block">Phone</label>
              <div class="input-prepend flex items-center">
                <div
                  class="flex items-center template"
                  :class="{ '!border-red-500': errors.phone }"
                >
                  <img
                    src="~/assets/images/icons/us-flag.png"
                    class="w-[24px] aspect-square mr-3"
                    alt="usa flag"
                  />
                  <span>| +1</span>
                </div>
                <Field
                  type="text"
                  placeholder="(123) 456-789"
                  :class="{ '!border-red-500': errors.phone }"
                  v-model="persoanlPhone"
                  rules="required"
                  name="phone"
                  inputmode="numeric"
                  v-maska
                  data-maska="(###) ### - ####"
                />
              </div>
              <ErrorMessage
                class="text-sm text-red-600 capitalize"
                name="phone"
              />
            </div>
            <!-- submit button for step 1 -->
            <div class="text-center">
              <button
                :disabled="
                  !personalEmail || !personalFullname || !persoanlPhone
                "
                class="bg-main rounded-[8px] text-white px-16 py-3 font-semibold tracking-wide disabled:opacity-75 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </Form>
        </section>
      </div>
      <!-- Step 2 -->
      <div
        class="my-16 container max-w-[600px] px-4 mx-auto"
        v-else-if="currentStep == 2"
      >
        <section class="text-center">
          <header class="mb-10">
            <!-- title -->
            <h3 class="text-main font-bold">Restaurant Info</h3>
            <!-- desc -->
            <p class="text-dark text-2xl my-3">
              Please enter your restaurant details
            </p>
          </header>

          <!-- form / will replace later with vee-validate -->
          <Form
            action=""
            @submit="stepSubmit(2)"
            class="wizard-form"
            v-slot="{ errors }"
          >
            <!-- Restaurnt name -->
            <div class="wizard-form__group">
              <label class="required d-block">Restaurant name</label>
              <Field
                :class="{ '!border-red-500': errors.resturantName }"
                type="text"
                placeholder="Restaurant name"
                name="resturant name"
                rules="required"
                v-model.trim="resName"
              />
              <ErrorMessage
                class="text-sm text-red-600 capitalize"
                name="resturant name"
              />
            </div>
            <!-- Resturant address -->
            <div class="wizard-form__group">
              <label class="required d-block">Restaurant address</label>
              <Field
                type="email"
                :class="{ '!border-red-500': errors.resturantAddress }"
                placeholder="Resturant address"
                rules="required"
                name="resturant address"
                v-model="resAddress"
              />
              <ErrorMessage
                class="text-sm text-red-600 capitalize"
                name="resturant address"
              />
            </div>
            <!-- row -->
            <div class="flex flex-wrap -mx-3">
              <!-- Country -->
              <div class="w-1/2 px-3">
                <div class="wizard-form__group">
                  <label class="required d-block">Country</label>
                  <Field
                    :class="{ '!border-red-500': errors.resturantName }"
                    type="text"
                    name="country"
                    rules="required"
                    v-model.trim="country"
                  />
                  <ErrorMessage
                    class="text-sm text-red-600 capitalize"
                    name="country"
                  />
                </div>
              </div>
              <!-- State -->
              <div class="w-1/2 px-3">
                <div class="wizard-form__group">
                  <label class="required d-block">State</label>
                  <Field
                    :class="{ '!border-red-500': errors.state }"
                    type="text"
                    name="state"
                    rules="required"
                    v-model.trim="state"
                  />
                  <ErrorMessage
                    class="text-sm text-red-600 capitalize"
                    name="state"
                  />
                </div>
              </div>
              <!-- City -->
              <div class="w-1/2 px-3">
                <div class="wizard-form__group">
                  <label class="required d-block">City</label>
                  <Field
                    :class="{ '!border-red-500': errors.city }"
                    type="text"
                    name="city"
                    rules="required"
                    v-model.trim="city"
                  />
                  <ErrorMessage
                    class="text-sm text-red-600 capitalize"
                    name="city"
                  />
                </div>
              </div>
              <!-- Postal -->
              <div class="w-1/2 px-3">
                <div class="wizard-form__group">
                  <label class="required d-block">Postal</label>
                  <Field
                    :class="{ '!border-red-500': errors.postal }"
                    type="text"
                    name="postal"
                    rules="required"
                    inputmode="numeric"
                    v-model.trim="postal"
                  />
                  <ErrorMessage
                    class="text-sm text-red-600 capitalize"
                    name="postal"
                  />
                </div>
              </div>
            </div>
            <!-- Go back to step 1 -->
            <!-- submit button for step 2 -->
            <div class="flex justify-between items-center flex-wrap -mx-3">
              <div class="w-full md:w-1/2 px-3 mb-3">
                <button
                  type="button"
                  @click="
                    currentStep = 1;
                    fire(currentStep);
                    steps[1].status = '';
                  "
                  class="flex gap-3 text-sm items-center justify-center bg-transparent rounded-[8px] text-dark py-3 font-semibold tracking-wide border border-1 border-dark w-full"
                >
                  <i class="bx bx-left-arrow-alt"></i>
                  <span>Previous To step </span>
                </button>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-3">
                <button
                  :disabled="
                    !resAddress ||
                    !resName ||
                    !country ||
                    !state ||
                    !city ||
                    !postal
                  "
                  class="bg-main text-sm rounded-[8px] text-white px-16 py-3 font-semibold tracking-wide disabled:opacity-75 disabled:cursor-not-allowed w-full"
                >
                  Save and continue
                </button>
              </div>
            </div>
          </Form>
        </section>
      </div>
      <!-- step 3 -->
      <!-- plan section Focus section [large] -->
      <div class="container mx-auto py-16" v-else-if="currentStep == 3">
        <div class="flex -mx-5 flex-wrap">
          <div
            class="border-r-zinc-200 border-0 w-full lg:w-1/4 md:w-1/3 px-5 md:border-r"
          >
            <!-- Sub steps of step3 -->
            <ul class="border-style">
              <li
                v-for="(sub, index) in steps[2].children"
                :key="index"
                class="flex gap-4 pb-6 items-start"
              >
                <span
                  class="w-10 rounded-full aspect-square flex items-center justify-center border-2 border-zinc-300 bg-[#f5f6fa] text-dark"
                  :class="{
                    '!bg-main text-white !border-main': sub.status == 'current',
                    '!bg-green-300 !text-green-500 !border-green-300 cursor-pointer':
                      sub.status == 'complete',
                  }"
                >
                  <i
                    class="bx bx-check text-2xl"
                    v-if="sub.status == 'complete'"
                  ></i>
                  <span v-else>{{ index + 1 }}</span>
                </span>
                <div class="flex-1">
                  <h2
                    class="text-lg text-dark capitalize mt-2"
                    :class="{
                      'text-main': sub.status == 'current',
                      'cursor-pointer': sub.status == 'complete',
                    }"
                  >
                    {{ sub.name }}
                  </h2>
                  <span
                    v-if="sub.status == 'complete'"
                    class="block text-xs transition ease-in-out duration-150 text-green-500 mb-2 inline-block'"
                  >
                    {{ sub.status }}
                  </span>
                  <!-- Plan type -->
                  <div v-if="index == 0 && selectedPlan">
                    <h4 class="text-sm font-semibold">
                      {{ selectedPlan.name }}
                    </h4>
                    <p class="text-xs">{{ selectedPlan.desc }}</p>
                    <ul class="text-left my-5 text-xs">
                      <li
                        v-for="(item, index) in selectedPlan.list"
                        :key="index"
                      >
                        <i class="bx bx-check text-green-600 me-2"></i>
                        <span class="text-zinc-500">
                          {{ item }}
                        </span>
                      </li>
                    </ul>
                    <h2 class="my-4 text-sm">
                      {{ selectedPlan.fee }} Processing fee
                    </h2>

                    <h2 class="my-4">
                      <span>$</span>
                      <span class="font-bold text-3xl">{{
                        selectedPlan.perMonth
                      }}</span>
                      <span class="text-zinc-400">/mo</span>
                    </h2>

                    <span
                      v-if="sub.status == 'complete'"
                      class="underline text-zinc-500 cursor-pointer text-sm"
                      @click="
                        sub.status = 'current';
                        steps[2].children[1].status = '';
                      "
                    >
                      Change
                    </span>
                  </div>

                  <!-- Customize kit -->
                  <div v-if="index == 1 && selectedKits.length">
                    <ul class="text-left my-5 text-xs">
                      <li v-for="(item, index) in selectedKits" :key="index">
                        <div class="flex justify-between text-zinc-500 w-full">
                          <div class="flex gap-1 items-center">
                            <span v-if="item.count">{{ item.count }}</span>
                            <i v-if="item.count" class="bx bx-x"></i>
                            <span> {{ item.name }}</span>
                          </div>
                          <span class="text-zinc-600 font-semibold">
                            ${{ item.price * (item.count ? item.count : 1) }}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- step 3  -->
          <section class="w-full lg:3/4 md:w-2/3 px-5">
            <transition
              enter-active-class="transition duration-200 ease-out "
              enter-from-class="translate-x-2 opacity-0"
              enter-to-class="translate-x-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-x-0 opacity-100"
              leave-to-class="translate-x-2 opacity-0"
            >
              <!-- plans grid -->
              <div v-if="steps[2].children[0].status == 'current'">
                <header class="mb-10">
                  <!-- title -->
                  <span
                    class="text-zinc-400 text-sm block mb-3 cursor-pointer"
                    @click="
                      currentStep = 2;
                      steps[2].status = '';
                    "
                  >
                    <i class="bx bx-arrow-back me-2"></i>
                    Back
                  </span>
                  <h3 class="text-main font-bold">Plan Type Selection</h3>
                  <!-- desc -->
                  <p class="text-dark text-2xl mb-3">
                    Please select your charging plan
                  </p>
                </header>
                <div class="flex flex-wrap items-start -mx-3">
                  <div
                    class="w-full xl:w-1/3 lg:w-1/2 px-3 mb-4"
                    v-for="plan in plans"
                    :key="plan.id"
                  >
                    <WizardPlanCard
                      :plan="plan"
                      :selected="plan.id == selectedPlan.id"
                      @selected="setPlanType(plan)"
                    />
                  </div>
                </div>
                <div class="max-w-[600px] px-4 mt-16" v-if="selectedPlan">
                  <!-- Go back to step 1 -->
                  <!-- submit button for step 2 -->
                  <div
                    class="flex justify-between items-center flex-wrap -mx-3 mt-4"
                  >
                    <div class="w-full md:w-1/2 px-3 mb-3">
                      <button
                        @click="
                          currentStep = 2;
                          steps[2].status = '';
                        "
                        class="flex gap-3 text-sm items-center justify-center bg-transparent rounded-[8px] text-dark py-3 font-semibold tracking-wide border border-1 border-dark w-full"
                      >
                        <i class="bx bx-left-arrow-alt"></i>
                        <span>Previous</span>
                      </button>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-3">
                      <button
                        @click="
                          steps[2].children[0].status = 'complete';
                          steps[2].children[1].status = 'current';
                        "
                        class="bg-main text-sm rounded-[8px] text-white px-16 py-3 font-semibold tracking-wide disabled:opacity-75 disabled:cursor-not-allowed w-full"
                      >
                        Save and continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- kits -->
              <div v-else-if="steps[2].children[1].status == 'current'">
                <header class="mb-10 max-w-[600px]">
                  <!-- title -->
                  <h3 class="text-main font-bold">Customize Your Kit</h3>
                  <!-- desc -->
                  <p class="text-dark text-2xl my-3">
                    Tailor your kit with optional hardware and software
                    solutions to empower your staff and grow your customers.
                  </p>
                </header>
                <div class="flex flex-wrap items-center -mx-3">
                  <div
                    class="w-full 2xl:w-1/2 px-3 mb-3"
                    v-for="kit in kits"
                    :key="kit.id"
                  >
                    <WizardKitCard :kit="kit" @added="addKit(kit)" />
                  </div>
                </div>

                <!-- Go back to step 1 -->
                <!-- submit button for step 2 -->
                <div
                  class="flex justify-between items-center flex-wrap -mx-3 mt-4"
                >
                  <div class="w-full md:w-1/2 px-3 mb-3">
                    <button
                      @click="
                        steps[2].children[0].status = 'current';
                        steps[2].children[1].status = '';
                      "
                      class="flex gap-3 text-sm items-center justify-center bg-transparent rounded-[8px] text-dark py-3 font-semibold tracking-wide border border-1 border-dark w-full"
                    >
                      <i class="bx bx-left-arrow-alt"></i>
                      <span>Previous</span>
                    </button>
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-3">
                    <button
                      @click="
                        stepSubmit(3);
                        steps.value[2].children[2].status = 'complete';
                      "
                      class="bg-main text-sm rounded-[8px] text-white px-16 py-3 font-semibold tracking-wide disabled:opacity-75 disabled:cursor-not-allowed w-full"
                    >
                      Save and continue
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </section>
        </div>
      </div>
      <!-- Step 4 -->
      <div
        class="my-16 container max-w-[600px] px-4 mx-auto"
        v-else-if="currentStep == 4"
      >
        <section class="text-center">
          <header class="mb-10">
            <!-- title -->
            <h3 class="text-main font-bold">
              Account Setup : Credit Card & Billing Address
            </h3>
            <!-- desc -->
            <p class="text-dark text-2xl my-3">Please enter your credit card</p>
          </header>

          <!-- form / will replace later with vee-validate -->
          <Form
            action=""
            @submit="stepSubmit(4)"
            class="wizard-form"
            v-slot="{ errors }"
          >
            <!-- Restaurnt name -->
            <div class="wizard-form__group">
              <label class="required d-block">Card Holder Name</label>
              <Field
                :class="{ '!border-red-500': errors.cardHolder }"
                type="text"
                placeholder="John Doe"
                name="card holder"
                rules="required"
                v-model.trim="cardHolder"
              />
              <ErrorMessage
                class="text-sm text-red-600 capitalize"
                name="card holder"
              />
            </div>
            <!-- Resturant address -->
            <div class="wizard-form__group">
              <label class="required d-block">Card Number</label>
              <Field
                type="text"
                :class="{ '!border-red-500': errors.cardNumber }"
                placeholder="**** **** **** ****"
                rules="required"
                name="card number"
                v-model="cardNumber"
              />
              <ErrorMessage
                class="text-sm text-red-600 capitalize"
                name="card number"
              />
            </div>
            <!-- row -->
            <div class="flex flex-wrap -mx-3">
              <!-- Expiration date -->
              <div class="w-2/3 px-3">
                <div class="wizard-form__group">
                  <label class="required d-block">Expiration Date</label>
                  <div class="flex -mx-3">
                    <div class="px-3 w-1/2">
                      <Field
                        as="select"
                        :class="{ '!border-red-500': errors.expirationMonth }"
                        type="text"
                        name="expiration month"
                        rules="required"
                        v-model="exMonth"
                      >
                        <option value="" disabled>Month</option>
                        <option v-for="n in 10" :key="n" :value="n">
                          {{ n }}
                        </option>
                      </Field>
                    </div>
                    <div class="px-3 w-1/2">
                      <Field
                        as="select"
                        :class="{ '!border-red-500': errors.expirationYear }"
                        type="text"
                        name="expiration year"
                        rules="required"
                        v-model="exYear"
                      >
                        <option value="" disabled>Year</option>
                        <option v-for="n in 10" :key="n" :value="n">
                          {{ n }}
                        </option>
                      </Field>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CVV -->
              <div class="w-1/3 px-3">
                <div class="wizard-form__group">
                  <label class="required d-block">CVV</label>
                  <Field
                    :class="{ '!border-red-500': errors.cvv }"
                    type="password"
                    name="cvv"
                    rules="required"
                    inputmode="numeric"
                    v-model.trim="cvv"
                  />
                  <ErrorMessage
                    class="text-sm text-red-600 capitalize"
                    name="cvv"
                  />
                </div>
              </div>
            </div>
            <!-- Go back to step 1 -->
            <!-- submit button for step 2 -->
            <div class="flex justify-between items-center flex-wrap -mx-3">
              <div class="w-full md:w-1/2 px-3 mb-3">
                <button
                  @click="
                    currentStep = 3;
                    steps[3].status = '';
                  "
                  class="flex gap-3 text-sm items-center justify-center bg-transparent rounded-[8px] text-dark py-3 font-semibold tracking-wide border border-1 border-dark w-full"
                >
                  <i class="bx bx-left-arrow-alt"></i>
                  <span>Previous</span>
                </button>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-3">
                <button
                  :disabled="
                    !cardNumber || !cardHolder || !cvv || !exMonth || !exYear
                  "
                  class="bg-main text-sm rounded-[8px] text-white px-16 py-3 font-semibold tracking-wide disabled:opacity-75 disabled:cursor-not-allowed w-full"
                >
                  Save and continue
                </button>
              </div>
            </div>
          </Form>
        </section>
      </div>
    </transition>
  </NuxtLayout>
</template>

<style lang="scss">
.border-style {
  position: relative;
  &::before {
    content: "";
    content: "";
    width: 2px;
    display: inline-block;
    position: absolute;
    left: 19px;
    background: red;
    height: calc(100% - 40px);
    z-index: 1;
    @apply bg-zinc-300;
    z-index: 1;
  }
  li {
    z-index: 3;
    position: relative;
  }
}
</style>