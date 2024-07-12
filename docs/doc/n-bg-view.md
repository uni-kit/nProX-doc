# n-bg-view

背景图，背景视频

## 设计哲学 [Design]

- 支持图片以及视频；
- 默认图片和视频铺满；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| src | string | false | '' | 背景图 |  | 
| isVideo | boolean | false | false | 是否视频 | true, false | 
| mode | string | false | 'aspectFill' | 背景图剪裁、缩放模式 |  | 
| ms | string | false | '' | 组件的margin-space主题 | ss,s,base,l,ll,left-ss,left-s,left-base,left-l,left-ll,top-ss,top-s,top-base,top-l,top-ll,right-ss,right-s,right-base,right-l,right-ll,bottom-ss,bottom-s,bottom-base,bottom-l,bottom-ll,auto | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| imageStyle | string | false | '' | 背景图样式 |  | 
| imageClass | string | false | '' | 背景图样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| error | Image error event. | UniImageErrorEvent - error while load. event.detail = { errMsg } |
| load | Image loaded success event. | UniImageLoadEvent - load success. event.detail = { width: '图片宽度px', height: '图片高度px' } |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="背景图" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<desc-view top="120rpx" icon="headphone-dot" iconStyle="font-size:100rpx;" title="快速实现背景图片" desc="很多时候我们需要使用到背景图片,或者我们需要使用一个图片来实现阴影效果,这个时候背景图组件帮你少写几行代码" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;"></desc-view>
				<n-bg-view :src="cloudImgs.getString('cover.sea')" mode="aspectFill" boxStyle="width:600rpx;height:400rpx;margin-left:75rpx;" imageStyle="width:600rpx;height:400rpx;border-radius:20rpx;">
					<view class="n-position-absolute n-flex-row n-justify-center n-align-center n-positiond-0">
						<text class="n-color-inverse n-size-ll">Hello，I can do it!</text>
					</view>
				</n-bg-view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import cloudImgs from '@/common/imgs'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
</script>

<style lang="scss">
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/box/bg-view" />
