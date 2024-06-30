# n-swiper

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| width | string | false | '750rpx' |  |  | 
| height | string | false | '360rpx' |  |  | 
| itemWidth | string | false | '600rpx' |  |  | 
| itemHeight | string | false | '360rpx' |  |  | 
| left | string | false | '0' |  |  | 
| right | string | false | '0' |  |  | 
| space | string | false | '64rpx' |  |  | 
| lock | boolean | false | false |  | true, false | 
| current | number | false | 0 |  |  | 
| autoPlay | boolean | false | false |  | true, false | 
| interval | number | false | 2000 |  |  | 
| circular | boolean | false | false |  | true, false | 
| center | boolean | false | false |  | true, false | 
| scale | number | false | 0.62 |  |  | 
| percent | number | false | 0.4 |  |  | 
| duration | number | false | 300 |  |  | 
| silence | boolean | false | false |  | true, false | 
| baseWidth | string | false | '0' |  |  | 
| times | number | false | 1.5 |  |  | 
| linear | boolean | false | true |  | true, false | 
| timingFunction | string | false | 'ease-in-out' |  |  | 
| updateTime | number | false | 0 |  |  | 
| boxStyle | string | false | '' |  |  | 
| boxClass | string | false | '' |  |  | 
| linkage | any | false | () => null |  |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| change |  |  |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| inMoving |  |  |
| inCurrent |  |  |
| children |  |  |
| lock |  |  |
| playTimer |  |  |
| itemWidthPx |  |  |
| toAdjust |  |  |
| toPrev |  |  |
| toNext |  |  |

