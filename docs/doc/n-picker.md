# n-picker

自定义多栏picker

## 设计哲学 [Design]



## 快速使用 [Quick Use]



## 属性 [Props]

| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | false |  | true, false | 
| mode | string | false | 's1' |  |  | 
| pHeight | string | false | '600rpx' |  |  | 
| cancelText | string | false | '取消' |  |  | 
| confirmText | string | false | '确认' |  |  | 
| title | string | false | '' |  |  | 
| cancelType | string | false | 'third' |  |  | 
| cancelSize | string | false | 'base' |  |  | 
| cancelStyle | string | false | '' |  |  | 
| confirmType | string | false | 'primary' |  |  | 
| confirmSize | string | false | 'base' |  |  | 
| confirmStyle | string | false | '' |  |  | 
| titleType | string | false | 'text' |  |  | 
| titleSize | string | false | 'base' |  |  | 
| titleStyle | string | false | '' |  |  | 
| headerBorder | string | false | 'bottom' |  |  | 
| headerRadius | string | false | 'top-base' |  |  | 
| headerBgType | string | false | 'inverse' |  |  | 
| headerStyle | string | false | '' |  |  | 
| value | Array as ()=>number[] | false | () => [0,0,0,0,0,0,0] |  |  | 
| bgType | string | false | 'inverse' |  |  | 
| textType | string | false | 'text' |  |  | 
| textSize | string | false | 'base' |  |  | 
| height | string | false | '500rpx' |  |  | 
| itemHeight | string | false | '100rpx' |  |  | 
| boxStyle | string | false | '' |  |  | 
| itemStyle | string | false | '' |  |  | 
| textStyle | string | false | '' |  |  | 
| indicatorStyle | string | false | '' |  |  | 
| selections | ItemWithChildrenType[] | false | () => [] |  |  | 
| labelProps | object | false | {s1: {label: 'name', value: 'id'}, s2: {label: 'name', value: 'id', tag: "c"}, s3: {label: 'name', value: 'id', tag: 'a'}} |  |  | 
| headerClass | string | false | '' |  |  | 
| cancelClass | string | false | '' |  |  | 
| titleClass | string | false | '' |  |  | 
| confirmClass | string | false | '' |  |  | 
| boxClass | string | false | '' |  |  | 
| itemClass | string | false | '' |  |  | 
| textClass | string | false | '' |  |  | 
| indicatorClass | string | false | '' |  |  | 

## 事件 [Emits]

| Name | Description | Params |
| --- | --- | --- | 
| confirm |  |  |
| cancel |  |  |

## 插槽 [Slots]

| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| header |  | No |  |

## 详情示范 [Detail Demo]



