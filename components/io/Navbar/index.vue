<template>
    <div class="section_container">


        
        <nav class="nav_container" :class="showMenu ? ' mb-[325px]' : 'mb-1'">
            <img class="nav_text" src="../../../assets/images/icons/eatteLogo.svg" alt="">
            <ul class="nav_ul_container"  :class="showMenu ? 'block' : 'hidden'">

                <li>
                    <a href="#" class="nav_element">
                        <span class="nav_text">About EATTE</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav_element">
                        <span class="nav_text">Why EATTE</span>
                    </a>
                </li>
                <li class="relative parent">
                    <a href="#" class="nav_parent_element">
                        <span class="nav_text">Features</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="dropDown_icon" viewBox="0 0 24 24">
                            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                    </a>
             <!--        <ul
                        class="nav_child_container child">
                        <li>
                            <a href="#" class="nav_child_element">
                                data
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav_child_element">
                                data
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav_child_element">
                                data
                            </a>
                        </li>
                    </ul> -->
                </li>
                <li class="relative parent">
                    <a href="#" class="nav_parent_element">
                        <span class=" nav_text">Restaurant Types</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="dropDown_icon" viewBox="0 0 24 24">
                            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                    </a>
       <!--              <ul
                        class="nav_child_container child">
                        <li>
                            <a href="#" class="nav_child_element">
                                data
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav_child_element">
                                data
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav_child_element">
                                data
                            </a>
                        </li>
                    </ul> -->
                </li>
                <li>
                    <a href="#" class="nav_element">
                        <span class=" nav_text">Pricing</span>
                    </a>
                </li>
            </ul>

            <div class="right_side">
                <div class="right_container">
                    <p class="nav_text login">Login</p>
                    <button class="get_started">Get
                        started</button>
                    <div class="contact_container">
                        <div class="card_container">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="phone_icon">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div class="col ">
                            <p class="contact_text">contact access</p>
                            <p class="number_text">010-123-4567</p>
                        </div>

                      <!--   <div class="col">
                            <SunIcon v-if="colorMode.preference === 'dark'" @click="colorMode.preference = 'light'"
                                class="block w-6 h-6 cursor-pointer stroke-white" aria-hidden="true" />

                            <MoonIcon v-if="colorMode.preference === 'light' || colorMode.preference === 'system'"
                                @click="colorMode.preference = 'dark'" class="block w-6 h-6 cursor-pointer "
                                aria-hidden="true" />

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 dark:stroke-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                            </svg>
                        </div> -->
                    </div>

                </div>
            </div>

            <div @click="showMenu = !showMenu" class="ham_btn flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
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
<!-- <div class="btn_div">
    <button class="get_started_mobile">Get
                        started</button>
</div> -->
    </div>

</template>

<script >

/* import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
const colorMode = useColorMode()
console.log(colorMode.preference)
const showMenu = false */

export default {
  data() {
    return {
      showMenu: false,
    };
  },
};


</script>

<style scoped>


.section_container{
    @apply bg-background-color 
}
.nav_container{
    @apply relative flex items-center px-4 
}

.nav_ul_container{
    @apply  items-center absolute left-0 right-0 mr-auto md:px-2 md:flex md:space-x-2 md:relative top-full
}

.nav_element{
    @apply flex items-center p-4 md:inline-flex hover:bg-gray-50
}

.nav_parent_element{
    @apply flex items-center justify-between p-4 space-x-2 md:inline-flex hover:bg-gray-50
}

.nav_text{
    @apply text-font-color
}

.dropDown_icon{
    @apply stroke-font-color w-2 h-4 pt-1 fill-current
}

.nav_child_container{
    @apply right-0 transition duration-300 bg-white child md:absolute top-full md:w-48 md:shadow-lg md:rounded-b 
}
.nav_child_element{
    @apply flex px-4 py-3 hover:bg-gray-50
}

.right_side{
    @apply py-4 text-lg md:py-0
}

.right_container{
    @apply flex items-center space-x-10
}
.get_started{
    @apply  text-base text-white rounded-lg bg-primary-color sm:px-2 py-3 m-1 pt-1.5
}
.get_started_mobile {
	display: none;
}
.contact_container{
    @apply flex items-center space-x-5
}
.card_container{
    @apply w-12 h-12 bg-[#ff613729] rounded-lg
  }

.phone_icon{
    @apply stroke-primary-color w-12 h-6 text-center my-2.5
}

.contact_text{
    @apply text-second-font-color text-sm
}
.number_text{
    @apply text-primary-color text-sm
}

.ham_icon{
    @apply ml-auto text-gray-500 cursor-pointer md:hidden
}

/* .btn_div{
    display: none;
} */
@media only screen and (min-width: 768px) {
    .parent:hover .child {
        opacity: 1;
        height: auto;
        overflow: none;
        transform: translateY(0);
    }

    .child {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transform: translateY(-10%);
        z-index: 999;
    }
}
@media (max-width: 576px) {

.btn_div{
    text-align: center;
}
.contact_container{
    display: none;
}
.login{
    display: none;
}

.get_started{
    display: none;
}
.ham_btn{
    width: 100%;
    justify-content: right;
}
.get_started_mobile {
	@apply inline w-52 self-end items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C]
}
}

</style>