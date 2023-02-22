<template>
    <div  data-dev-hint="container">
        <input type="checkbox" id="menu-open" class="hidden" />

        <aside id="sidebar"
            class="absolute inset-y-0 left-0 w-3/4 grid-cols-6 px-0 pt-6 space-y-6 overflow-x-hidden overflow-y-hidden text-gray-100 transition duration-200 ease-in-out transform md:w-64 md:fixed md:translate-x-0 md:flex md:flex-col md:justify-between "
            data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">

            <div class="flex flex-col flex-auto flex-shrink-0 min-h-screen overflow-auto antialiased text-gray-800">
                <div class="fixed top-0 left-0 flex flex-col w-64 h-full bg-gray-100 border-r dark:bg-slate-900">
                    <div class="flex items-center justify-center h-16 border-b">
                        <div>
                            <p>EATTE - Super admin dashboard</p>
                        </div>
                    </div>
                    <div class="flex-grow overflow-x-hidden overflow-y-hidden">
                        <ul class="flex flex-col py-4 space-y-1">
                            <li class="px-5">
                                <div class="flex flex-row items-center h-8">
                                    <div class="text-sm font-light tracking-wide text-gray-500">Menu</div>
                                </div>
                            </li>
                            <li>
                                <NuxtLink to="/dashboard/home"  class="relative flex flex-row items-center pr-6 text-gray-600 border-l-4 border-transparent h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500">
                                    <span class="inline-flex items-center justify-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate dark:text-white">Dashboard</span>
                                
                                </NuxtLink>
                            </li>
                            <li>
                    


                                <NuxtLink to="/dashboard/restaurants"  class="relative flex flex-row items-center pr-6 text-gray-600 border-l-4 border-transparent h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500">
                                    <span class="inline-flex items-center justify-center ml-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                        </svg>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate dark:text-white">Restaurants</span>
                                
                                </NuxtLink>
                            </li>

                            <li>
                                <a href="#"
                                    class="relative flex flex-row items-center pr-6 text-gray-600 border-l-4 border-transparent h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500">
                                    <span class="inline-flex items-center justify-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
                                </a>
                            </li>



                        </ul>
                        <hr>


                        <div class="flex justify-around py-5">
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

                        </div>
                    </div>
                </div>
            </div>

        </aside>

    </div>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const colorMode = useColorMode()
console.log(colorMode.preference)
</script>

<style lang="scss" scoped>

</style>