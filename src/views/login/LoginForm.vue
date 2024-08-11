<template>
	<Form :model="loginForm" name="normal_login" class="w-3/4 login-form" :label-col="labelCol" :rules="rules"
		@finish="onFinish" @finishFailed="onFinishFailed">

		<FormItem label="用户名" name="username">
			<Input v-model:value="loginForm.username">
			<template #prefix>
				<UserOutlined class="site-form-item-icon" />
			</template>
			</Input>
		</FormItem>

		<FormItem label="密码" name="password">
			<InputPassword v-model:value="loginForm.password">
				<template #prefix>
					<LockOutlined class="site-form-item-icon" />
				</template>
			</InputPassword>
		</FormItem>

		<FormItem label="验证码" name="verifyCode">
			<Input v-model:value="loginForm.verifyCode">
			<template #prefix>
				<SafetyOutlined class="site-form-item-icon" />
			</template>

			<template #suffix>
				<img class="w-16" :src="captchaImg" />
			</template>
			</Input>
		</FormItem>

		<FormItem>
			<FormItem name="remember" no-style>
				<a-checkbox v-model:checked="loginForm.remember">记住我</a-checkbox>
			</FormItem>
		</FormItem>

		<FormItem>
			<a-button :disabled="disabled" :loding="isLoding" type="primary" html-type="submit"
				class="w-full login-form-button">
				登录
			</a-button>
			<a-button type="link" class="mt-1.5" @click="toResigter">没有账号?去注册!</a-button>
		</FormItem>
	</Form>
</template>
<script lang="ts" setup>
import { reactive, computed, onMounted, ref } from 'vue';
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons-vue';
import { message, Form, FormItem, Input, InputPassword } from 'ant-design-vue';
import type { LoginFormType } from "@/types/loginForm"
import type { Rule } from 'ant-design-vue/es/form';
import { getCode } from '@/services/modules/auth.api';
import { useAuthStore } from '@/stores/modules/auth';
import { setLocalItem } from '@/utils/auth';
import { useRouter, type Router } from 'vue-router';
import { AuthEnums } from '@/enums/auth.enum';

onMounted(() => {
	getCaptcha()
})

const router: Router = useRouter()
const authStore = useAuthStore()
const emit = defineEmits(['isShowRegisterForm'])

const captchaImg = ref<string>('')
const isLoding = ref<boolean>(false)
const loginForm = reactive<LoginFormType>({
	username: 'kylin',
	password: 'Zhangxinxin1.',
	verifyCode: '',
	captchaId: '',
	remember: false,
});

const labelCol: any = { style: { width: '80px' } };

const rules: Record<string, Rule[]> = {
	username: [{ required: true, message: "请输入用户名!", trigger: 'blur' }],
	password: [{ required: true, message: "请输入密码!", trigger: 'blur' }],
	verifyCode: [{ required: true, message: "请输入验证码!", trigger: 'blur' }]
}

const getCaptcha = async (): Promise<void> => {
	const { data } = await getCode()
	loginForm.captchaId = data.id
	captchaImg.value = data.img
}

const onFinish = async (): Promise<void> => {
	isLoding.value = true
	try {
		const { code, data, message: msg } = await authStore.login(loginForm)
		if (code === 200) {
			message.success('登录成功!')
			setLocalItem(AuthEnums.TOKEN, data.token)
			if (loginForm.remember) setLocalItem(AuthEnums.USERNAME_AND_PASSWORD, loginForm)
			router.push('/')
		} else {
			message.error(msg)
		}

		isLoding.value = false
	} catch (error) {
		console.log('loginForm: error', error);
		isLoding.value = false
	}
};

const onFinishFailed = (errorInfo: any): void => {
	console.log('Failed:', errorInfo);
};

const disabled = computed(() => {
	return !(loginForm.username && loginForm.password);
});

const toResigter = (): void => {
	emit('isShowRegisterForm', true)
}
</script>