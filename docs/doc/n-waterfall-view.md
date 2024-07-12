# n-waterfall-view

自定义瀑布流

## 设计哲学 [Design]

- 瀑布流组件，支持等高以及非等高；
- 滚动需要借助scroll或者list；
- 需要用户高度计算函数，高性能；
- 细节到位，全部可配；

> 自定义waterfall，一般通过规则来计算高度，或者程序内计算dom的高度。dom高度的计算会有较大的延时。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| sameHeight | boolean | false | false | 是否等高 | true, false | 
| calculator | HeightCalculator | false |  | 高度计算函数 |  | 
| columnGap | string | false | '0' | 列之间的间距 |  | 
| leftGap | string | false | '0' | 左侧边距 |  | 
| rightGap | string | false | '0' | 右侧边距 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| left | 左侧内容 | Yes | lefts:  |
| right | 右侧内容 | Yes | rights:  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| set | 设置内容数组，重新生成布局 | arr: any[] - 内容数组 |
| concat | 追加内容 | arr: any[] - 追加的内容数组 |
| clear | 清空瀑布 |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="瀑布流" @leftAction="navLeftAction"></n-navbar>
		<n-scroll>
			<n-waterfall-view ref="water" leftGap="20rpx" rightGap="20rpx" columnGap="10rpx" :calculator="calculateHeight">
				<template v-slot:left="{lefts}">
					<template v-for="(item,idx) in (lefts as GoodsEntryItem[])">
						<goods-topic-cell v-if="item.type=='topic'" :key="idx" :item="item"></goods-topic-cell>
						<goods-cell v-if="item.type=='goods'" :key="idx" :item="item"></goods-cell>
						<goods-flash-cell v-if="item.type=='flash'" :key="idx" :item="item"></goods-flash-cell>
						<goods-club-cell v-if="item.type=='club'" :key="idx" :item="item"></goods-club-cell>
					</template>
				</template>
				<template v-slot:right="{rights}">
					<template v-for="(item,idx) in (rights as GoodsEntryItem[])">
						<goods-topic-cell v-if="item.type=='topic'" :key="idx" :item="item"></goods-topic-cell>
						<goods-cell v-if="item.type=='goods'" :key="idx" :item="item"></goods-cell>
						<goods-flash-cell v-if="item.type=='flash'" :key="idx" :item="item"></goods-flash-cell>
						<goods-club-cell v-if="item.type=='club'" :key="idx" :item="item"></goods-club-cell>
					</template>
				</template>
			</n-waterfall-view>
		</n-scroll>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {onReady} from '@dcloudio/uni-app'
	import goodsTopicCell from '@/components/goods/goodsTopicCell.vue'
	import goodsCell from '@/components/goods/goodsCell.vue'
	import goodsFlashCell from '@/components/goods/goodsFlashCell.vue'
	import goodsClubCell from '@/components/goods/goodsClubCell.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	import cloudImgs from '@/common/imgs'
	import { GoodsEntryItem } from '@/types/index'
	
	const defaultData: GoodsEntryItem[] = [
		{cover: cloudImgs.getString('cover.sea') ?? '', name: '开发好工具，种草全世界', type: 'topic', topic: '#精选好物推荐#', label: '好物推荐', width: 575, height: 480, page: ''},
		{cover: cloudImgs.getString('cover.snow') ?? '', name: '全新与优雅的设计', type: 'goods', topic: '#年度最佳设计#', label: '好物推荐', tags: '新品,最佳', price: 399.00, sale: 369, vip: 349, saleNum: 3699, width: 546, height: 410, page: ''},
		{cover: cloudImgs.getString('cover.house') ?? '', name: '高质量高效率高实用', type: 'flash', topic: '#年度最受欢迎#', label: '好物推荐', tags: '新品,热门', price: 399.00, sale: 369, saleNum: 3699, width: 1000, height: 1205, page: ''},
		{cover: cloudImgs.getString('cover.house_white') ?? '', name: '主题搭配优秀，一键换肤', type: 'club', topic: '#年度最佳搭配#', label: '好物推荐', tags: '热卖,3人团', price: 399.00, sale: 369, saleNum: 3699, width: 928, height: 1158, page: ''},
		{cover: cloudImgs.getString('cover.girl') ?? '', name: '国际化/动画/手势全面突破', type: 'goods', topic: '#msi冠军#', label: '好物推荐', tags: '新品,突破', price: 399.00, sale: 369, saleNum: 3699, width: 928, height: 1158, page: ''},
		{cover: cloudImgs.getString('cover.tree') ?? '', name: '主题搭配优秀，一键换肤', type: 'club', topic: '#年度最佳搭配#', label: '好物推荐', tags: '热卖,3人团', price: 399.00, sale: 369, saleNum: 3699, width: 928, height: 1158, page: ''},
		{cover: cloudImgs.getString('cover.dog') ?? '', name: '国际化/动画/手势全面突破', type: 'goods', topic: '#msi冠军#', label: '好物推荐', tags: '新品,突破', price: 399.00, sale: 369, saleNum: 3699, width: 928, height: 1158, page: ''},
		{cover: cloudImgs.getString('cover.tree2') ?? '', name: '高质量高效率高实用', type: 'flash', topic: '#年度最受欢迎#', label: '好物推荐', tags: '新品,热门', price: 399.00, sale: 369, saleNum: 3699, width: 1000, height: 1205, page: ''},
	] as GoodsEntryItem[]
	
	const water = ref<NWaterfallViewComponentPublicInstance|null>(null)
	
	function calculateHeight(val: any): number {
		let h = (val as GoodsEntryItem).height * 350 / (val as GoodsEntryItem).width
		if (h > 400) {
			// 限制最高400
			h = 400
		}
		if (h < 100) {
			h = 100
		}
		// 只计算有差别的地方，高度相同的地方不做计算
		if ((val as GoodsEntryItem).type != 'topic' ) {
			h += 10 + 32 + 24 + 38
		}
		return h
	}
	function toLoadData() {
		water.value?.set?.(defaultData as any[])
	}
	onReady(() => {
		toLoadData()
		
		setTimeout(() => {
			// 加载更多的时候，使用的是concat
			water.value?.concat?.(defaultData as any[])
		}, 2000)
	})
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/scroll/waterfall-view" />
