# n-picker

## Props
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
| selections | ItemWithChildren[] | false | () => [] |  |  | 
| labelProps | object | false | {s1: {label: 'name', value: 'id'}, s2: {label: 'name', value: 'id', tag: "c"}, s3: {label: 'name', value: 'id', tag: 'a'}} |  |  | 
| headerClass | string | false | '' |  |  | 
| cancelClass | string | false | '' |  |  | 
| titleClass | string | false | '' |  |  | 
| confirmClass | string | false | '' |  |  | 
| boxClass | string | false | '' |  |  | 
| itemClass | string | false | '' |  |  | 
| textClass | string | false | '' |  |  | 
| indicatorClass | string | false | '' |  |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| confirm |  |  |
| cancel |  |  |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| header |  | No |  |

