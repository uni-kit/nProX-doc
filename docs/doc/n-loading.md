# n-loading

加载中提示

## 设计哲学 [Design]

- 进行中/加载中的提示组件；
- 图片-文字 设计模式；
- 可相对/绝对定位，从而限制展示范围；
- 可遮罩；
- 显示位置可细调；
- 细节到位，全部可配；

加载/进行中提示类组件，在前端开发中是非常常用的组件，也是十分重要的组件。

> 很多加载中提示类组件都是固定位置和提示图标的，而在实际开发中，我们不同项目下提示的图标和位置可能都是变化的。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| maskStyle | string | false | '' | 遮罩层样式 |  | 
| boxStyle | string | false | '' | 内容样式 |  | 
| width | string | false | '200rpx' | 宽度 |  | 
| height | string | false | '200rpx' | 高度 |  | 
| radius | string | false | 'loading' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| maskClass | string | false | '' | 遮罩层样式类 |  | 
| boxClass | string | false | '' | 内容样式类 |  | 
| imgClass | string | false | '' | loading图标样式类 |  | 
| textClass | string | false | '' | 提示文字样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| maskClicked | 遮罩层点击事件 | UniPointerEvent - 点击事件 |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| show | 显示loading | options: LoadingOptionsType - loading内容选项 |
| hide | 隐藏loading |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="toast" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse" >
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="可随意位置" desc="默认是居中的,可以配置随意的位置loading" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPop"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="bottom" iconStyle="font-size:60rpx;" title="换一个位置" desc="我们的loading组件也适配了不同的位置设置,方便用户满足不同的需求" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPopBottom"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="top" iconStyle="font-size:60rpx;" title="全部支持" desc="上下左右居中以及距离微调颜色文字细控等全部支持,想让他出现在什么地方,就可以出现在什么地方,想使用什么动画都可以.具体看文档说明以及查找模版" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
		<n-loading ref="nloading"></n-loading>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import { LoadingOptionsType } from '@/nProX/types/npro'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const nloading = ref<NLoadingComponentPublicInstance|null>(null)
	
	function toPop() {
		nloading.value?.hide?.()
		nloading.value?.show?.({needMask: true} as LoadingOptionsType)
		setTimeout(()=>{
			nloading.value?.hide?.()
		}, 2000)
	}
	function toPopBottom() {
		nloading.value?.show?.({offset:'100px', pos: 'top'} as LoadingOptionsType)
		setTimeout(()=>{
			nloading.value?.hide?.()
		}, 2000)
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/pop/loading" />
