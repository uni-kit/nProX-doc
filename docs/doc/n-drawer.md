# n-drawer

可跟手的抽屉组件。全方位跟手支持

## 设计哲学 [Design]

- 支持上下左右全方位跟手拉出或者收起；
- 事先凸出部分内容，具备初始化动画效果；
- 支持自动打开/收起；
- 支持局部手势、全局手势；
- 支持随停。拖在哪，停在哪；
- 细节到位，全部可配；

> nProX组件的作者，经历过大量项目(各种设计稿)的实战，对于代码质量、高效快速开发、代码规范、团队协作、前后台配合，深有研究。同时作者具备顶层思考和设计能力，一眼就能知道什么组件在开发中应该需要什么能力，需要开放什么属性。正是这种完备的设计能力和敏锐度，nProX组件得以合并精简和顺手好用。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| pos | string | false | 'bottom' | 打开/退出的位置/方向 | left,top,right,bottom | 
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| autoCenter | boolean | false | false | 与pos方向垂直的方向，是否自动局中显示 | true, false | 
| bgType | string | false | '' | 内容背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| duration | number | false | 300 | 打开/收起的动画周期 |  | 
| auto | boolean | false | true | 停止拖动之后是否自动打开/收起 | true, false | 
| allowAll | boolean | false | true | 是否全部内容区域可拖动 | true, false | 
| allowSwipe | boolean | false | true | 是否可以快速swipe打开/关闭 | true, false | 
| onlySwipe | boolean | false | false | 仅允许swipe打开 | true, false | 
| hasOverlay | boolean | false | true | 是否有遮罩层 | true, false | 
| overlayBgType | string | false | 'mask' | 遮罩层的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| overlayBg | string | false | '' | 遮罩层背景色 |  | 
| overlayDuration | number | false | 300 | 遮罩层动画周期 |  | 
| overlayTimingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 遮罩层动画函数 |  | 
| standout | string | false | '0' | 提前凸出的内容高度 |  | 
| standPosition | string | false | 'relative' | 凸出的定位主题 | relative,absolute,fixed,static,sticky | 
| standClass | string | false | '' | 凸出的样式类 |  | 
| standStyle | string | false | '' | 凸出的样式 |  | 
| timingFunction | string | false | 'ease-in-out' | 动画函数 |  | 
| initWithAni | boolean | false | true | 事先凸出的部分是否有弹出动画效果 | true, false | 
| initDelay | number | false | 200 | onMounted之后延迟一段时间再进行初始化弹出动画 |  | 
| initDuration | number | false | 300 | 初始化弹出的动画周期 |  | 
| left | string | false | '0' | 遮罩层左侧定位 |  | 
| right | string | false | '0' | 遮罩层右侧定位 |  | 
| top | string | false | '0' | 遮罩层顶部定位 |  | 
| bottom | string | false | '0' | 遮罩层底部定位 |  | 
| width | string | false | '0' | 内容宽度。pos=left/right的时候必须设置 |  | 
| height | string | false | '0' | 内容高度。pos=top/bottom的时候必须设置 |  | 
| leftOffset | string | false | '' | 内容的左侧定位 |  | 
| rightOffset | string | false | '' | 内容的右侧定位 |  | 
| topOffset | string | false | '' | 内容的顶部定位 |  | 
| bottomOffset | string | false | '' | 内容的底部定位 |  | 
| openRate | number | false | 0.4 | 打开多少占比可以自动打开 |  | 
| closeRate | number | false | 0.4 | 收起多少占比可以自动收起 |  | 
| overlayStyle | string | false | '' | 遮罩层样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| overlayClass | string | false | '' | 遮罩层样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| start | 开始拖动事件 |  |
| end | 拖动结束事件 | DrawerEndType - `{offset: number; max: number}` |
| overlayClicked | 遮罩层点击事件 |  |
| open | 打开通知 |  |
| close | 关闭通知 |  |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| overlay | 遮罩层内插槽 | No |  |
| standout | standout突出内容插槽。仅在局部拖动时有效 | No |  |
| default | 内容 | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| initShow | 初始化动画展示 |  |
| show | 打开抽屉 |  |
| hide | 关闭抽屉 |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar title="抽屉/拖动" :lefts="leftIcons" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<n-cell bgType="inverse" :title="item.title" :value="item.desc" 
				valueStyle="text-align:right;" border="bottom" indicator="arrow-right" 
				indicatorType="third" boxStyle="padding-left:32rpx;padding-right:32rpx;"
				 @cellClicked="toDrawer(item)"></n-cell>
			</n-list-cell>
		</n-list>
		<stand-bottom ref="standRef"></stand-bottom>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	import standBottom from './components/standBottom.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	import {RefCellItem} from "@/types/index"
	
	const standRef = ref<ComponentPublicInstance|null>(null)
	
	const items: RefCellItem[] = [
		{title: '抽屉', desc: '底部出现', page: '/pages/drawer/bottom', ref: 'standBottom'}, 
		{title: '抽屉', desc: '顶部出现', page: '/pages/drawer/top'},
		{title: '抽屉', desc: '左侧出现', page: '/pages/drawer/left'},
		{title: '抽屉', desc: '右侧出现', page: '/pages/drawer/right'},
		{title: '双层scroll', desc: '无遮罩，双层滚动，全内容可拖动', page: '/pages/drawer/scroll_drawer'},
		{title: '双层scroll', desc: '无遮罩，双层滚动，局部手势拖动', page: '/pages/drawer/scroll_standout_drawer'},
		{title: '随停随动', desc: '无遮罩，不自动', page: '/pages/drawer/no_auto'}
	]
	
	function toDrawer(val: RefCellItem) {
		// console.log(elRefs)
		if (val.ref != null) {
			standRef.value?.$callMethod('show')
			return
		}
		uni.navigateTo({
			url: val.page
		})
	}
	onLoad((_: OnLoadOptions) => {
		
	})
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/drawer/index" />
