# n-avatars

头像群。支持多种堆叠方式

## 设计哲学 [Design]

- 单行；
- 支持左侧头像在上或者右侧头像在上；
- 支持间距设置；
- 细节到位，全部可配；

## 快速使用 [Quick Use]

```vue
<n-avatars :items='members' size="60rpx"></n-avatars>

<n-avatars :items='members' size="60rpx" space="16rpx"></n-avatars>

<n-avatars :items='members' :reverse="true" size="60rpx"></n-avatars>
```

## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| items | ItemType[] | true |  | 头像内容数组 |  | 
| reverse | boolean | false | false | 左侧头像是否显示在右侧头像的上面 | true, false | 
| size | string | false | '66rpx' | 头像尺寸大小 |  | 
| space | string | false | '-16rpx' | 头像之间的间距 |  | 
| itemStyle | string | false | '' | 头像样式 |  | 
| itemClass | string | false | '' | 头像样式类 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| itemClicked | 头像点击事件 | ItemType - 点击的头像数据 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| extra | 额外内容 | No |  |

## 详情示范 [Detail Demo]

我是示范性情。

```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="avatars" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="头像群" desc="支持尺寸与间距设置" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<view class="n-flex-column n-align-center">
					<n-avatars :items='members' size="60rpx"></n-avatars>
					<view style="height: 32rpx;"></view>
					<n-avatars :items='members' size="60rpx" space="16rpx"></n-avatars>
					<view style="height: 32rpx;"></view>
					<n-avatars :items='members' :reverse="true" size="60rpx"></n-avatars>
				</view>
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="多种效果" desc="还可以适配不同的效果" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	import cloudImgs from '@/common/imgs'
	import { ItemType } from '@/nProX/types/common'
	
	const members: ItemType[] = [{value: '1', label: cloudImgs.getString('avatar.caiman')!}, {value: '2', label: '/static/logo-dark.png'}, {value: '3', label: cloudImgs.getString('avatar.caiman')!}, {value: '4', label: cloudImgs.getString('avatar.pikaqiu')!}]
	
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/avatars" />
