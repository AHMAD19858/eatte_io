<template>
    <div class="section_container">



        <nav class="nav_container">
            <ul class="nav_ul_container">
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
                    <p class="nav_text">Login</p>
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
                        <div class="col">
                            <p class="contact_text">contact access</p>
                            <p class="number_text">010-123-4567</p>
                        </div>
                    </div>

                </div>
            </div>

     <!--        <div class="ham_icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                        d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
            </div> -->
        </nav>
    </div>

</template>

<script setup>

</script>

<style scoped>


.section_container{
    @apply bg-white 
}
.nav_container{
    @apply relative flex items-center px-4 border-b md:shadow-lg
}

.nav_ul_container{
    @apply absolute left-0 right-0 mr-auto md:px-2 md:flex md:space-x-2 md:relative top-full
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

/* 	.section_container {
	    width: 466px;
} */

.nav_ul_container{
    background-color: #fff;
    /* width: 455px; */
}
}

</style>