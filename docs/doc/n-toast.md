# n-toast

toast提示弹窗

## 设计哲学 [Design]

- 可调定位方式：相对、绝对；
- 支持固定宽度；
- 也支持动态宽度；
- 提供大小不同的展示模式；
- 定位位置可调；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| boxStyle | string | false | '' | 组件样式 |  | 

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| show | 显示toast提示 | info: ToastOptionsType - toast内容 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="toast" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse" >
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="可随意位置" desc="默认是居中的,可以配置随意的位置弹出toast" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button  bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPop"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="bottom" iconStyle="font-size:60rpx;" title="换一个位置" desc="我们的toast组件也适配了不同的位置设置,方便用户满足不同的需求" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPopBottom"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="top" iconStyle="font-size:60rpx;" title="全部支持" desc="上下左右居中以及距离微调颜色文字细控等全部支持,想让他出现在什么地方,就可以出现在什么地方,想使用什么动画都可以.具体看文档说明以及查找模版" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
		<n-toast ref="ntoast"></n-toast>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import { ToastOptionsType } from '@/nProX/types/npro'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const ntoast = ref<NToastComponentPublicInstance|null>(null)
	
	function toPop() {
		ntoast.value?.show?.({type: 'success', text: '恭喜您Action', mode: 'big'} as ToastOptionsType)
	}
	function toPopBottom() {
		ntoast.value?.show?.({type: 'success', text: '欢迎来到nProX，多多支持', pos: 'bottom', offset: 'x-60px'} as ToastOptionsType)
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/pop/toast" />
