# n-swiper-item

自定义swiper，支持循环，支持左右凸出

## 设计哲学 [Design]



## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| boxStyle | string | false | '' |  |  | 
| boxClass | string | false | '' |  |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="swiper" @leftAction="navLeftAction"></n-navbar>
		<n-list :bounces="false">
			<n-list-cell>
				<text class="n-color-text n-size-ll n-lh-ll n-m-ll">正常模式:</text>
				<n-swiper boxStyle="height: 420rpx;">
					<n-swiper-item v-for="(item,idx) in items" :key="idx" boxClass="n-width-100p">
						<view class="n-flex-row n-align-center n-justify-center n-bg-error" style="height: 420rpx;">
							<text class="n-weight-7 n-size-ll n-color-inverse">{{item}}</text>
						</view>
					</n-swiper-item>
				</n-swiper>
				<text class="n-color-text n-size-ll n-lh-ll n-m-ll">露出模式:</text>
				<n-swiper boxStyle="height: 420rpx;" space="-24rpx">
					<n-swiper-item v-for="(item,idx) in items" :key="idx" boxStyle="width:68%;">
						<view class="n-flex-row n-align-center n-justify-center n-bg-warning" style="height: 420rpx;">
							<text class="n-weight-7 n-size-ll n-color-inverse">{{item}}</text>
						</view>
					</n-swiper-item>
				</n-swiper>
				<text class="n-color-text n-size-ll n-lh-ll n-m-ll">循环模式:</text>
				<n-swiper :circular="true" :supply="true" space="-24rpx" boxStyle="height: 420rpx;">
					<n-swiper-item v-for="(item,idx) in itemsCircle" :key="idx" boxStyle="width:68%;">
						<view class="n-flex-row n-align-center n-justify-center n-bg-warning" style="height: 420rpx;">
							<text class="n-weight-7 n-size-ll n-color-inverse">{{item}}</text>
						</view>
					</n-swiper-item>
				</n-swiper>
			</n-list-cell>
			<n-list-cell>
				<text class="n-color-text n-size-ll n-lh-ll n-m-ll">自动模式:</text>
				<n-swiper :autoPlay="true" :circular="true" :supply="true" space="-24rpx" boxStyle="height: 420rpx;">
					<n-swiper-item v-for="(item,idx) in itemsCircle" :key="idx" boxStyle="width:68%;">
						<view class="n-flex-row n-align-center n-justify-center n-bg-warning" style="height: 420rpx;">
							<text class="n-weight-7 n-size-ll n-color-inverse">{{item}}</text>
						</view>
					</n-swiper-item>
				</n-swiper>
				<n-height height="x"></n-height>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const items = ref([1, 2, 3, 4])
	const itemsCircle = ref([1, 2, 3, 4, 5, 6])
	const asyncItems = ref<number[]>([])
	const updateTime = ref(0)
	const current = ref(1)
	const actions = ref(['Prev', '0', '1', '2', '3', 'Next'])
	const dyItems = ref([1, 2, 3])
	
	function toGetAsyncData() {
		setTimeout(()=>{
			asyncItems.value = [1, 2, 3, 4, 5, 6]
			setTimeout(()=>{
				updateTime.value = Date.now()
			}, 200)
		}, 2000)
	}
	
	onLoad((_: OnLoadOptions) => {
		toGetAsyncData()
	})
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/box/swiper" />
