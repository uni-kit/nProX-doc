# n-slider-bar

拖动条，范围拖动

## 设计哲学 [Design]

- 支持范围；
- 支持自定义拖动器；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| value | number | false | 0 | 当前值，range模式下表示选择范围的左侧值 |  | 
| value2 | number | false | 0 | 当前最大值，range模式下表示选择范围的右侧值 |  | 
| min | number | false | 0 | 最小值 |  | 
| max | number | false | 10 | 最大值 |  | 
| range | boolean | false | false | 是否范围模式 | true, false | 
| crossCenter | boolean | false | true | 可拖动的标记是不是垂直居中于拖动条 | true, false | 
| width | string | false | '' | 拖动条背景条宽度 |  | 
| height | string | false | '2px' | 拖动条背景条高度 |  | 
| bgType | string | false | 'middle' | 拖动条背景条背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| activeBgType | string | false | 'primary' | 拖动条活跃条背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| barStyle | string | false | '' | 背景条样式 |  | 
| activeBarStyle | string | false | '' | 活跃条样式 |  | 
| indicatorStyle | string | false | '' | 拖动部件样式 |  | 
| indicator2Style | string | false | '' | 右侧拖动部件样式 |  | 
| barClass | string | false | '' | 背景条样式类 |  | 
| activeBarClass | string | false | '' | 活跃条样式类 |  | 
| indicatorClass | string | false | '' | 拖动部件样式类 |  | 
| indicator2Class | string | false | '' | 右侧拖动部件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| change | 左侧拖动部件拖动进度改变通知 | number - 值 |
| change1 | 左侧拖动部件拖动进度改变通知 | number - 值 |
| change2 | 右侧拖动部件拖动进度改变通知 | number - 值 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 拖动内容 | No |  |
| other | 拖动内容2 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-bg-inverse n-flex-1">
		<n-navbar :lefts="leftIcons" title="区间选择" @leftAction="navLeftAction"></n-navbar>
		<view style="height: 120rpx;"></view>
		<view class="n-m-ll n-overflow-visible">
			<n-slider-bar :value="4" @change="toChange"></n-slider-bar>
		</view>
		<view style="height: 120rpx;"></view>
		<view class="n-m-ll n-overflow-visible">
			<n-slider-bar :value="2" :value2="6" :range="true" @change1="toChange11" @change2="toChange12"></n-slider-bar>
		</view>
		<view style="height: 120rpx;"></view>
		<view class="n-m-ll n-overflow-visible">
			<n-slider-bar :value="pr" align="end" @change="toGetCurrent">
				<image src="/static/guide.png" style="width: 68rpx;height: 68rpx;"></image>
			</n-slider-bar>
		</view>
		<view class="n-flex-row n-justify-center" style="margin-top: 32rpx;">
			<n-button :text="pr+''" textType="inverse" bgType="error" radius="ll" boxStyle="width:360rpx;height:76rpx;"></n-button>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const pr = ref(8)
	
	function toChange(e: number) {
		console.log(e)
	}
	function toChange11(e: number) {
		console.log(e)
	}
	function toChange12(e: number) {
		console.log(e)
	}
	function toGetCurrent(val: number) {
		pr.value = val
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/slider-bar" />
