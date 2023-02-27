<template>
    <section class="dark:bg-white dark:text-gray-100 h-[750px]">
        <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 class=" mb-6 text-[36px] font-semibold leading-none text-center  text-black">Frequently Asked Questions</h2>
            <p class="p-2 text-sm font-medium tracking-wider text-center  text-[#3F4440] mb-5">Everything you need to know
                about the product and billing.</p>
            <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-white">

                <div>

                    <div class="tabs">
                        <div class="tab">
                            <input type="checkbox" id="chck1">
                            <label class="tab-label" for="chck1">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit?</label>
                            <div class="tab-content">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                            </div>
                        </div>
                        <div class="tab">
                            <input type="checkbox" id="chck2">
                            <label class="tab-label" for="chck2">Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum?</label>
                            <div class="tab-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                            </div>
                        </div>

                        <div class="tab">
                            <input type="checkbox" id="chck3">
                            <label class="tab-label" for="chck3">Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum?</label>
                            <div class="tab-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="card">
            <div class="flex flex-col items-center justify-center py-10">
                <div class="flex -space-x-4">
                    <img alt="" class="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                        src="https://source.unsplash.com/40x40/?portrait?1">
                    <img alt="" class="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                        src="https://source.unsplash.com/40x40/?portrait?2">
                    <img alt="" class="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                        src="https://source.unsplash.com/40x40/?portrait?3">
                </div>
            </div>

            <h1 class=" text-center font-semibold text-xl text-font-color">Still have questions?</h1>

            <p class=" text-center font-normal text-[15px] text-[#3F4440]">Can’t find the answer you’re looking for? Please
                chat to our friendly team.</p>
            <div class="view_button">
                <button class="get_started">Get in touch
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>

        </div>
    </section>
</template>

<script setup>

</script>

<style  scoped>
.card {
    background-color: #F5F6FA;
    border-radius: 16px;
    height: 300px;
    margin-right: 250px;
    margin-left: 250px;
    margin-bottom: 10px;
}

.view_button {
    @apply flex flex-wrap justify-center my-8
}



.get_started {
    @apply flex w-[234px] items-end self-baseline justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C]
}

body {
    color: #2c3e50;
    background: #ecf0f1;
    padding: 0 1em 1em;
}

h1 {
    margin: 0;
    line-height: 2;
    text-align: center;
}

h2 {
    margin: 0 0 0.5em;
    font-weight: normal;
}

input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.row {
    display: flex;
}

.row .col {
    flex: 1;
}

.row .col:last-child {
    margin-left: 1em;
}

/* Accordion styles */
.tabs {
    border-radius: 8px;
    overflow: hidden;
}

.tab {
    width: 100%;
    color: white;
    overflow: hidden;
}

.tab-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: white;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    color: var(--font);
}



.tab-label::after {
    content: "❯";
    width: 1em;
    height: 1em;
    text-align: center;
    transition: all 0.35s;
    color: #FF6137;
}

.tab-content {
    max-height: 0;
    padding: 0 1em;
    color: #2c3e50;
    background: white;
    transition: all 0.35s;
}

.tab-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: #2c3e50;
    cursor: pointer;
}

.tab-close:hover {
    background: #1a252f;
}

/* input:checked + .tab-label {
  background: red;
} */
input:checked+.tab-label::after {
    transform: rotate(90deg);
}

input:checked~.tab-content {
    max-height: 100vh;
    padding: 1em;
}

@media (max-width: 576px) {
    .card {

        margin-left: unset;
        margin-right: unset;
    }
}</style>