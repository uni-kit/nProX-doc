# n-search

搜索框

## 设计哲学 [Design]

- 快速实现搜索框；
- 支持左侧图标固定；
- 支持提示带图标；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| name | string | false | '' | 表单的控件名称 |  | 
| type | string | false | 'text' | 输入类型 | text,number,digit,tel | 
| maxlength | number | false | 140 | 最大输入长度。0表示不限制 |  | 
| autoFocus | boolean | false | false | 是否自动聚焦 | true, false | 
| icon | string | false | 'search' | 搜索图标 |  | 
| placeholder | string | false | '输入内容开始搜索' | 占位提示 |  | 
| position | string | false | 'left' | 内容排版的方式/方向 | left,center,right | 
| focus | boolean | false | false | 是否聚焦 | true, false | 
| adjust | boolean | false | true | adjust-position.键盘弹起时，是否自动上推页面 | true, false | 
| cursor | number | false | 0 | focus时的光标位置 |  | 
| cursorSpacing | number | false | 0 | 光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 |  | 
| cursorColor | string | false | '' | 光标颜色 |  | 
| confirmType | string | false | 'search' | 设置键盘右下角按钮的文字，仅在 type为text 时生效 | send,search,next,go,done | 
| confirmHold | boolean | false | false | 点击键盘右下角按钮时是否保持键盘不收起 | true, false | 
| holdKeyboard | boolean | false | false | focus时，点击页面的时候不收起键盘 | true, false | 
| selectionStart | number | false | -1 | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 |  | 
| selectionEnd | number | false | -1 | 光标结束位置，自动聚集时有效，需与selection-satrt搭配使用 |  | 
| disabled | boolean | false | false | 是否禁止输入 | true, false | 
| fixIcon | boolean | false | false | 搜索图标是否固定在左侧 | true, false | 
| iconTextSpace | string | false | '12rpx' | 图标和文字之间的间距 |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| valueType | string | false | 'text' | 内容颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| placeIconType | string | false | 'place' | 占位提示的图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| placeType | string | false | 'place' | 占位提示的颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | 'all' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | 'll' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| ps | string | false | '32rpx' | padding主题 | 32rpx,ss,s,base,l,ll,left-ss,left-s,left-base,left-l,left-ll,top-ss,top-s,top-base,top-l,top-ll,right-ss,right-s,right-base,right-l,right-ll,bottom-ss,bottom-s,bottom-base,bottom-l,bottom-ll | 
| valueSize | string | false | 'base' | 内容尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconSize | string | false | 'l' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| placeSize | string | false | 'base' | 占位提示尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| boxStyle | string | false | '' | 组件样式 |  | 
| iconStyle | string | false | '' | 图标样式 |  | 
| placeStyle | string | false | '' | 占位提示样式 |  | 
| valueBoxStyle | string | false | '' | 内容盒子样式 |  | 
| valueStyle | string | false | '' | 内容样式 |  | 
| placeBoxStyle | string | false | '' | 占位提示盒子样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| placeClass | string | false | '' | 占位提示样式类 |  | 
| valueClass | string | false | '' | 内容样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| keyboardHeightChange | 键盘高度改变时触发事件 | UniInputKeyboardHeightChangeEvent - `event.detail = {height, duration}` |
| confirm | 点击完成按钮时触发 | event - `event.detail = {value: value}` |
| focus | 输入框聚焦时触发 | UniInputFocusEvent - `event.detail = { value, height }`，height 为键盘高度 |
| blur | 输入框失去焦点时触发 | UniInputBlurEvent - `event.detail = {value: value}` |
| searchClicked | 禁用时输入框的点击事件 | UniPointerEvent - 点击事件 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| extra | 补充内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="搜索框" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search position="center" v-model="search as string"></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search bgType="error" ps="base" valueType="inverse" iconType="inverse" placeType="inverse" placeIconType="inverse"></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search border="primary" position="center"></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search :fixIcon="true" iconType="error" placeIconType="error" border="error"></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search :fixIcon="true" iconType="error" placeIconType="place" value="还可以提供默认的value"></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search position="center" :icon="''" bgType="primary" valueType="inverse" iconType="inverse" placeType="inverse" placeIconType="inverse"></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search icon="">
						<template v-slot:extra>
							<view>
								<n-button bgType="error" text="搜索" textType="inverse" border="none" radius="ll" boxStyle="width:160rpx;height:60rpx;"></n-button>
							</view>
						</template>
					</n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search position="center" bgType="primary" valueType="inverse" iconType="inverse" placeType="inverse" placeIconType="inverse" boxStyle="height:126rpx;"></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
			<n-list-cell>
				<view style="margin-left: 32rpx; margin-right: 32rpx;">
					<n-search :fixIcon="true" bgType="primary" valueType="inverse" iconType="inverse" placeType="inverse" placeIconType="inverse" boxStyle="height:126rpx;padding-left:32rpx;padding-right:32rpx;"></n-search>
				</view>
				<view style="height: 20rpx;"></view>
			</n-list-cell>
		</n-list>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const search = ref("")
</script>

<style lang="scss" scoped>
.search {
	&-button {
		position: absolute;
		top: 0;
		right: 32rpx;
		bottom: 0;
		flex-direction: row;
		align-items: center;
	}
}
</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/search" />
