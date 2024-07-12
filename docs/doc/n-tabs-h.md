# n-tabs-h

横向切换tabs

## 设计哲学 [Design]

- 可滚动的横向切换tabs；
- 自动居中；
- 可自定义指示器；
- 细节到位，全部可配；

## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| items | ItemBadgeType[] | true |  | tabs内容数组 |  | 
| value | number | false | 0 | 当前位置 |  | 
| last | number | false | 0 | 上次位置 |  | 
| swiperWidth | string | false | '750rpx' | 与swiper进度联动时swiper的宽度 |  | 
| isTap | boolean | false | true | 是否处于点击tab项的切换 | true, false | 
| justify | string | false | 'start' | justify-content主题值 | start,center,end,between,around | 
| scrollSize | string | false | '750rpx' | 滚动区域的宽度 |  | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| activeTextSize | string | false | 'base' | 当前文字的尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| bgType | string | false | 'inverse' | 组件的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| activeTextType | string | false | 'primary' | 当前文字的颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| height | string | false | '80rpx' | 高度 |  | 
| width | string | false | '120rpx' | tab项的宽度。0表示动态宽度，跟随内容 |  | 
| left | string | false | '0' | 左侧空白区域的宽度 |  | 
| right | string | false | '0' | 右侧空白区域的宽度 |  | 
| space | string | false | '0px' | tab项之间的间隙 |  | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| badgeConfig | BadgeType | false |  | tab项的badge设置 |  | 
| hasIndicator | boolean | false | true | 是否具备指示内容 | true, false | 
| indicatorType | string | false | 'primary' | 指示内容的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| indicatorWidth | string | false | '80rpx' | 指示内容的宽度。0表示动态宽度，跟随内容 |  | 
| indicatorHeight | string | false | '5rpx' | 指示内容的高度 |  | 
| indicatorRadius | string | false | '4rpx' | 指示内容的圆角 |  | 
| absIndicator | boolean | false | true | 指示内容是否使用定位 | true, false | 
| boxStyle | string | false | '' | 组件样式 |  | 
| tabsStyle | string | false | '' | tabs选项盒子样式 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| activeTextStyle | string | false | '' | 当前文字样式 |  | 
| itemStyle | string | false | '' | tab项样式 |  | 
| activeItemStyle | string | false | '' | 当前tab项样式 |  | 
| indicatorStyle | string | false | '' | 指示内容样式 |  | 
| updateTime | number | false | 0 | 刷新时机。改变会引起组件刷新 |  | 
| delay | number | false | -1 | onMounted中延迟delay再进行初始化 |  | 
| updateDelay | number | false | -1 | tabs改变后延迟updateDelay再进行初始化 |  | 
| hoverTop | boolean | false | false | 指示内容是否处于顶部 | true, false | 
| boxClass | string | false | '' | 组件样式类 |  | 
| tabsClass | string | false | '' | tabs盒子样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| activeTextClass | string | false | '' | 当前文字样式类 |  | 
| itemClass | string | false | '' | tab项样式类 |  | 
| activeItemClass | string | false | '' | 当前tab项样式类 |  | 
| indicatorClass | string | false | '' | 指示内容样式类 |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| change | 点击tab时的通知 | number - 点击的tab位置索引 |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| indicator | 自定义指示内容 | No |  |

## 开放接口 [Expose]

