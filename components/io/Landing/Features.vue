<template>
  <section>
    <div>
      <img
        class="w-3/5 rounded-lg object-none"
        src="~/assets/images/main.svg"
        alt=""
      />
    </div>

    <IoButton :primary="true" :title="'View all features'" />
  </section>
</template>

<script setup></script>

<style scoped>
.view_button {
  @apply flex flex-wrap justify-center my-8;
}

.get_started {
  @apply font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C];
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 576px) {
  img {
    object-fit: contain;
  }
}
</style>
