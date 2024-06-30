# n-refresher

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| mainText | string | false | '下拉即可刷新...' | 下拉时提示文字 |  | 
| pullingText | string | false | '释放即可刷新...' | 下拉时提示文字 |  | 
| refreshingText | string | false | '正在努力刷新...' | 正在刷新的提示文字 |  | 
| refreshing | boolean | false | false | 是否正在刷新 | true, false | 
| boxStyle | string | false | '' | 外层样式 |  | 
| textStyle | string | false | '' | 更多文字样式 |  | 
| boxClass | string | false | '' | 外层样式类 |  | 
| textClass | string | false | '' | 更多文字样式类 |  | 

## Expose
| Name | Description | Params |
| --- | --- | --- |
| onPulling | 正在下拉。下拉过程中，通过此接口来通知组件响应 | pr: number - 相对下拉组件的高度计算得到的下拉进度 |

