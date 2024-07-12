# n-icon

图标。单色图标，图标齐全，可自定义

## 设计哲学 [Design]

- 图标齐全，适应性广；
- 支持自定义图标库；
- 支持图片和文字图标；
- 支持图片和文字图标外再动态包一层，方便特殊化处理；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| stop | boolean | false | false | 是否阻止冒泡 | true, false | 
| name | string | false | '' | 图标名字或者图片地址 |  | 
| type | string | false | '' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| size | string | false | '' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| hover | string | false | 'opacity' | 组件hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| boxClass | string | false | '' | 组件样式类。boxClass与boxStyle均不设置的时候，就不存在外层盒子 |  | 
| boxStyle | string | false | '' | 图标样式。boxClass与boxStyle均不设置的时候，就不存在外层盒子 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| iconClicked | 图标点击事件 | UniPointerEvent - 点击事件 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 其他内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="图标" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="主题配置" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<view class="icon-margin icon-bw">
					<n-icon name="add-bold" size="ll"></n-icon>
					<n-icon name="add-bold" type="primary" size="ll"></n-icon>
					<n-icon name="add-bold" type="success" size="ll"></n-icon>
					<n-icon name="add-bold" type="warning" size="ll"></n-icon>
					<n-icon name="add-bold" type="error" size="ll"></n-icon>
				</view>
				<view style="height: 30rpx;"></view>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="自定义图标" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<view class="icon-margin icon-bw">
					<n-icon name="love-solid" size="ll"></n-icon>
					<n-icon name="music" size="ll"></n-icon>
					<n-icon name="layers" size="ll"></n-icon>
					<n-icon name="headphone-dot" size="ll"></n-icon>
				</view>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="其它样式" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<view class="icon-margin icon-bw">
					<n-icon name="add-bold" type="warning" iconStyle="font-size:50rpx;"></n-icon>
					<n-icon name="add-bold" type="primary" size="ll" iconStyle="font-size:50rpx;"></n-icon>
					<n-icon name="add-bold" type="success" size="ll" iconStyle="font-size:50rpx; color:#FF0000;"></n-icon>
					<n-icon name="add-bold" type="warning" size="ll" iconStyle="font-size:50rpx;"></n-icon>
					<n-icon name="add-bold" type="error" size="ll" iconStyle="font-size:50rpx;"></n-icon>
				</view>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="使用图片" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<view class="icon-margin icon-bw">
					<n-icon :name="cloudImgs.getString('avatar.dog')" iconStyle="width: 120rpx; height: 120rpx; border-radius:60rpx;" mode="aspectFill"></n-icon>
					<n-icon :name="cloudImgs.getString('avatar.cat')" iconStyle="width: 160rpx; height: 160rpx;border-radius:24rpx;"></n-icon>
					<n-icon :name="cloudImgs.getString('avatar.pig')" iconStyle="width: 120rpx; height: 120rpx; border-radius:60rpx;"></n-icon>
				</view>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="图标列表" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<n-grid-static :columns="3" border="none" radius="none" :items="iconArray" iconType="error" itemHeight="160rpx" @itemClicked="itemClicked"></n-grid-static>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref, computed} from 'vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	import cloudImgs from '@/common/imgs'

	import {iconsData} from '@/nProX/n-icon/icons'
	import { IconTextThemeType } from '@/nProX/types/npro'
	
	const iconArray = computed(():IconTextThemeType[] => {
		const ics: IconTextThemeType[] = [] as IconTextThemeType[]
		(iconsData.toMap() as Map<string, string>).forEach((value: string, key: string) => {
			ics.push({
				text: key,
				icon: value
			} as IconTextThemeType)
		})
		return ics
	})
	
	function copyText(content: string){
		// #ifndef APP
		uni.setClipboardData({
			data: content,
			success: () => {
				uni.showToast({
					icon: 'none',
					title: '已复制',
				})
			}
		})
		// #endif
	}
	function itemClicked(i: number) {
		copyText(iconArray.value[i].text)
	}
</script>

<style lang="scss" scoped>
.icon {
	&-margin {
		margin-left: 32rpx;
		margin-right: 32rpx;
	}
	&-bw {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/icon" />
