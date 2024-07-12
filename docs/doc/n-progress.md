# n-progress

进度条。条形进度条

## 设计哲学 [Design]

- 条形进度条；
- 具备动画效果；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| progress | number | false | 0 | 进度。0-1 |  | 
| width | string | false | '' | 自定义宽度 |  | 
| height | string | false | '12rpx' | 自定义高度 |  | 
| bgType | string | false | 'light' | 背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| progressBgType | string | false | 'primary' | 进度条的背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| boxStyle | string | false | '' | 外层样式 |  | 
| progressStyle | string | false | '' | 进度条的样式 |  | 
| boxClass | string | false | '' | 外层样式类 |  | 
| progressClass | string | false | '' | 进度条的样式类 |  | 

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="进度条" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="进度条" desc="双层进度条" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<n-progress boxStyle="margin:0 75rpx;"></n-progress>
				<view style="height: 60rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-progress :progress="0.2" progressBgType="error" boxStyle="margin:0 75rpx;"></n-progress>
				<view style="height: 60rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-progress :progress="0.6" bgType="warning" boxStyle="margin:0 75rpx;"></n-progress>
				<view style="height: 60rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-progress :progress="1.0" boxStyle="margin:0 75rpx;"></n-progress>
				<view style="height: 60rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-progress :progress="progress" boxStyle="margin:0 75rpx;"></n-progress>
				<desc-view top="60rpx" icon="top" iconStyle="font-size:60rpx;" title="支持进度变化与渐变色" desc="更多灵活控制看文档" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {onLoad, onUnload} from '@dcloudio/uni-app'
	import descView from '@/pages/components/descView.vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()

	let intervalTimer: number = 0
	const progress = ref(0)
	
	function toProgress() {
		intervalTimer = setInterval(()=>{
			if (progress.value >= 1.0) {
				clearInterval(intervalTimer!)
				progress.value = 0
				toProgress()
			} else {
				progress.value += 0.1
			}
		}, 100)
	}
	
	onLoad((e: OnLoadOptions) => {
		toProgress()
	})
	onUnload(() => {
		clearInterval(intervalTimer)
	})
</script>

<style lang="scss" scoped>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/progress" />
