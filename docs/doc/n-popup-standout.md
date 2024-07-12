# n-popup-standout

事先露出部分内容的弹窗组件

## 设计哲学 [Design]

- 事先露出部分内容；
- 具备初始化露出动画效果，体验好；
- 支持上下左右四个方向；
- 支持水平和垂直居中；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | false | 显示控制 | true, false | 
| pos | string | false | 'bottom' | 弹出方式/位置 | top,right,bottom,left,top-center,right-center,bottom-center,left-center | 
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| autoCenter | boolean | false | true | 在弹出方向的垂直方向上，是否自动居中内容 | true, false | 
| bgType | string | false | '' | 弹出内容的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| duration | number | false | 300 | 动画周期 |  | 
| hasOverlay | boolean | false | true | 是否具备遮罩层 | true, false | 
| overlayBgType | string | false | 'mask' | 遮罩层背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| overlayBg | string | false | '' | 遮罩层背景色 |  | 
| overlayDuration | number | false | 300 | 遮罩层动画周期 |  | 
| overlayTimingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 遮罩层动画函数 |  | 
| timingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 动画函数 |  | 
| left | string | false | '0' | 遮罩层左侧定位 |  | 
| right | string | false | '0' | 遮罩层右侧定位 |  | 
| top | string | false | '0' | 遮罩层顶部定位 |  | 
| bottom | string | false | '0' | 遮罩层底部定位 |  | 
| standout | string | false | '0' | 凸出部分高度 |  | 
| width | string | false | '' | 弹出内容宽度 |  | 
| height | string | false | '' | 弹出内容的高度 |  | 
| leftOffset | string | false | '' | 弹窗的左侧定位 |  | 
| rightOffset | string | false | '' | 弹窗的右侧定位 |  | 
| topOffset | string | false | '' | 弹窗的顶部定位 |  | 
| bottomOffset | string | false | '' | 弹窗的底部定位 |  | 
| initWithAni | boolean | false | true | mounted时是否具备动画效果 | true, false | 
| initDelay | number | false | 200 | mounted中延迟delay时间再显示 |  | 
| initDuration | number | false | 300 | 初始化的动画周期 |  | 
| boxStyle | string | false | '' | 弹窗样式 |  | 
| overlayStyle | string | false | '' | 遮罩层样式 |  | 
| overlayClass | string | false | '' | 遮罩层样式类 |  | 
| boxClass | string | false | '' | 弹窗的样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| overlayClicked | 遮罩层点击事件 |  |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 弹窗内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1 n-flex-column n-align-center n-justify-center">
		<n-button bgType="error" text="top" textType="inverse" boxStyle="width:360rpx;margin-bottom:40rpx;" @buttonClicked="onOpen('top')"></n-button>
		<n-button bgType="primary" text="right" textType="inverse" boxStyle="width:360rpx;margin-bottom:40rpx;" @buttonClicked="onOpen('right')"></n-button>
		<n-button bgType="warning" text="bottom" textType="inverse" boxStyle="width:360rpx;margin-bottom:40rpx;" @buttonClicked="onOpen('bottom')"></n-button>
		<n-button bgType="error" text="left" textType="inverse" boxStyle="width:360rpx;" @buttonClicked="onOpen('left')"></n-button>
	</view>
	<n-popup-standout pos="top" :show="topVisible" top="status-nav" topOffset="status-nav" standout="120rpx" @overlayClicked="onClose">
		<view class="n-bg-primary n-flex-column n-align-center n-justify-end" style="width:750rpx;height: 360rpx;border-bottom-left-radius: 32rpx;border-bottom-right-radius: 32rpx;">
			<text class="n-color-inverse n-size-l n-weight-7">万里悲秋常作客</text>
			<view></view>
			<text class="n-color-inverse n-size-l n-weight-7">百年多病独登台</text>
			<n-button height="base" bgType="inverse" text="我是谁 又要到哪里去了" textType="primary" boxStyle="width:520rpx;margin-top:40rpx;"></n-button>
			<view style="height: 20rpx;"></view>
		</view>
	</n-popup-standout>
	<n-popup-standout pos="right" :show="rightVisible" standout="60rpx" @overlayClicked="onClose">
		<view class="n-bg-error n-flex-column n-align-center n-justify-center" style="width: 460rpx;height: 620rpx;border-top-left-radius: 32rpx;border-bottom-left-radius: 32rpx;padding: 32rpx;">
			<text class="n-color-inverse n-weight-7 n-size-l">好的人和物，应该得到好的回报。这是社会最基本的道德---奥德标</text>
		</view>
	</n-popup-standout>
	<n-popup-standout pos="bottom" :show="bottomVisible" standout="x-120rpx" leftOffset="0" rightOffset="0" :autoCenter="false" @overlayClicked="onClose">
		<view class="n-bg-warning n-flex-column n-align-center n-justify-start n-width-100p" style="border-top-left-radius: 32rpx;border-top-right-radius: 32rpx;padding-top: 32rpx;padding-bottom: 160rpx;">
			<text class="n-color-inverse n-weight-7 n-size-l">看问题的角度和高度</text>
			<text class="n-color-inverse n-weight-7 n-size-l">如果你不是去创造理论，那么一切都只是工具</text>
			<text class="n-color-inverse n-weight-7 n-size-l">既然是工具，那就只要掌握其规则就行</text>
		</view>
	</n-popup-standout>
	<n-popup-standout pos="left" :show="leftVisible" @overlayClicked="onClose">
		<view class="n-bg-error n-flex-column n-align-center n-justify-center" style="width: 460rpx;height: 620rpx;border-top-right-radius: 32rpx;border-bottom-right-radius: 32rpx;padding: 32rpx;">
			<text class="n-color-inverse n-weight-7 n-size-l">nProX是个好东西。当你了解之后，你会发现，作者在组件设计的能力上堪称一流---奥德标</text>
		</view>
	</n-popup-standout>
	<n-navbar :lefts="leftIcons" :isSeize="false" title="popup-standout" zindex="9999" @leftAction="navLeftAction"></n-navbar>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const topVisible = ref(false)
	const rightVisible = ref(false)
	const bottomVisible = ref(false)
	const leftVisible = ref(false)
	
	function onOpen(pos: string) {
		if (pos == 'top') {
			topVisible.value = true
		} else if (pos == 'right') {
			rightVisible.value = true
		} else if (pos == 'bottom') {
			bottomVisible.value = true
		} else {
			leftVisible.value = true
		}
	}
	function onClose() {
		topVisible.value = false
		rightVisible.value = false
		bottomVisible.value = false
		leftVisible.value = false
	}
</script>

<style>

</style>
```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/pop/standout" />
