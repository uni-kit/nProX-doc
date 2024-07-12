# n-badge

角标

## 设计哲学 [Design]

- 独立式。在其他组件内使用，而不是包裹其他组件；
- 支持绝对定位、正常定位；
- 可圆可方可长可短可随内容；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| absolute | boolean | false | false | 是否使用绝对定位 | true, false | 
| size | string | false | '12rpx' | 圆点尺寸。不是圆点需要设置为0 |  | 
| bgType | string | false | 'error' | 背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| text | string | false | '' | 文字内容 |  | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| textType | string | false | 'inverse' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'ss' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| textStyle | string | false | '' | 文字样式 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="badge" @leftAction="navLeftAction"></n-navbar>
		<n-list >
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="支持多种设置" desc="可定制内容" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<view class="n-flex-row n-align-center">
					<view class="n-justify-center n-align-center" style="flex: 1;">
						<n-badge></n-badge>
					</view>
					<view class="n-justify-center n-align-center" style="flex: 1;">
						<n-badge size="24rpx" bgType="primary"></n-badge>
					</view>
					<view class="n-justify-center n-align-center" style="flex: 1;">
						<n-badge text="买一赠一" size="0" boxStyle="padding-left:16rpx;padding-right:16rpx;height:40rpx;border-radius:40rpx;"></n-badge>
					</view>
				</view>
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="配合组件" desc="还可以直接用到宫格/导航栏/按钮等组件中" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
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

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/badge" />
