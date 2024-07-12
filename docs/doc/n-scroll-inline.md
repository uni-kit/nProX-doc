# n-scroll-inline

使用inline实现的横向滚动

## 设计哲学 [Design]

- 横向滚动，子组件必须inline-block；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| bgType | string | false | '' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| width | string | false | '' | 宽度 |  | 
| height | string | false | '320rpx' | 高度 |  | 
| left | string | false | '0' | scroll-left滚动位置 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | the child must use display: inline-block | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="横向滚动" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<intro-scroll @care="toCare" @close="toClose"></intro-scroll>
			</n-list-cell>
			<n-list-cell>
				<!-- 双层 -->
				<n-scroll-h width="750rpx" height="1200rpx" boxStyle="padding-top:40rpx;padding-bottom:34rpx;">
					<view>
						<view class="n-flex-row n-flex-nowrap">
							<view style="width: 32rpx;"></view>
							<view v-for="(item,idx) in items" :key="idx" :class="['is-item', idx==0?'is-first':'', (idx==items.length-1)?'is-last':'']">
								<v-care-card :image="item.avatar" :name="item.name" :cares="item.cares" :intro="item.intro" @care="toCare" @close="toClose"></v-care-card>
							</view>
							<view style="width: 32rpx;"></view>
						</view>
						<view style="height: 20rpx;"></view>
						<view class="n-flex-row n-flex-nowrap">
							<view style="width: 32rpx;"></view>
							<view v-for="(item,idx) in items" :key="idx" :class="['is-item', idx==0?'is-first':'', (idx==items.length-1)?'is-last':'']">
								<v-care-card :image="item.avatar" :name="item.name" :cares="item.cares" :intro="item.intro" @care="toCare" @close="toClose"></v-care-card>
							</view>
							<view style="width: 32rpx;"></view>
						</view>
					</view>
				</n-scroll-h>
			</n-list-cell>
		</n-list>
		<n-toast ref="ntoast"></n-toast>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import introScroll from '../components/introScroll.vue'
	import vCareCard from '@/components/vCareCard.vue'
	
	import { ToastOptionsType } from '@/nProX/types/npro'
	import { CustomAvatarItem } from '@/types'
	import cloudImgs from '@/common/imgs'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	const ntoast = ref<NToastComponentPublicInstance|null>(null)
	
	const items = [
		{
			avatar: cloudImgs.getString('avatar.girl')!,
			name: '风格化',
			cares: '28.9万粉丝',
			intro: 'scss主题配置'
		}, {
			avatar: cloudImgs.getString('avatar.girl_cat')!,
			name: '统一',
			cares: '66.6万粉丝',
			intro: '一套代码适用全端'
		}, {
			avatar: cloudImgs.getString('avatar.cat')!,
			name: '性能好',
			cares: '128.9万粉丝',
			intro: '针对优化，体验好'
		}, {
			avatar: cloudImgs.getString('avatar.dog')!,
			name: '效率高',
			cares: '328.9万粉丝',
			intro: '差异小，越用越快'
		}, {
			avatar: '/static/logo.png',
			name: '规范',
			cares: '828.9万粉丝',
			intro: '学习的绝对帮手'
		}
	] as CustomAvatarItem[]
	
	function toCare() {
		ntoast.value?.show?.({
			text: '谢谢你关注我',
			type: 'error',
			mode: 'big'
		} as ToastOptionsType)
	}
	function toClose() {
		ntoast.value?.show?.({
			text: '不可以离开我呦',
			type: 'warning',
			mode: 'big'
		} as ToastOptionsType)
	}
</script>

<style lang="scss" scoped>
	.is {
		&-item {
			border-left-width: 1px;
			border-left-color: $n-border-color;
			border-top-width: 1px;
			border-top-color: $n-border-color;
			border-bottom-width: 1px;
			border-bottom-color: $n-border-color;
			border-right-width: 0;
			overflow: hidden;
		}
		&-first {
			border-top-left-radius: 12rpx;
			border-bottom-left-radius: 12rpx;
		}
		&-last {
			border-right-width: 1px;
			border-right-color: $n-border-color;
			border-top-right-radius: 12rpx;
			border-bottom-right-radius: 12rpx;
		}
	}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/scroll/scroll-h" />
