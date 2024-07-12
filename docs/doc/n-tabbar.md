# n-tabbar

自定义tabbar

## 设计哲学 [Design]

- 凹凸模式都支持；
- 支持badge；
- 支持指示器；
- 细节到位，全部可配；

自定义tabbar可以灵活实现不同的业务需求，并且在层级上也可控，对于x而言，既然都是原生开发，使用自定义tabbar是个不错的选择。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| current | number | false | 0 | 当前位置 |  | 
| tabs | TabbarItemType[] | true |  | tabs |  | 
| opacity | number | false | 1 | 组件透明度 |  | 
| tabStyle | TabbarTabStyleType | false | ():TabbarTabStyleType => {<br>        return {<br>            iconStyle: 'font-size: 20px;color: #333232;', selectedIconStyle: 'font-size: 20px;color: #01A9F0;', titleStyle: '', selectedTitleStyle: '', boxStyle: '', tabsStyle: '', itemStyle: '',<br>            height: 50, badgeStyle: '', badgeTextStyle: '', dotStyle: '', iconBoxWidth: '46px', imageStyle: '', imageBoxStyle: '', imageWidthXBar: false<br>        } as TabbarTabStyleType<br>    } | tabs的样式配置 |  | 
| duration | number | false | 300 | 动画周期 |  | 
| timingFunction | string | false | 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' | 动画函数 |  | 
| top | string | false | '0' | 顶部定位 |  | 
| isSeize | boolean | false | true | 是否占位 | true, false | 
| considerXBar | boolean | false | true | 是否考虑底部安全区 | true, false | 
| xBarBgType | string | false | 'inverse' | 底部安全区的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| xBarStyle | string | false | '' | 底部安全区的样式 |  | 
| hasIndicator | boolean | false | false | 是否包含指示内容 | true, false | 
| indicatorStyle | string | false | '' | 指示内容的样式 |  | 
| indicatorBoxStyle | string | false | '' | 指示内容的外层样式 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| tabClicked | tab项被点击时的通知 | number - 点击位置 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |
| bg | tabs bg | No |  |
| tabs | tabs | No |  |
| indicator | 指示内容区域 | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| prev | 上一页 |  |
| next | 下一页 |  |
| setPage | 跳到某页 | page: number - 跳转到的页码, animated: boolean - 是否带跳转动画 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-bg-inverse n-position-relative n-flex-1">
		<image :src="cloudImgs.getString('cover.house_white')" mode="aspectFill" class="n-position-absolute" style="left: 0;top: 0;width: 100%;height: 760rpx;"></image>
		<n-scroll bgType="xxx" type="nested">
			<nested-scroll-header>
				<view style="height: 360rpx;"></view>
			</nested-scroll-header>
			<nested-scroll-body style="height: 100%;">
				<view class="n-flex-1">
					<view class="ti-radius">
						<n-height bgType="none" height="status-nav"></n-height>
						<view class="ti-radius-body"></view>
						<view class="ti-radius-icon">
							<n-icon name="pin" type="text" size="ll"></n-icon>
						</view>
					</view>
					<tabbar-list @page="toTabbar"></tabbar-list>
				</view>
			</nested-scroll-body>
		</n-scroll>
		<n-navbar :lefts="leftIcons" :fixed="true" :isSeize="false" bgType="none" itemIconType="inverse" @leftAction="navLeftAction"></n-navbar>
	</view>
</template>

<script setup lang="ts">
	import cloudImgs from '@/common/imgs'
	
	import tabbarList from './components/tabbarList.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	function toTabbar(val: string) {
		uni.navigateTo({
			url: '/pages/nav/tabbars/' + val
		})
	}
</script>

<style lang="scss">
	.ti {
		&-radius {
			position: relative;
			
			&-body {
				background-color: #FFFFFF;
				height: 60rpx;
				border-top-left-radius: 60rpx;
				border-top-right-radius: 60rpx;
			}
			&-icon {
				position: absolute;
				right: 60rpx;
				bottom: 30rpx;
				width: 60rpx;
				height: 60rpx;
				border-radius: 30rpx;
				justify-content: center;
				align-items: center;
				background-color: $n-text-color-forth;
			}
		}
	}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/nav/tabbar" />
