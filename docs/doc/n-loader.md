# n-loader

自定义的加载更多组件，跟随加载状态变化：上提加载提示、加载中、没有更多内容

## 设计哲学 [Design]

- 自定义加载组件；
- 可跟随加载状态变化：上提加载提示、加载中、没有更多内容；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| mainText | string | false | '继续加载更多' | 继续加载时的文字提示 |  | 
| loadingText | string | false | '正在加载' | 正在加载时的文字提示 |  | 
| noMoreText | string | false | '没有更多啦' | 没有更多时的文字提示 |  | 
| isLoading | boolean | false | false | 是否正在加载 | true, false | 
| loadingSrc | string | false | '/static/ui/loading-small.gif' | 加载中的gif图片 |  | 
| hasMore | boolean | false | true | 是否还有更多 | true, false | 
| showNoMore | boolean | false | true | 是否展示没有更多 | true, false | 
| flex | string | false | 'column' | 内容的布局方式 |  | 
| boxStyle | string | false | '' | 外层样式 |  | 
| imgStyle | string | false | '' | 图标样式 |  | 
| textStyle | string | false | '' | 加载文字样式 |  | 
| boxClass | string | false | '' | 外层样式类 |  | 
| imgClass | string | false | '' | 图标样式类 |  | 
| textClass | string | false | '' | 加载文字的样式类 |  | 

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="刷新和加载" @leftAction="navLeftAction"></n-navbar>
		<n-list ref="nlist" :autoRefresh="true" :refresherEnabled="true" :loadMoreEnabled="true" refresherDefaultStyle="none" @load="toLoadData">
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<album-comment-cell></album-comment-cell>
				<view style="height: 16rpx;"></view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import albumCommentCell from '@/components/album/albumCommentCell.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const defaultData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const items = ref<number[]>([])
	const nlist = ref<NListComponentPublicInstance|null>(null)
	
	function toLoadData(cp: number) {
		setTimeout(()=>{
			if (cp == 1) {
				items.value = [...defaultData]
			} else {
				items.value.push(...(defaultData.map((i:number):number=>i+(cp-1)*10)))
			}
			nlist.value?.endSuccess?.(cp >= 6 ? false : true)
		}, 500)
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/list/refresh-load" />
