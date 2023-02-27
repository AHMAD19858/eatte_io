<template>
    <div class="banner_container ">
        <img src="../../../../assets/images/shadow/image.png" class="shadow_card">
        <div class="container mx-auto">
            <div class="row_container">
                <div class="">
                    <h2 class="slogan">
                        Customized for 
                    </h2>

                    <h2 class="slogan">
                        more than 50 industries
                    </h2>

                </div>

                <button class="get_started">Get started </button>
            </div>
            <div class="my-3">

                <p class="sub">Find out how Eatte helps you develop and manage your business</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.banner_container {
    @apply container max-w-5xl mx-auto mb-20 p-6 bg-primary-color text-white rounded-lg
}

.row_container {
    @apply flex flex-col lg:flex-row items-center justify-between
}

.get_started {
    @apply flex w-72 self-end items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-primary-color bg-gradient-to-r bg-white
}

.slogan {
    @apply  text-5xl tracking-tighter font-bold
}

.sub{
    @apply mt-6 text-xl text-white w-2/5
}
.shadow_card {
    @apply absolute mx-auto text-center left-0 right-0
}

@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .slogan {
  text-align:  center;
  margin-bottom: 10px;
  font-size: 30px;
  }
  .sub{
    width: 100%;
    text-align: center;
  }
}
</style>