# n-collapse

收展组件，支持手风琴效果

## 设计哲学 [Design]

- 可单独使用，不限制展开个数；
- 可联动使用，一次只能展开一个；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| value | string | false | '' | 该内容的唯一值，手风琴效果时必须设置 |  | 
| current | string | false | '' | 当前打开内容的唯一值。手风琴效果就是通过current和value来控制关闭和打开 |  | 
| show | boolean | false | false | 是否打开 | true, false | 
| duration | number | false | 300 | 打开/关闭的动画周期 |  | 
| timingFunction | string | false | 'ease' | 打开/关闭的动画函数 |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| auto | boolean | false | false | 点击头部内容时，是否自动打开/关闭 | true, false | 
| boxStyle | string | false | '' | 组件样式 |  | 
| headStyle | string | false | '' | 头部样式 |  | 
| bodyStyle | string | false | '' | 主体内容样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| headClass | string | false | '' | 头部样式类 |  | 
| bodyClass | string | false | '' | 主体样式类 |  | 
| icon | string | false | '' | 关闭图标 |  | 
| iconType | string | false | 'third' | 关闭图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'base' | 关闭图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| delay | number | false | 0 | onMounted之后延迟delay毫秒之后开始初始化打开/收起状态 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| toggle | 切换打开/收起状态 | boolean - 点击未变化前，内容处于的状态 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| head | 头部内容 | No |  |
| default | 主体内容区域 | No |  |
| extra | 额外补充内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="n-collapse" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<view style="height: 32rpx;"></view>
				<n-collapse :show="boxVisible" bgType="inverse" icon="arrow-down-bold" iconType="inverse" boxStyle="margin-left:32rpx;width:686rpx;" @toggle="onBoxToggle">
					<template v-slot:head>
						<view class="n-flex-row n-align-center n-flex-nowrap n-height-l n-bg-error" style="padding-left: 32rpx;padding-right: 32rpx;">
							<n-icon name="add-bold" type="inverse"></n-icon>
							<text class="n-color-inverse n-size-l n-flex-1" style="margin-left: 16rpx;">我的百宝箱</text>
						</view>
					</template>
					<template>
						<view class="n-flex-column n-justify-center n-align-center n-bg-error" style="height: 320rpx;width: 686rpx;">
							<text class="n-color-inverse n-size-ll">里面东西太多，以至于什么也看不到</text>
						</view>
					</template>
				</n-collapse>
				<view style="height: 32rpx;"></view>
				<n-collapse :auto="true" boxStyle="margin-left:32rpx;width:686rpx;" icon="arrow-down-bold" iconType="inverse" @toggle="onToggle">
					<template v-slot:head>
						<view class="n-flex-row n-align-center n-flex-nowrap n-height-l n-bg-success" style="padding-left: 32rpx;padding-right: 32rpx;">
							<n-icon name="add-bold" type="inverse"></n-icon>
							<text class="n-color-inverse n-size-l n-flex-1" style="margin-left: 16rpx;">我的超级秘密</text>
						</view>
					</template>
					<template>
						<view class="n-flex-column n-justify-center n-align-center n-bg-success" style="height: 320rpx;width: 686rpx;">
							<text class="n-color-inverse n-size-ll">好像里面啥也没有</text>
						</view>
					</template>
				</n-collapse>
				<view style="height: 20rpx;"></view>
				<text class="n-color-text n-size-base" style="margin-left: 20rpx;">手风琴效果</text>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<n-collapse :value="item" :current="current" bgType="inverse" icon="arrow-down-bold" iconType="inverse" boxStyle="margin-left:32rpx;width:686rpx;" @toggle="(e: boolean) => onToggleCollapse(e, item)">
					<template v-slot:head>
						<view class="n-flex-row n-align-center n-flex-nowrap n-height-l n-bg-error" style="padding-left: 32rpx;padding-right: 32rpx;">
							<n-icon name="add-bold" type="inverse"></n-icon>
							<text class="n-color-inverse n-size-l n-flex-1" style="margin-left: 16rpx;">我的百宝箱{{item}}</text>
						</view>
					</template>
					<template>
						<view class="n-flex-column n-justify-center n-align-center n-bg-error" style="height: 320rpx;width: 686rpx;">
							<text class="n-color-inverse n-size-ll">里面东西太多，以至于什么也看不到</text>
						</view>
					</template>
				</n-collapse>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref, onMounted} from 'vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const boxVisible = ref(false)
	const items = ref(['1','2','3','4','5','6'])
	const current = ref('1')
	
	function onBoxToggle(val: boolean) {
		boxVisible.value = !val
	}
	function onToggle(val: boolean) {
	}
	function onToggleCollapse(open: boolean, val: string) {
		if (open && current.value == val) {
			current.value = ''
		} else {
			current.value = val
		}
	}
	
	onMounted(() => {
		setTimeout(() => {
			boxVisible.value = true
		}, 2000)
	})
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/collapse" />
