# n-notice-dynamic

动态提示，滑出提示

## 设计哲学 [Design]

- 可相对和绝对定位；
- 动态滑入滑出，体验良好；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| position | string | false | 'fixed' | 定位类型主题 | relative,absolute,fixed,static,sticky | 
| holdDuration | number | false | 3000 | 显示后停留时间 |  | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| boxClass | string | false | '' | 组件样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标盒子样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| close |  |  |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容区域 | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| show |  |  |
| hide |  |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="动态notice" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse" >
			<n-list-cell>
				<desc-view top="120rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="会自动隐藏" desc="支持滑出动画与位置" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPop"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="bottom" iconStyle="font-size:60rpx;" title="换个位置试试" desc="支持很多自定义特效" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPopBottom"></n-button>
					</template>
				</desc-view>
			</n-list-cell>
		</n-list>
		<n-notice-dynamic ref="nnotify"></n-notice-dynamic>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {NoticeOptionsType} from '@/nProX/types/npro'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const nnotify = ref<NNoticeDynamicComponentPublicInstance|null>(null)
	
	function toPop() {
		nnotify.value?.show?.({pos: 'top', offset: 'status', text: '欢迎使用nProX，一起大胆实现吧'} as NoticeOptionsType)
	}
	function toPopBottom() {
		nnotify.value?.show?.({pos: 'bottom', offset: 'x-32rpx', text: '优秀的设计往往是对空白的极致把控'} as NoticeOptionsType)
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/pop/notice-dynamic" />
