# n-height

快速高度。自由组合高度，无需用户计算

## 设计哲学 [Design]

- calc函数支持度不一致，以及有时候继承不太方便，总有特殊时候我们需要依靠屏幕/窗口高度来组合计算高度；
- screen：屏幕高度；
- window：窗口高度；
- status：状态栏高度；
- nav：导航栏高度；
- x：安全区高度；
- !x：前置!表示减去高度；
- 自由组合：screen-!status-!nav-!x-!120rpx。表示屏幕高度 - 状态栏高度 - 导航栏高度 - 安全区高度 - 120rpx 高度；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| flex | string | false | 'column' | flex布局flex-direction主题 | row,row-reverse,column,column-reverse | 
| justify | string | false | '' | justify-content主题 | start,center,end,between,around | 
| align | string | false | '' | align-items主题 | start,center,end,stretch,baseline,self-auto,self-start,self-center,self-end,self-stretch,self-baseline,content-start,content-center,content-end,content-between,content-around,content-stretch | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| height | string | false | '0' | 高度。比如：window-!status-!nax-!120rpx |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="高度盒子" @leftAction="navLeftAction"></n-navbar>
		<n-height height="window-!status-!nav">
			<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="高度盒子可以便捷的设置高度" desc="比如height='window'就代表了窗口高度" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			<n-height bgType="success" height="status-nav"></n-height>
			<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="status-nav" desc="上面绿色部分表示状态栏+导航栏" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			<desc-view top="60rpx" icon="bottom" iconStyle="font-size:60rpx;" title="高度值可以有" desc="screen/window/status/nav/x/50rpx/46px/20/组合" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
		</n-height>
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

<DemoFrame src="https://www.redou.vip/nprox/#/pages/box/height" />
