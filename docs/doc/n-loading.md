# n-loading

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| maskStyle | string | false | '' | 遮罩层样式 |  | 
| boxStyle | string | false | '' | 内容样式 |  | 
| width | string | false | '200rpx' | 宽度 |  | 
| height | string | false | '200rpx' | 高度 |  | 
| radius | string | false | 'loading' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| maskClass | string | false | '' | 遮罩层样式类 |  | 
| boxClass | string | false | '' | 内容样式类 |  | 
| imgClass | string | false | '' | loading图标样式类 |  | 
| textClass | string | false | '' | 提示文字样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| maskClicked | 遮罩层点击事件 | UniPointerEvent - 点击事件 |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| show | 显示loading | options: LoadingOptionsType - loading内容选项 |
| hide | 隐藏loading |  |

