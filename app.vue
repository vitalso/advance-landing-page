<template>
  <div>

    <NuxtPage />

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => {
  
  AOS.init()

})
</script>
