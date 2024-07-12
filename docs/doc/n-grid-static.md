# n-grid-static

宫格。可指定栏目数

## 设计哲学 [Design]

- 快速实现宫格，内置内容项；
- 支持外边框以及内分割线；
- 支持指定栏目数；
- 内置内容项为 图标/文字-文字-图标/文字 的多种组合，可垂直，可水平，满足大多数需求；
- 支持badge；
- 特殊定制需求请使用n-grid；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| items | IconTextThemeType[] | true |  | 内容项 |  | 
| mode | string | false | 'top' | 图标位置 | top,right,bottom,left | 
| columns | number | false | 4 | 每行的栏数 |  | 
| itemHeight | string | false | '' | 内容项的高度 |  | 
| hasLine | boolean | false | false | 内容之间是否有分隔线 | true, false | 
| space | string | false | '12rpx' | 图标与文字之间的间距 |  | 
| itemAlign | string | false | 'center' | 内容项的align-items主题 | start,center,end,stretch,baseline,self-auto,self-start,self-center,self-end,self-stretch,self-baseline,content-start,content-center,content-end,content-between,content-around,content-stretch | 
| itemJustify | string | false | 'center' | 内容项的justify-content主题 | start,center,end,between,around | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'l' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| hover | string | false | 'opacity' | 组件hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| itemBorder | string | false | 'light' | 内容项边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| isIcon | boolean | false | true | 图标字段是否是图标 | true, false | 
| badgeConfig | BadgeType | false |  | 角度配置 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| itemBoxStyle | string | false | '' | 内容项样式 |  | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标组件样式 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| itemBoxClass | string | false | '' | 内容项样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标组件样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| itemClicked | 内容项点击事件 | number - 点击的内容项下标 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="宫格" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<n-grid-static :items="items" itemHeight="160rpx" boxStyle="margin-left:32rpx;margin-right:32rpx;background-color:#FFFFFF;"></n-grid-static>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<n-grid-static :items="items" iconType="error" mode="left" itemHeight="160rpx" boxStyle="margin-left:32rpx;margin-right:32rpx;background-color:#FFFFFF;"></n-grid-static>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<n-grid-static :hasLine="false" border="none" :items="itemsTwo" :columns="3" iconType="primary" itemHeight="160rpx" boxStyle="margin-left:32rpx;margin-right:32rpx;background-color:#FFFFFF;"></n-grid-static>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<n-grid-static :hasLine="false" border="none" :items="itemsTwo" :columns="3" iconType="warning" itemHeight="160rpx" boxStyle="margin-left:32rpx;margin-right:32rpx;background-color:#FFFFFF;"></n-grid-static>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<n-grid-static :hasLine="false" border="none" :items="itemsThree" :columns="3" :isIcon="false" iconType="third" iconSize="ll" space="24rpx" itemHeight="160rpx" boxStyle="margin-left:32rpx;margin-right:32rpx;background-color:#FFFFFF;"></n-grid-static>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<n-grid-static :hasLine="false" border="none" :items="itemsImg" :columns="3" iconStyle="width:120rpx;height:120rpx;" space="24rpx" itemHeight="320rpx" boxStyle="margin-left:32rpx;margin-right:32rpx;background-color:#FFFFFF;"></n-grid-static>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<n-grid-static :hasLine="false" border="none" :items="itemsMix" :columns="3" space="24rpx" itemHeight="320rpx" boxStyle="margin-left:32rpx;margin-right:32rpx;background-color:#FFFFFF;"></n-grid-static>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import { IconTextThemeType } from '@/nProX/types/npro';
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	import cloudImgs from '@/common/imgs'
	
	const items = [{
		icon: 'club',
		text: '校友'
	}, {
		icon: 'film',
		text: '电影'
	}, {
		icon: 'task',
		text: '计划'
	}, {
		icon: 'radio-button',
		text: '戏曲'
	}, {
		icon: 'camera-solid',
		text: '自拍'
	}]  as IconTextThemeType[]
	const itemsTwo = [{
		icon: 'club',
		text: '校友'
	}, {
		icon: 'film',
		text: '电影'
	}, {
		icon: 'task',
		text: '计划'
	}]  as IconTextThemeType[]
	const itemsThree = [{
		icon: '10K+',
		text: '校友'
	}, {
		icon: '6K+',
		text: '电影'
	}, {
		icon: '298',
		text: '计划'
	}]  as IconTextThemeType[]
	const itemsImg = [{icon: cloudImgs.getString('avatar.girl')!, text: '女一号'}, {icon: cloudImgs.getString('avatar.girl_cat')!, text: '女二号', iconStyle: 'width:200rpx;height:200rpx;'}, {icon: cloudImgs.getString('avatar.cat')!, text: '女三号'}] as IconTextThemeType[]
	const itemsMix = [{icon: 'task', text: '计划'}, {icon: cloudImgs.getString('avatar.girl')!, text: '女一号'}, {icon: cloudImgs.getString('avatar.girl_cat')!, text: '女二号', iconStyle: 'width:200rpx;height:200rpx;'}] as IconTextThemeType[]
</script>

<style lang="scss" scoped>
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/grid-static" />
