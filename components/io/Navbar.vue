<template>
  <div class="section_container">
    <nav class="nav_container" :class="showMenu ? ' mb-[1100px]' : 'mb-1'">
      <NuxtLink to="/" class="h-[60px]">
        <img
          v-show="$colorMode.value === 'dark'"
          src="../../assets/images/icons/eatteLogo.svg"
          class="darak_img"
          alt="svg"
        />
        <img
          v-show="$colorMode.value === 'light'"
          src="../../assets/images/icons/eatteLogo.svg"
          alt="svg"
        />
      </NuxtLink>
      <ul class="nav_ul_container" :class="showMenu ? 'block' : 'hidden'">
        <li class="static parent">
          <a href="#" class="nav_parent_element">
            <span class="nav_text">Product</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="dropDown_icon"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
              />
            </svg>
          </a>
          <div class="mobile_sub">
            <NuxtLink to="/pos">
              <p class="dark:text-white p-4">Point of sale</p>
            </NuxtLink>
            <NuxtLink to="/inventory">
              <p class="dark:text-white p-4">Inventory Management</p>
            </NuxtLink>
            <NuxtLink to="/kds">
              <p class="dark:text-white p-4">Kitchen Display System</p>
            </NuxtLink>
            <NuxtLink to="/reports">
              <p class="dark:text-white p-4">Reports & Analytics</p>
            </NuxtLink>
            <NuxtLink to="/reservation">
              <p class="dark:text-white p-4">Reservation</p>
            </NuxtLink>
            <NuxtLink to="/payment">
              <p class="dark:text-white p-4">Payment</p>
            </NuxtLink>
            <NuxtLink to="/marketing">
              <p class="dark:text-white p-4">Marketing</p>
            </NuxtLink>
            <NuxtLink to="/back-office-managment">
              <p class="dark:text-white p-4">Back-Office Management</p>
            </NuxtLink>
            <NuxtLink to="/floor-managment">
              <p class="dark:text-white p-4">Floor Management</p>
            </NuxtLink>
            <NuxtLink to="/tale-managment">
              <p class="dark:text-white p-4">Table Management with Server</p>
            </NuxtLink>
            <NuxtLink to="/loyalty">
              <p class="dark:text-white p-4">Loyalty</p>
            </NuxtLink>
            <NuxtLink to="/gift-card">
              <p class="dark:text-white p-4">Gift Cards</p>
            </NuxtLink>
            <NuxtLink to="/feedback">
              <p class="dark:text-white p-4">Guest feedback</p>
            </NuxtLink>
            <NuxtLink to="/sms-marketing">
              <p class="dark:text-white p-4">SMS Marketing</p>
            </NuxtLink>
            <NuxtLink to="/employee-managment">
              <p class="dark:text-white p-4">Employee Management</p>
            </NuxtLink>
            <NuxtLink to="/payroll">
              <p class="dark:text-white p-4">Payroll</p>
            </NuxtLink>
            <NuxtLink to="/tips-managment">
              <p class="dark:text-white p-4">Tips management</p>
            </NuxtLink>
          </div>

          <ul class="nav_child_container child flex">
            <div class="dropdown_left">
              <div class="grid grid-cols-3 gap-7 md:grid-cols-3">
                <div class="grid-flow-col">
                  <h1 class="text-primary-color font-montse font-bold">
                    Restaurant Operations
                  </h1>
                  <hr />
                  <NuxtLink to="/pos">
                    <p class="megaNav_content">
                      <span class="dot"></span> Point of sale
                    </p>
                  </NuxtLink>

                  <NuxtLink to="/inventory">
                    <p class="megaNav_content">
                      <span class="dot"></span> Inventory Management
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/kds">
                    <p class="megaNav_content">
                      <span class="dot"></span> Kitchen Display System
                    </p>
                  </NuxtLink>

                  <NuxtLink to="/reports">
                    <p class="megaNav_content">
                      <span class="dot"></span> Reports & Analytics
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/reservation">
                    <p class="megaNav_content">
                      <span class="dot"></span> Reservation
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/payment">
                    <p class="megaNav_content">
                      <span class="dot"></span> Payment
                    </p>
                  </NuxtLink>

                  <NuxtLink to="/">
                    <p class="megaNav_content">
                      <span class="dot"></span> Marketing
                    </p>
                  </NuxtLink>

                  <NuxtLink to="/back-office-managment">
                    <p class="megaNav_content">
                      <span class="dot"></span> Back-Office Management
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/floor-managment">
                    <p class="megaNav_content">
                      <span class="dot"></span> Floor Management
                    </p>
                  </NuxtLink>

                  <NuxtLink to="/table-managment">
                    <p class="megaNav_content">
                      <span class="dot"></span> Table Management with Server
                      Rotation
                    </p>
                  </NuxtLink>
                </div>

                <div class="grid-flow-col">
                  <h1 class="text-primary-color font-montse font-bold">
                    Attract & Retain Your Guests
                  </h1>
                  <hr />
                  <NuxtLink to="/loyalty">
                    <p class="megaNav_content">
                      <span class="dot"></span> Loyalty
                    </p>
                  </NuxtLink>

                  <NuxtLink to="/gift-card">
                    <p class="megaNav_content">
                      <span class="dot"></span> Gift Cards
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/feedback">
                    <p class="megaNav_content">
                      <span class="dot"></span> Guest feedback
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/coupons">
                    <p class="megaNav_content">
                      <span class="dot"></span> Coupons
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/sms-marketing">
                    <p class="megaNav_content">
                      <span class="dot"></span> SMS Marketing
                    </p>
                  </NuxtLink>
                  <div class="pt-9">
                    <h1 class="text-primary-color font-montse font-bold">
                      Team Performance
                    </h1>
                    <hr />
                    <NuxtLink to="/employee-managment">
                      <p class="megaNav_content">
                        <span class="dot"></span> Employee Management
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/payroll">
                      <p class="megaNav_content">
                        <span class="dot"></span> Payroll
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/tips-managment">
                      <p class="megaNav_content">
                        <span class="dot"></span> Tips management
                      </p>
                    </NuxtLink>
                  </div>
                </div>

                <div class="grid-flow-col">
                  <h1 class="text-primary-color font-montse font-bold">
                    Online Services
                  </h1>
                  <hr />
                  <NuxtLink to="/ordering">
                    <p class="megaNav_content">
                      <span class="dot"></span> Online Ordering
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/delivery">
                    <p class="megaNav_content">
                      <span class="dot"></span> Takeout & Delivery
                    </p>
                  </NuxtLink>

                  <NuxtLink to="/reservation">
                    <p class="megaNav_content">
                      <span class="dot"></span> Customer Online Reservations
                    </p>
                  </NuxtLink>
                  <NuxtLink to="/customer-support">
                    <p class="megaNav_content">
                      <span class="dot"></span> Customer Support
                    </p>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="dropdown_right">
              <div class="block">
                <p
                  class="relative top-12 px-9 text-white font-montse text-left"
                >
                  Sign up for EATTE today and transform the way you run your
                  restaurant!
                </p>
                <img
                  class="relative top-12 ml-[-50px]"
                  src="../../assets/images/nav.svg"
                  alt=""
                />
                <div class="view_button">
                  <NuxtLink to="https://eatte.io/request-demo" target="_blank">
                    <button class="get_demo">
                      get a demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </ul>
        </li>

        <li>
          <a href="#" class="nav_element">
            <span class="nav_text">Pricing</span>
          </a>
        </li>

        <li>
          <NuxtLink to="/about-eatte">
            <a href="#" class="nav_element">
              <span class="nav_text">Restaurant Types</span>
            </a>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/about-eatte">
            <a href="#" class="nav_element">
              <span class="nav_text">About EATTE</span>
            </a>
          </NuxtLink>
        </li>

        <div class="btn_div" :class="showMenu ? 'block' : 'hidden'">
          <NuxtLink to="/login">
            <p class="login_btn">Login</p>
          </NuxtLink>
        </div>
      </ul>

      <div class="right_side">
        <div class="right_container">
          <NuxtLink to="/login"><p class="login_btn login">Login</p></NuxtLink>
          <NuxtLink to="https://eatte.io/new_wizard/" target="_blank">
            <button class="get_started">
              <p class="text-center font-montse font-normal text-[14px]">
                Get Started
              </p>
            </button>
          </NuxtLink>
          <div class="contact_container">
            <div class="card_container">
              <a href="tel:010-123-4567">
                <img src="~/assets/images/icons/phone.svg" class="phone_icon" />
              </a>
            </div>
            <div class="col">
              <p class="contact_text">contact access</p>

              <a href="tel:13053609462">
                <p class="number_text">+13053609462</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="ham_btn flex">
        <button type="button" class="mobile_mode">
          <i
            class="bx bx-sun cursor-pointer dark:text-white text-xl"
            v-if="colorMode.value == 'light'"
            @click="$colorMode.preference = 'dark'"
          ></i>
          <i
            class="bx bx-moon cursor-pointer dark:text-white text-xl"
            v-if="colorMode.value == 'dark'"
            @click="$colorMode.preference = 'light'"
          ></i>
        </button>

        <button
          @click="showMenu = !showMenu"
          type="button"
          class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400 md:hidden"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>

    <!--    <div class="btn_div" :class="showMenu ? 'block' : 'hidden'">
      <NuxtLink to="/login">
        <p class="login_btn">Login</p>
      </NuxtLink>

      <button class="get_started_mobile">Get Started</button>
    </div> -->
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const showMenu = ref(false);
</script>

