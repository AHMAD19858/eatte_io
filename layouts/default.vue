<script setup>

const colorMode = useColorMode()
console.log(colorMode.preference)
</script>

<template>
    <div class="flex flex-col min-h-screen ">
        <IoNavbar />
        <slot />
    </div>
</template>



<style scoped>

</style>