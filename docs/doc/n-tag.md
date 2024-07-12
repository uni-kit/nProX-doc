# n-tag

标签

## 设计哲学 [Design]

- 可禁用；
- 标签群：n-tag-group；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| text | string | false | '' | 文字内容 |  | 
| value | string | false | '' | 唯一值标识 |  | 
| selected | boolean | false | false | 是否选中 | true, false | 
| disabled | boolean | false | false | 是否禁用 | true, false | 
| bgType | string | false | '' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| selectedBgType | string | false | '' | 选中时的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| selectedTextType | string | false | 'text' | 选中时文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| disabledTextType | string | false | 'disabled' | 禁用时文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | 'all' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| selectedBorder | string | false | 'all' | 选中时的边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | 'base' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| space | string | false | '16rpx' | 左右两侧padding值 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| selectedTextStyle | string | false | '' | 选中时文字样式 |  | 
| disabledTextStyle | string | false | '' | 禁用时文字样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| selectedBoxStyle | string | false | '' | 选中时组件样式 |  | 
| disabledBoxStyle | string | false | '' | 禁用时组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| selectedTextClass | string | false | '' | 选中时文字样式类 |  | 
| disabledTextClass | string | false | '' | 禁用时文字样式类 |  | 
| selectedBoxClass | string | false | '' | 选中时组件样式类 |  | 
| disabledBoxClass | string | false | '' | 禁用时组件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| tagClicked | 组件点击事件通知 | string - 唯一值 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |
| extra | 额外补充 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="标签" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<n-title bgType="none" title1="单个标签:各种样式配置" title1Type="text" boxStyle="padding-left:32rpx;"></n-title>
			</n-list-cell>
			<n-list-cell>
				<view class="tag-items">
					<n-tag :selected="uAndMeState" selectedBorder="success" text="我和你" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;" @tagClicked="toToggleState"></n-tag>
					<n-tag text="之间" height="s" textSize="s" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
					<n-tag text="的距离" height="ll" textType="error" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
					<n-tag text="明明是" radius="ll" boxStyle="width:160rpx;margin-right:0rpx;margin-bottom:16rpx;"></n-tag>
					<n-tag :selected="true" selectedBgType="warning" text="咫尺" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
					<n-tag text="却感觉" border="none" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
					<n-tag text="像是" radius="none" boxStyle="width:160rpx;margin-right:15rpx;margin-bottom:16rpx;"></n-tag>
					<n-tag :disabled="true" disabledTextType="inverse" bgType="error" text="天涯" boxStyle="width:160rpx;margin-right:0rpx;margin-bottom:16rpx;"></n-tag>
				</view>
			</n-list-cell>
			<n-list-cell>
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
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="灵活选择" desc="tag/tag-group只是提供了一个壳子,复杂的需求建议复制粘贴改样式,不建议去适配" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:46rpx;margin-right:46rpx;"></desc-view>
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
	
	const uAndMeState = ref(false)
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
	
	function toToggleState() {
		uAndMeState.value = !uAndMeState.value
	}
	function onSelectChange1(val: string[]) {
		oneSelect.value = val
	}
	function onSelectChange2(val: string[]) {
		threeSelect.value = val
	}
</script>

<style lang="scss" scoped>
.tag {
	&-items {
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		margin-left: 32rpx;
		margin-right: 32rpx;
	}
}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/tag" />
