<template>
    <div>
        <Disclosure as="nav">
            <div class="nav_container">
                <div class="nav_div">
                    <div class="nav_header">
                        <!-- Mobile menu button-->

                        <header class="drawer_icon_header" data-dev-hint="mobile menu bar">


                            <label for="menu-open" id="mobile-menu-button" class="drawer_icon_container">
                                <svg id="menu-open-icon" class="drawer_icon" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg id="menu-close-icon" class="drawer_icon" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </label>
                        </header>

                    </div>

                    <div class="nav_content_container">
                        <button type="button" class="nav_notification_btn">
                            <span class="sr-only">View notifications</span>
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative ml-3">
                            <div>
                                <MenuButton class="nav_profile_container">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="nav_profile_img"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="" />
                                </MenuButton>
                            </div>
                            <transition enter-active-class="transition duration-100 ease-out"
                                enter-from-class="transform scale-95 opacity-0"
                                enter-to-class="transform scale-100 opacity-100"
                                leave-active-class="transition duration-75 ease-in"
                                leave-from-class="transform scale-100 opacity-100"
                                leave-to-class="transform scale-95 opacity-0">
                                <MenuItems
                                    class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                                        Profile</a>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign
                                        out</a>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>


        </Disclosure>
    </div>
</template>

<script setup>
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

</script>

<style scoped>
.router-link-exact-active {
    color: red
}

.layout_container{
    @apply grid-cols-6 min-h-screen
  }
  .nav_container {
    @apply px-2 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-900
  }

  .nav_div {
    @apply relative flex h-16 items-center justify-end
  }

  .nav_header {
    @apply absolute inset-y-0 left-0 flex items-center sm:hidden
  }

  .drawer_icon_header{
  @apply bg-gray-600 rounded-full text-gray-100 flex justify-between md:hidden
  }

  .drawer_icon_container {
    @apply m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md
  }

  .drawer_icon{
   @apply h-6 w-6 transition duration-200 ease-in-out
  }

  .nav_content_container{
  @apply absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0
  }

.nav_notification_btn{
  @apply rounded-full bg-orange-100 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
}

.nav_profile_container{
  @apply flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
}

.nav_profile_img{
  @apply h-8 w-8 rounded-full
}

.nav_dropdown_container{
  @apply absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
}

#sidebar {
    --tw-translate-x: -100%;
}

#menu-close-icon {
    display: none;
}

#menu-open:checked~#sidebar {
    --tw-translate-x: 0;
}

#menu-open:checked~* #mobile-menu-button {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

#menu-open:checked~* #menu-open-icon {
    display: none;
}

#menu-open:checked~* #menu-close-icon {
    display: block;
}

@media (min-width: 768px) {
    #sidebar {
        --tw-translate-x: 0;
    }
}
</style>