# n-picker-content

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| mode | string | false | 's1' |  |  | 
| value | Array as ()=>number[] | false | () => [0, 0, 0] |  |  | 
| bgType | string | false | 'inverse' |  |  | 
| textType | string | false | 'inverse' |  |  | 
| textSize | string | false | 'base' |  |  | 
| height | string | false | '500rpx' |  |  | 
| itemHeight | string | false | '100rpx' |  |  | 
| boxStyle | string | false | '' |  |  | 
| itemStyle | string | false | '' |  |  | 
| textStyle | string | false | '' |  |  | 
| indicatorStyle | string | false | '' |  |  | 
| selections | ItemWithChildren[] | false | () => [] |  |  | 
| labelProps | object | false | { s1: { label: 'name', value: 'id' }, s2: { label: 'name', value: 'id', tag: "c" }, s3: { label: 'name', value: 'id', tag: 'a' } } |  |  | 
| boxClass | string | false | '' |  |  | 
| itemClass | string | false | '' |  |  | 
| textClass | string | false | '' |  |  | 
| indicatorClass | string | false | '' |  |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| inited |  |  |
| change |  |  |

