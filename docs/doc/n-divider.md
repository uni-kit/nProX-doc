# n-divider

分割器。分割线

## 设计哲学 [Design]

- 可横可竖；
- 可设置底色和分割器颜色；
- 可快速使用定位；
- 可快速设置左右间距；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| vertical | boolean | false | false | 是否竖方向 | true, false | 
| position | string | false | '' | 定位主题 | relative,absolute,fixed,static,sticky | 
| bgType | string | false | 'border' | 线条背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| boxBgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| boxBg | string | false | '' | 组件背景色 |  | 
| bg | string | false | '' | 线条背景色 |  | 
| left | string | false | '0' | 左侧距离 |  | 
| right | string | false | '0' | 右侧距离 |  | 
| width | string | false | '1px' | 宽度。仅在vertical=true时设置 |  | 
| height | string | false | '1px' | 高度 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| bgClass | string | false | '' | 线条样式类 |  | 

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="分割线" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse">
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="背景色分割" desc="有时候/有些设计不想/不能用边框" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<n-divider></n-divider>
				<view style="height: 48rpx;"></view>
				<n-divider left="32rpx" right="32rpx"></n-divider>
				<view style="height: 48rpx;"></view>
				<n-divider bgType="error" left="32rpx" right="32rpx"></n-divider>
				<view style="height: 48rpx;"></view>
				<view class="n-flex-row n-justify-center">
					<n-divider bgType="success" :vertical="true" width="1px" height="80rpx" left="32rpx" right="32rpx"></n-divider>
					<n-divider bgType="error" :vertical="true" width="1px" height="80rpx" left="32rpx" right="32rpx"></n-divider>
					<n-divider bgType="success" :vertical="true" width="1px" height="80rpx" left="32rpx" right="32rpx"></n-divider>
				</view>
				<desc-view top="60rpx" icon="top" iconStyle="font-size:60rpx;" title="支持横竖" desc="可以灵活控制左右距离" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
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

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/divider" />
