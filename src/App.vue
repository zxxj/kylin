<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
  <a-config-provider :theme="{ token: { colorPrimary: '#000' } }">
    <RouterView />
  </a-config-provider>
</template>
