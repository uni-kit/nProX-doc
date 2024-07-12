# n-rolling

滚动，跑马灯，滚动消息

## 设计哲学 [Design]

- 跑马灯；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| times | number | false | 0 | 循环次数。0表示无限循环 |  | 
| auto | boolean | false | true | 是否自动滚动 | true, false | 
| text | string | false | '' | 文字内容 |  | 
| textType | string | false | 'error' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| textStyle | string | false | '' | 文字样式 |  | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| duration | number | false | 20000 | 滚动周期 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| start | 手动开启滚动 |  |
| stop | 关闭滚动 |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="滚动" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse">
			<n-list-cell>
				<desc-view top="120rpx" icon="headphone-dot" iconStyle="font-size:100rpx;" title="性能超好的滚动" desc="使用animate模块完成,更多动画正在对齐github上一些flutter框架,让uniapp也能整更多高大上的应用" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;"></desc-view>
				<view class="n-flex-row n-align-center" style="margin-left:30rpx;">
					<n-icon name="report" type="error" size="ll" boxStyle="margin-right:12rpx;"></n-icon>
					<n-rolling ref="rolling" boxStyle="width:690rpx;" text="nProX以超高的规范与定制能力主力uniapp实现更多高大上的应用开发.全部组件支持uvue." textType="success"></n-rolling>
				</view>
				<view style="height: 32rpx;"></view>
				<n-rolling :duration="30000" :times="3">
					<view class="n-flex-row n-flex-nowrap">
						<text v-for="(item,idx) in hints" :key="idx" class="n-color-third n-size-base" style="margin-right: 120rpx;">{{item}}</text>
					</view>
				</n-rolling>
				<view style="height: 32rpx;"></view>
				<n-rolling v-for="(item,index) in hints" :key="index" :ref="(el?:NRollingComponentPublicInstance)=>setRollRef(el,index)" :duration="6000" :text="item" textType="success" :auto="false"></n-rolling>
				<view style="margin-left: 30rpx;margin-top: 32rpx;margin-bottom: 32rpx;">
					<text class="n-size-base n-color-second">竖向切换</text>
				</view>
				<view class="n-bg-page n-flex-row n-align-center n-flex-nowrap" style="width: 690rpx;height: 30px;border-radius: 20px;padding-left: 16rpx;padding-right: 16rpx;margin-left:30rpx;">
					<n-icon name="search" type="error" size="ll"></n-icon>
					<swiper :circular="true" :vertical="true" :autoplay="true" :disable-touch="true" class="n-flex-1" style="height: 30px;margin-left:16rpx;">
						<swiper-item class="n-flex-row n-align-center" v-for="(item,idx) in hints" :key="idx">
							<text class="n-color-third n-size-base">{{item}}</text>
						</swiper-item>
					</swiper>
					<n-icon name="camera" type="third" size="ll"></n-icon>
					<view style="width: 0.5px;height: 12px;background-color: #999696;margin-left: 12rpx;margin-right: 12rpx;"></view>
					<n-icon name="help" type="error" size="ll"></n-icon>
				</view>
				<view style="margin-left: 30rpx;margin-top: 32rpx;margin-bottom: 32rpx;">
					<text class="n-size-base n-color-second">横向切换</text>
				</view>
				<view class="n-bg-page n-flex-row n-align-center n-flex-nowrap" style="width: 690rpx;height: 30px;border-radius: 20px;padding-left: 16rpx;padding-right: 16rpx;margin-left:30rpx;">
					<n-icon name="search" type="error" size="ll"></n-icon>
					<swiper :circular="true" :autoplay="true" :disable-touch="true" class="n-flex-1" style="height: 30px;margin-left:16rpx;">
						<swiper-item class="n-flex-row n-align-center" v-for="(item,idx) in hints" :key="idx">
							<text class="n-color-third n-size-base">{{item}}</text>
						</swiper-item>
					</swiper>
					<n-icon name="camera" type="third" size="ll"></n-icon>
					<view style="width: 0.5px;height: 12px;background-color: #999696;margin-left: 12rpx;margin-right: 12rpx;"></view>
					<n-icon name="help" type="error" size="ll"></n-icon>
				</view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const hints = ref<string[]>([
		'高质量组件库nPro', '动画库支持', '主题配置，一键换肤', '跟手抽屉，实现各种功能', '优质弹窗组件'
	])
	const rolling = ref<NRollingComponentPublicInstance|null>(null)
	
	const rollRefs = new Map<string, NRollingComponentPublicInstance>()
	function setRollRef(el?: NRollingComponentPublicInstance, idx: number) {
		if (el != null) {
			rollRefs.set('roll'+idx, el!)
		}
	}
	
	onLoad((_:OnLoadOptions) => {
		setTimeout(()=>{
			for (let i = 0; i < hints.value.length; i++) {
				const ref = rollRefs.get('roll'+i)
				setTimeout(()=>{
					ref?.start?.()
				}, i*200)
			}
		}, 500)
	})
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/box/rolling" />
