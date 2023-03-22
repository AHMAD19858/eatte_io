<script setup></script>

<template>
  <div class="container">
    <div class="values_section">
      <div class="side_section pt-24">
        <p class="font-bold text-lg text-primary-color">Our Values</p>
        <h4 class="text-4xl font-bold text-font-color dark:text-white">
          We're Always Looking For The Right Ingredients
        </h4>
        <p class="mt-[35px]">
          Our values are more than just words. They define what is important to
          us and guide how we approach our relationships and our business. These
          values drive individual and team efforts toward the best possible
          outcomes for our customers, colleagues, and partners.
        </p>
      </div>
      <div class="side_section">
        <div class="cards_container">
          <article>
            <div class="p-2 self-center">
              <div class="img_container">
                <div class="card_container">
                  <img
                    src="../../../assets/images/icons/charts.svg"
                    class="phone_icon"
                    alt="svg"
                  />
                </div>
              </div>

              <h3 class="main_card_text">Respect</h3>
              <p class="text-center">
                Our desire to do what we love is contagious and fuels our
                excitement to drive excellence with our people and our products.
              </p>
            </div>
          </article>
          <article class="down">
            <div class="p-2 self-center">
              <div class="img_container">
                <div class="card_container">
                  <img
                    src="../../../assets/images/icons/charts.svg"
                    class="phone_icon"
                    alt="svg"
                  />
                </div>
              </div>

              <h3 class="main_card_text">Passion</h3>
              <p class="text-center">
                Our desire to do what we love is contagious and fuels our
                excitement to drive excellence with our people and our products.
              </p>
            </div>
          </article>
        </div>

        <div class="cards_container">
          <article>
            <div class="p-2 self-center">
              <div class="img_container">
                <div class="card_container">
                  <img
                    src="../../../assets/images/icons/charts.svg"
                    class="phone_icon"
                    alt="svg"
                  />
                </div>
              </div>

              <h3 class="main_card_text">Collaboration</h3>
              <p class="text-center">
                Our desire to do what we love is contagious and fuels our
                excitement to drive excellence with our people and our products.
              </p>
            </div>
          </article>
          <article class="down">
            <div class="p-2 self-center">
              <div class="img_container">
                <div class="card_container">
                  <img
                    src="../../../assets/images/icons/charts.svg"
                    class="phone_icon"
                    alt="svg"
                  />
                </div>
              </div>

              <h3 class="main_card_text">Innovation</h3>
              <p class="text-center">
                Our desire to do what we love is contagious and fuels our
                excitement to drive excellence with our people and our products.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.down {
  transform: translateY(25px);
}
.main_card_text {
  @apply flex-1 leading-snug text-2xl font-bold font-montse text-center;
}
.phone_icon {
  @apply stroke-primary-color w-12 h-6 text-center text-3xl text-primary-color;
}
.cards_container {
  @apply md:grid grid-cols-3 gap-[320px] md:grid-cols-2 lg:grid-cols-3;
}
.card_container {
  @apply w-12 h-12 flex items-center m-4 justify-center bg-[#F5F6FA] rounded-full dark:bg-white;
}
article {
  @apply flex  w-[312px] h-[286px] flex-col bg-white rounded-2xl my-3 dark:bg-[#272727];
}

.card_container {
  @apply flex items-center m-4;
}
.img_container {
  position: relative;
  left: 33%;
}
.container {
  @apply w-full max-w-[1200px] py-0 px-[15px] mb-0 mt-[330px] mx-auto;
}

.plan_title {
  @apply text-[40px] font-bold my-10 text-primary-color font-montse;
}

.values_section {
  @apply flex justify-between items-start flex-wrap mb-[50px] gap-[50px];
}

.values_section .side_section {
  width: calc(100% / 2 - 25px);
}

.values_section .side_section h1 {
  @apply mb-[15px] font-bold text-6xl;
}

.values_section .side_section p {
  @apply text-lg  font-montse;
}

.values_section .side_section ul {
  @apply list-none p-0 flex justify-between items-start flex-wrap gap-5 mt-10;
}

.values_section .side_section ul li {
  @apply flex items-center w-full gap-[10px];
}

.values_section .side_section ul li i {
  @apply text-primary-color text-[20px];
}

.values_section .side_section ul li p {
  @apply text-base font-semibold mb-0 font-montse;
}

.values_section .side_section .plan {
  @apply cursor-pointer py-[25px] border-[3px] px-[15px] border-white border-solid h-[110px] bg-white gap-[20px] rounded-[15px] flex w-full mb-10 items-center justify-start relative hover:border-primary-color hover:border-solid;
}

.values_section .side_section .plan .plan_icon {
  @apply flex w-[55px] rounded-lg h-[55px] bg-[#93A3B029] justify-center items-center;
}

.values_section .side_section .plan .plan_icon i {
  @apply text-[40px];
}

.values_section .side_section .plan .plan_info h4 {
  @apply font-bold mb-[5px] text-font-color text-lg font-montse;
}

.values_section .side_section .plan .plan_info p {
  @apply text-base m-0 text-[#3F4440] font-montse;
}

.values_section .side_section .plan .plan_best {
  @apply font-montse absolute m-0 text-white rounded-[20px] font-bold text-xs top-[50%] right-[15px] translate-y-[-50%] py-[5px] px-[10px] bg-gradient-to-r from-primary-color to-[#CC4D2C];
}

.values_section .side_section .plan.active_plan {
  @apply border-primary-color cursor-pointer;
}

.values_section .side_section .plan.active_plan .plan_icon {
  @apply bg-primary-color;
}

.values_section .side_section .plan.active_plan .plan_icon i {
  @apply text-white;
}

.values_section .plan_btn {
  @apply gap-[15px] w-full flex h-[55px] bg-gradient-to-r from-primary-color to-[#CC4D2C] justify-center rounded-[10px] items-center;
}

.values_section .plan_btn p {
  @apply m-0 text-white font-bold text-lg;
}

.values_section .plan_btn i {
  @apply text-[26px] text-white;
}

@media (max-width: 992px) {
  .values_section .side_section {
    @apply w-full;
  }
}

.header_container {
  @apply space-y-2 text-center mb-16;
}

.main_text {
  @apply text-[35px] font-bold text-primary-color leading-7 font-montse;
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
  }
  .values_section .side_section .plan .plan_best {
    top: 25%;
    font-family: "Montserrat";
  }
  .side_section {
    margin-left: 20px;
  }
  article {
    margin-top: 2.75rem;
  }
}
</style>
