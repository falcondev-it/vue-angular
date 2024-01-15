<script lang="ts" setup>
const menuBarItems = [
  {
    label: 'Test1',
  },
  {
    label: 'Test2',
  },
]
</script>
<template>
  <div>
    <header>
      <Menubar :model="menuBarItems">
        <template #start>
          <img
            src="https://www.primefaces.org/wp-content/uploads/2019/12/primevue-logo.png"
            class="mr-[-3px] h-[43px]"
          />
        </template>
      </Menubar>
    </header>
    <NuxtPage />
  </div>
</template>
