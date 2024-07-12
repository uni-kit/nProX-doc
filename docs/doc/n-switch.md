# n-switch

开关组件

## 设计哲学 [Design]

- 自定义实现，可适配多种样式；
- 开放每个状态下的插槽；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| disabled | boolean | false | false | 是否禁用 | true, false | 
| bgType | string | false | 'light' | 组件off状态下背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| onBgType | string | false | 'primary' | 组件on状态下背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| ballBgType | string | false | 'inverse' | 移动球/开关的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| animateBgType | string | false | '' | 组件动画效果的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| width | string | false | '102rpx' | 组件宽度 |  | 
| height | string | false | '62rpx' | 组件高度 |  | 
| ballSize | string | false | '58rpx' | 移动球/开关的尺寸 |  | 
| ballBg | string | false | '' | 移动球/开关的背景色 |  | 
| animateBg | string | false | '' | 动画效果的背景色 |  | 
| bg | string | false | '' | off状态下的背景色 |  | 
| onBg | string | false | '' | on状态下的背景色 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| animateClass | string | false | '' | 动画效果的样式类 |  | 
| ballClass | string | false | '' | 移动球/开关的的样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| on | 打开时的内容 | No |  |
| off | 关闭时的内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="开关" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="具备良好动画的开关" desc="具备切换动画与内容定制" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<view class="n-flex-row n-align-center n-justify-between switch-items">
					<n-switch></n-switch>
					<n-switch v-model="state.value1 as boolean"></n-switch>
					<n-switch v-model="state.value2 as boolean" :disabled="true"></n-switch>
					<n-switch v-model="state.value3 as boolean" onBgType="error"></n-switch>
				</view>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 48rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view class="n-flex-row n-align-center n-justify-between switch-items">
					<n-switch v-model="state.value4 as boolean" bgType="border" onBgType="warning" animateBgType="primary" ballBgType="inverse" width="200rpx">
						<template v-slot:on>
							<text class="n-color-inverse n-size-base" style="position: absolute;left:16rpx;top:0;line-height:62rpx;">已打开</text>
						</template>
						<template v-slot:off>
							<text class="n-color-inverse n-size-base" style="position: absolute;right:16rpx;top:0;line-height:62rpx;">已关闭</text>
						</template>
					</n-switch>
					<n-switch :value="true" width="200rpx" height="60rpx" ballSize="56rpx"></n-switch>
				</view>
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="充分的自定义能力" desc="具体能力请看文档,示范以简洁易懂为主" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {reactive} from 'vue'
	
	import descView from '@/pages/components/descView.vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	type StateType = {
		value1: boolean;
		value2: boolean;
		value3: boolean;
		value4: boolean;
	}
	
	const state = reactive({
		value1: true,
		value2: true,
		value3: true,
		value4: false
	} as StateType)
</script>

<style lang="scss" scoped>
.switch {
	&-items {
		margin: 0 64rpx;
	}
}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/switch" />
