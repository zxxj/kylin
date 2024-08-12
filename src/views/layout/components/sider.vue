<template>
	<div class="w-full sider">

		<div class="flex items-center justify-center w-full h-16 bg-white desc-container">
			<div class="logo"></div>
			<div class="text">Kylin</div>
		</div>

		<a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" :items="items"
			@click="handleClick" class="bg-zinc-950 text-gray-50 "></a-menu>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, h } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

const items = reactive([
	{
		key: 1,
		icon: () => h(AppstoreOutlined),
		label: '系统管理',
		title: '系统管理',
		children: [
			{
				key: 2,
				icon: () => h(MailOutlined),
				label: '用户管理',
				title: '用户管理',
			},
			{
				key: 3,
				icon: () => h(MailOutlined),
				label: '角色管理',
				title: '角色管理',
			},
			{
				key: 4,
				icon: () => h(MailOutlined),
				label: '菜单管理',
				title: '菜单管理',
			},
			{
				key: 5,
				icon: () => h(MailOutlined),
				label: '部门管理',
				title: '部门管理',
			}
		]
	}
]);

const handleClick: MenuProps['onClick'] = e => {
	console.log('click', e);
};

watch(openKeys, val => {
	console.log('openKeys', val);
});
</script>

<style scoped lang="scss">
:deep(.ant-menu-item-group-title) {
	color: rgb(249, 250, 251);
}

:deep(.ant-menu-item:hover) {
	color: rgb(249, 250, 251) !important;
	background-color: #404040 !important;
}

:deep(.ant-menu-submenu-title) {
	color: rgb(249, 250, 251) !important;
}

:deep(.ant-menu-submenu-title:hover) {
	color: rgb(249, 250, 251) !important;
	background-color: #404040 !important;
}

:deep(.ant-menu-item-selected) {
	color: rgb(249, 250, 251) !important;
}
</style>
