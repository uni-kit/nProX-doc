# n-list

二次封装的list-view。可复用list-item从而提升性能。对于刷新、加载、分页等适配，拿来即用

## 设计哲学 [Design]

- 内置自定义的刷新和加载。当然也可使用原生样式，也可以覆盖我们自定义的；
- 拿来即用，只需要适配数据加载接口，n-list会帮你管理好一切。方便省事好用；
- 可自动刷新/加载；
- 细节到位，全部可配；

nProX下的`n-list`组件使用起来非常快捷省事。开发者不需要关心数据的分页页码逻辑，也不需要去做一些加载频繁触发的限制，等。
我们内置了pager管理，也对数据的重复拉取做了保护。
开发者只需要提供数据接口即可。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| listId | string | false | '' | id |  | 
| direction | string | false | 'vertical' | 滚动方向。none表示禁止滚动 | horizontal,vertical,none | 
| height | string | false | '' | 高度。直接指定高度 |  | 
| bounces | boolean | false | true | 是否具备回弹效果 | true, false | 
| showScrollbar | boolean | false | true | 是否显示滚动条 | true, false | 
| enableBackToTop | boolean | false | false | iOS点击顶部状态栏滚动条返回顶部，只支持竖向 | true, false | 
| upperThreshold | number | false | 50 | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件 |  | 
| lowerThreshold | number | false | 50 | 距底部/右边多远时（单位px），触发 scrolltolower 事件 |  | 
| scrollTop | number | false | 0 | 竖向滚动条位置 |  | 
| scrollIntoView | string | false | '' | 值为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素起始位置 |  | 
| scrollWithAnimation | boolean | false | true | 是否在设置滚动条位置时使用滚动动画 | true, false | 
| refresherEnabled | boolean | false | false | 是否开启下拉刷新 | true, false | 
| refresherThreshold | number | false | 45 | 设置下拉刷新阈值, 仅 refresher-default-style = 'none' 自定义样式下生效 |  | 
| refresherMaxDragDistance | number | false | 0 | 设置下拉最大拖拽距离（单位px），默认是下拉刷新控件高度的2.5倍 |  | 
| refresherDefaultStyle | string | false | 'black' | 设置下拉刷新默认样式，支持设置 black | white | none， none 表示不使用默认样式 | black,white,none | 
| refresherBackground | string | false | 'transparent' | 设置下拉刷新区域背景颜色，默认透明 |  | 
| autoRefresh | boolean | false | false | 是否挂载之后自动刷新数据 | true, false | 
| loadMoreEnabled | boolean | false | false | 是否开启加载更多 | true, false | 
| associativeContainer | string | false | '' | 关联的滚动容器.可设置嵌套滚动。作为嵌套的子滚动列表时设置。父scroll-view需要设置为type=nested | nested-scroll-view | 
| customNestedScroll | boolean | false | false | 被嵌套的子列表是否开启嵌套滚动。嵌套滚动时作为子滚动列表时需要设置true | true, false | 
| reverseStyle | string | false | '' | 是否倒转列表 |  | 
| bgType | string | false | 'page' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| position | string | false | '' | 定位主题 | relative,absolute,fixed,static,sticky | 
| top | string | false | '0' | top定位 |  | 
| bottom | string | false | '0' | bottom定位 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| inited | onMounted触发 |  |
| scroll | 滚动触发 | UniScrollEvent - `event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}` |
| scrollend | 滚动结束时触发 | UniScrollEvent - `event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}` |
| upper | 滚动到顶部/左边，会触发 scrolltoupper 事件 | UniScrollToUpperEvent -  |
| lower | 滚动到底部/右边，会触发 scrolltolower 事件 | UniScrollToLowerEvent -  |
| pulling | 下拉刷新控件被下拉 | UniRefresherEvent - `event.detail = {dy}` |
| refresh | 下拉刷新被触发 | UniRefresherEvent - `event.detail = {dy}` |
| restore | 下拉刷新被复位 | UniRefresherEvent - `event.detail = {dy}` |
| abort | 下拉刷新被中止 | UniRefresherEvent - `event.detail = {dy}` |
| load | 刷新/加载更多的数据拉取通知 | number - 当前拉取的页码 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| load | 加载/刷新数据 |  |
| refresh | 刷新数据 |  |
| endSuccess | 请求数据成功的回调 | hasMore: boolean - 是否具备下一页数据 |
| endError | 请求数据失败的回调 |  |
| scrollToId | 滚动到id | ref: string - id string |
| scrollToOffset | 滚动到距离 | ref: number - 滚动距离 |
| scrollToTop | 滚动到顶部 |  |
| scrollToBottom | 滚动到底部 |  |

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
