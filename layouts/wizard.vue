
<template>
  <!-- Header -->
  <nav
    class="wizard-layout__nav border-zinc-200 bg-white border-b bottom-1 fixed w-full top-0 h-[85px] z-10"
  >
    <!-- max-w-[1900px] mx-auto  if we need it -->
    <div class="pl-5 gap-5 flex items-center">
      <!-- logo -->
      <img
        src="~/assets/images/icons/logo.png"
        class="w-[50px] aspect-square"
        alt=""
      />
      <!-- steps -->
      <slot name="steps" />
    </div>
    <!-- actions -->

    <!-- slot -->
  </nav>
  <div class="pt-[84px]">
    <slot />
  </div>
  <!-- Footer -->
</template>
<script setup>
useHead({
  title: "Getting started | Eatte.io",
  bodyAttrs: {
    class: "bg-light",
  },
  link: [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
    },
  ],
});
</script>
<style lang="scss">
.bg-light {
  background: #f5f6fa;
}
.wizard-form {
  text-align: left;

  &__group {
    margin-bottom: 20px;
    label {
      @apply block text-dark text-sm;
      &.required {
        &::after {
          content: "*";
          @apply text-red-600 ml-1;
        }
      }
    }
    input,
    select {
      @apply bg-white block w-full  px-4 py-3;
      border: 1px solid rgba(147, 163, 176, 0.16);
      border-radius: 8px;
    }
    .input-prepend {
      .template {
        @apply bg-white px-4 py-3;
        border-radius: 8px;
        border: 1px solid rgba(147, 163, 176, 0.16);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
      }
      input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
        flex: 1;
        padding-left: 0;
      }
    }
  }
}
</style>