<template>
	<a-form :model="form" name="normal_register" class="register-form" :label-col="labelCol" :rules="rules"
		@finish="onFinish" @finishFailed="onFinishFailed">

		<a-form-item label="用户名" name="username">
			<a-input v-model:value="form.username">
				<template #prefix>
					<UserOutlined class="site-form-item-icon" />
				</template>
			</a-input>
		</a-form-item>

		<a-form-item label="密码" name="password">
			<a-input-password v-model:value="form.password">
				<template #prefix>
					<LockOutlined class="site-form-item-icon" />
				</template>
			</a-input-password>
		</a-form-item>

		<a-form-item>
			<a-button :disabled="disabled" type="primary" html-type="submit" class="w-full login-form-button">
				注册
			</a-button>
			<a-button type="link" class="mt-1.5" @click="toLogin">已有账号?去登录!</a-button>
		</a-form-item>
	</a-form>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { message } from "ant-design-vue"
import type { RegisterFormType } from "@/types/loginForm"
import { useAuthStore } from '@/stores/modules/auth';

const authStore = useAuthStore()
const emits = defineEmits(['isShowLoginForm'])

const form = reactive<RegisterFormType>({
	username: '',
	password: '',
	lang: 'ZH',
});

const labelCol = { style: { width: '60px' } };

const rules = [
	{ required: true, message: '请输入用户名!' },
	{ required: true, message: '请输入密码!' }
]

const onFinish = async () => {
	const { code, message: msg } = await authStore.registerAction(form)
	if (code === 200) {
		await message.success("注册成功!即将跳转到登陆页面!")
		await toLogin()
	} else {
		message.error(msg)
	}
};

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo);
};

const disabled = computed(() => {
	return !(form.username && form.password);
});

const toLogin = () => {
	emits('isShowLoginForm', true)
}
</script>