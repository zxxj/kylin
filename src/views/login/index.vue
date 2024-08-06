<template>
	<div class="flex w-screen h-screen ">
		<div class="flex-1 desc bg-zinc-950 ">1</div>
		<div class="flex items-center justify-center w-96 loginOrRegisterContent bg-neutral-50 ">
			<LoginForm />
		</div>
	</div>
</template>

<script setup lang="ts">
import LoginForm from "./LoginForm.vue"
</script>

<style scoped lang="less"></style>
