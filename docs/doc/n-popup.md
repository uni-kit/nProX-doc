# n-popup

弹窗组件。超级方便，灵活好用

## 设计哲学 [Design]

- 支持相对、绝对定位；
- 全方位弹窗支持；
- 支持水平和垂直自动居中；
- 支持居中放大显示和缩小隐藏；
- 支持类似keep-alive模式。按需渲染一次，后续无需重新渲染；
- 支持位置细调；
- 细节到位，全部可配；

popup类组件是组件库中最重要的组件，也是项目开发中使用最频繁和最重要的组件。

它需要满足开发者各种各样的需求。比如：遮罩层、弹出方向、弹出动画、最终位置的细调，等。大多数设计稿子中弹出窗口的最终位置都是不一样的，我们都需要根据实际开发来细调定位，我们细节到位，根据实际开发需求，提供了灵活的适配能力，满足真实的开发场景需求。

> 弹窗类、提示类组件是项目中最重要的组件。实现功能容易，但是做好一个实用的灵活的组件，却是需要很多实战功底和完备的思考能力的。
> nProX中提供了大量的弹窗类、提示类的组件，而且这些组件能够满足几乎所有的需求，它们提供了灵活的壳子和细调能力，用户只需要关注实际内容，根据需求调节属性即可。
> nProX中常用的弹窗类、提示类组件有：n-popup、n-popup-standout、n-drawer、n-overrlay、n-loading、n-toast、n-notice、n-notice-dynamic，等。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | false | 是否显示 | true, false | 
| keepAlive | boolean | false | false | 是否显示一次之后，再次显示不需要重新渲染。只会在第一次显示时渲染一次，该模式下不支持pos=center | true, false | 
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| pos | string | false | 'bottom' | 弹出方式/位置 | top,right,bottom,left,center,top-center,right-center,bottom-center,left-center,center-scale | 
| autoCenter | boolean | false | true | 在与弹出方向垂直的方向上，内容是否自动局中 | true, false | 
| bgType | string | false | '' | 弹出内容的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| duration | number | false | 300 | 动画周期 |  | 
| hasOverlay | boolean | false | true | 是否有遮罩层 | true, false | 
| overlayBgType | string | false | 'mask' | 遮罩层背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| overlayBg | string | false | '' | 遮罩层背景色 |  | 
| overlayDuration | number | false | 300 | 遮罩层动画周期 |  | 
| overlayTimingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 遮罩层动画函数 |  | 
| timingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 动画函数 |  | 
| left | string | false | '0' | 遮罩层左侧定位 |  | 
| right | string | false | '0' | 遮罩层右侧定位 |  | 
| top | string | false | '0' | 遮罩层顶部侧定位 |  | 
| bottom | string | false | '0' | 遮罩层底部定位 |  | 
| width | string | false | '' | 弹出内容的宽度 |  | 
| height | string | false | '' | 弹出内容的高度 |  | 
| leftOffset | string | false | '' | 内容左侧定位 |  | 
| rightOffset | string | false | '' | 内容右侧定位 |  | 
| topOffset | string | false | '' | 内容顶部定位 |  | 
| bottomOffset | string | false | '' | 内容底部定位 |  | 
| delay | number | false | 10 | 改变show之后延迟delay时间再进行显示/隐藏 |  | 
| boxStyle | string | false | '' | 弹出内容样式 |  | 
| overlayStyle | string | false | '' | 遮罩层样式 |  | 
| overlayClass | string | false | '' | 遮罩层样式类 |  | 
| boxClass | string | false | '' | 弹出内容样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| overlayClicked | 遮罩层点击事件 |  |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="弹窗" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse">
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="最重要的弹窗" desc="很多东西都是基于弹窗实现的,这是用途最广的.比如弹出选择/actionsheet/帖子列表的举报或者点赞等弹窗/下拉选择等" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPopTop"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="bottom" iconStyle="font-size:60rpx;" title="还能center-scale" desc="可以直接居中scale" descStyle="margin-top:24rpx;margin-bottom:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPopCenter"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="top" iconStyle="font-size:60rpx;" title="全部支持" desc="上下左右居中以及距离微调细控等全部支持,想让他出现在什么地方,就可以出现在什么地方,想使用什么动画都可以.具体看文档说明以及查找模版" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
	</view>
	<center-scale-pop :show="scaleVisible" @cancel="toHide"></center-scale-pop>
	<top-pop :show="topVisible" @cancel="toHide"></top-pop>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import descView from '@/pages/components/descView.vue'
	import centerScalePop from './components/centerScalePop.vue'
	import topPop from './components/topPop.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const scaleVisible = ref(false)
	const topVisible = ref(false)
	
	function toPopCenter() {
		scaleVisible.value = true
	}
	function toPopTop() {
		topVisible.value = true
	}
	function toHide() {
		scaleVisible.value = false
		topVisible.value = false
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/pop/popup" />
