# n-loading-indicator

加载中提示的指示器

## 设计哲学 [Design]

- gif动图；
- 细节到位，全部可配；

加载提示的指示器，其实花样是特别多的。我们这里提供了一个gif动图。

后期可以专门搞一个加载提示器的模板，里面搞几十种提示。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| src | string | false | '/static/ui/loading.gif' | 提示gif图片 |  | 
| width | string | false | '36rpx' | 自定义宽度 |  | 
| height | string | false | '36rpx' | 自定义高度 |  | 

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="加载中指示器" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse">
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="内置了一个gif图片" desc="更多的效果将在模版中,示范以简洁为主" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<view class="n-flex-row n-justify-center">
					<n-loading-indicator></n-loading-indicator>
				</view>
				<view class="n-flex-row n-justify-center" style="margin-top: 48rpx;">
					<n-loading-indicator src="/static/ui/loading.gif" width="100rpx" height="100rpx"></n-loading-indicator>
				</view>
				<desc-view top="60rpx" icon="top" iconStyle="font-size:60rpx;" title="允许自定义指示器图片" desc="后期我们也会提供更多的加载中指示器的动画实现,不再只是图片.利用动画制作,这样更加好控制暂停与开始" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;"></desc-view>
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

<DemoFrame src="https://www.redou.vip/nprox/#/pages/pop/loading-indicator" />
