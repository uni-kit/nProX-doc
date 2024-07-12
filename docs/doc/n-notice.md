# n-notice

静态展示型notice提示

## 设计哲学 [Design]

- 静态提示，无动画效果；
- 可相对、绝对定位；
- 可调整定位位置；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| pos | string | false | 'top' | 出现位置 | top,bottom | 
| offset | string | false | '0' | 定位偏移量 |  | 
| visible | boolean | false | false | 是否可见。控制显示和隐藏 | true, false | 
| icon | string | false | '' | 左侧图标 |  | 
| text | string | false | '' | 文字描述 |  | 
| indicator | string | false | '' | 右侧指示器 |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| height | string | false | 'base' | 组件高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'l' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| indicatorType | string | false | 'text' | 指示图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| indicatorSize | string | false | 'l' | 指示图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| indicatorStyle | string | false | '' | 指示图标样式 |  | 
| space | string | false | '12rpx' | 图标-内容-指示图标之间的间距 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| indicatorBoxStyle | string | false | '' | 指示图标外层样式 |  | 
| closable | boolean | false | false | 是否允许关闭 | true, false | 
| boxClass | string | false | '' | 组件样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| indicatorClass | string | false | '' | 指示图标样式类 |  | 
| indicatorBoxClass | string | false | '' | 指示图标外层样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| noticeClicked | 组件被点击时通知 | UniPointerEvent - 点击事件 |
| indicatorClicked | 指示图标被点击事件 | UniPointerEvent - 点击事件 |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| show | 显示提示 |  |
| hide | 隐藏提示 |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="notice" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="inverse" >
			<n-list-cell>
				<desc-view top="120rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="可移除的提示" desc="内部由定位实现" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="已经弹出" :disabled="true" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;"></n-button>
					</template>
				</desc-view>
				<desc-view top="60rpx" icon="bottom" iconStyle="font-size:60rpx;" title="位置可自由决策" desc="快捷组件.复杂/特殊样式建议自己实现" descStyle="margin-top:24rpx;margin-bottom:60rpx;margin-left:60rpx;margin-right:60rpx;">
					<template v-slot:extra>
						<n-button bgType="error" text="弹出" textType="inverse" radius="ll" boxStyle="width:320rpx;height:72rpx;" @buttonClicked="toPopBottom"></n-button>
					</template>
				</desc-view>
			</n-list-cell>
		</n-list>
		<n-notice :visible="true" bgType="error" offset="status-nav-16px" icon="topic" text="nProX来袭,规范/效率/质量" textType="inverse" iconType="inverse" radius="ll" :closable="false"></n-notice>
		<n-notice ref="nnotice" pos="bottom" offset="x-16px" bgType="primary" icon="topic" text="如果不坚持吃饭,是有可能饿死的" indicator="close" radius="ll" :closable="true"></n-notice>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const nnotice = ref<NNoticeComponentPublicInstance|null>(null)
	
	function toPopBottom() {
		nnotice.value?.show?.()
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/pop/notice" />
