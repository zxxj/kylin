<template>
	<a-form :model="loginForm" name="normal_login" class="login-form" :label-col="labelCol" :rules="rules"
		@finish="onFinish" @finishFailed="onFinishFailed">

		<!-- 用户名 -->
		<a-form-item label="用户名" name="username">
			<a-input v-model:value="loginForm.username">
				<template #prefix>
					<UserOutlined class="site-form-item-icon" />
				</template>
			</a-input>
		</a-form-item>

		<!-- 密码 -->
		<a-form-item label="密码" name="password">
			<a-input-password v-model:value="loginForm.password">
				<template #prefix>
					<LockOutlined class="site-form-item-icon" />
				</template>
			</a-input-password>
		</a-form-item>

		<!-- 记住我 -->
		<a-form-item>
			<a-form-item name="remember" no-style>
				<a-checkbox v-model:checked="loginForm.remember">记住我</a-checkbox>
			</a-form-item>
		</a-form-item>

		<!-- 登录 -->
		<a-form-item>
			<a-button :disabled="disabled" type="primary" html-type="submit" class="w-full login-form-button">
				登录
			</a-button>
			<a-button type="link" class="mt-1.5">没有账号?去注册!</a-button>
		</a-form-item>
	</a-form>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { LoginFormType } from "@/types/loginForm"

// 登录form
const loginForm = reactive<LoginFormType>({
	username: '',
	password: '',
	remember: true,
});

// 表单label宽度
const labelCol = { style: { width: '60px' } };

// 登录表单校验规则
const rules = [
	{ required: true, message: '请输入用户名!' },
	{ required: true, message: '请输入密码!' }
]

// 登录成功后执行
const onFinish = (values: any) => {
	console.log('Success:', values);
};

// 登录失败后执行
const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo);
};

// 是否禁用登录按钮
const disabled = computed(() => {
	return !(loginForm.username && loginForm.password);
});
</script>