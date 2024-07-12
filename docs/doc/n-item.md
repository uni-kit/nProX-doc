# n-item

快速实现图标文字展示的小组件

## 设计哲学 [Design]

- 图标-文字，文字-文字。上下分布展示型的小组件；
- 复杂的建议直接自定义组件，不要硬适配该组件；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| icon | string | false | '' | 图标/图片/文字 |  | 
| isIcon | boolean | false | true | 是否是图标 | true, false | 
| text | string | false | '' | 文字 |  | 
| space | string | false | '12rpx' | 图标与文字的间距 |  | 
| bgType | string | false | '' | 背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| hover | string | false | 'opacity' | hover主题 | opacity,bg,bg-dark,bg-opacity | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'll' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| textType | string | false | 'second' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| textStyle | string | false | '' | 文字样式 |  | 
| boxStyle | string | false | '' | 外层样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| boxClass | string | false | '' | 外层样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| itemClicked | 组件被点击的事件通知 | UniPointerEvent - 点击事件 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="n-item" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<view class="n-flex-row">
					<n-item v-for="(item,idx) in items" :key="idx" :icon="item.icon" :text="item.text" textType="text" iconType="primary" iconStyle="font-size: 46rpx;" space="20rpx" style="flex: 1;" boxStyle="flex:1;height:180rpx;"></n-item>
				</view>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<view class="n-flex-row n-justify-between" style="height:140rpx">
					<n-item icon="6" :isIcon="false" text="动态" boxStyle="width:160rpx; height: 100rpx;"></n-item>
					<view class="ms-split n-bg-light"></view>
					<n-item icon="1" :isIcon="false" text="关注" boxStyle="width:160rpx; height: 100rpx;"></n-item>
					<view class="ms-split n-bg-light"></view>
					<n-item icon="2" :isIcon="false" text="粉丝" boxStyle="width:160rpx; height: 100rpx;"></n-item>
				</view>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<view class="n-flex-row">
					<n-item v-for="(item,idx) in items2" :key="idx" :icon="item.icon" :text="item.text" textType="text" iconType="warning" iconStyle="font-size: 52rpx;" space="20rpx" boxStyle="width:187rpx;height:180rpx;">
						<n-badge v-if="idx==3" text="1" size="32rpx" boxStyle="position:absolute;right:46rpx;top:8rpx;"></n-badge>
					</n-item>
				</view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	import {IconTextThemeType} from '@/nProX/types/npro'
	
	const items = [
		{icon: 'building', text: '离线缓存'},{icon: 'play', text: '稍后再看'},{icon: 'star', text: '我的收藏'},{icon: 'refresh', text: '历史记录'},
	] as IconTextThemeType[]
	const items2 = [
		{icon: 'report', text: '创作首页'},{icon: 'pad', text: '创作学院'},{icon: 'calendar', text: '创作日历'},{icon: 'task', text: '热门活动'},
	] as IconTextThemeType[]
</script>

<style lang="scss" scoped>
	.ms {
		&-split {
			width: 1px;
			height: 66rpx;
			margin-left: 50rpx;
			margin-right: 50rpx;
		}
	}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/item" />
