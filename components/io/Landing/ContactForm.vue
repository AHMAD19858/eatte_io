<script setup>
definePageMeta({
  layout: "outside",
});

const url = "/api/support";
const isLoading = ref(false);
const isdisabled = ref(false);
const spinner = ref(false);


let formData = reactive({});

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});

async function onSubmit() {
  if (isLoading.value) return;
  isLoading.value = true;
  isdisabled.value = true;
  spinner.value = true;

    const { data } = await useFetch(
      `${url}?email=${form.email}&phone=${form.phone}&fullname=${
        form.firstName + form.lastName
      }&ticket_summary=${form.message}`,
      {
        method: "GET",
      }
    );
    isLoading.value = false;
    isdisabled.value = false;
    spinner.value = false;
    formData.value = data;
  
}
</script>

<template>
  <div class="container">
    <h3 class="plan_title">24/7 real-time support.</h3>

    <div class="plan_section">
      <div class="plan_side">
        <p class="font-montse">
          EATTE has the highest rated client support in software. We're here 24
          hours a day, every day of the week, including holidays.
        </p>
        <section>
          <form novalidate="" action="" class="container flex flex-col mx-auto">
            <fieldset class="grid grid-cols-4 gap-6">
              <div class="grid grid-cols-6 gap-4 col-span-full">
                <div class="input_div">
                  <label
                    for="firstname"
                    class="font-montse text-sm font-normal text-[#93A3B0CC]"
                    >First name</label
                  >
                  <input
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    class="label_input"
                    v-model="form.firstName"
                  />
       
                </div>
                <div class="input_div">
                  <label
                    for="lastname"
                    class="font-montse text-sm font-normal text-[#93A3B0CC]"
                    >Last name</label
                  >
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    class="label_input"
                    v-model="form.lastName"
                  />
          
                </div>
                <div class="single_input_div">
                  <label
                    for="email"
                    class="font-montse text-sm font-normal text-[#93A3B0CC]"
                    >Email Address</label
                  >
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    class="label_input"
                    v-model="form.email"
                  />
              
                </div>
                <div class="single_input_div">
                  <label
                    for="email"
                    class="font-montse text-sm font-normal text-[#93A3B0CC]"
                    >Phone Number</label
                  >
                  <input
                    id="email"
                    type="number"
                    placeholder="Phone Number"
                    class="label_input"
                    v-model="form.phone"
                  />
           
                </div>

                <div class="single_input_div">
                  <label
                    for="email"
                    class="font-montse text-sm font-normal text-[#93A3B0CC]"
                    >Message</label
                  >
                  <textarea
                    rows="4"
                    cols="50"
                    placeholder="Message"
                    class="textarea"
                    v-model="form.message"
                  ></textarea>

                </div>
              </div>
            </fieldset>
          </form>
        </section>
        <button :disabled="isdisabled" class="plan_btn" @click="onSubmit()">
          <p class="font-montse">Send message</p>
          <i class="bx bx-right-arrow-alt" v-show="spinner === false"></i>
          <img
            v-show="spinner === true"
            src="~/assets/images/icons/spinner.svg"
            class="animate-spin w-[30px]"
          />
        </button>

        <div
          v-if="formData.value && formData.value.status === true"
          class="flex justify-center rounded-[10px] mt-[40px] bg-green-500 h-12 items-center"
        >
          <i class="bx bxs-checkbox-checked text-3xl text-white"></i>
          <h4 class="text-white self-center font-montse">
            Message sent successfully!
          </h4>
        </div>
      </div>
      <div class="plan_side">
        <!--   <div class="plan">
          
        </div> -->
        <img src="~/assets/images/support.svg" class="plan" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply w-full max-w-[1200px] py-0  my-0 mx-auto;
}

.missing_input {
  @apply text-red-900 font-montse pt-2 text-sm pl-[10px];
}
.plan_title {
  @apply font-montse text-[40px] font-bold my-10 text-primary-color w-[310px];
}

.plan_section {
  @apply flex justify-between items-start flex-wrap mb-[100px] gap-[50px];
}