```vue
<template>
	<view class="n-flex-1">
		<n-navbar :lefts="leftIcons" title="Picker" @leftAction="navLeftAction"></n-navbar>
		<n-list bgType="page">
			<n-list-cell>
				<view style="height: 20rpx;"></view>
				<n-cell title="useCurrent" value="使用当前时间" bgType="inverse" valueStyle="text-align:right;" border="bottom" radius="none" indicator="arrow-right" boxStyle="padding-left:32rpx;padding-right:32rpx;" @cellClicked="toShowCurrent"></n-cell>
			</n-list-cell>
			<n-list-cell v-for="(item,idx) in state.items" :key="idx">
				<n-cell :title="item.title" :value="item.value||item.desc" bgType="inverse" valueStyle="text-align:right;" border="bottom" radius="none" indicator="arrow-right" boxStyle="padding-left:32rpx;padding-right:32rpx;" @cellClicked="toShowPicker(item)"></n-cell>
			</n-list-cell>
			<n-list-cell>
				<n-cell title="自定义动态数据" :value="state.pcaText||'省市区动态与缓存'" bgType="inverse" valueStyle="text-align:right;" border="bottom" radius="none" indicator="arrow-right" boxStyle="padding-left:32rpx;padding-right:32rpx;" @cellClicked="toShowPca"></n-cell>
			</n-list-cell>
			<n-list-cell>
				<n-cell title="地区" :value="localDataResult" bgType="inverse" valueStyle="text-align:right;" border="bottom" radius="none" indicator="arrow-right" boxStyle="padding-left:32rpx;padding-right:32rpx;" @cellClicked="toShowPca2"></n-cell>
			</n-list-cell>
		</n-list>
		<n-picker-time :show="state.currentVisible" :useCurrent="true" mode="date" @cancel="toHideCurrent" @confirm="toConfirmCurrent"></n-picker-time>
		<n-picker-time :show="state.pickerVisible" :mode="state.temp.mode" @cancel="toHidePicker" @confirm="toConfirmPicker"></n-picker-time>
		<n-picker :show="state.s1Visible" :value="state.s1Val" :selections="state.s1" mode="s1" @cancel="toHideS" @confirm="toConfirmS1"></n-picker>
		<n-picker :show="state.s2Visible" :value="state.s2Val" :selections="updatedS2" mode="s2" :labelProps="labelTags" @cancel="toHideS" @confirm="toConfirmS2"></n-picker>
		<n-picker :show="state.s3Visible" :value="state.s3Val" :selections="pcas" mode="s3" :labelProps="labelTags" @cancel="toHideS" @confirm="toConfirmS3"></n-picker>
		<pca-picker :show="state.pcaVisible" @cancel="toHidePca" @confirm="toConfirmPca"></pca-picker>
		<pca-local-pick :show="state.pcaVisible2" :value="state.pcaDefault" @cancel="toHidePca2" @confirm="toConfirmPca2"></pca-local-pick>
		<n-loading ref="nloading"></n-loading>
		<n-toast ref="ntoast"></n-toast>
	</view>
</template>

<script setup lang="ts">
	import {reactive, ref, computed} from 'vue'

	import pcaPicker from './components/pcaPick.vue'
	import pcaLocalPick from './components/pcaLocalPick.vue'

	const labelTags = {
		s1: {
			label: 'name',
			value: 'code'
		},
		s2: {
			label: 'name',
			value: 'code',
			// the tag is for to get s2 selections in s1
			tag: "cities"
		},
		s3: {
			label: 'name',
			value: 'code',
			tag: 'areas'
		}
	}
	
	import {useNav} from '@/service/useNav'
	const {leftIcons, navLeftAction} = useNav()
	
	import {storeToRefs} from 'pinia'
	import {useCommonStore} from '@/store/common'
	import { PickerResultType } from '@/nProX/types/npro'
	import { PCItem, PickerCellItem, PCAResult } from '@/types/index'
	import { ItemWithChildrenType } from '@/nProX/types/common'
	const commonStore = useCommonStore()
	const {pcs, pcas, isLoadingPcs, isLoadingPcas} = storeToRefs(commonStore)
	
	const ntoast = ref<InstanceType<typeof nToast>|null>(null)
	const nloading = ref<InstanceType<typeof nLoading>|null>(null)
	
	const state = reactive({
		pickerVisible: false,
		s1Visible: false,
		s2Visible: false,
		s3Visible: false,
		s1Val: <number[]>[],
		s2Val: <number[]>[],
		s3Val: <number[]>[],
		temp: {mode: 'date', title: 'date', desc: '年月日', value: <string|null>null, val: <string[]>[]},
		items: <PickerCellItem[]>[
			{mode: 'yearMonth', title: 'yearMonth', desc: '年月', value: <string|null>null, val: <string[]>[]},
			{mode: 'date', title: 'date', desc: '年月日', value: <string|null>null, val: <string[]>[]},
			{mode: 'dateTime', title: 'dateTime', desc: '年月日时分', value: <string|null>null, val: <string[]>[]},
			{mode: 'time', title: 'time', desc: '时分', value: <string|null>null, val: <string[]>[]},
			{mode: 'yearMonthRange', title: 'yearMonthRange', desc: '年月范围', value: <string|null>null, val: <string[]>[]},
			{mode: 'dateRange', title: 'dateRange', desc: '年月日范围', value: <string|null>null, val: <string[]>[]},
			{mode: 'timeRange', title: 'timeRange', desc: '时分范围', value: <string|null>null, val: <string[]>[]},
			{mode: 's1', title: 's1', desc: '一栏', value: <string|null>null, val: <string[]>[]},
			{mode: 's2', title: 's2', desc: '两栏', value: <string|null>null, val: <string[]>[]},
			{mode: 's3', title: 's3', desc: '三栏', value: <string|null>null, val: <string[]>[]}
		],
		s1: [{name: '杜甫', id: 1}, {name: '李白', id: 2}, {name: '王昌龄', id: 3}, {name: '许仙', id: 4}, {name: '王安石', id: 5}],
		addAll: true,
		pcaVisible: false,
		pcaText: '',
		currentVisible: false,
		pcaVisible2: false,
		pcaDefault:["","",""]
	})
	const localDataResult = computed(() => {
		if (state.pcaDefault[0]) {
			return state.pcaDefault.join()
		}
		return '本地省市区数据'
	})
	const updatedS2 = computed(() => {
		let _default: ItemWithChildrenType[] = []
		if (state.addAll) {
			_default = [{name: "全国", code: "-1", cities: [{name: "全国", code: "-1"}]}]
		}
		const allPcs: ItemWithChildrenType[] = JSON.parse(JSON.stringify(pcs.value||[]))
		allPcs.forEach(item => {
			if (!item.cities) {
				item["cities"] = []
			}
			if (state.addAll) {
				item.cities.unshift({name: "全部", code: "-1"})
			}
		})
		_default = _default.concat(allPcs)
		return _default
	})
	
	function toShowCurrent() {
		state.currentVisible = true
	}
	function toHideCurrent() {
		state.currentVisible = false
	}
	function toConfirmCurrent() {
		state.currentVisible = false
	}
	function toConfirmPicker(val: PickerResultType, s?: string) {
		console.log(val)
		for (const i in state.items) {
			const theI = state.items[i]
			if (s && theI.mode == s) {
				theI.value = val.result
				break
			}
			if (!s && theI.mode == state.temp.mode) {
				theI.value = val.result
				theI.val = Object.assign([], val.checkArr)
				state.temp.val = Object.assign([], val.checkArr)
				break
			}
		}
		state.pickerVisible = false
	}
	function toConfirmS1(val: PickerResultType) {
		state.s1Val = val.checkValue as number[]
		toConfirmPicker(val, 's1')
		toHideS()
	}
	function toConfirmS2(val: PickerResultType) {
		state.s2Val = Object.assign([], val.checkValue)
		toConfirmPicker(val, 's2')
		toHideS()
	}
	function toConfirmS3(val: PickerResultType) {
		state.s3Val = Object.assign([], val.checkValue)
		toConfirmPicker(val, 's3')
		toHideS()
	}
	function toShowPicker(val: PickerCellItem) {
		console.log(val.mode)
		if (val.mode == 's1' || val.mode == 's2' || val.mode == 's3') {
			if (val.mode == 's2' && pcs.value.length == 0) {
				if (isLoadingPcs.value) {
					ntoast.value!.show({
						text: '正在请求数据',
						type: 'warning',
						mode: 'big'
					})
				} else {
					nloading.value!.show({needMask: true})
					commonStore.provinceCity().then(()=>{
						nloading.value!.hide()
						state.s2Visible = true
					}).catch(err => {
						nloading.value!.hide()
						ntoast.value!.show(err)
					})
				}
				return
			}
			if (val.mode == 's3' && pcas.value.length == 0) {
				if (isLoadingPcas.value) {
					ntoast.value!.show({
						text: '正在请求数据',
						type: 'warning',
						mode: 'big'
					})
				} else {
					nloading.value!.show({needMask: true})
					commonStore.provinceCityArea().then(()=>{
						nloading.value!.hide()
						state.s3Visible = true
					}).catch(err => {
						nloading.value!.hide()
						ntoast.value!.show(err)
					})
				}
				return
			}
			if (val.mode == 's1') {
				state.s1Visible = true
			} else if (val.mode == 's2') {
				state.s2Visible = true
			} else {
				state.s3Visible = true
			}
			return
		}
		state.temp = val
		setTimeout(()=>{
			state.pickerVisible = true
		}, 0)
	}
	function toHidePicker() {
		state.pickerVisible = false
	}
	function toHideS() {
		state.s1Visible = false
		state.s2Visible = false
		state.s3Visible = false
	}
	function toConfirmPca(val: PCAResult) {
		state.pcaText = val.p.name + val.c.name + val.a.name
		state.pcaVisible = false
	}
	function toShowPca() {
		state.pcaVisible = true
	}
	function toHidePca() {
		state.pcaVisible = false
	}
	// 本地省市区
	function toShowPca2() {
		state.pcaVisible2 = true
	}
	function toHidePca2() {
		state.pcaVisible2 = false
	}
	function toConfirmPca2(e: PCAResult){
		toHidePca2()
		uni.showToast({
			title: '看控制台',
			icon:'none'
		});
		state.pcaDefault = [e.p.name,e.c.name,e.a.name]
		console.log("选择的省市区",e)
	}
</script>

<style lang="scss">

</style>

```

<DemoFrame src="https://www.redou.vip/nprox/#/pages/input/picker" />
