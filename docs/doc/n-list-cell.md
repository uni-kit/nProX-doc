# n-list-cell

可回收滚动列表的子组件，用于n-list的直接子组件

## 设计哲学 [Design]

- 用于n-list下子组件；
- 可设置type属性来分类n-list下的子组件类型，方便复用来提升性能；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| type | number | false | 0 | 对应list-item的类型。list-view 将对同类型条目进行复用，所以合理的类型拆分，可以很好地提升 list-view 性能 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-bg-inverse n-flex-1">
		<n-navbar leftStyle="width:30rpx;" rightStyle="width:30rpx;" centerStyle="width:690rpx;">
			<template v-slot:center>
				<view class="n-flex-row n-align-center n-flex-nowrap" style="width: 690rpx;">
					<image :src="cloudImgs.getString('avatar.caiman')" mode="aspectFill" style="width: 44px;height: 44px;border-radius: 40px;" @click="toBack"></image>
					<text class="n-flex-1" style="font-size: 22px;color: #000000;margin-left: 20rpx;">Hello! nProX</text>
				</view>
			</template>
		</n-navbar>
		<view class="n-bg-inverse n-align-center n-flex-row" style="width: 750rpx;height: 136rpx;padding-left: 30rpx;padding-right: 30rpx;">
			<n-input bgType="light" radius="base" placeholder="搜索新的内容" confirmType="search" indicator="search" indicatorType="third" boxStyle="width:690rpx;height:88rpx;padding-left:20rpx;padding-right:20rpx;"></n-input>
		</view>
		<n-list bgType="inverse">
			<n-list-cell>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<product-banner :items="banners"></product-banner>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<cover-intro-cell :item="item" @select="toPage"></cover-intro-cell>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 20rpx;"></view>
				<view class="n-m-ll">
					<text class="n-size-base n-color-third">仅提供n-list示范。内置组件list-view的示范请直接参考scroll的示范，scroll下提供了n-scroll和scroll-view的示范，list-view的示范同scroll-view。</text>
				</view>
				<view style="height: 20rpx;"></view>
				<n-height height="x"></n-height>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import cloudImgs from '@/common/imgs'
	import productBanner from './components/productBanner.vue'
	import coverIntroCell from './components/coverIntroCell.vue'
	import { CustomCellItem } from '@/types/index'
	
	const banners: CustomCellItem[] = [{cover: cloudImgs.getString('cover.sea')??'', title: 'Fantistic nProX', desc: 'It\'s a nice helper for your app and mp. Just enjoy'}, {cover: cloudImgs.getString('cover.snow')??'', title: 'Excellent nProX', desc: 'It\'s a nice helper for your app and mp. Just enjoy'}, {cover: cloudImgs.getString('cover.house')??'', title: 'Elegant nProX', desc: 'It\'s a nice helper for your app and mp. Just enjoy'}] as CustomCellItem[]
	
	const items: CustomCellItem[] = [
		{title: 'list', cover: cloudImgs.getString('cover.snow')??'', desc: '简单list', page: '/pages/list/simple'},
		{title: 'list', cover: cloudImgs.getString('cover.house')??'', desc: '带下拉/上提刷新与加载效果', page: '/pages/list/refresh-load'},
		{title: '滚动到位置', cover: cloudImgs.getString('cover.tree2')??'', desc: '滚动到指定位置', page: '/pages/list/position'},
		{title: 'header swiper list', cover: cloudImgs.getString('cover.girl')??'', desc: 'header-swiper带刷新和加载', page: '/pages/list/header-swiper'},
		{title: 'header swiper list', cover: cloudImgs.getString('cover.dog')??'', desc: '简单header-swiper', page: '/pages/list/header-simple'},
		{title: '聊天列表', cover: cloudImgs.getString('cover.cat')??'', desc: '聊天消息列表/下拉更多', page: '/pages/list/chat'},
		{title: 'tabs swiper list', cover: cloudImgs.getString('cover.sea')??'', desc: 'tabs swiper list', page: '/pages/nav/tabs/list'},
		{title: 'tabs swiper list', cover: cloudImgs.getString('cover.house')??'', desc: '指示器有进度联动的tabs swiper list', page: '/pages/nav/tabs/inter_list'},
		{title: 'tabs list', cover: cloudImgs.getString('cover.girl')??'', desc: '单个list与tabs-h联动', page: '/pages/nav/tabs/scroll_y'},
		{title: 'tabs list', cover: cloudImgs.getString('cover.tree')??'', desc: '单个list与tabs-v联动', page: '/pages/nav/tabs/v_scroll_y'}
	] as CustomCellItem[]
	
	function toPage(val: CustomCellItem) {
		uni.navigateTo({
			url: val.page!
		})
	}
	function toBack() {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss">
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/list/list" />
