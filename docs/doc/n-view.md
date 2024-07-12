# n-view

快速实现多层次的view

## 设计哲学 [Design]

- 支持背景图层；
- 支持非定位形式；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| disabled | boolean | false | false | 是否禁用 | true, false | 
| ms | string | false | '' | margin主题 | ss,s,base,l,ll,left-ss,left-s,left-base,left-l,left-ll,top-ss,top-s,top-base,top-l,top-ll,right-ss,right-s,right-base,right-l,right-ll,bottom-ss,bottom-s,bottom-base,bottom-l,bottom-ll,auto | 
| height | string | false | '' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| sizing | string | false | 'border' | box-sizing主题 | content,border | 
| hover | string | false | '' | hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| shadow | string | false | '' | shadow主题 | light | 
| hasBg | boolean | false | false | 是否具备背景层 | true, false | 
| src | string | false | '' | 背景图片src |  | 
| mode | string | false | 'aspectFill' | 背景图片的mode |  | 
| flex | string | false | '' | flex-direction主题 | row,row-reverse,column,column-reverse | 
| align | string | false | '' | align-items主题 | start,center,end,stretch,baseline,self-auto,self-start,self-center,self-end,self-stretch,self-baseline,content-start,content-center,content-end,content-between,content-around,content-stretch | 
| justify | string | false | '' | justify-content主题 | start,center,end,between,around | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| bgType | string | false | '' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| zIndex | string | false | '' | z-index主题 | 0,1,2,3,4,5,6,9,12,19,99,nav,tabbar,position,overlay,loading,toast,notice,999,drawer,drawer-overlay,pop,pop-standout,pop-standout-overlay,toast-overlay | 
| left | string | false | '0' | 背景的左侧定位 |  | 
| top | string | false | '0' | 背景的顶部定位 |  | 
| right | string | false | '0' | 背景的右侧定位 |  | 
| bottom | string | false | '0' | 背景的底部定位 |  | 
| bgBorder | string | false | '' | 背景层边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| bgRadius | string | false | '' | 背景层圆角主题 | ss,s,base,l,ll,loading,none | 
| bgBgType | string | false | '' | 背景层背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| bgStyle | string | false | '' | 背景层样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| bgClass | string | false | '' | 背景层样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| error | 背景图加载失败事件 |  |
| load | 背景图加载成功事件 |  |
| clicked | 组件点击事件 | UniPointerEvent - 点击事件 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| bg | 背景 | No |  |
| default | 内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" bgType="none" title="view" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<n-view ms="base" border="black" bgType="error" radius="base" boxStyle="border-width:3px;height:130rpx;">
					<n-button height="l" radius="s" bgType="inverse" text="退出登陆" textType="black" textStyle="font-weight:700;"></n-button>
				</n-view>
				<view style="height: 40rpx;"></view>
				<n-view ms="base" border="black" bgType="warning" radius="base" boxStyle="border-width:3px;height:130rpx;">
					<n-button height="l" radius="s" bgType="warning" text="超级点赞X" textType="black" textStyle="font-weight:700;" boxStyle="box-shadow: inset 0 0 6rpx 18rpx rgba(255, 255, 255, 0.8);"></n-button>
				</n-view>
				<view style="height: 40rpx;"></view>
				<n-view ms="l" :hasBg="true" bgBorder="black" bgBgType="custom" bgRadius="base" left="6px" top="6px" right="-6px" bottom="-6px">
					<view class="n-border-black n-bg-inverse n-radius-l n-flex-column n-align-center n-justify-center" style="height: 600rpx;border-width:3px;">
						<text class="n-color-black n-weight-7 n-size-ll">我的酒馆被你打了烊</text>
					</view>
				</n-view>
				<view style="height: 40rpx;"></view>
				<n-view ms="base" border="black" bgType="error" radius="base" shadow="light" boxStyle="border-width:3px;height:130rpx;">
					<n-button height="l" radius="s" bgType="inverse" text="nProX是可多样化适配的" textType="black" textStyle="font-weight:700;"></n-button>
				</n-view>
				<view style="height: 40rpx;"></view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	
</script>

<style lang="scss">
	.v {
		&-in-shadow {
			box-shadow: inset 0 0 12rpx rgba(255, 255, 0, 0.7);
		}
	}
</style>
```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/box/view" />
