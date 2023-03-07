<script setup>
import PosImage from '../assets/images/pos.svg'
</script>

<template>
    <div class="screen_container">


        <IoHeadersRow 
            :service="'POS'"
            :sub_text="' Welcome to EATTE POS, the innovative omni-channel point of sale system designed to connect everything in your restaurant together. Our platform is the perfect solution for restaurant owners who want to streamline their operations, improve efficiency, and increase profitability.'"
            :start_btn="'Get Started'"
			:demo_btn="'Get a demo'"
            :row_img="PosImage"
            />
 

    </div>
</template>



<style scoped>
.screen_container {
    @apply bg-background-color min-h-full dark:text-white dark:bg-dark-background-color
}
</style>