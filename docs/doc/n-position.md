# n-position

快速定位组件

## 设计哲学 [Design]

- 快速实现定位能力；
- 支持定位细调；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| fixed | boolean | false | false | 是否fixed定位 | true, false | 
| pos | string | false | 'bottom' | 定位的位置 | top,right,bottom,left | 
| offset | string | false | '0px' | 定位的偏移量 |  | 
| bgType | string | false | '' | 背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| boxStyle | string | false | '' | 外层样式 |  | 
| boxClass | string | false | '' | 外层样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 定位内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="快速定位" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<desc-view top="180rpx" icon="headphone-dot" iconStyle="font-size:100rpx;" title="定位偏移量设置非常灵活" desc="比如offset='status-nav-24rpx'" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
		<n-position pos="top" offset="status-nav-24rpx" boxStyle="left:75rpx;">
			<n-button bgType="primary" border="none" radius="ll" text="这里是顶部的定位内容" textType="inverse" boxStyle="width:600rpx;"></n-button>
		</n-position>
		<n-position pos="bottom" offset="x-24rpx" boxStyle="left:75rpx;">
			<n-button bgType="primary" border="none" radius="ll" text="这里是底部的定位内容" textType="inverse" boxStyle="width:600rpx;"></n-button>
		</n-position>
		<n-position pos="bottom" offset="x-160rpx" boxStyle="right:75rpx;">
			<n-button bgType="primary" border="none" radius="ll" text="调整位置靠右" textType="inverse" boxStyle="width:300rpx;"></n-button>
		</n-position>
		<n-position pos="bottom" offset="x-460rpx" boxStyle="left:75rpx;">
			<n-button bgType="error" border="none" radius="ll" text="比如靠左" textType="inverse" boxStyle="width:300rpx;margin-top:16rpx;"></n-button>
		</n-position>
	</view>
</template>

<script setup lang="ts">
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/box/position" />
