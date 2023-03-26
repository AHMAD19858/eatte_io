<template>
  <section class="section_container">
    <div class="services_container">
      <IoHeadersTripleLines
        :first_line="'Why Choose Us?'"
        :main="'Built To Make Your Restaurant Better'"
        :first_sub_main="'EATTE connects employees, operations, and guests on a reliable, easy-to-use platform so restaurateurs can'"
        :second_sub_main="'stay one step ahead of a rapidly evolving hospitality market.'"
      />
      <div class="cards_container">
        <article>
          <div class="card_container">
            <img
              src="../../../assets/images/icons/box.svg"
              class="phone_icon"
              alt="svg"
            />
          </div>

          <div class="p-4">
            <h3 class="main_card_text">EATTE Package is FREE</h3>
            <h6 class="sub_title">
              All you need to manage your restaurant and take control of an
              online system, branded exclusively for your restaurant is free.The
              EATTE Direct suite of customer service and back office tools is
              free for restaurant owners. Customers will pay only $1.49 per
              order service fee.
            </h6>
          </div>
        </article>

        <article>
          <div class="card_container">
            <img
            src="../../../assets/images/icons/ring.svg"
              class="phone_icon"
              alt="svg"
            />
          </div>
          <div class="p-4">
            <h3 class="main_card_text">Customer-first Approach</h3>
            <h6 class="sub_title">
              Following the customer-first approach since inception, our
              customer service team ensures that your experience is smooth with
              us, and helps you make the most of our products. We provide the
              best-in-class 24*7 live support, online product training as well
              as implementation at NO-COST.
            </h6>
          </div>
        </article>

        <article>
          <div class="card_container">
            <img
            src="../../../assets/images/icons/pattern.svg"
              class="phone_icon"
              alt="svg"
            />
          </div>
          <div class="p-4">
            <h3 class="main_card_text">Seamless User Experience</h3>
            <h6 class="sub_title">
              We aim at developing top-rated products to provide the best
              user-experience and streamline your operations. All our product
              enhancements are done keeping your experience in mind. Besides,
              they're extremely easy to use; needing no technical knowledge to
              operate.
            </h6>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.phone_icon {
  @apply stroke-primary-color w-12 h-6 text-center text-3xl text-primary-color;
}
.section_container {
  @apply py-6 sm:py-12;
}

.services_container {
  @apply container p-6 mx-auto space-y-8;
}

.cards_container {
  @apply md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3;
}

article {
  @apply flex  py-4 flex-col bg-white rounded-2xl my-3 dark:bg-[#272727];
}

.card_container {
  @apply w-12 h-12 bg-[#ff613729] rounded-lg flex items-center m-4 self-center;
}

.main_card_text {
  @apply flex-1 leading-snug text-2xl font-bold font-montse text-center text-primary-color mb-2 dark:text-primary-color;
}

.sub_title {
  @apply font-montse font-normal text-[#3F4440] text-base text-center dark:text-white;
}

@media (max-width: 576px) {
  article {
    @apply mt-7;
  }
}
</style>
