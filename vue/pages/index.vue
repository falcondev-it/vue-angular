<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import Button from 'primevue/button'

useHead({
  title: 'Home',
})

interface Todo {
  id: string
  title: string
}

const query = useQuery({
  queryKey: ['todos'],
  queryFn: () => $fetch<Todo[]>('https://jsonplaceholder.typicode.com/todos'),
})

const count = ref(0)
</script>

<template>
  <div>
    <main class="flex w-full flex-col items-center justify-center gap-4">
      <h1 class="text-6xl">Home Page</h1>
      <p>Counter: {{ count }}</p>

      <span class="p-buttonset">
        <Button label="Decr" size="small" @click="count--"></Button>
        <Button label="Incr" size="small" @click="count++"></Button>
      </span>
      <nav>
        <NuxtLink to="/login">Go to login</NuxtLink>
      </nav>
    </main>
  </div>
</template>
