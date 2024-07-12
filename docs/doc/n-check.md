# n-check

单多选组件。内容子项为n-check-item自定义内容

## 设计哲学 [Design]

- 完全自定义的单多选组件；
- 内容子项使用n-check-item组件；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| value | string[] | true |  | 已经选中的值 |  | 
| limits | number | false | 0 | 限制选中数量。0表示没有限制 |  | 
| disabled | boolean | false | false | 是否全部禁用修改 | true, false | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| overed | 超出限制数量 |  |
| change | 选中状态改变 | String[] - 选中的值，数组 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 默认内容 | No |  |

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
