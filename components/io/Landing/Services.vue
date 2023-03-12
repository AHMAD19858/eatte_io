<template>
  <section class="section_container">
    <div class="services_container">
      <div class="header_container">
        <h2 class="main_text">What do you get with EATTE?</h2>
        <p class="sub_text">
          EATTE allows you to take control of an online system, branded
          exclusively for YOUR restaurant.
        </p>
      </div>
      <div class="cards_container">
        <article>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <div class="card_container">
              <img
                src="../../../assets/images/icons/charts.svg"
                class="phone_icon"
                alt="svg"
              />
            </div>
          </a>
          <div class="p-4">
            <h3 class="main_card_text">COMPLETE ORDER AND MANAGEMENT SYSTEM</h3>
            <h6
              class="font-montse font-normal text-[#3F4440] text-base dark:text-white"
            >
              This provides hungry customers the ability to order directly from
              your restaurant's website — whether on desktops or mobile devices.
            </h6>
          </div>
        </article>

        <article>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <div class="card_container">
              <img
                src="../../../assets/images/icons/hand.svg"
                class="phone_icon"
                alt="svg"
              />
            </div>
          </a>
          <div class="p-4">
            <h3 class="main_card_text">
              CUSTOMER ACQUISITION, RETENTION AND LOYALTY
            </h3>
            <h6
              class="font-montse font-normal text-[#3F4440] text-base dark:text-white"
            >
              Recruit new customers by taking orders anywhere they find you,
              including Google or social media sites.
            </h6>
          </div>
        </article>

        <article>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <div class="card_container">
              <img
                src="../../../assets/images/icons/code.svg"
                class="phone_icon"
                alt="svg"
              />
            </div>
          </a>
          <div class="p-4">
            <h3 class="main_card_text">
              FULL SUITE OF BUSINESS TOOLS (HUBB BOSS)
            </h3>
            <h6
              class="font-montse font-normal text-[#3F4440] text-base dark:text-white"
            >
              Accept orders and establish delivery times through your tablet,
              mobile phone or desktop device. Use your Dashboard to update your
              menu, control inventory and communicate with your customers on the
              fly.
            </h6>
          </div>
        </article>

        <article>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <div class="card_container">
              <img
                src="../../../assets/images/icons/stars.svg"
                class="phone_icon"
                alt="svg"
              />
            </div>
          </a>
          <div class="p-4">
            <h3 class="main_card_text">CUSTOMER FEEDBACK</h3>
            <h6
              class="font-montse font-normal text-[#3F4440] text-base dark:text-white"
            >
              Learn valuable client data. After every order you will receive
              feedback allowing you to understand what your customers felt about
              their experience with your business. This information is crucial
              to improving your customer satisfaction ratings.
            </h6>
          </div>
        </article>
        <article>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <div class="card_container">
              <img
                src="../../../assets/images/icons/ad.svg"
                class="phone_icon"
                alt="svg"
              />
            </div>
          </a>
          <div class="p-4">
            <h3 class="main_card_text">MARKETING AND BUSINESS</h3>
            <h6
              class="font-montse font-normal text-[#3F4440] text-base dark:text-white"
            >
              EATTE will enable restaurants to partner with a dedicated success
              manager, mutually developing strategies that will procure more
              online orders.
            </h6>
          </div>
        </article>

        <article>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <div class="card_container">
              <img
                src="../../../assets/images/icons/history.svg"
                class="phone_icon"
                alt="svg"
              />
            </div>
          </a>
          <div class="p-4">
            <h3 class="main_card_text">DEDICATED SUPPORT</h3>
            <h6
              class="font-montse font-normal text-[#3F4440] text-base dark:text-white"
            >
              Reach EATTE support any day of the week. Our award-winning team is
              on call and proactively monitors orders as they come in. If you
              are having issues, they will be addressed and corrected
              immediately.
            </h6>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.section_container {
  @apply py-6 sm:py-12;
}

.services_container {
  @apply container p-6 mx-auto space-y-8;
}

.header_container {
  @apply space-y-2 text-center;
}

.main_text {
  @apply text-3xl font-bold text-primary-color font-montse;
}

.sub_text {
  @apply text-sm  font-montse dark:text-white;
}

.cards_container {
  @apply md:grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3;
}

article {
  @apply flex flex-col bg-white rounded-2xl my-3 dark:bg-[#272727];
}

.card_container {
  @apply w-12 h-12 bg-[#ff613729] rounded-lg flex items-center m-4;
}

.main_card_text {
  @apply flex-1 leading-snug text-2xl font-bold font-montse;
}

.phone_icon {
  @apply stroke-primary-color w-12 h-6 text-center text-3xl text-primary-color;
}
</style>
