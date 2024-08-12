<template>
	<Layout class="w-screen h-screen ">

		<LayoutSider class="sider" theme="light" :style="{ backGround: settingStore.getGlobalColor }">
			<SiderBar />
		</LayoutSider>

		<Layout>
			<LayoutHeader class="header" :style="{ backGround: settingStore.getGlobalColor }">
				<Header />
			</LayoutHeader>

			<LayoutContent class="content" :style="{ backGroundColor: settingStore.getGlobalColor }">
				<RouterView />
			</LayoutContent>

			<LayoutFooter class="footer" :style="{ backGroundColor: settingStore.getGlobalColor }">Footer</LayoutFooter>
		</Layout>

	</Layout>
</template>

<script setup lang="ts">
import { Layout, LayoutSider, LayoutHeader, LayoutContent, LayoutFooter } from "ant-design-vue"
import SiderBar from "./components/sider.vue"
import Header from "./components/header.vue"
import { useSettingStore } from '@/stores/modules/setting';

const settingStore = useSettingStore()
</script>

<style lang="scss" scoped>
.sider {
	border-right: 1px solid #e5e7eb;
}

.header {
	background: #fff;
	border-bottom: 1px solid #e5e7eb;
	padding: 0;
}
</style>