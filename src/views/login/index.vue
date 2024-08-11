<template>
	<div class="flex w-screen h-screen ">
		<div class="flex-1 desc bg-zinc-950 ">1</div>
		<div class="flex items-center justify-center w-1/3 loginOrRegisterContent bg-neutral-50 ">
			<LoginForm v-show="!toggle" @isShowRegisterForm="isShowRegisterForm" />

			<RegisterForm v-show="toggle" @isShowLoginForm="isShowLoginForm" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "./LoginForm.vue"
import RegisterForm from "./RegisterForm.vue";

const toggle = ref(false)

const isShowRegisterForm = (value: boolean) => {
	toggle.value = value
}

const isShowLoginForm = (value: boolean) => {
	toggle.value = !value
}
</script>