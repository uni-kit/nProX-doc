# n-result

结果/状态展示组件

## 设计哲学 [Design]

- 快速展示状态/结果，比如暂无内容、网络断开，等；
- 图标-标题-描述；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| top | string | false | '260rpx' | 距离顶部的距离 |  | 
| icon | string | false | '' | 图标 |  | 
| title | string | false | '' | 标题 |  | 
| desc | string | false | '暂时还没有数据' | 描述 |  | 
| titleType | string | false | 'second' | 标题颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| titleSize | string | false | 'll' | 标题尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| titleStyle | string | false | '' | 标题样式 |  | 
| descType | string | false | 'second' | 描述颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| descSize | string | false | 'base' | 描述尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| descStyle | string | false | '' | 描述样式 |  | 
| iconType | string | false | 'second' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'll' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| titleClass | string | false | '' | 标题样式类 |  | 
| descClass | string | false | '' | 描述样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| icon |  | No |  |
| title |  | No |  |
| desc |  | No |  |
| extra |  | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="结果展示" @leftAction="navLeftAction"></n-navbar>
		<n-result icon="forbid" iconStyle="font-size:100rpx;" title="不好意思,好像你无权访问" desc="有问题可以申诉,但是现在你看不了" descStyle="margin-top:32rpx;margin-bottom:32rpx;">
			<template v-slot:extra>
				<n-button bgType="error" text="申 诉" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;"></n-button>
			</template>
		</n-result>
	</view>
</template>

<script setup lang="ts">
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/display/result" />