.plan_section .plan_side {
  width: calc(100% / 2 - 25px);
  align-self: self-end;
}

.plan_section .plan_side h1 {
  @apply mb-[15px] font-bold text-6xl;
}

.plan_section .plan_side p {
  @apply text-lg mb-[35px];
}

.plan_section .plan_side ul {
  @apply list-none p-0 flex justify-between items-start flex-wrap gap-5 mt-10;
}

.plan_section .plan_side ul li {
  @apply flex items-center w-full gap-[10px];
}

.plan_section .plan_side ul li i {
  @apply text-primary-color text-[20px];
}

.plan_section .plan_side ul li p {
  @apply text-base font-semibold mb-0;
}

.plan_section .plan_side .plan {
  @apply px-[15px]  relative;
}

.plan_section .plan_side .plan .plan_icon {
  @apply flex w-[55px] rounded-lg h-[55px] bg-[#93A3B029] justify-center items-center;
}

.plan_section .plan_side .plan .plan_icon i {
  @apply text-[40px];
}

.plan_section .plan_side .plan .plan_info h4 {
  @apply font-bold mb-[5px] text-font-color text-lg;
}

.plan_section .plan_side .plan .plan_info p {
  @apply text-base m-0 text-[#3F4440];
}

.plan_section .plan_side .plan .plan_best {
  @apply absolute m-0 text-white rounded-[20px] font-bold text-xs top-[50%] right-[15px] translate-y-[-50%] py-[5px] px-[10px] bg-gradient-to-r from-primary-color to-[#CC4D2C];
}

.plan_section .plan_side .plan.active_plan {
  @apply border-primary-color;
}

.plan_section .plan_side .plan.active_plan .plan_icon {
  @apply bg-primary-color;
}

.plan_section .plan_side .plan.active_plan .plan_icon i {
  @apply text-white;
}

.plan_section .plan_btn {
  @apply gap-[15px] w-full flex h-[55px] bg-gradient-to-r from-primary-color to-[#CC4D2C] justify-center rounded-[10px] items-center mt-[40px];
}

.plan_section .plan_btn p {
  @apply m-0 text-white font-bold text-lg;
}

.plan_section .plan_btn i {
  @apply text-[26px] text-white;
}

@media (max-width: 992px) {
  .plan_section .plan_side {
    @apply w-full;
  }
}

.label_input {
  @apply text-black p-[10px] mt-[10px] h-[50px] w-full rounded-[8px] focus:ring focus:ring-opacity-75 focus:ring-primary-color outline-none;
}

.textarea {
  @apply p-[10px] mt-[10px] h-[100px] w-full rounded-[8px] focus:ring focus:ring-opacity-75 focus:ring-violet-400 text-black;
}

.input_div {
  @apply col-span-full sm:col-span-3;
}
.single_input_div {
  @apply col-span-full;
}
@media (max-width: 1200px) {
  .container {
    max-width: 992px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 768px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 576px;
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 100%;
    margin-top: 100px;
    padding: 0 15px;
  }

  .plan_section .plan_side .plan {
   /*  height: 410px; */
    margin-left: -15px;
    margin-bottom: unset;
  }
  .plan_section .plan_btn {
    float: left;
    margin-inline: 20px;
    width: 300px;
  }

  .input_div {
    grid-column: span 4 / span 4;
  }
  .single_input_div {
    grid-column: span 4 / span 4;
  }

  .label_input {
    width: 300px;
  }
  .textarea {
    width: 300px;
  }
  .plan_section .plan_btn i {
    display: none;
  }
}

@media (max-width: 500px) {
  .container {
    max-width: 100%;
   /*  margin-top: 200px; */
/*     margin-inline: 20px; */
  }

  .label_input {
    width: 300px;
  }
  .textarea {
    width: 300px;
  }
  .plan_section .plan_side .plan {
    /* height: 410px; */
    margin-left: -15px;
    margin-bottom: unset;
  }

  .plan_section .plan_btn {
    float: left;
    margin-inline: 20px;
    width: 300px;
  }

  .plan_section .plan_side p {
    width: 345px;
  }
}
</style>
