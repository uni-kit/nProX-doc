# n-scroll

支持刷新和加载更多的滚动组件

## 设计哲学 [Design]

- 支持刷新和加载更多；
- 支持自定义刷新和加载；
- 内置刷新和加载逻辑，用户只需要关注内容接口；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| scrollId | string | false | '' | id |  | 
| type | string | false | '-' | 渲染模式 | nested | 
| height | string | false | '' | 高度 |  | 
| direction | string | false | 'vertical' | 滚动方向。none禁止滚动 | horizontal,vertical,all,none | 
| bounces | boolean | false | true | 是否具备回弹效果 | true, false | 
| showScrollbar | boolean | false | true | 是否显示滚动条 | true, false | 
| enableBackToTop | boolean | false | false | iOS点击顶部状态栏滚动条返回顶部，只支持竖向 | true, false | 
| upperThreshold | number | false | 50 | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件 |  | 
| lowerThreshold | number | false | 50 | 距底部/右边多远时（单位px），触发 scrolltolower 事件 |  | 
| scrollTop | number | false | 0 | 竖向滚动条位置 |  | 
| scrollIntoView | string | false | '' | 子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素起始位置 |  | 
| scrollWithAnimation | boolean | false | true | 是否在设置滚动条位置时使用滚动动画，设置false没有滚动动画 | true, false | 
| refresherEnabled | boolean | false | false | 开启下拉刷新，暂时不支持scroll-x = true横向刷新 | true, false | 
| refresherThreshold | number | false | 145 | 下拉刷新阈值 |  | 
| refresherMaxDragDistance | number | false | 0 | 下拉最大拖拽距离（单位px），默认是下拉刷新控件高度的2.5倍 |  | 
| refresherDefaultStyle | string | false | 'black' | 下拉刷新默认样式。none表示不使用默认样式 | black,white,none | 
| refresherBackground | string | false | 'transparent' | 下拉刷新区域背景颜色 |  | 
| autoRefresh | boolean | false | false | 是否自动刷新/加载第一页数据 | true, false | 
| loadMoreEnabled | boolean | false | false | 是否开启加载更多 | true, false | 
| associativeContainer | string | false | '' | 关联的滚动容器。作为子滚动列表时设置 | nested-scroll-view | 
| customNestedScroll | boolean | false | false | 是否开启滚动嵌套，将滚动事件与父元素协商处理。作为子滚动列表时设置 | true, false | 
| nestedScrollChild | string | false | '' | 嵌套滚动子元素的id属性，不支持ref，scroll-view惯性滚动时会让对应id元素视图进行滚动，子元素滚动时会触发scroll-view的nestedprescroll事件，嵌套子元素需要设置custom-nested-scroll = true |  | 
| reverseStyle | string | false | '' | 倒转列表的样式 |  | 
| bgType | string | false | 'page' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| position | string | false | '' | 组件定位主题 | relative,absolute,fixed,static,sticky | 
| top | string | false | '0' | 顶部定位 |  | 
| bottom | string | false | '0' | 底部定位 |  | 
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
| nestedStart |  |  |
| nestedScroll |  |  |
| nestedStop |  |  |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| load | 加载/刷新数据 |  |
| refresh | 刷新数据 |  |
| endSuccess | 请求数据成功后的回调 | hasMore: boolean - 是否具备下一页数据 |
| endError | 请求数据失败后的回调 |  |
| scrollToId | 滚动到id | ref: string - id string |
| scrollToOffset | 滚动到位置 | ref: number - 滚动的距离 |
| scrollToTop | 滚动到顶部 |  |
| scrollToBottom | 滚动到底部 |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="n-scroll" @leftAction="navLeftAction"></n-navbar>
		<n-scroll ref="scroll" :refresherEnabled="true" :loadMoreEnabled="true" :autoRefresh="true" refresherDefaultStyle="none" @load="toLoadData">
			<view v-for="(item,idx) in items" :key="idx" class="n-flex-column n-align-center n-justify-center n-bg-primary" style="height: 160rpx;margin-bottom: 20rpx;">
				<text class="n-color-inverse n-weight-7 n-size-ll">{{item}}</text>
			</view>
		</n-scroll>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const scroll = ref<NScrollComponentPublicInstance|null>(null)
	const defaultData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const items = ref([] as number[])
	
	function toLoadData(cp: number) {
		// 模拟数据请求
		setTimeout(() => {
			if (cp == 1) {
				items.value = [...defaultData]
			} else {
				items.value.push(...(defaultData.map((i:number):number=>i+(cp-1)*10)))
			}
			scroll.value?.endSuccess?.(cp >= 4 ? false : true)
		}, 1000)
	}
</script>

<style>

</style>
```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/scroll/scroll" />