<style scoped>
.mobile_sub {
  display: none;
}
.megaNav_content {
  @apply font-medium font-montse dark:text-white cursor-pointer py-[5px];
}
.dot {
  height: 5px;
  width: 5px;
  background-color: #3f4440;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  @apply dark:bg-white;
}
.dropdown_left {
  @apply flex md:w-full justify-center pb-10 items-center bg-background-color dark:bg-dark-background-color;
}
.dropdown_right {
  @apply relative  md:grid w-[20%] bg-gradient-to-tr from-primary-color to-[#CC4D2C] justify-around items-center hidden;
}
.view_button {
  @apply flex flex-wrap justify-center my-8  text-white;
}

.get_demo {
  @apply font-montse md:text-white md:border-white  dark:text-white dark:border-white flex  self-baseline items-center justify-evenly rounded-lg px-8 py-1 m-2 text-lg text-font-color border-font-color border-2;
}
.darak_img {
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(70deg)
    brightness(99%) contrast(107%);
}

.section_container {
  @apply z-50 bg-background-color dark:bg-dark-background-color py-[10px];
}
.mobile_view_container {
  display: none;
}
.nav_container {
  @apply relative flex items-center px-4;
}

.nav_ul_container {
  @apply items-center absolute left-0 right-0 mr-auto md:px-2 md:flex md:space-x-2 md:static top-full;
}

.nav_element {
  @apply flex items-center p-4 md:inline-flex;
}

.nav_parent_element {
  @apply flex items-center justify-between p-5 space-x-2 md:inline-flex;
}

.nav_text {
  @apply text-font-color dark:text-white font-montse;
}

.login_btn {
  @apply text-font-color text-base font-medium dark:text-white font-montse;
}
.dropDown_icon {
  @apply stroke-font-color w-2 h-4 pt-1 fill-current  dark:text-white;
}

.nav_child_container {
  opacity: 0;
  height: 0;
  overflow: hidden;
  transform: translateY(-10%);
  z-index: 999;
  left: 0;
  @apply transition duration-300 bg-white child md:absolute top-full md:w-full md:shadow-lg md:rounded-b;
}
.nav_child_element {
  @apply flex px-4 py-3;
}

.right_side {
  @apply py-4 text-lg md:py-0;
}

.right_container {
  @apply flex items-center space-x-8;
}
.get_started {
  @apply text-base text-white rounded-lg bg-primary-color w-[126px] h-[44px];
}
.get_started_mobile {
  display: none;
}
.contact_container {
  @apply flex items-center space-x-1;
}
.card_container {
  @apply w-12 h-12 bg-[#ff613729] rounded-lg;
}

.phone_icon {
  @apply stroke-primary-color w-12 h-6 text-center my-2.5;
}

.contact_text {
  @apply text-second-font-color text-sm font-montse;
}
.number_text {
  @apply text-primary-color text-sm;
}

.ham_icon {
  @apply ml-auto text-gray-500 cursor-pointer md:hidden;
}
.mobile_mode {
  @apply mx-5 text-gray-800 hover:text-gray-400  focus:outline-none focus:text-gray-400;
}

@media (min-width: 768px) {
  .parent:hover .child {
    opacity: 1;
    height: auto;
    overflow: none;
    transform: translateY(0);
    /* width: 100vw; */
  }

  /*   .parent:active .child {
    opacity: 1;
    height: 50px;
    overflow: none;
    transform: translateY(0);
  } */

  .mobile_mode {
    @apply mx-5 text-gray-800 hover:text-gray-400  focus:outline-none focus:text-gray-400;
  }

  .web_mode {
    display: none;
  }
}

@media (max-width: 690px) {
  .nav_container {
    padding-left: 1rem;
  }
}
@media (max-width: 576px) {
  .mobile_view_container {
    @apply z-50 bg-background-color dark:bg-dark-background-color pt-[10px] pb-[700px];
  }
  .mobile_sub {
    @apply grid grid-cols-2 gap-2 text-center;
  }
  .dropDown_icon {
    display: none;
  }
  .btn_div {
    text-align: center;
  }
  .contact_container {
    display: none;
  }
  .login {
    display: none;
  }

  .get_started {
    display: none;
  }
  .ham_btn {
    width: 100%;
    justify-content: right;
  }
  .get_started_mobile {
    @apply inline w-52 self-end items-center justify-evenly rounded-lg px-8 py-3 m-20 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C] mt-[395px];
  }
  /*   .login_mobile {
    margin-bottom: 20px;
  } */

  .mobile_mode {
    @apply mx-5 text-gray-800 hover:text-gray-400  focus:outline-none focus:text-gray-400;
  }

  .web_mode {
    display: none;
  }
}
</style>
