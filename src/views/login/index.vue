<template>
	<div class="flex w-screen h-screen ">
		<div class="flex items-center justify-center flex-1 w-full h-full desc">
			<img src=" @/assets/images/login/login.png" class="size-1/2 ">
		</div>
		<div class="flex items-center justify-center w-1/3 loginOrRegisterContent"
			:style="{ backgroundColor: settingStore.getGlobalColor }">
			<LoginForm v-show="!toggle" @isShowRegisterForm="isShowRegisterForm" />

			<RegisterForm v-show="toggle" @isShowLoginForm="isShowLoginForm" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "./LoginForm.vue"
import RegisterForm from "./RegisterForm.vue";
import { useSettingStore } from "@/stores/modules/setting";

const settingStore = useSettingStore()
const toggle = ref(false)

const isShowRegisterForm = (value: boolean) => {
	toggle.value = value
}

const isShowLoginForm = (value: boolean) => {
	toggle.value = !value
}
</script>

<style>
.desc {
	border-right: 1px solid #e5e7eb;
}
</style>