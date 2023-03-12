<script setup></script>

<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div class="flex flex-col min-h-screen">
    <IoNavbar />
    <slot />
    <IoFooter />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
</style>
