# n-rate

星级评级

## 设计哲学 [Design]

- 总星可控；
- 图标可控；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| total | number | false | 5 | 总图标数量 |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| iconType | string | false | 'third' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'base' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| activeIconType | string | false | 'error' | 图标的高亮颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| icon | string | false | 'star-solid' | 图标 |  | 
| activeIcon | string | false | 'star-solid' | 点亮的图标 |  | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| activeIconStyle | string | false | '' | 点亮图标的样式 |  | 
| activeIconBoxStyle | string | false | '' | 点亮图标的外层样式 |  | 
| space | string | false | '12rpx' | 图标之间的间距 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| activeIconClass | string | false | '' | 点亮图标的样式类 |  | 
| activeIconBoxClass | string | false | '' | 点亮图标的外层样式类 |  | 

## 详情示范 [Detail Demo]



```vue
<template>
	<view>
		<n-navbar :lefts="leftIcons" title="rate" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="评分组件" desc="支持数量以及图标/颜色/尺寸" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<view class="n-flex-column n-align-center">
					<n-rate v-model="rate1 as number"></n-rate>
					<view style="height: 32rpx;"></view>
					<n-rate v-model="rate2 as number" :total="7" icon="love" activeIcon="love-solid"></n-rate>
					<view style="height: 32rpx;"></view>
					<n-rate v-model="rate3 as number" iconType="third" activeIconType="success"></n-rate>
				</view>
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="多种效果" desc="还可以适配不同的效果" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const rate1 = ref(2)
	const rate2 = ref(4)
	const rate3 = ref(5)
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/rate" />
