# n-tab-container

非swiper切换盒子

## 设计哲学 [Design]

- 左右切换内容；
- 非swiper实现，不支持swipe以及拖动手势；
- 细节到位，全部可配；

> 需要swipe以及拖动手势的，请使用swiper组件

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| width | string | false | '750rpx' | 组件宽度 |  | 
| current | number | false | 0 | 当前位置 |  | 
| number | number | false | 2 | 总内容项 |  | 
| animated | boolean | false | true | 是否具备切换动画 | true, false | 
| duration | number | false | 300 | 动画周期 |  | 
| timingFunction | string | false | 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' | 动画函数 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| containerStyle | string | false | '' | 内容盒子样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| containerClass | string | false | '' | 内容盒子样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" bgType="none" title="tab-container" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<desc-view top="60rpx" icon="help" iconStyle="font-size:80rpx;" title="内容切换" desc="不依赖swiper,不支持手势,很轻" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
			<n-list-cell>
				<n-tabs-h :delay="50" :value="current" :items="tabs" width="375rpx" indicatorWidth="200rpx" indicatorHeight="6rpx" indicatorStyle="bottom:12rpx;" @change="onChangeTab"></n-tabs-h>
				<n-tab-container :current="current" :number="2" width="750rpx">
					<view class="n-bg-success" style="width: 750rpx;height: 600rpx;"></view>
					<view class="n-bg-error" style="width: 750rpx;height: 600rpx;"></view>
				</n-tab-container>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<view style="margin: 0 32rpx;">
					<n-button bgType="error" radius="ll" text="go demo with list" textType="inverse" @buttonClicked="onGoList"></n-button>
				</view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import { ItemBadgeType } from '@/nProX/types/npro'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const current = ref(0)
	const tabs = [{value: '1', label: '登陆'}, {value: '2', label: '注册'}] as ItemBadgeType[]
	
	function onChangeTab(e: number) {
		current.value = e
	}
	function onGoList() {
		uni.navigateTo({
			url: "/pages/box/tab-container-list"
		})
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/box/tab-container" />