| Name | Description | Params |
| --- | --- | --- |
| toCurrentIndex | 滚动到某个位置 | index: number - 位置索引 |
| onSwiperTransition | 跟随swiper进度联动 | dx: number - swiper移动距离 |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" @leftAction="navLeftAction">
			<template v-slot:center>
				<view class="tabs-nav">
					<n-tabs-h :value="current2" :isTap="true" :items="tabs2" :delay="50" width="86rpx" textLabel="title"
						textType="second" activeTextType="text" textStyle="font-size:14px;"
						activeTextStyle="font-size:16px;" indicatorWidth="42rpx" indicatorType="primary"
						scrollSize="350rpx" justify="center" height="44px" @change="toChangeNavTabs"></n-tabs-h>
				</view>
			</template>
		</n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<n-tabs-h :value="current" :isTap="true" :items="tabs1" :delay="50" width="200rpx"
					activeTextType="warning" indicatorType="warning" indicatorStyle="bottom:20rpx;"
					indicatorWidth="120rpx" @change="toChange1"></n-tabs-h>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<n-tabs-h :value="current" :isTap="true" :items="tabs1" :delay="50" justify="center"
					activeTextType="inverse" indicatorType="error" indicatorRadius="50rpx"
					indicatorStyle="height:80rpx;border-radius:50rpx;" @change="toChange1"></n-tabs-h>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<n-tabs-h :value="current" :isTap="true" :items="tabs1" :delay="50" justify="between"
					activeTextType="warning" indicatorType="warning" @change="toChange1"></n-tabs-h>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<n-tabs-h :value="current3" :isTap="true" :items="tabs3" :delay="50" activeTextType="error"
					indicatorType="error" indicatorStyle="top:0;" @change="toChange3"></n-tabs-h>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<n-tabs-h :value="current4" :isTap="true" :items="tabs4" :delay="50" left="24rpx" space="24rpx"
					right="24rpx" activeTextType="warning" width="0" indicatorWidth="0" indicatorType="warning"
					@change="toChange4"></n-tabs-h>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<n-tabs-h :value="current5" :isTap="true" :hoverTop="false" :items="tabs5" :delay="50"
					activeTextType="error" left="24rpx" right="24rpx" justify="center" width="160rpx" height="120rpx"
					indicatorType="inverse" indicatorWidth="100rpx" indicatorHeight="100rpx"
					indicatorStyle="bottom:10rpx;" @change="toChange5">
					<template v-slot:indicator>
						<image src="/static/bg-circle.png" style="width: 100rpx;height: 100rpx;" mode="aspectFill">
						</image>
					</template>
				</n-tabs-h>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 40rpx;"></view>
				<n-tabs-h :value="current6" :isTap="true" :hoverTop="false" :items="tabs6" :delay="50" textLabel="name"
					activeTextType="error" left="24rpx" right="24rpx" justify="center" width="160rpx" height="120rpx"
					indicatorType="success" indicatorWidth="60rpx" indicatorHeight="12rpx"
					indicatorStyle="bottom:10rpx;" @change="toChange6"></n-tabs-h>
			</n-list-cell>
			<n-list-cell>
				<view style="height: 36rpx;"></view>
				<text class="n-color-third n-size-base n-lh-base" style="margin-left: 32rpx;">使用场景示范</text>
				<view style="height: 30rpx;"></view>
			</n-list-cell>
			<n-list-cell v-for="(item,idx) in items" :key="idx">
				<n-cell bgType="inverse" :border="idx<items.length-1?'bottom':''" :title="item.title" :value="item.desc"
					indicator="arrow-right-bold" @cellClicked="toPage(item)"></n-cell>
			</n-list-cell>
			<n-list-cell>
				<n-height height="x"></n-height>
			</n-list-cell>
		</n-list>
		<n-popup :show="popVisible" bgType="inverse" height="screen" @overlayClicked="toHidePop">
			<n-navbar :fixed="false"></n-navbar>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current" :isTap="true" :items="tabs1" :updateTime="updateTime" activeTextType="warning"
				indicatorType="warning" indicatorStyle="bottom:20rpx;" @change="toChange1"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current" :isTap="true" :items="tabs1" :updateTime="updateTime" justify="center"
				activeTextType="inverse" indicatorType="error" indicatorRadius="50rpx"
				indicatorStyle="height:80rpx;border-radius:50rpx;" @change="toChange1"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current" :isTap="true" :items="tabs1" :updateTime="updateTime" justify="between"
				activeTextType="warning" indicatorType="warning" @change="toChange1"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current3" :isTap="true" :items="tabs3" :updateTime="updateTime" activeTextType="error"
				indicatorType="error" indicatorStyle="top:0;" @change="toChange3"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current4" :isTap="true" :items="tabs4" :updateTime="updateTime" left="24rpx" right="24rpx"
				space="24rpx" activeTextType="warning" width="0" indicatorWidth="0" indicatorType="warning"
				@change="toChange4"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-button text="关闭" textType="inverse" bgType="primary" border="none" radius="ll"
				boxStyle="width:500rpx;margin-left:125rpx;" @buttonClicked="toHidePop"></n-button>
		</n-popup>
		<n-popup :show="popAlwaysVisible" bgType="inverse" height="screen" :keepAlive="true" @overlayClicked="toHidePop">
			<n-navbar :fixed="false"></n-navbar>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current" :isTap="true" :items="tabs1" :delay="50" activeTextType="warning"
				indicatorType="warning" indicatorStyle="bottom:20rpx;" @change="toChange1"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current" :isTap="true" :items="tabs1" :delay="50" justify="center"
				activeTextType="inverse" indicatorType="error" indicatorRadius="50rpx"
				indicatorStyle="height:80rpx;border-radius:50rpx;" @change="toChange1"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current" :isTap="true" :items="tabs1" :delay="50" justify="between"
				activeTextType="warning" indicatorType="warning" @change="toChange1"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current3" :isTap="true" :items="tabs3" :delay="50" activeTextType="error"
				indicatorType="error" indicatorStyle="top:0;" @change="toChange3"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-tabs-h :value="current4" :isTap="true" :items="tabs4" :delay="50" left="24rpx" right="24rpx"
				space="24rpx" activeTextType="warning" width="0" indicatorWidth="0" indicatorType="warning"
				@change="toChange4"></n-tabs-h>
			<view style="height: 40rpx;"></view>
			<n-button text="关闭" textType="inverse" bgType="primary" border="none" radius="ll"
				boxStyle="width:500rpx;margin-left:125rpx;" @buttonClicked="toHidePop"></n-button>
		</n-popup>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useNav } from '@/service/useNav'
	const { leftIcons, navLeftAction } = useNav()
	import { CustomCellItem } from '@/types/index'
	import { ItemBadgeType, BadgeType } from '@/nProX/types/npro'

	const tabs1 = [{ value: '1', label: '我的' }, { value: '2', label: '你的' }, { value: '3', label: 'Ta的' }] as ItemBadgeType[]
	const tabs2 = [{ value: '1', label: '好人' }, { value: '2', label: '一生' }, { value: '3', label: '平安' }] as ItemBadgeType[]
	const tabs3 = [
		{ value: '1', label: '一起' }, { value: '2', label: '努力' }, { value: '3', label: '加油' }, { value: '4', label: '奋斗' }, 
		{ value: '5', label: '争取' }, { value: '6', label: '美好' }, { value: '7', label: '未来' }, { value: '8', label: '共建' },
		{ value: '9', label: '幸福' }, { value: '10', label: '家园' }, { value: '11', label: '享受' }, { value: '12', label: '快乐' },
		{ value: '13', label: '人生' }
	] as ItemBadgeType[]
	const tabs4 = [
		{ value: '1', label: '我们' }, { value: '2', label: '一起' }, { value: '3', label: '把家还' }, { value: '4', label: '好吗' },
		{ value: '5', label: '可不可以' }, { value: '6', label: '要不要得' }, { value: '7', label: '好的' }, { value: '8', label: '收到' }, { value: '9', label: '同意' }
	] as ItemBadgeType[]
	const tabs5 = [{ value: '1', label: '订制' }, { value: '2', label: '指示器' }, { value: '3', label: '舒服' }] as ItemBadgeType[]
	const tabs6 = [{ value: '1', label: '我的' }, { value: '2', label: '角标', badge: { bgType: 'error', size: '18rpx', text: '', boxStyle: 'position:absolute;top:24rpx;right:24rpx;' } as BadgeType }, { value: '3', label: '好看' }] as ItemBadgeType[]
	const items : CustomCellItem[] = [
		{ title: '在popup中', desc: 'tabs在popup中', page: '', show: 'popVisible' },
		{ title: '在popup中', desc: 'tabs在popup-always中', page: '', show: 'popAlwaysVisible' },
		{ title: '与swiper联动', desc: 'tabs-swiper', page: '/pages/nav/tabs/list' },
		{ title: '与swiper进度联动', desc: 'tabs-swiper', page: '/pages/nav/tabs/inter_list' },
		{ title: '与list/scroll的滚动联动', desc: 'list/scroll', page: '/pages/nav/tabs/scroll_y' },
		{ title: 'tabs-v', desc: '竖向tabs', page: '/pages/nav/tabs-v' }
	]

	const current = ref(0)
	const current2 = ref(1)
	const current3 = ref(0)
	const current4 = ref(0)
	const current5 = ref(1)
	const current6 = ref(1)
	const popVisible = ref(false)
	const popAlwaysVisible = ref(false)
	const updateTime = ref(0)

	function toPage(val : CustomCellItem) {
		if (val.page != null && val.page!.length > 0) {
			uni.navigateTo({
				url: val.page!
			})
		} else {
			if (val.show == 'popVisible') {
				popVisible.value = true
			} else {
				popAlwaysVisible.value = true
			}
			setTimeout(() => {
				// 在popup中，往往需要popup真正初始化完成以及到位了才获取位置信息比较合适
				// 尤其是在tabs-v中，不然高度信息肯定有问题
				updateTime.value = Date.now()
			}, 200)
		}
	}
	function toChangeNavTabs(i : number) {
		current2.value = i
	}
	function toChange1(i : number) {
		current.value = i
	}
	function toChange3(i : number) {
		current3.value = i
	}
	function toChange4(i : number) {
		current4.value = i
	}
	function toChange5(i : number) {
		current5.value = i
	}
	function toChange6(i : number) {
		current6.value = i
	}
	function toHidePop() {
		popVisible.value = false
		popAlwaysVisible.value = false
	}
</script>

<style lang="scss" scoped>
	.tabs {
		&-nav {
			width: 350rpx;
		}
	}
</style>
```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/nav/tabs-h" />
