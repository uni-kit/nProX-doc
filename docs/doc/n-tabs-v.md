# n-tabs-v

竖向滚动切换tabs

## 设计哲学 [Design]

- 自动居中；
- 指示器动画；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| items | ItemBadgeType[] | true |  | 内容数组 |  | 
| value | number | false | 0 | 当前位置 |  | 
| justify | string | false | 'flex-start' | justify-content的值。内容明确不足以滚动的时候，可以设置排布方式 |  | 
| scrollSize | string | false | '750rpx' | 滚动高度 |  | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| activeTextSize | string | false | 'base' | 当前文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| bgType | string | false | 'inverse' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| activeTextType | string | false | 'primary' | 当前文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| height | string | false | '80rpx' | 内容项/单个tab高度 |  | 
| width | string | false | '120rpx' | 组件宽度 |  | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| top | string | false | '0' | 顶部定位 |  | 
| bottom | string | false | '0' | 底部定位 |  | 
| animated | boolean | false | true | 切换是否具备动画效果 | true, false | 
| hasIndicator | boolean | false | true | 是否有指示内容 | true, false | 
| indicatorType | string | false | 'primary' | 指示器背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| indicatorWidth | string | false | '5rpx' | 指示器宽度 |  | 
| indicatorHeight | string | false | '40rpx' | 指示器高度 |  | 
| indicatorRadius | string | false | '4rpx' | 指示器圆角 |  | 
| indicatorLeft | string | false | '6rpx' | 指示器与左侧的距离 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| activeTextStyle | string | false | '' | 当前文字样式 |  | 
| itemStyle | string | false | '' | tab项样式 |  | 
| activeItemStyle | string | false | '' | 当前tab项样式 |  | 
| indicatorStyle | string | false | '' | 指示内容样式 |  | 
| updateTime | number | false | 0 | 刷新时机。改变会引起组件刷新 |  | 
| delay | number | false | -1 | onMounted中延迟delay再进行初始化 |  | 
| updateDelay | number | false | -1 | tabs改变后延迟updateDelay再进行初始化 |  | 
| hoverTop | boolean | false | false | 指示内容是否处于顶部 | true, false | 
| boxClass | string | false | '' | 组件样式类 |  | 
| tabsClass | string | false | '' | tabs盒子样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| activeTextClass | string | false | '' | 当前文字样式类 |  | 
| itemClass | string | false | '' | tab项样式类 |  | 
| activeItemClass | string | false | '' | 当前tab项样式类 |  | 
| indicatorClass | string | false | '' | 指示内容样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| change | 点击tab时的通知 | number - 点击的tab位置索引 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| indicator | 自定义指示内容 | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| toCurrentIndex | 滚动到某个位置 | index: number - 位置索引 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="tabs-v" @leftAction="navLeftAction"></n-navbar>
		<view class="n-flex-1">
			<view style="height: 40rpx;"></view>
			<view class="n-flex-row n-justify-between" style="margin: 0 32rpx;">
				<n-tabs-v :value="currentV" :items="tabs1" :delay="50" :updateTime="upTime" bgType="inverse" width="90rpx" space="0"
					scrollSize="400rpx" indicatorType="error" itemStyle="padding-left:18rpx;"
					@change="toChangeV"></n-tabs-v>
				<n-tabs-v :value="currentV" :items="tabs1" :delay="50" :updateTime="upTime" bgType="inverse" width="90rpx" space="0"
					justify="center" scrollSize="400rpx" indicatorType="error" itemStyle="padding-left:18rpx;"
					@change="toChangeV"></n-tabs-v>
				<n-tabs-v :value="currentV" :items="tabs1" :delay="50" :updateTime="upTime" bgType="inverse" width="90rpx" space="0"
					justify="space-between" scrollSize="400rpx" indicatorType="error"
					itemStyle="padding-left:18rpx;" @change="toChangeV"></n-tabs-v>
				<n-tabs-v :value="currentV3" :items="tabs3" :delay="50" :updateTime="upTime" bgType="inverse" width="90rpx" space="0"
					activeType="error" indicatorType="error" scrollSize="400rpx" itemStyle="padding-left:18rpx;"
					@change="toChangeV3"></n-tabs-v>
				<n-tabs-v :value="currentV4" :items="tabs4" :delay="50" :updateTime="upTime" bgType="inverse" width="180rpx" space="0"
					activeType="warning" indicatorType="warning" scrollSize="400rpx" itemStyle="padding-left:18rpx;"
					@change="toChangeV4"></n-tabs-v>
			</view>
			<view style="height: 40rpx;"></view>
			<n-cell bgType="inverse" border="bottom" title="左右联动" value="tabs-v左右联动" indicator="arrow-right-bold"
				@cellClicked="toPage"></n-cell>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import {onReady} from '@dcloudio/uni-app'
	import { ItemBadgeType } from '@/nProX/types/npro'
	import { useNav } from '@/service/useNav'
	const { leftIcons, navLeftAction } = useNav()

	const tabs1 = [
		{ label: '我的', value: '1' },
		{ label: '你的', value: '2' },
		{ label: 'Ta的', value: '3' }
	] as ItemBadgeType[]
	const tabs3 = [
		{ label: '一起', value: '1' },
		{ label: '努力', value: '2' },
		{ label: '加油', value: '3' },
		{ label: '奋斗', value: '4' },
		{ label: '争取', value: '5' },
		{ label: '美好', value: '6' },
		{ label: '未来', value: '7' },
		{ label: '共建', value: '8' },
		{ label: '幸福', value: '9' },
		{ label: '家园', value: '10' },
		{ label: '享受', value: '11' },
		{ label: '快乐', value: '12' },
		{ label: '人生', value: '13' }
	] as ItemBadgeType[]
	const tabs4 = [
		{ label: '我们', value: '1' },
		{ label: '一起', value: '2' },
		{ label: '把家还', value: '3' },
		{ label: '好吗', value: '4' },
		{ label: '可不可以', value: '5' },
		{ label: '要不要得', value: '6' },
		{ label: '好的', value: '7' },
		{ label: '收到', value: '8' },
		{ label: '同意', value: '9' }
	] as ItemBadgeType[]
	const upTime = ref(0)  // 在合适的时机通知刷新
	const currentV = ref(0)
	const currentV3 = ref(0)
	const currentV4 = ref(0)

	function toChangeV(i : number) {
		currentV.value = i
	}
	function toChangeV3(i : number) {
		currentV3.value = i
	}
	function toChangeV4(i : number) {
		currentV4.value = i
	}
	function toPage() {
		uni.navigateTo({
			url: '/pages/nav/tabs/v_scroll_y'
		})
	}
	
	onReady(() => {
		upTime.value = 1
	})
</script>

<style lang="scss" scoped>
</style>
```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/nav/tabs-v" />
