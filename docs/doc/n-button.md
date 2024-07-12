# n-button

按钮。支持多图标

## 设计哲学 [Design]

- 图标-文字-图标 三段式设计。可随意调整内容和布局；
- hover效果；
- 支持loading以及禁用；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| bgType | string | false | '' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| text | string | false | '' | 文字 |  | 
| icon | string | false | '' | 左侧图标 |  | 
| icon2 | string | false | '' | 右侧图标 |  | 
| loading | boolean | false | false | 是否加载中 | true, false | 
| loadingSrc | string | false | '/static/ui/loading.gif' | 加载中gif图片 |  | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| hover | string | false | 'opacity' | hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| radius | string | false | 'base' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| disabled | boolean | false | false | 是否禁用状态。禁用之后不可点击 | true, false | 
| space | string | false | '12rpx' | 组件内图标文字之间内容间距 |  | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconType | string | false | 'text' | 左侧图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'l' | 左侧图标大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| icon2Type | string | false | 'text' | 右侧图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| icon2Size | string | false | 'l' | 右侧图标大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| boxStyle | string | false | '' | 组件样式 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| iconBoxStyle | string | false | '' | 左侧图标组件样式 |  | 
| iconStyle | string | false | '' | 左侧图标样式 |  | 
| icon2BoxStyle | string | false | '' | 右侧图标组件样式 |  | 
| icon2Style | string | false | '' | 右侧图标样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| iconBoxClass | string | false | '' | 左侧图标组件样式类 |  | 
| iconClass | string | false | '' | 左侧图标样式类 |  | 
| icon2BoxClass | string | false | '' | 右侧图标组件样式类 |  | 
| icon2Class | string | false | '' | 右侧图标样式类 |  | 
| loadingWidth | string | false | '36rpx' | 加载中图片宽度 |  | 
| loadingHeight | string | false | '36rpx' | 加载中图片高度 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| buttonClicked | 按钮点击事件。disabled状态下不响应 | UniPointerEvent - 点击事件传递的参数 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 默认内容 | No |  |
| extra | 额外内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="按钮" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="主题配置" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<n-button text="默认样式"></n-button>
				<view class="n-flex-row" style="margin-top: 16rpx;">
					<view style="flex: 1;">
						<n-button bgType="primary" textType="inverse" border="none" text="primary"></n-button>
					</view>
					<view style="flex: 1;">
						<n-button bgType="success" textType="inverse" border="none" text="success"></n-button>
					</view>
				</view>
				<view class="n-flex-row" style="margin-top: 16rpx;">
					<view style="flex: 1;">
						<n-button bgType="warning" textType="inverse" border="none" text="warning"></n-button>
					</view>
					<view style="flex: 1;">
						<n-button bgType="error" textType="inverse" border="none" text="error"></n-button>
					</view>
				</view>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="带图标/图片" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<n-button icon="add" text="左侧带图标"></n-button>
				<n-button icon2="arrow-right" text="右侧带图标"></n-button>
				<n-button icon="add" icon2="arrow-right" text="左右侧带图标"></n-button>
				<view class="n-flex-row" style="margin-top: 16rpx;">
					<view style="flex: 1;">
						<n-button bgType="warning" :icon="cloudImgs.getString('avatar.bear')" iconStyle="width: 60rpx; height: 60rpx; border-radius:8rpx;" text="带图片/可以网络图片" textType="inverse" border="none"></n-button>
					</view>
				</view>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="带loading切换" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<n-button :loading="true" text="正在为您准备"></n-button>
				<view class="n-flex-row" style="margin-top: 16rpx;">
					<view style="flex: 1;">
						<n-button :loading="loadingVisible" bgType="success" icon="wechat" text="点击切换加载状态" iconType="inverse" textType="inverse" border="none" @buttonClicked="toggleLoading"></n-button>
					</view>
				</view>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="禁用状态" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<view style="flex-direction: row;">
					<view style="flex: 1;">
						<n-button bgType="error" border="none" :disabled="true" icon="add-bold" text="禁用状态" iconType="inverse" textType="inverse"></n-button>
					</view>
					<view style="flex: 1;">
						<n-button bgType="error" icon="add-bold" text="可用状态" border="none" iconType="inverse" textType="inverse"></n-button>
					</view>
				</view>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="样式配置" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<view style="flex-direction: row;">
					<view style="flex: 1;">
						<n-button bgType="primary" text="高度" height="s" textType="inverse" border="none"></n-button>
					</view>
					<view style="flex: 1;">
						<n-button bgType="error" text="圆角" height="s" radius="ll" textType="inverse" border="none"></n-button>
					</view>
					<view style="flex: 1;">
						<n-button text="边框" height="s" border="error"></n-button>
					</view>
				</view>
			</n-list-cell>
			<n-list-cell>
				<n-title bgType="none" centerIcon1="topic" centerIcon1Type="primary" centerIcon2="arrow-down-solid" title2="其它" centerIcon2Type="third" centerStyle="padding-left:16rpx;padding-right:16rpx;background-color:#FFFFFF;border-radius:12rpx;height:60rpx;"></n-title>
				<view style="flex-direction: row;">
					<view style="flex: 1;">
						<n-button bgType="primary" icon="wechat" text="微信登录" iconType="inverse" textType="inverse" border="none"></n-button>
					</view>
				</view>
				<view class="n-flex-row" style="margin-top: 16rpx;justify-content: center;">
					<n-button icon="wechat-circle" radius="ll" iconType="success" iconStyle="font-size: 80rpx;" boxStyle="height: 100rpx;width: 100rpx;" border="none"></n-button>
				</view>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 20rpx;"></view>
				<n-height height="x"></n-height>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'

	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	import cloudImgs from '@/common/imgs'
	
	const loadingVisible = ref(false)
	
	function toggleLoading() {
		loadingVisible.value = !loadingVisible.value
	}
</script>

<style lang="scss">
.bb {
	&-button {
		flex-direction: row;
		flex: 1;
		/* #ifndef APP */
		display: flex;
		width: 343rpx;
		/* #endif */
		height: 100rpx;
		padding: 0;
		align-items: center;
		justify-content: center;
		border-width: 0px;
		border-radius: 12rpx;
		
		&-text {
			color: #FFFFFF;
			font-size: 30rpx;
			margin-left: 12rpx;
		}
	}
	
	&-wechat {
		/* #ifndef APP */
		display: flex;
		border: none;
		/* #endif */
		/* #ifdef APP */
		border-width: 0px;
		/* #endif */
		flex-direction: row;
		width: 100rpx;
		height: 100rpx;
		justify-content: center;
		align-items: center;
		border-radius: 60rpx;
		padding: 0;
		margin: 0;
	}
}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/button" />
