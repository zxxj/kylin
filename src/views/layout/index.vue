<template>
	<Layout class="w-screen h-screen ">

		<LayoutSider class="sider">
			<SiderBar />
		</LayoutSider>

		<Layout>
			<LayoutHeader class="header">
				<Header />
			</LayoutHeader>

			<LayoutContent class="content">
				<RouterView />
			</LayoutContent>

			<LayoutFooter class="footer">Footer</LayoutFooter>
		</Layout>

	</Layout>
</template>

<script setup lang="ts">
import { Layout, LayoutSider, LayoutHeader, LayoutContent, LayoutFooter } from "ant-design-vue"
import SiderBar from "./components/sider.vue"
import Header from "./components/header.vue"
</script>

<style lang="scss" scoped>
.sider,
.header {
	background-color: #000;
}
</style>