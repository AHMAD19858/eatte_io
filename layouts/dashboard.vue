<script setup>
const colorMode = useColorMode()
let a = useRoute()

</script>

<template>
    <div class="flex flex-col min-h-screen ">
        <DashboardNavbar />
        <DashboardSidebar />

        <div class="pt-10 ml-64 pl-36">
            <DashboardBreadcrumb :primary="a.name.split('-')" />


            <slot />

        </div>
        <DashboardFooter class="mt-auto" />
    </div>

</template>



<style scoped>

</style>