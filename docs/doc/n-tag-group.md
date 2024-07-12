# n-tag-group

标签群，单多选

## 设计哲学 [Design]

- 标签群，支持单多选；
- 支持禁用；
- 可配置不同选择样式；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| value | string[] | true |  | 选中的值，数组 |  | 
| items | ItemSelectionType[] | true |  | 内容项数组 |  | 
| limits | number | false | 0 | 限制选择数量。0表示没有限制 |  | 
| leastOne | boolean | false | false | 至少选中1项。点按唯一选中的项不会取消选中 | true, false | 
| column | number | false | 0 | 每行展示的tag数 |  | 
| rowSpace | string | false | '16rpx' | 行之间的间距 |  | 
| columnSpace | string | false | '16rpx' | 列之间的间距 |  | 
| disabled | boolean | false | false | 是否禁用 | true, false | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| boxStyle | string | false | '' | 组件样式 |  | 
| dyBoxStyle | string | false | '' | column=0时，包含tags的盒子的样式 |  | 
| tagBgType | string | false | '' | 标签背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| tagSelectedBgType | string | false | '' | 标签选中时背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| tagTextType | string | false | 'text' | 标签文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| tagSelectedTextType | string | false | 'text' | 标签选中时文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| tagTextSize | string | false | 'base' | 标签文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| tagHeight | string | false | 'base' | 标签高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| tagBorder | string | false | 'all' | 标签边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| tagSelectedBorder | string | false | 'all' | 选中时标签边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| tagRadius | string | false | 'base' | 标签圆角主题 | ss,s,base,l,ll,loading,none | 
| tagSpace | string | false | '16rpx' | 标签内左右padding |  | 
| textStyle | string | false | '' | 标签文字样式 |  | 
| selectedTextStyle | string | false | '' | 标签文字选中时样式 |  | 
| disabledTextStyle | string | false | '' | 标签文字禁用时样式 |  | 
| tagStyle | string | false | '' | 标签样式 |  | 
| selectedTagStyle | string | false | '' | 选中时标签样式 |  | 
| disabledTagStyle | string | false | '' | 禁用时标签样式 |  | 
| updateTime | number | false | 0 | 刷新时机。改变此值立马刷新 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| dyBoxClass | string | false | '' | column=0时，tags盒子的样式类 |  | 
| textClass | string | false | '' | 标签文字样式类 |  | 
| selectedTextClass | string | false | '' | 选中时标签文字样式类 |  | 
| disabledTextClass | string | false | '' | 禁用时标签文字样式类 |  | 
| tagClass | string | false | '' | 标签样式类 |  | 
| selectedTagClass | string | false | '' | 选中时标签样式类 |  | 
| disabledTagClass | string | false | '' | 禁用时标签样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| overed | 超过限制数量通知 |  |
| change | 选中的值改变触发的通知 | string[] - 选中的值，数组 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="标签群" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="可以用于展示或单多选" desc="用来展示或者单多选都可以" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<n-title bgType="none" title1="单选标签群:支持配置各种样式" title1Type="text" boxStyle="padding-left:32rpx;"></n-title>
			</n-list-cell>
			<n-list-cell>
				<n-tag-group :value="oneSelect" :limits="1" :column="4" :items="selections" textLabel="title" valueLabel="id" disabledLabel="disabled" bgType="none" tagSelectedBgType="error" tagSelectedTextType="inverse" boxStyle="margin-left:32rpx;margin-right:32rpx;" @change="onSelectChange1"></n-tag-group>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" title1="多选标签群:支持配置各种样式" title1Type="text" boxStyle="padding-left:32rpx;"></n-title>
			</n-list-cell>
			<n-list-cell>
				<n-tag-group :value="threeSelect" :limits="3" :column="4" :items="selections" textLabel="title" valueLabel="id" disabledLabel="disabled" bgType="none" tagSelectedTextType="error" tagSelectedBorder="error" boxStyle="margin-left:32rpx;margin-right:32rpx;" @change="onSelectChange2"></n-tag-group>
			</n-list-cell>
			<n-list-cell>
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="灵活选择" desc="复杂样式的单多选建议选择可自定义的check组件" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:46rpx;margin-right:46rpx;"></desc-view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {ItemSelectionType} from '@/nProX/types/common'
	import descView from '@/pages/components/descView.vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const oneSelect = ref<string[]>(['6'])
	const threeSelect = ref<string[]>(['7', '8'])
	const selections = [
				{label: '我们', value: '1', disabled: false},
				{label: '你们', value: '2', disabled: false},
				{label: '他们', value: '3', disabled: false},
				{label: '都是', value: '4', disabled: true},
				{label: '平凡的', value: '5', disabled: false},
				{label: '好人', value: '6', disabled: false},
				{label: '一生', value: '7', disabled: false},
				{label: '平安', value: '8', disabled: false},
				{label: '渡过', value: '9', disabled: true},
				{label: '难关', value: '10', disabled: false},
			] as ItemSelectionType[]
	
	function onSelectChange1(val: string[]) {
		oneSelect.value = val
	}
	function onSelectChange2(val: string[]) {
		threeSelect.value = val
	}
</script>

<style lang="scss" scoped>
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/tag-group" />
