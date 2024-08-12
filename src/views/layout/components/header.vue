<template>
	<div class="w-full " :style="{ backgroundColor: settingStore.getGlobalColor }">

	</div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/stores/modules/setting';

const settingStore = useSettingStore()
</script>

<style scoped lang="scss"></style>
