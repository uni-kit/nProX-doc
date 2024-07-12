# n-swiper

自定义swiper，支持循环，支持左右凸出

## 设计哲学 [Design]

- 支持循环播放；
- 支持左右凸出内容；
- 支持多个swiper进度联动；
- 支持横竖向；
- 支持切换过程中的进度动画；
- 细节到位，全部可配；

> swiper是非常重要和常用的组件，结合swiper可以实现许多比较有意思的设计。比如双swiper联动。nProX着重于壳子组件的开发，重量级组件的开发。比如gallery画廊组件、swiper组件、自定义tabbar组件、跟手抽屉组件，等。

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| lock | boolean | false | false | 是否锁定 | true, false | 
| current | number | false | 0 | 当前位置 |  | 
| autoPlay | boolean | false | false | 是否自动播放 | true, false | 
| interval | number | false | 2000 | 自动播放周期 |  | 
| circular | boolean | false | false | 是否循环播放 | true, false | 
| supply | boolean | false | true | 循环播放时，是否自动补充内容。至少提供5个内容 | true, false | 
| vertical | boolean | false | false | 垂直模式 | true, false | 
| space | string | false | '0' | item之间间距 |  | 
| center | number | false | 0.5 | 中心点位置。0-1，swiper的宽度映射 |  | 
| scale | number | false | 0.62 | 最小scale。1表示没有scale效果 |  | 
| percent | number | false | 0.4 | 拖动多少进度自动进入下一页 |  | 
| duration | number | false | 300 | 切换动画周期 |  | 
| silence | boolean | false | false | 初始化的时候没有动画效果 | true, false | 
| linear | boolean | false | true | 是否线性 | true, false | 
| timingFunction | string | false | 'ease-in-out' | 动画函数 |  | 
| delay | number | false | 100 | mounted中延迟delay后再执行初始化操作。确保子组件完全mounted |  | 
| updateTime | number | false | 0 | 提供初始化的时机，自行确保子组件完全mounted |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| linkage | NSwiperComponentPublicInstance | false |  |  |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| change |  |  |
| start |  |  |
| move |  |  |
| end |  |  |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| getBaseWidth |  |  |
| clear | 外部直接提供数据，不依赖n-swiper-item子组件 | elMap: Map<number, UniElement> - 字典，key为number顺序，值为UniElement |
| initWithItems |  |  |
| unLock |  |  |
| toPrev |  |  |
| toNext |  |  |
| start |  |  |
| move |  |  |
| end |  |  |

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
