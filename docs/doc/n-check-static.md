# n-check-static

快速单多选，不可自定义选择项组件

## 设计哲学 [Design]

- 图标-文字 或者 文字-图标 形式。图标位置可变；
- 用于快速实现单多选；
- 支持单行或者多行；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| value | string[] | true |  | 选中的值，数组 |  | 
| icon | string | false | 'circle' | 未选中时的图标 |  | 
| checkedIcon | string | false | 'radio-solid' | 选中时的图标 |  | 
| direction | string | false | 'left' | 方向。图标排在方向的开始 |  | 
| flex | string | false | 'row' | items排布的方式 |  | 
| isBetween | boolean | false | false | flex为row时，图标和文字是否space-between | true, false | 
| items | ItemSelectionType[] | true |  | 选择项 |  | 
| limits | number | false | 0 | 限制选中数量。0表示不限制 |  | 
| leastOne | boolean | false | false | 是否至少选中一个 | true, false | 
| disabled | boolean | false | false | 是否禁止更改状态 | true, false | 
| boxStyle | string | false | '' | 组件样式 |  | 
| itemBoxStyle | string | false | '' | 选择项样式 |  | 
| checkedItemBoxStyle | string | false | '' | 选择项选中时样式 |  | 
| itemSpace | string | false | '16rpx' | 选择项之间的间距 |  | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| checkedTextType | string | false | 'text' | 选中时文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| disabledTextType | string | false | 'disabled' | 禁用时文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| checkedIconType | string | false | 'text' | 选中时图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| disabledIconType | string | false | 'disabled' | 禁用时图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| height | string | false | 'base' | 选择项高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| space | string | false | '12rpx' | 文字与图标之间的间距 |  | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| itemRadius | string | false | '' | 选择项圆角主题 | ss,s,base,l,ll,loading,none | 
| itemBorder | string | false | '' | 选择项边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| checkedItemBorder | string | false | '' | 选择项选中时边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| textStyle | string | false | '' | 文字样式 |  | 
| disabledTextStyle | string | false | '' | 禁用时文字样式 |  | 
| checkedTextStyle | string | false | '' | 选中时文字样式 |  | 
| iconSize | string | false | 'l' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标组件样式 |  | 
| disabledIconStyle | string | false | '' | 禁用时图标样式 |  | 
| checkedIconStyle | string | false | '' | 选中时图标样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| itemBoxClass | string | false | '' | 选择项样式类 |  | 
| checkedItemBoxClass | string | false | '' | 选择项选中时样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| disabledTextClass | string | false | '' | 禁用时文字样式类 |  | 
| checkedTextClass | string | false | '' | 选中时文字样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标组件样式类 |  | 
| disabledIconClass | string | false | '' | 禁用时图标样式类 |  | 
| checkedIconClass | string | false | '' | 选中时图标样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| overed | 超出数量限制 |  |
| checkClicked | 禁用时点击事件 | number - 点击的选择项 |
| change | 更改选择项通知 | string[] - 选择项的value数组 |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| refresh | 刷新，重新生成数据 |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view>
		<n-navbar :lefts="leftIcons" title="单/多选" @leftAction="navLeftAction"></n-navbar>
		<n-list  bgType="page">
			<n-list-cell>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin: 32rpx;">
					<n-check-static :value="model" icon="circle" checkedIcon="check-solid" :items="items1" direction="right" :isBetween="true" itemBoxStyle="background-color:#F5F7F9;padding-left:32rpx;padding-right:32rpx;" boxStyle="border-radius:16rpx;overflow:hidden;" @change="onChange"></n-check-static>
				</view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin: 32rpx;">
					<n-check-static :value="model1" icon="circle" checkedIcon="success" :limits="3" :items="items1" direction="right" :isBetween="true" itemBoxStyle="border-bottom-width:1px;border-bottom-color:#F5F7F9;"></n-check-static>
				</view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin: 32rpx;">
					<n-check-static :value="model2" icon="love" checkedIcon="love-solid" flex="column" :limits="2" :items="items2" textLabel="title" valueLabel="value" disabledLabel="disabled" itemSpace="16rpx"></n-check-static>
				</view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin: 32rpx;">
					<n-check :value="models3" bgType="none">
						<n-check-item v-for="(item,idx) in items3" :key="idx" :value="item.value" :disabled="item.disabled" :border="models3.includes(item.value)?'primary':'all'" :bgType="models3.includes(item.value)?'primary':'inverse'" boxStyle="flex-direction:row;justify-content:center;align-items:center;height:80rpx;margin-bottom:16rpx;border-radius:16rpx;">
							<text :class="[models3.includes(item.value)?'n-color-inverse':'n-color-text', 'n-size-base']">{{item.label}}</text>
						</n-check-item>
					</n-check>
				</view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'

	import {useNav} from '@/service/useNav'
	import { ItemSelectionType } from '@/nProX/types/common'
	const {leftIcons, navLeftAction} = useNav()
	
	const model = ref(['4'])
	const items1 = ref([{value: '1', label: '香蕉'}, {value: '2', label: '苹果'}, {value: '3', label: '西红柿'}, {value: '4', label: '南瓜'}] as ItemSelectionType[])
	const model1 = ref(['2'])
	const items2 = ref([{label: '猪肉', value: '0'}, {label: '牛肉', value: '1', disabled: true}, {label: '羊肉', value: '2'}, {label: '狗肉', value: '3'}] as ItemSelectionType[])
	const model2 = ref(['2'])
	const items3 = ref([{label: '自定义猪肉', value: '0'}, {label: '自定义牛肉（不可选）', value: '1', disabled: true}, {label: '自定义羊肉', value: '2'}, {label: '自定义狗肉', value: '3'}] as ItemSelectionType[])
	const models3 = ref(['2'])
	
	function onChange(e: any) {
		console.log(e)
	}
</script>

<style lang="scss" scoped>


</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/check" />
