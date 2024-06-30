# n-avatars

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| items | ItemType[] | true |  | 头像内容数组 |  | 
| reverse | boolean | false | false | 左侧头像是否显示在右侧头像的上面 | true, false | 
| size | string | false | '66rpx' | 头像尺寸大小 |  | 
| space | string | false | '-16rpx' | 头像之间的间距 |  | 
| itemStyle | string | false | '' | 头像样式 |  | 
| itemClass | string | false | '' | 头像样式类 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| itemClicked | 头像点击事件 | ItemType - 点击的头像数据 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| extra | 额外内容 | No |  |

