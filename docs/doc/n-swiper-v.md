# n-swiper-v

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
| current | number | false | 0 |  |  | 
| autoPlay | boolean | false | false |  | true, false | 
| interval | number | false | 2000 |  |  | 
| circular | boolean | false | false |  | true, false | 
| center | boolean | false | false |  | true, false | 
| scale | number | false | 0.62 |  |  | 
| linear | boolean | false | true |  | true, false | 
| duration | number | false | 300 |  |  | 
| timingFunction | string | false | 'ease-in-out' |  |  | 
| updateTime | number | false | 0 |  |  | 
| boxStyle | string | false | '' |  |  | 
| boxClass | string | false | '' |  |  | 

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
| playTimer |  |  |
| toAdjust |  |  |

