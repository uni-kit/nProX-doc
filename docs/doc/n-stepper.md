# n-stepper

步进器

## 设计哲学 [Design]

- 步进器，支持小数点；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| min | number | false | 1 | 最小值 |  | 
| max | number | false | 100 | 最大值 |  | 
| step | number | false | 1 | 步进值 |  | 
| disabled | boolean | false | false | 是否禁用 | true, false | 
| readOnly | boolean | false | true | 是否只读 | true, false | 
| minus | string | false | 'minus-bold' | 左侧“-”图标 |  | 
| plus | string | false | 'add-bold' | 右侧“+”图标 |  | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | 's' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| minusBgType | string | false | '' | 左侧图标背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| plusBgType | string | false | '' | 右侧图标背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| hover | string | false | 'opacity' | hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| valueType | string | false | 'text' | 输入值的颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| valueSize | string | false | 'l' | 输入的尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| valueBorder | string | false | '' | 输入框的边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| valueRadius | string | false | '' | 输入框的圆角主题 | ss,s,base,l,ll,loading,none | 
| valueStyle | string | false | '' | 输入框的样式 |  | 
| valueDisabledStyle | string | false | '' | 禁用时输入框的样式 |  | 
| minusType | string | false | 'text' | 左侧图标的颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| minusStyle | string | false | '' | 左侧图标的样式 |  | 
| minusDisabledStyle | string | false | '' | 左侧图标禁用时的样式 |  | 
| minusBoxStyle | string | false | '' | 左侧图标盒子的样式 |  | 
| minusBoxDisabledStyle | string | false | '' | 左侧图标盒子禁用时的样式 |  | 
| plusType | string | false | 'text' | 右侧图标的颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| plusStyle | string | false | '' | 右侧图标的样式 |  | 
| plusDisabledStyle | string | false | '' | 右侧图标禁用时的样式 |  | 
| plusBoxStyle | string | false | '' | 右侧图标盒子的样式 |  | 
| plusBoxDisabledStyle | string | false | '' | 右侧图标盒子禁用时的样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| valueClass | string | false | '' | 输入框的样式类 |  | 
| valueDisabledClass | string | false | '' | 输入框禁用时的样式类 |  | 
| minusClass | string | false | '' | 左侧图标的样式类 |  | 
| minusDisabledClass | string | false | '' | 左侧图标禁用时的样式类 |  | 
| minusBoxClass | string | false | '' | 左侧图标盒子的样式类 |  | 
| minusBoxDisabledClass | string | false | '' | 左侧图标盒子禁用时的样式类 |  | 
| plusClass | string | false | '' | 右侧图标的样式类 |  | 
| plusDisabledClass | string | false | '' | 右侧图标禁用时的样式类 |  | 
| plusBoxClass | string | false | '' | 右侧图标盒子的样式类 |  | 
| plusBoxDisabledClass | string | false | '' | 右侧图标盒子禁用时的样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| less | 小于最小值时的通知 | number - 值 |
| over | 大于最大值时的通知 | number - 值 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="计步器" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="默认的计步器" desc="可以自定义实现各种不同样式" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<view class="n-flex-row n-justify-center">
					<n-stepper v-model="state.value1 as number"></n-stepper>
				</view>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 24rpx;"></view>
				<view class="n-flex-row n-justify-center">
					<n-stepper v-model="state.value5 as number" :readOnly="false" minusType="primary" plusType="primary" :min="0" :step="0.3" :max="3.5" radius="none" :minusBoxStyle="minusBoxStyle" :plusBoxStyle="plusBoxStyle" :valueStyle="valueStyle"></n-stepper>
				</view>
				<view style="height: 24rpx;"></view>
				<view class="n-flex-row n-justify-center">
					<n-stepper v-model="state.value2 as number" minusType="primary" plusType="primary" :min="0" radius="none" :minusBoxStyle="minusBoxStyle" :plusBoxStyle="plusBoxStyle" :valueStyle="valueStyle"></n-stepper>
				</view>
				<view style="height: 24rpx;"></view>
				<view class="n-flex-row n-justify-center">
					<n-stepper v-model="state.value3 as number" minusBgType="error" minusType="inverse" plusType="inverse" plusBgType="error" :step="2" :min="0" :max="10" radius="base"></n-stepper>
				</view>
				<view style="height: 24rpx;"></view>
				<view class="n-flex-row n-justify-center">
					<n-stepper v-model="state.value4 as number" minusBgType="error" minusType="inverse" plusType="inverse" plusBgType="error" :step="0.3" :min="0.3" :max="2.3" radius="base"></n-stepper>
				</view>
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="充分的自定义能力" desc="具体能力请看文档,示范以简洁易懂为主" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {reactive} from 'vue'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	type StateType = {
		value1: number;
		value2: number;
		value3: number;
		value4: number;
		value5: number;
	}
	
	const state = reactive({
		value1: 9,
		value2: 2,
		value3: 6,
		value4: 0.3,
		value5: 2
	} as StateType)
	const minusBoxStyle = 'border-width:1px;border-top-left-radius: 6rpx;border-bottom-left-radius:6rpx;border-color:#EBEBEB;width:68rpx;height:68rpx;'
	const plusBoxStyle = 'border-width:1px;border-top-right-radius: 6rpx;border-bottom-right-radius:6rpx;border-color:#EBEBEB;width:68rpx;height:68rpx;'
	const valueStyle = 'border-top-width:1px;border-top-color:#EBEBEB;border-bottom-width:1px;border-bottom-color:#EBEBEB;height:68rpx;'
</script>

<style lang="scss">
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/stepper" />
