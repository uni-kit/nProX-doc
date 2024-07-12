# n-step-static

一体成型步骤条

## 设计哲学 [Design]

- 步骤条，支持多种样式；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| items | IconTextActiveType[] | true |  | 内容 |  | 
| current | number | false | 0 | 当前位置 |  | 
| width | string | false | '750rpx' | 整体宽度 |  | 
| left | string | false | '84rpx' | 线条部分，左右两边与整体盒子的间距/空白 |  | 
| space | string | false | '48rpx' | 线条之间的间隙 |  | 
| lineHeight | string | false | '6rpx' | 线条高度 |  | 
| lineBgType | string | false | 'middle' | 线条背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| activeLineBgType | string | false | 'primary' | 活跃线条的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| hasText | boolean | false | true | 是否具备描述文字 | true, false | 
| iconTextSpace | string | false | '18rpx' | 图标与文字之间的间隙 |  | 
| iconSize | string | false | '48rpx' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconType | string | false | 'inverse' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| activeIconType | string | false | 'inverse' | 活跃图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconRadius | string | false | 'll' | 图标圆角 | ss,s,base,l,ll,loading,none | 
| iconBgType | string | false | '' | 图标背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| activeIconBgType | string | false | '' | 活跃图标背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| textType | string | false | 'second' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| activeTextType | string | false | 'text' | 活跃文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| textStyle | string | false | '' | 文字样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| linesBoxStyle | string | false | '' | 线条外层盒子样式 |  | 
| itemsBoxStyle | string | false | '' | 内容项外层盒子样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| linesBoxClass | string | false | '' | 线条外层盒子样式类 |  | 
| itemsBoxClass | string | false | '' | 内容项外层盒子样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| itemClicked | 步骤项点击事件 | number - 点击的索引 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view>
		<n-navbar :lefts="leftIcons" title="step步骤条" @leftAction="navLeftAction"></n-navbar>
		<n-list >
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="一体成型步骤条" desc="支持图标/文字组合" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<n-step-static :current="current1" :items="items1" boxStyle="height:140rpx;"></n-step-static>
				<n-step-static :current="current2" :items="items1" space="80rpx" boxStyle="height:140rpx;"></n-step-static>
				<n-step-static :current="current3" :items="items2" activeIconBgType="warning" iconBgType="middle" boxStyle="height:140rpx;"></n-step-static>
				<n-step-static :current="current2" :items="items3" activeIconBgType="warning" iconBgType="middle" boxStyle="height:140rpx;"></n-step-static>
				<n-step-static :current="current2" :items="items4" :hasText="false" activeIconBgType="warning" iconBgType="middle" left="60rpx" boxStyle="height:140rpx;"></n-step-static>
				<n-step-static :current="current2" :items="items3" space="0" iconSize="0" boxStyle="height:140rpx;"></n-step-static>
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="多种效果" desc="还可以适配不同的效果" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import { IconTextActiveType } from '@/nProX/types/common'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const current1 = ref(0)
	const current2 = ref(1)
	const current3 = ref(2)
	
	const items1 = [{icon: '/static/tabs/album.png', activeIcon: '/static/tabs/albumH.png', text: '打开APP'}, {icon: '/static/tabs/api.png', activeIcon: '/static/tabs/apiH.png', text: '请求网络'}, {icon: '/static/tabs/radio.png', activeIcon: '/static/tabs/radioH.png', text: '开始唱歌'}] as IconTextActiveType[]
	const items2 = [{icon: 'edu-solid', text: '教育经历'}, {icon: 'fingerprint', text: '录入指纹'}, {icon: 'layers-solid', text: '保存入库'}] as IconTextActiveType[]
	const items3 = [{icon:'', text: '也可以'}, {icon:'', text: '这样'}, {icon:'', text: '没有图标'}] as IconTextActiveType[]
	const items4 = [{icon:'', text: '也可以'}, {icon:'', text: '这样'}, {icon:'', text: '没有图标'}, {icon:'', text: '没有文字'}] as IconTextActiveType[]
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/nav/step" />
