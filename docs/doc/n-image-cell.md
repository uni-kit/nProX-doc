# n-image-cell

图片选择时的展示组件，可显示删除图标

## 设计哲学 [Design]

- 可删除；
- 一般与n-image-add配合使用；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| src | string | false | '' | 图片地址 |  | 
| radius | string | false | 's' | 图片圆角主题 | ss,s,base,l,ll,loading,none | 
| imageStyle | string | false | '' | 图片样式 |  | 
| imageClass | string | false | '' | 图片样式类 |  | 
| icon | string | false | 'close' | 删除图标 |  | 
| iconType | string | false | 'inverse' | 删除图标的颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'ss' | 删除图标的尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconRadius | string | false | 'll' | 删除图标的圆角主题 | ss,s,base,l,ll,loading,none | 
| iconBorder | string | false | '' | 删除图标的边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| iconBgType | string | false | 'mask-dark' | 删除图标的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| delete | 删除图片事件 | string - 删除的图片地址 |
| preview | 预览事件 | string - 预览的图片地址 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-bg-inverse n-full-height">
		<n-navbar :lefts="leftIcons" title="添加图片" @leftAction="navLeftAction"></n-navbar>
		<view class="n-flex-row n-align-end n-flex-wrap" style="margin-left: 46rpx;margin-top: 32rpx;">
			<n-image-cell v-for="(img,idx) in images" :key="idx" :src="img" boxStyle="margin-right:14rpx;margin-bottom:14rpx;" @delete="toDeleteImage" @preview="toPreviewImage"></n-image-cell>
			<n-image-add v-if="images.length<9" @add="toChooseImge" boxStyle="margin-bottom:14rpx;margin-top:16rpx;"></n-image-add>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {ref, computed} from 'vue'
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	const title = ref('')
	const images = ref([] as string[])
	
	const count = computed(():number => {
		return title.value.length
	})
	function toChooseImge() {
		if (images.value.length >= 9) {
			return
		}
		uni.chooseImage({
			count: 9 - images.value.length,
			success: (res) => {
				images.value = images.value.concat(res.tempFilePaths)
			},
			fail: () => {
				
			}
		})
	}
	function toDeleteImage(src: string) {
		const idx = images.value.indexOf(src)
		images.value.splice(idx, 1)
	}
	function toPreviewImage(src: string) {
		uni.previewImage({
			current: src,
			urls: images.value
		})
	}
</script>

<style>

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/image-add" />
