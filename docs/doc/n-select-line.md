# n-select-line

与n-input组件一致的展示型组件

## 设计哲学 [Design]

- 图标-label/标题-内容-指示图标；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| icon | string | false | '' | 左侧图标 |  | 
| label | string | false | '' | 标签/标题 |  | 
| value | string | false | '' | 内容文字 |  | 
| indicator | string | false | '' | 指示图标 |  | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| placeholder | string | false | '请选择' | 占位提示 |  | 
| valueAlign | string | false | 'right' | 内容文字排版主题 | left,center,right | 
| bgType | string | false | '' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'l' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| valueType | string | false | 'text' | 内容颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| valueSize | string | false | 'base' | 内容尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| labelType | string | false | 'text' | 标签颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| labelSize | string | false | 'base' | 标签尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| placeType | string | false | 'place' | 占位提示颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| placeSize | string | false | 'base' | 占位提示尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| indicatorType | string | false | 'third' | 指示图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| indicatorSize | string | false | 'l' | 指示图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| space | string | false | '12rpx' | 图标-标签-内容-指示图标之间的间距 |  | 
| hover | string | false | 'bg' | hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| boxStyle | string | false | '' | 组件样式 |  | 
| labelStyle | string | false | '' | 标签样式 |  | 
| valueStyle | string | false | '' | 内容样式 |  | 
| placeStyle | string | false | '' | 占位提示样式 |  | 
| iconStyle | string | false | '' | 图标样式 |  | 
| indicatorStyle | string | false | '' | 指示图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标盒子样式 |  | 
| indicatorBoxStyle | string | false | '' | 指示图标盒子样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| labelClass | string | false | '' | 标签样式类 |  | 
| valueClass | string | false | '' | 内容样式类 |  | 
| placeClass | string | false | '' | 占位提示样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| indicatorClass | string | false | '' | 指示图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| indicatorBoxClass | string | false | '' | 指示图标外层样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| selectClicked | 组件点击事件通知 | UniPointerEvent - 点击事件 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| label | 标签/标题 | No |  |
| default | 主要内容 | No |  |
| extra | 补充内容 | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="选择行" @leftAction="navLeftAction"></n-navbar>
		<n-list>
			<n-list-cell>
				<desc-view top="60rpx" icon="headphone-dot" iconStyle="font-size:60rpx;" title="不是输入形式的输入" desc="为了便捷设置选择显示的placeholder" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
				<n-select-line label="性别" :value="sex==1?'男':(sex==2?'女':'')" border="bottom" placeholder="请选择您的性别" indicator="arrow-right" boxStyle="padding-left:32rpx;padding-right:32rpx;" @selectClicked="toSelectSex"></n-select-line>
				<desc-view top="36rpx" icon="top" iconStyle="font-size:60rpx;" title="select-line" desc="看到上面这个就知道使用场景了吧" descStyle="margin-top:24rpx;margin-bottom:60rpx;"></desc-view>
			</n-list-cell>
		</n-list>
		<n-popup :show="sexVisible">
			<view class="n-flex-1 n-bg-inverse" style="border-top-left-radius: 16rpx;border-top-right-radius: 16rpx;width: 750rpx;">
				<n-button icon="boy-solid" iconType="primary" text="男" @buttonClicked="toConfirmSex(1)"></n-button>
				<n-button icon="girl-solid" iconType="error" text="女" @buttonClicked="toConfirmSex(2)"></n-button>
				<n-button text="取消" bgType="error" textType="inverse" @buttonClicked="toHideSex"></n-button>
			</view>
			<n-height height="x-64rpx" bgType="inverse"></n-height>
		</n-popup>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import descView from '@/pages/components/descView.vue'
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const sexVisible = ref(false)
	const sex = ref(0)
	
	function toConfirmSex(i: number) {
		sex.value = i
		sexVisible.value = false
	}
	function toSelectSex() {
		sexVisible.value = true
	}
	function toHideSex() {
		sexVisible.value = false
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/select-line" />
