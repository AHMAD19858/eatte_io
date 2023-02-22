<template>
    <div>
        <nav aria-label="breadcrumb"  class="w-full p-4 dark:bg-gray-800 dark:text-gray-100">
            <ol class="flex h-8 space-x-2" >
                <li class="flex items-center">
                    <NuxtLink to="/dashboard/home">
                        <a rel="noopener noreferrer" href="#" title="Back to homepage" class="hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                        </a>
                    </NuxtLink>

                </li>
                <li class="flex items-center space-x-2" v-for="product in props.primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"
                        class="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                        <path d="M32 30.031h-32l16-28.061z"></path>
                    </svg>

                    <a rel="noopener noreferrer" href="#"
                        class="flex items-center px-1 capitalize hover:underline">{{product }}</a>
                </li>


            </ol>
        </nav>
    </div>
</template>

<script setup>
console.log("d", useRoute().params)
const props = defineProps({
    primary: { type: String, required: true },
})
</script>

<style lang="scss" scoped>

</style>