# n-waterfall-view

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| sameHeight | boolean | false | false | 是否等高 | true, false | 
| calculator | HeightCalculator | false |  | 高度计算函数 |  | 
| columnGap | string | false | '0' | 列之间的间距 |  | 
| leftGap | string | false | '0' | 左侧边距 |  | 
| rightGap | string | false | '0' | 右侧边距 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| left | 左侧内容 | Yes | lefts:  |
| right | 右侧内容 | Yes | rights:  |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| set | 设置内容数组，重新生成布局 | arr: any[] - 内容数组 |
| concat | 追加内容 | arr: any[] - 追加的内容数组 |
| clear | 清空瀑布 |  |

