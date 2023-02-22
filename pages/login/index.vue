<template>


    <div class="w-screen">
        <div class="h-screen">
            <div class="d">

                <div class="container"></div>
                <div class="login_card">
                    <div class="w-full">

                        <form class="px-8 pb-8 mb-4 bg-white rounded shadow-md pt-9">
                            <div class="mb-2 text-xl font-bold">Login</div>
                            <div class="flex ">
                                <p class="text-base text-gray-800 mb-7 ">
                                    New user?
                                </p>
                                <p
                                    class="mx-1 text-base text-gray-800 underline cursor-pointer mb-7 underline-offset-1 first-letter">
                                    Create an account
                                </p>
                            </div>

                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                    Username
                                </label>
                                <input
                                    class="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-3xl focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="Username">
                            </div>
                            <div class="mb-6">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                    Password
                                </label>
                                <input
                                    class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border shadow appearance-none rounded-3xl focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="******************">
                                <a class="inline-block w-full text-sm font-bold text-orange-500 align-baseline text-end hover:text-orange-800"
                                    href="#">
                                    Forgot Password?
                                </a>
                            </div>

                            <div class="grid items-center ">
                                <button
                                    class="px-4 py-2 font-bold text-white bg-orange-500 rounded-3xl hover:bg-orange-700 focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: ''
})
const url = "https://reqres.in/api/login";
const isLoading = ref(false);
const _error = ref(null);
const form = reactive({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
});
async function onSubmit() {

    if (isLoading.value) return;
    isLoading.value = true;
    const { data, error } = await useFetch(url, {
        method: "post",
        body: form,
    });
    isLoading.value = false;
    if (error.value) {
        _error.value = error.value.data.error;
        return;
    }


    navigateTo("/");
}
</script>

<style scoped>
.item_group {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 2.188rem;
}

.d {
    display: grid;
    -ms-flex-align: center;
    align-items: center;
    background-image: url(https://orinostudio.com/rakon-theme/assets/img/inner/01.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
}
</style>