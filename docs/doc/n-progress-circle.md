# n-progress-circle

环形进度条

## 设计哲学 [Design]

- 支持整圆以及某角度大小的圆环；
- 具备动画效果；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| id | string | false | 'npc' |  |  | 
| size | number | false | 100 | 宽度。等宽高。圆的直径。px |  | 
| strokeWidth | number | false | 10 | 圆环的厚度。px |  | 
| progress | number | false | 0 | 当前进度 |  | 
| bgColor | string | false | '#e6e6e6' | 底部背景颜色 |  | 
| fgColor | string | false | '#3498db' | 进度条的背景颜色 |  | 
| duration | number | false | 1000 | 动画周期 |  | 
| arcAngle | number | false | 360 | 圆环的角度大小 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="progress-circle" @leftAction="navLeftAction"></n-navbar>
		<view class="n-flex-column n-align-center">
			<view style="height: 32rpx;"></view>
			<n-progress-circle :progress="60" id="npc1"></n-progress-circle>
			<view style="height: 32rpx;"></view>
			<n-progress-circle :progress="40" fgColor="#FF6060" id="npc2"></n-progress-circle>
			<view style="height: 32rpx;"></view>
			<n-progress-circle :progress="80" :arcAngle="180" boxStyle="transform:rotateZ(-90deg);" id="npc3"></n-progress-circle>
			<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="适配能力" desc="大小/颜色/动画均可设置,优秀精简的环状进度条" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:46rpx;margin-right:46rpx;"></desc-view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import descView from '@/pages/components/descView.vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
</script>
```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/progress-circle" />
