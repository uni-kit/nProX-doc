# n-navbar

自定义导航栏。支持左右侧多item

## 设计哲学 [Design]

- 左中右三段式设计；
- 左侧支持多item；
- 中间title支持最右侧带图标；
- 右侧支持多item；
- 细节到位，全部可配；

自定义导航栏在现代应用中是非常常用的。

- 层级可控；
- 样式/内容可控，灵活度高；
- 开发统一；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| lefts | NavItemType[] | false |  | 左侧按钮组 |  | 
| title | string | false | '' | 标题文字 |  | 
| icon | string | false | '' | 标题图标 |  | 
| rights | NavItemType[] | false |  | 右侧按钮组 |  | 
| bgType | string | false | 'nav' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| titleType | string | false | 'nav-title' | 标题文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| titleSize | string | false | 'nav-title' | 标题文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| titleStyle | string | false | '' | 标题文字样式 |  | 
| iconType | string | false | 'nav-title' | 标题图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'nav-title' | 标题图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 标题图标样式 |  | 
| itemIconType | string | false | 'nav-icon' | 按钮图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| itemIconSize | string | false | 'nav-icon' | 按钮图标尺寸出题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| itemIconStyle | string | false | '' | 按钮图标样式 |  | 
| itemTextType | string | false | 'nav-item' | 按钮文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| itemTextSize | string | false | 'nav-item' | 按钮文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| itemTextStyle | string | false | '' | 按钮文字样式 |  | 
| height | number | false | 44 | 导航栏高度。px |  | 
| includeStatus | boolean | false | true | 是否包含状态栏 | true, false | 
| isSeize | boolean | false | true | 是否存在占位 | true, false | 
| fixed | boolean | false | true | 是否fixed定位固定 | true, false | 
| zindex | string | false | '' | z-index便捷设置 |  | 
| enableBack | boolean | false | false | 是否左侧第一个按钮默认返回上一页 | true, false | 
| leftStyle | string | false | '' | 左侧区域样式 |  | 
| leftBgType | string | false | '' | 左侧区域背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| leftItemStyle | string | false | '' | 左侧按钮样式 |  | 
| rightStyle | string | false | '' | 右侧区域样式 |  | 
| rightBgType | string | false | '' | 右侧区域背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| rightItemStyle | string | false | '' | 右侧按钮样式 |  | 
| centerStyle | string | false | '' | 中间标题区域样式 |  | 
| statusNavStyle | string | false | '' | 状态栏+导航栏整体样式 |  | 
| navStyle | string | false | '' | 导航栏样式 |  | 
| badgeConfig | BadgeType | false |  | 按钮的badge设置 |  | 
| titleClass | string | false | '' | 标题文字样式类 |  | 
| iconClass | string | false | '' | 标题图标样式类 |  | 
| itemIconClass | string | false | '' | 按钮图标样式类 |  | 
| itemTextClass | string | false | '' | 按钮文字样式类 |  | 
| leftClass | string | false | '' | 左侧区域样式类 |  | 
| leftItemClass | string | false | '' | 左侧按钮项样式类 |  | 
| rightClass | string | false | '' | 右侧区域样式类 |  | 
| rightItemClass | string | false | '' | 右侧按钮项样式类 |  | 
| centerClass | string | false | '' | 中间区域样式类 |  | 
| statusNavClass | string | false | '' | 状态栏+导航栏样式类 |  | 
| navClass | string | false | '' | 导航栏样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| leftAction | 左侧按钮点击事件 | number - 左侧按钮位置。从左到右计数 |
| centerAction | 中间标题点击事件 |  |
| rightAction | 右侧按钮点击事件 | number - 右侧按钮位置。从左到右计数 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| left | 左侧按钮区域 | No |  |
| center | 中间标题区域 | No |  |
| right | 右侧按钮区域 | No |  |
| extra | 补充内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<image :src="cloudImgs.getString('cover.sea')" :style="'position: fixed;left: 0;top: 0;width:750rpx;height:'+statusNavH+'px;'" mode="aspectFill"></image>
		<n-navbar bgType="none" :lefts="leftIcons" title="导航栏" itemIconType="inverse" titleType="inverse" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" bgType="error" itemIconType="inverse" titleType="inverse" :lefts="lefts" title="导航栏设置背景"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" title="item带图标与文字"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" :rights="rights1" title="右侧按钮文字"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" :rights="rights4" title="带角标"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" :rights="rights2" title="右侧按钮图标"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" :rights="rights3" title="右侧按钮图标文字"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts2" title="左侧多个item" leftItemStyle="width:46rpx;"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts2" :rights="rights" title="左右两侧多个item" leftItemStyle="width:46rpx;" rightItemStyle="width:46rpx;"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts3" title="特殊样式" leftItemStyle="width:46rpx;"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts4" title="按钮式" leftStyle="width:300rpx;" centerStyle="width:150rpx;" rightStyle="width:300rpx;" leftItemStyle="width:46rpx;"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts5" title="一体式" leftBgType="primary" leftStyle="margin-left:24rpx;padding-left:26rpx;padding-right:26rpx;width:140rpx;border-radius:20px;height:30px;justify-content:space-between;" rightStyle="width:164rpx;" centerStyle="width:422rpx;"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" title="标题带图标" icon="arrow-down"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" title="很长的标题截断需要您自行设置" titleStyle="max-width:300rpx;"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" title="很长的标题截断需要您自行设置" icon="arrow-down" titleStyle="max-width:300rpx;"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts" leftStyle="width:72rpx;" centerStyle="width:478rpx;justify-content:flex-start;">
					<template v-slot:center>
						<view class="n-flex-row n-align-center">
							<image class="nav-nav-img n-border-light" mode="aspectFill" :src="cloudImgs.getString('avatar.caiman')"></image>
							<text class="n-color-nav-title n-size-nav-title">山有木兮木有枝，心悦君兮君不知</text>
						</view>
					</template>
				</n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-navbar :fixed="false" :includeStatus="false" :lefts="lefts1" title="渐变背景色" bgType="none" boxStyle="background-image: linear-gradient(to right, #FFF000, #F8F8F8);"></n-navbar>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<n-height height="x"></n-height>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	import {getHeight} from '@/nProX/utils/system'
	import { NavItemType } from '@/nProX/types/npro'

	import cloudImgs from '@/common/imgs'
	const statusNavH = getHeight('status-nav')
	
	const lefts = [{icon: 'arrow-left-bold'}] as NavItemType[]
	const rights = [{icon: 'add-bold', iconSize: "ll", iconStyle: 'color:#FF6699;'}, {icon: 'close-bold', iconSize: "ll", iconType:'error'}] as NavItemType[]
	const lefts1 = [{icon: 'arrow-left-bold', text: '返回', textStyle: 'margin-left:10rpx;'}] as NavItemType[]
	const rights1 = [{text: '发布', bgType: 'primary', textType: 'inverse', style: 'width:56px;height:24px;border-radius:20px;justify-content:center;'}] as NavItemType[]
	const lefts2 = [{icon: 'arrow-left-bold'}, {icon: 'home-solid'}] as NavItemType[]
	const rights2 = [{icon: 'top', iconType: 'inverse', bgType: 'primary', style: 'width: 52px;height:24px;border-radius:20px;justify-content:center;'}] as NavItemType[]
	const lefts3 = [{icon: 'arrow-left-bold'}, {icon: 'home-solid', iconType: 'inverse', bgType: 'primary', style: 'width: 24px;height:24px;border-radius:20px;justify-content:center;'}] as NavItemType[]
	const rights3 = [{icon: 'top', text: '发布', iconType: 'inverse', textType: 'inverse', textStyle: 'margin-left:6px;', bgType: 'primary', style: 'justify-content:center;border-radius:20px;height:30px;width:72px;'}] as NavItemType[]
	const lefts4 = [{icon: 'arrow-left-bold'}, {icon: 'home-solid', text: '首页', iconType: 'inverse', textType: 'inverse', textStyle: 'margin-left:6px;', bgType: 'primary', style: 'justify-content:center;border-radius:20px;height:30px;width:72px;'}] as NavItemType[]
	const rights4 = [{text: '发布', bgType: 'primary', textType: 'inverse', style: 'width:56px;height:24px;border-radius:20px;justify-content:center;overflow:visible;', badge: {bgType: 'error',size: '18rpx',text: '',boxStyle: 'position:absolute;top:0;right:0;'}}] as NavItemType[]
	const lefts5 = [{icon: 'arrow-left-bold', iconType: 'inverse'}, {icon: 'home-solid', iconType: 'inverse'}] as NavItemType[]
</script>

<style lang="scss">
	.nav {
		&-nav {
			&-img {
				width: 30px;
				height: 30px;
				border-radius: 30px;
			}
		}
	}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/nav/navbar" />
