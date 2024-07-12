# n-refresher

自定义刷新组件

## 设计哲学 [Design]

- 自定义刷新组件，支持下拉过程进度，支持刷新动画；
- 细节到位，全部可配；

> 如果您需要另外自定义刷新组件，请参考我们的n-refresher组件来开放属性和接口。
> 开发者可以通过easycom的配置来覆盖我们的自定义刷新组件。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| mainText | string | false | '下拉即可刷新...' | 下拉时提示文字 |  | 
| pullingText | string | false | '释放即可刷新...' | 下拉时提示文字 |  | 
| refreshingText | string | false | '正在努力刷新...' | 正在刷新的提示文字 |  | 
| refreshing | boolean | false | false | 是否正在刷新 | true, false | 
| boxStyle | string | false | '' | 外层样式 |  | 
| textStyle | string | false | '' | 更多文字样式 |  | 
| boxClass | string | false | '' | 外层样式类 |  | 
| textClass | string | false | '' | 更多文字样式类 |  | 

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| onPulling | 正在下拉。下拉过程中，通过此接口来通知组件响应 | pr: number - 相对下拉组件的高度计算得到的下拉进度 |

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
