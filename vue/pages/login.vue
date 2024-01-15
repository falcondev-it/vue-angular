<script lang="ts" setup>
definePageMeta({
  layout: 'empty',
})
useHead({
  title: 'Login',
})
</script>
<template>
  <main class="flex w-full flex-col items-center justify-center gap-4">
    <h1 class="text-6xl">Login Page</h1>
    <nav>
      <NuxtLink to="/">Go to home</NuxtLink>
    </nav>
  </main>
</template>
