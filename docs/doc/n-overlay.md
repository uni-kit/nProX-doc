# n-overlay

遮罩层

## 设计哲学 [Design]

- 带透明度动画效果的遮罩层；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | false | 是否显示 | true, false | 
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| duration | number | false | 400 | 动画周期 |  | 
| timingFunction | string[] | false | ():string[] => ['ease-in-out', 'ease-out'] | 动画函数 |  | 
| bgType | string | false | 'mask' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| bg | string | false | '' | 背景色 |  | 
| canAutoClose | boolean | false | false | 是否点击之后自动关闭 | true, false | 
| left | string | false | '0' | 左侧定位 |  | 
| right | string | false | '0' | 右侧定位 |  | 
| top | string | false | '0' | 顶部定位 |  | 
| bottom | string | false | '0' | 底部定位 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| forStandout | boolean | false | false | 是否是standout组件的overlay | true, false | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| overlayClicked |  |  |
| overlayClicking |  |  |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 定制内容。默认空白 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="遮罩层" @leftAction="navLeftAction"></n-navbar>
		<n-list  bgType="inverse">
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="动画遮罩" desc="遮罩层是个好东西,我们可以控制他的显示和隐藏,还具备动画效果" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPop"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="bottom" iconStyle="font-size:60rpx;" title="还具备点击事件" desc="这一个遮罩层,点击的时候会自动关闭掉遮罩,来试试看" descStyle="margin-top:24rpx;margin-bottom:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPopClosable"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="top" iconStyle="font-size:60rpx;" title="全部支持" desc="遮罩层支持背景色/层级/动画等修改,也是支持上下左右间距的.当然,还支持改变定位方式" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
		<n-overlay :show="visible" :duration="2000" bgType="mask-dark"></n-overlay>
		<n-overlay :show="closableVisible" @overlayClicked="toClose"></n-overlay>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	import descView from '@/pages/components/descView.vue'
	
	const visible = ref(false)
	const closableVisible = ref(false)
	
	function toPop() {
		visible.value = true
		
		setTimeout(() => {
			visible.value = false
		}, 6000)
	}
	function toPopClosable() {
		closableVisible.value = true
	}
	function toClose() {
		closableVisible.value = false
	}
</script>

<style>

</style>
```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/pop/overlay" />
