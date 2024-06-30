# n-tab-container

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| width | string | false | '750rpx' | 组件宽度 |  | 
| current | number | false | 0 | 当前位置 |  | 
| number | number | false | 2 | 总内容项 |  | 
| animated | boolean | false | true | 是否具备切换动画 | true, false | 
| duration | number | false | 300 | 动画周期 |  | 
| timingFunction | string | false | 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' | 动画函数 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| containerStyle | string | false | '' | 内容盒子样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| containerClass | string | false | '' | 内容盒子样式类 |  | 

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |

