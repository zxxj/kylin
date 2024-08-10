<template>
	<a-form :model="loginForm" name="normal_login" class="login-form" :label-col="labelCol" :rules="rules"
		@finish="onFinish" @finishFailed="onFinishFailed">

		<a-form-item label="用户名" name="username">
			<a-input v-model:value="loginForm.username">
				<template #prefix>
					<UserOutlined class="site-form-item-icon" />
				</template>
			</a-input>
		</a-form-item>

		<a-form-item label="密码" name="password">
			<a-input-password v-model:value="loginForm.password">
				<template #prefix>
					<LockOutlined class="site-form-item-icon" />
				</template>
			</a-input-password>
		</a-form-item>

		<a-form-item label="验证码" name="verifyCode">
			<a-input v-model:value="loginForm.verifyCode">
				<template #prefix>
					<SafetyOutlined class="site-form-item-icon" />
				</template>

				<template #suffix>
					<img class="w-14" :src="captchaImg" />
				</template>
			</a-input>
		</a-form-item>
		<a-form-item>
			<a-form-item name="remember" no-style>
				<a-checkbox v-model:checked="loginForm.remember">记住我</a-checkbox>
			</a-form-item>
		</a-form-item>

		<a-form-item>
			<a-button :disabled="disabled" type="primary" html-type="submit" class="w-full login-form-button">
				登录
			</a-button>
			<a-button type="link" class="mt-1.5" @click="toResigter">没有账号?去注册!</a-button>
		</a-form-item>
	</a-form>
</template>
<script lang="ts" setup>
import { reactive, computed, onMounted, ref } from 'vue';
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons-vue';
import type { LoginFormType } from "@/types/loginForm"
import { getCode } from '@/services/modules/auth.api';
import { useAuthStore } from '@/stores/modules/auth';
import { setLocalItem } from '@/utils/auth';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { AuthEnums } from '@/enums/auth.enum';

onMounted(() => {
	getCaptcha()
})

const router = useRouter()
const authStore = useAuthStore()
const emit = defineEmits(['isShowRegisterForm'])

const captchaImg = ref('')

const loginForm = reactive<LoginFormType>({
	username: 'kylin',
	password: 'Zhangxinxin1.',
	verifyCode: '',
	captchaId: '',
	remember: true,
});

const labelCol = { style: { width: '60px' } };

const rules = [
	{ required: true, message: '请输入用户名!' },
	{ required: true, message: '请输入密码!' }
]

const getCaptcha = async () => {
	const { data } = await getCode()
	loginForm.captchaId = data.id
	captchaImg.value = data.img
}

const onFinish = async () => {
	try {
		const { code, data, message: msg } = await authStore.login(loginForm)
		if (code === 200) {
			message.success('登录成功!')
			setLocalItem(AuthEnums.TOKEN, data.token)
			router.push('/')
		} else {
			message.error(msg)
		}
	} catch (error) {
		console.log('loginForm: error', error);
	}

};

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo);
};

const disabled = computed(() => {
	return !(loginForm.username && loginForm.password);
});

const toResigter = () => {
	emit('isShowRegisterForm', true)
}
</script>