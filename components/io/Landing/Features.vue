<template>
    <section>
        <div>
            <img class=" w-3/5 border-2 rounded-lg"
                src="https://medevel.com/content/images/2022/07/Screen-Shot-2022-07-30-at-11.42.40.png" alt="">

        </div>
        <div class="view_button">
            <button class="get_started">View all features
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    </section>
</template>

<script setup>

</script>

<style  scoped>
.view_button {
    @apply flex flex-wrap justify-center my-8
}



.get_started {
    @apply font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C]
}


img {
    display: block;
    margin-left: auto;
    margin-right: auto;
   /*  box-shadow: 10px 10px 5px 12px #FF6137; */
  /*  text-shadow: 2px 2px #FF6137; */
}
</style>