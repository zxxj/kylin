<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
  <a-config-provider :theme="{ token: { colorPrimary: '#1c1d23' } }">
    <RouterView />
  </a-config-provider>
</template>
