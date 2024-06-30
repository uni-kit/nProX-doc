# n-picker-time

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | false |  | true, false | 
| mode | string | false | 'date' |  |  | 
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
| bgType | string | false | 'inverse' |  |  | 
| textType | string | false | 'text' |  |  | 
| textSize | string | false | 'base' |  |  | 
| height | string | false | '500rpx' |  |  | 
| itemHeight | string | false | '100rpx' |  |  | 
| boxStyle | string | false | '' |  |  | 
| itemStyle | string | false | '' |  |  | 
| textStyle | string | false | '' |  |  | 
| indicatorStyle | string | false | '' |  |  | 
| range | string | false | '-' |  |  | 
| rangeType | string | false | 'text' |  |  | 
| rangeSize | string | false | 'base' |  |  | 
| rangeStyle | string | false | '' |  |  | 
| rangeBoxStyle | string | false | '' |  |  | 
| value | number[] | false | () => [0, 0, 0, 0, 0, 0, 0] |  |  | 
| useCurrent | boolean | false | false |  | true, false | 
| start | number | false | 1970 |  |  | 
| end | number | false | 2023 |  |  | 
| includeBefore | boolean | false | true |  | true, false | 
| includeAfter | boolean | false | true |  | true, false | 
| headerClass | string | false | '' |  |  | 
| cancelClass | string | false | '' |  |  | 
| titleClass | string | false | '' |  |  | 
| confirmClass | string | false | '' |  |  | 
| boxClass | string | false | '' |  |  | 
| itemClass | string | false | '' |  |  | 
| textClass | string | false | '' |  |  | 
| indicatorClass | string | false | '' |  |  | 
| rangeClass | string | false | '' |  |  | 
| rangeBoxClass | string | false | '' |  |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| confirm |  |  |
| cancel |  |  |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| header |  | No |  |

