# n-timeline-item

时间线

## 设计哲学 [Design]

- 左侧内容-中间线以及badge-右侧内容，三段式设计；
- 满足大多数时间线需求；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| bgType | string | false | '' | 背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| centerStyle | string | false | '' | 中间线外层样式 |  | 
| lineBgType | string | false | 'border' | 中间线背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| lineStyle | string | false | '' | 中间线样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| centerClass | string | false | '' | 中间线外层样式类 |  | 
| lineClass | string | false | '' | 中间线样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| left | 左侧内容 | No |  |
| badge | badge/标签内容 | No |  |
| right | 右侧内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="时间轴" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse">
			<n-list-cell>
				<view style="height: 24rpx;"></view>
			</n-list-cell>
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<n-timeline-item lineBgType="primary" centerStyle="width:52rpx;" boxStyle="margin-left:32rpx;width:686rpx;">
					<template v-slot:badge>
						<view class="n-bg-inverse n-radius-ll n-border-warning" style="position: absolute;width: 52rpx;height: 52rpx;top:0;left:0;align-items: center;justify-content: center;">
							<n-icon name="radio-button" type="error"></n-icon>
						</view>
					</template>
					<template v-slot:right>
						<view style="margin-left: 18rpx;">
							<text class="n-size-l n-color-text" style="line-height: 52rpx;">{{item.title}}</text>
							<text class="n-size-s n-color-third n-lh-base" style="margin-top: 8rpx;">{{item.time}}</text>
							<text class="n-size-base n-color-second n-lh-base" style="margin-top: 12rpx; width: 624rpx;">{{item.desc}}</text>
							<view style="height: 56rpx;"></view>
						</view>
					</template>
				</n-timeline-item>
			</n-list-cell>
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<n-timeline-item lineBgType="primary" centerStyle="width:52rpx;margin-left:18rpx;" boxStyle="width:750rpx;">
					<template v-slot:left>
						<view style="width: 120rpx;flex-direction: row;justify-content: flex-end;">
							<text class="n-size-l n-color-text" style="line-height: 52rpx;">{{item.ago}}</text>
						</view>
					</template>
					<template v-slot:badge>
						<view class="n-bg-inverse n-radius-ll n-border-warning" style="position: absolute;width: 52rpx;height: 52rpx;top:0;left:0;align-items: center;justify-content: center;">
							<n-icon name="radio-button" type="error"></n-icon>
						</view>
					</template>
					<template v-slot:right>
						<view style="margin-left: 18rpx;">
							<text class="n-size-l n-color-text" style="line-height: 52rpx;">{{item.title}}</text>
							<text class="n-size-s n-color-third n-lh-base" style="margin-top: 8rpx;">{{item.time}}</text>
							<text class="n-size-base n-color-second n-lh-base" style="margin-top: 12rpx; width: 528rpx;">{{item.desc}}</text>
							<view style="height: 56rpx;"></view>
						</view>
					</template>
				</n-timeline-item>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	type DataItemType = {
		title: string;
		time: string;
		ago: string;
		desc: string;
	}
	
	const items = [{title: '3.0-Beta：初心不忘', time: '2020-09-20', ago: 'Now', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'},
		{title: '2.6：在樱花开放的季节', time: '2020-09-20', ago: '上个月', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'},
		{title: '2.0：遇见你，刚刚好', time: '2020-09-20', ago: '半年年', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'},
		{title: '1.1：我曾来过，飞过痕迹', time: '2020-09-20', ago: '10月前', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'},
		{title: '1.0：在这里，相遇', time: '2020-09-20', ago: '一年前', desc: '我，站着，在一片不长草的草原，钓鱼。或许，落日一直在提醒着我，人到底是要长大的。'}
	] as DataItemType[]
</script>

<style lang="scss" scoped>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/timeline-item" />
